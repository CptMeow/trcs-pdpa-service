<?php
namespace App\Http\Controllers;

use App\Models\Appeal;
use App\Models\AppealActivity;
use App\Models\Attachment;
use App\Models\DataSubject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class AppealController extends Controller
{
    public function __construct()
    {
        $this->middleware('permission:appeal-list|appeal-create|appeal-edit|appeal-delete|appeal-list-all|appeal-list-all', ['only' => ['index', 'store']]);
        $this->middleware('permission:appeal-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:appeal-edit', ['only' => ['edit', 'update']]);
        $this->middleware('permission:appeal-delete', ['only' => ['destroy']]);
    }

    //
    public function index(Request $request)
    {
        $status = $request->input('status');

        if (Auth::user()->hasRole('Admin') || Auth::user()->hasPermissionTo('appeal-manage')) {
            $appeal_status = Appeal::groupBy('appeal_status_id')
                ->selectRaw('count(*) as total, appeal_status_id')
                ->get()
                ->toArray();

            $appeals = Appeal::latest();
            if (!empty($status)) {
                $appeals = $appeals->where('appeal_status_id', $status);
            }

            $appeals = $appeals->paginate(10);
        } else {
            $appeal_status = Appeal::groupBy('appeal_status_id')
                ->selectRaw('count(*) as total, appeal_status_id')
                ->where('appeal_department_id', Auth::user()->department)
                ->get()
                ->toArray();

            $appeals = Appeal::latest()->where('appeal_department_id', Auth::user()->department);
            if (!empty($status)) {
                $appeals = $appeals->where('appeal_status_id', $status);
            }

            $appeals = $appeals->paginate(10);
        }

        $status_count = [];
        foreach ($appeal_status as $val) {
            $status_count[$val['appeal_status_id']] = $val['total'];
        }

        return view('appeals.index', compact(['appeals', 'status_count']));
    }

    public function create(Request $request)
    {
        return view('appeals.create');
    }

    public function show(Appeal $appeal)
    {
        $data_subject = DataSubject::where('data_subject_id', $appeal->data_subject_id)->first();
        $attachments  = Attachment::where('appeal_id', $appeal->appeal_id)->get();
        $activities   = AppealActivity::where('appeal_id', $appeal->appeal_id)->OrderBy('created_at', 'desc')->get();

        return view('appeals.show', compact(['appeal', 'data_subject', 'attachments', 'activities']));
    }

    public function store(Request $request)
    {
        $appeal = new Appeal;

        $request->validate([
            'appeal_type'         => 'required',
            'appeal_detail'       => 'required',
            'appeal_channel'      => 'required',
            'appeal_request_date' => 'required',
        ]);

        //create tmp var
        $_auth_department = Auth::user()->department ?? 26;
        $_department      = $request->input('appeal_channel_department_id') ? $request->input('appeal_channel_department_id') : $_auth_department;
        $_year            = date('y', strtotime($request->input('appeal_request_date')));

        $data_subject = DataSubject::updateOrCreate(
            [
                'data_subject_cid' => $request->input('data_subject_cid'),
            ],
            [
                'data_subject_title'     => $request->input('data_subject_title'),
                'data_subject_firstname' => $request->input('data_subject_firstname'),
                'data_subject_lastname'  => $request->input('data_subject_lastname'),
                'data_subject_telephone' => $request->input('data_subject_telephone'),
                'data_subject_email'     => $request->input('data_subject_email'),
                'data_subject_address'   => $request->input('data_subject_address'),
                'data_subject_district'  => $request->input('data_subject_district'),
                'data_subject_amphoe'    => $request->input('data_subject_amphoe'),
                'data_subject_province'  => $request->input('data_subject_province'),
                'data_subject_zipcode'   => $request->input('data_subject_zipcode'),
            ]
        );

        // fill input appeal
        $appeal->appeal_uuid          = '';
        $appeal->appeal_type          = $request->input('appeal_type');
        $appeal->appeal_type_other    = $request->input('appeal_type_other');
        $appeal->appeal_department_id = $_department;
        $appeal->appeal_channel       = $request->input('appeal_channel');
        $appeal->appeal_channel_other = $request->input('appeal_channel_other');
        $appeal->appeal_detail        = $request->input('appeal_detail');
        $appeal->appeal_status_id     = 1; //open
        $appeal->appeal_request_date  = date('Y-m-d H:i:s', strtotime($request->input('appeal_request_date')));
        $appeal->data_subject_id      = $data_subject->data_subject_id;
        $appeal->user_id              = Auth::id();

        if ($appeal->save()) {

            $appeal_uuid = $_year . str_pad($_department, 3, "0", STR_PAD_LEFT) . str_pad($appeal->appeal_id, 4, "0", STR_PAD_LEFT);

            // update uuid
            $appeal_id           = $appeal->appeal_id;
            $appeal              = Appeal::find($appeal_id);
            $appeal->appeal_uuid = $appeal_uuid;
            $appeal->save();

            // create activity
            $_activity['comment'] = 'สร้างใบคำร้องหมายเลข #' . $appeal_uuid;
            $_json                = json_encode($_activity);
            $AppealActivity       = AppealActivity::create([
                'appeal_activities_event_name' => 'create_appeal',
                'appeal_id'                    => $appeal->appeal_id,
                'user_id'                      => Auth::id(),
                'appeal_activities_data'       => $_json,
            ]);
            $AppealActivity->save();

            // insert attachment
            if ($request->hasfile('attachment')) {
                foreach ($request->file('attachment') as $uploaded_file) {
                    $file               = [];
                    $file['name']       = time() . $uploaded_file->getClientOriginalName();
                    $file['extension']  = pathinfo($file['name'], PATHINFO_EXTENSION);
                    $file['size']       = $uploaded_file->getSize();
                    $file['uploadname'] = $appeal_uuid . '_' . md5($uploaded_file->getClientOriginalName()) . '.' . $file['extension'];
                    $file['uploadpath'] = 'uploads/attachment/appeal/' . $_year . '/' . $appeal_uuid;

                    Storage::disk('public')->putFileAs(
                        $file['uploadpath'],
                        $uploaded_file,
                        $file['uploadname']
                    );

                    $attachment                     = new Attachment;
                    $attachment->file_original_name = $file['name'];
                    $attachment->file_upload_name   = $file['uploadname'];
                    $attachment->file_extension     = $file['extension'];
                    $attachment->file_size          = $file['size'];
                    $attachment->weight             = 0;
                    $attachment->appeal_id          = $appeal_id;
                    $attachment->file_path          = $file['uploadpath'] . '/' . $file['uploadname'];
                    $attachment->save();
                }
            }

            return redirect()->route('appeals.index')
                ->with('success', 'Appeal created successfully');
        } else {
            return redirect()->route('appeals.index')
                ->with('error', 'Appeal error');
        }

        //DataSubject::create($request->all());

        // echo $_SERVER ['REQUEST_METHOD'];
        // $data_subject=Request::post("data_subject");
        // $appeal=Request::post("appeal");
        // echo '<pre>';
        // print_r($data_subject);
        // print_r($appeal);
        // echo '</pre>';
        // $timestamp = strtotime($appeal['request_date']);
        // $mysqltimestamp = date('Y-m-d H:i:s',$timestamp);
        // echo $timestamp;
        // echo $mysqltimestamp;
        // echo "<hr>";
        // $file = $_FILES;
        // print_r($file);
    }

    public function update(Request $request, Appeal $appeal)
    {
        # code...

        //dd(AppealActivity::all());
        $_activity['status']['old'] = $appeal->appeal_status_id;
        $_activity['status']['new'] = $request->input('appeal_status');

        $_activity['comment'] = $request->input('activity_comment');

        $_json = json_encode($_activity);

        $AppealActivity = AppealActivity::create([
            'appeal_activities_event_name' => 'change_status',
            'appeal_id'                    => $appeal->appeal_id,
            'user_id'                      => Auth::id(),
            'appeal_activities_data'       => $_json,
        ]);
        $AppealActivity->save();

        // Update Status
        $appeal->appeal_status_id = $request->input('appeal_status');
        $appeal->save();

        return redirect()->route('appeals.show', $appeal->appeal_id)
            ->with('success', 'Updated status successfully');
    }

    public function edit(Appeal $appeal)
    {
        # code...
        return view('appeals.edit', compact(['appeal']));
    }

    public function destroy(Appeal $appeal)
    {
        $appeal->delete();

        return redirect()->route('appeals.index')
            ->with('success', 'Appeal deleted successfully');
    }
}
