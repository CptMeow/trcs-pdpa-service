<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PDPASiteCheckController extends Controller
{
    //
    public function ReportSiteCheck(Request $request)
    {
        # code...
        if(!empty($request->input('site'))) {
            //$input = rtrim(str_replace('http://', '', str_replace('https://', '', $request->input('site'))), '/ ');
            $input = rtrim($request->input('site'), '/ ');
            $sites = DB::table('v_pdpa_site_check_result')
            ->select('*')
            ->where('domain','like','%'.$input.'%')
            ->OrderBy('depart_name')
            ->OrderBy('domain')
            ->get();
        }
        else {
            $sites = DB::table('v_pdpa_site_check_result')
            ->select('*')
            ->OrderBy('depart_name')
            ->OrderBy('domain')
            ->get();
        }

        return view('reports.sitecheck', compact(['sites']));
    }
}
