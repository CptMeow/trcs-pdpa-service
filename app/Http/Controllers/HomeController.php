<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Appeal;


class HomeController extends Controller
{
    //
    public function index(Request $request)
    {
        
        $appeal_status = Appeal::groupBy('appeal_status_id')
        ->selectRaw('count(*) as total, appeal_status_id')
        ->get()
        ->toArray();
        
        $status_count = [];
        foreach($appeal_status as $val){
            $status_count[$val['appeal_status_id']] = $val['total'];
        }
        //print_r($array);
        return view('dashboard', compact('status_count'));
    }
}
