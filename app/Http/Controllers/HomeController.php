<?php

namespace App\Http\Controllers;

use App\Models\Appeal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    //
    public function index(Request $request)
    {
        if (Auth::user()->hasRole('Admin') || Auth::user()->hasPermissionTo('appeal-manage')) {
            $appeal_status = Appeal::groupBy('appeal_status_id')
                ->selectRaw('count(*) as total, appeal_status_id')
                ->get()
                ->toArray();
        } else {
            $appeal_status = Appeal::groupBy('appeal_status_id')
                ->selectRaw('count(*) as total, appeal_status_id')
                ->where('appeal_department_id', Auth::user()->department)
                ->get()
                ->toArray();
        }

        $status_count = [];
        foreach ($appeal_status as $val) {
            $status_count[$val['appeal_status_id']] = $val['total'];
        }
        //print_r($array);
        return view('dashboard', compact('status_count'));
    }
}
