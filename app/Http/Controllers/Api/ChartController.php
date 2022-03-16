<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

use App\Http\Controllers\Controller;
use App\Libraries\Helper;
use App\Models\Appeal;
use App\Models\User;

class ChartController extends Controller
{
    //
    public function requestDate(Request $request)
    {
        $appeals = Appeal::groupBy(DB::raw('date(appeal_request_date)'))
        ->selectRaw('count(appeal_request_date) as total, date(appeal_request_date) as label')
        ->OrderBy(DB::raw('date(appeal_request_date)'),'asc')
        ->get()
        ->toArray();

		$array = [];
        if($appeals) {
            foreach($appeals as $appeal) {
                $array[] = [
                    'label' => $appeal['label'],
                    'total' => $appeal['total']
                ];
            }
        }

        return $array;
    }

    //
    public function channel(Request $request)
    {
        $appeals = Appeal::groupBy('appeal_channel')
        ->selectRaw('count(*) as total, appeal_channel as label')
        ->OrderBy('total','desc')
        ->get()
        ->toArray();

		$array = [];
        if($appeals) {
            foreach($appeals as $appeal) {
                $array[] = [
                    'label' => Helper::AppealChannel($appeal['label']),
                    'total' => $appeal['total']
                ];
            }
        }

        return $array;
    }

    public function type(Request $request)
    {
        $appeals = Appeal::groupBy('appeal_type')
        ->selectRaw('count(*) as total, appeal_type as label')
        ->OrderBy('total','desc')
        ->get()
        ->toArray();

		$array = [];
        if($appeals) {
            foreach($appeals as $appeal) {
                $array[] = [
                    'label' => Helper::AppealType($appeal['label']),
                    'total' => $appeal['total']
                ];
            }
        }

        return $array;
    }

    public function test(Request $request)
    {
        return Auth::user();
    }
}
