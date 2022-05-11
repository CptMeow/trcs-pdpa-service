<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use App\Models\Appeal;
use App\Models\AppealActivity;
use App\Models\Attachment;
use App\Models\DataSubject;

class PublicAppealController extends Controller
{
    function __construct()
    {
        // $this->middleware('permission:appeal-list|appeal-create|appeal-edit|appeal-delete', ['only' => ['index','store']]);
        // $this->middleware('permission:appeal-create', ['only' => ['create','store']]);
        // $this->middleware('permission:appeal-edit', ['only' => ['edit','update']]);
        // $this->middleware('permission:appeal-delete', ['only' => ['destroy']]);
    }

    //
    public function index(Request $request)
    {
        abort(404);
    }

    public function create(Request $request)
    {
        return view('appeals.create');
    }

    public function show(Appeal $appeal)
    {
        $data_subject = DataSubject::where('data_subject_id',$appeal->data_subject_id)->first();
        $attachments = Attachment::where('appeal_id', $appeal->appeal_id)->get();
        $activities = AppealActivity::where('appeal_id', $appeal->appeal_id)->OrderBy('created_at', 'desc')->get();

        return view('appeals.show',compact(['appeal', 'data_subject', 'attachments', 'activities']));
    }

    public function store(Request $request)
    {

        abort(404);
    }

    public function update(Request $request, Appeal $appeal)
    {
        abort(404);
    }

    public function edit(Appeal $appeal)
    {
        abort(404);
    }

    public function destroy(Appeal $appeal)
    {
        abort(404);
    }
}
