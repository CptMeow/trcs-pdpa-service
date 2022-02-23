@extends('layouts.app')

@section('content')
<div class="container-fuild">
    @if ($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif
    <div class="row my-4">
        <div class="col-6 pl-3">
            <h4>
                ภาพรวมใบคำร้อง
            </h4>
        </div>
        <div class="col-6 pr-3 text-right">
            <a href="{{ route('appeals.create') }}" class="btn btn-primary">เพิ่มข้อมูล</a>
        </div>
    </div>
    <div class="row p-3">
        <div class="col-md col-xs-6 border-right">
        <h3 class="bold no-mtop">{{ $status_count['1']??0 }}</h3>
        <p style="color:#989898" class="text-orange font-medium no-mbot">เปิด</p>
        </div>
        <div class="col-md col-xs-6 border-right">
        <h3 class="bold no-mtop">{{ $status_count['2']??0 }}</h3>
        <p style="color:#03A9F4" class="text-info font-medium no-mbot">อยู่ระหว่างดำเนินการ</p>
        </div>
        <div class="col-md col-xs-6 border-right">
        <h3 class="bold no-mtop">{{ $status_count['3']??0 }}</h3>
        <p style="color:#2d2d2d" class="text-success font-medium no-mbot">ปิด</p>
        </div>
        <div class="col-md col-xs-6 border-right">
        <h3 class="bold no-mtop">{{ $status_count['4']??0 }}</h3>
        <p style="color:#adca65" class="text-primary font-medium no-mbot">ส่งต่อหน่วยงานเจ้าของข้อมูล</p>
        </div>
        <div class="col-md col-xs-6 border-right">
            <h3 class="bold no-mtop">{{ $status_count['5']??0 }}</h3>
            <p style="color:#84c529" class="text-danger font-medium no-mbot">ปฏิเสธ</p>
        </div>
        <div class="col-md col-xs-6 border-right">
            <h3 class="bold no-mtop">{{ $status_count['6']??0 }}</h3>
            <p style="color:#84c529" class="text-pink font-medium no-mbot">ส่งต่อ สคส</p>
        </div>
        <div class="col-md col-xs-6">
            <h3 class="bold no-mtop">{{ $status_count['7']??0 }}</h3>
            <p style="color:#84c529" class="text-gray font-medium no-mbot">Re-Open</p>
        </div>
    </div>
    <div class="row p-3">
        <div class="col-12">
            <div class="card shadow bg-body rounded">
                <table class="table strip">
                    <thead>
                        <tr>
                            <th>หมายเลขใบคำร้อง</th>
                            <th>ประเภทใบคำร้อง</th>
                            <th>ช่องทาง</th>
                            <th>สถานะ</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse ($appeals as $appeal)
                        <tr>
                            <td class="align-middle" width="160">
                                <x-badge><i class="fas fa-file"></i> {{ $appeal->appeal_uuid }}</x-badge>
                            </td>
                            <td class="align-middle">
                                {{ Helper::AppealType($appeal->appeal_type, $appeal->appeal_type_other) }}
                            </td>
                            <td class="align-middle">
                                {{ Helper::AppealChannel($appeal->appeal_channel, $appeal->appeal_channel_other, $appeal->appeal_department_id) }}
                            </td>
                            <td class="align-middle"><x-badge :type="$appeal->appeal_status_id">{{ Helper::AppealStatus($appeal->appeal_status_id) }}</x-badge>
                            <span class="btn btn-outline-success d-none">{{ Helper::AppealStatus($appeal->appeal_status_id) }}</span>
                            </td>
                            <td class="align-middle" width="150">
                                <form action="{{ route('appeals.destroy',$appeal->appeal_id) }}" method="POST">   
                                    @csrf
                                    @method('DELETE')      
                                    
                                    <div class="btn-group">
                                        <a class="text-info" href="{{ route('appeals.show',$appeal->appeal_id) }}">
                                            <button type="button" class="btn btn-default btn-sm">
                                                <i class="fas fa-folder-open"></i> เปิด 
                                            </button>
                                        </a> 
                                        <button type="button" class="btn btn-default dropdown-toggle dropdown-icon btn-sm" data-toggle="dropdown">
                                            <span class="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div class="dropdown-menu" role="menu">
                                            <a class="dropdown-item" href="{{ route('appeals.edit',$appeal->appeal_id) }}"><i class="fas fa-cogs"></i> แก้ไข</a>  
                                        <div class="dropdown-divider"></div>
                                            <button type="submit" class="dropdown-item text-danger"><i class="fas fa-trash"></i> ลบ</button>
                                        </div>
                                    </div>
                                </form>
                            </td>
                        </tr>
                        @empty
                        <tr>
                            <td colspan="5">No Appeals</td>
                        </tr>
                        @endforelse
                    </tbody>
                </table>
                <div class="p-3">
                    {!! $appeals->links() !!} 
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('jspage')
<script type="text/javascript">
    $(function() {

    });
    </script>
@endsection