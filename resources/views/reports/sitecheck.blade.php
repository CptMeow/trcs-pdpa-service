@extends('layouts.report')

@section('content')
<div class="container-fluid">
    <div class="row">
        <div class="col-12 bg-danger text-center font-weight-bold p-4">รายงานการตรวจสอบ PDPA ของเว็บไซต์</div>
    </div>
    <div class="row">
        <table class="table table-striped table-hover">
            <thead class="bg-danger text-white">
                <tr>
                    <th rowspan="2" class="align-middle text-white">หน่วยงาน</th>
                    <th rowspan="2" class="align-middle text-white">ชื่อเว็บไซต์</th>
                    <th rowspan="2" class="align-middle text-white">Domain</th>
                    <th rowspan="2" class="align-middle text-white">Policy</th>
                    <th colspan="11" class="text-center align-middle text-white">ข้อมูลส่วนบุคคล</th>
                </tr>
                <tr>
                    <th class="text-center text-white">บัตรประชาชน</th>
                    <th class="text-center text-white">ชื่อสกุล</th>
                    <th class="text-center text-white">วันเดือนปีเกิด</th>
                    <th class="text-center text-white">เพศ</th>
                    <th class="text-center text-white">หมู่เลือด</th>
                    <th class="text-center text-white">ศาสนา</th>
                    <th class="text-center text-white">สัญชาติ</th>
                    <th class="text-center text-white">ที่อยู่</th>
                    <th class="text-center text-white">Email</th>
                    <th class="text-center text-white">เบอร์โทรศัพท์</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($sites as $site)
                <tr>
                    <td>{{ $site->depart_name }}</td>
                    <td>{{ $site->website_name }}</td>
                    <td>{{ $site->domain }}<a href="http://{{$site->domain}}" class="btn btn-xs" target="_blank"><i class="fas fa-external-link-alt text-gray"></i></a></td>
                    <td class="text-center">{!! ($site->flag=='PASS')?'<i class="fas fa-check-circle text-success"></i>':'<i class="fas fa-times-circle text-danger"></i>' !!}</td>
                    <td class="text-center {{ ($site->flag=='PASS')?'text-success':'text-danger' }}">{!! $site->CID_CHECK?'<i class="fas fa-check-circle" data-toggle="tooltip" data-placement="top" title="พบ '.$site->CID_CHECK.' จุด "></i>':'' !!} 
                    {{-- @isset($site->CID_CHECK_ITEM)
                        @foreach (json_decode($site->CID_CHECK_ITEM) as $item)
                            {{ $item->url }}
                        @endforeach</td>
                    @endisset --}}
                    <td class="text-center {{ ($site->flag=='PASS')?'text-success':'text-danger' }}">{!! $site->NAME_CHECK?'<i class="fas fa-check-circle" data-toggle="tooltip" data-placement="top" title="พบ '.$site->NAME_CHECK.' จุด "></i>':'' !!}</td>
                    <td class="text-center {{ ($site->flag=='PASS')?'text-success':'text-danger' }}">{!! $site->DOB_CHECK?'<i class="fas fa-check-circle" data-toggle="tooltip" data-placement="top" title="พบ '.$site->DOB_CHECK.' จุด "></i>':'' !!}</td>
                    <td class="text-center {{ ($site->flag=='PASS')?'text-success':'text-danger' }}">{!! $site->GENDER_CHECK?'<i class="fas fa-check-circle" data-toggle="tooltip" data-placement="top" title="พบ '.$site->GENDER_CHECK.' จุด "></i>':'' !!}</td>
                    <td class="text-center {{ ($site->flag=='PASS')?'text-success':'text-danger' }}">{!! $site->BLOOD_CHECK?'<i class="fas fa-check-circle" data-toggle="tooltip" data-placement="top" title="พบ '.$site->BLOOD_CHECK.' จุด "></i>':'' !!}</td>
                    <td class="text-center {{ ($site->flag=='PASS')?'text-success':'text-danger' }}">{!! $site->RELIGION_CHECK?'<i class="fas fa-check-circle" data-toggle="tooltip" data-placement="top" title="พบ '.$site->RELIGION_CHECK.' จุด "></i>':'' !!}</td>
                    <td class="text-center {{ ($site->flag=='PASS')?'text-success':'text-danger' }}">{!! $site->NATION_CHECK?'<i class="fas fa-check-circle" data-toggle="tooltip" data-placement="top" title="พบ '.$site->NATION_CHECK.' จุด "></i>':'' !!}</td>
                    <td class="text-center {{ ($site->flag=='PASS')?'text-success':'text-danger' }}">{!! $site->ADDRESS_CHECK?'<i class="fas fa-check-circle" data-toggle="tooltip" data-placement="top" title="พบ '.$site->ADDRESS_CHECK.' จุด "></i>':'' !!}</td>
                    <td class="text-center {{ ($site->flag=='PASS')?'text-success':'text-danger' }}">{!! $site->EMAIL_CHECK?'<i class="fas fa-check-circle" data-toggle="tooltip" data-placement="top" title="พบ '.$site->EMAIL_CHECK.' จุด "></i>':'' !!}</td>
                    <td class="text-center {{ ($site->flag=='PASS')?'text-success':'text-danger' }}">{!! $site->TEL_CHECK?'<i class="fas fa-check-circle" data-toggle="tooltip" data-placement="top" title="พบ '.$site->TEL_CHECK.' จุด "></i>':'' !!}</td>
                </tr>
                @endforeach
            </tbody>
        </table>
        <div class="pl-3">
            ข้อมูล ณ วันที่ {{ $site->dataset_date }}
        </div>
    </div>
</div>
@endsection

@section('jspage')
<script src="{{asset('assets/plugins/popper/popper.min.js')}}"></script>
<script>
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
</script>
@endsection