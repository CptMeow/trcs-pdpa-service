@extends('layouts.app')

@section('content')
<div class="container-fuild">
    @if ($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif
    <div class="row my-4">
        <div class="col-12 text-right">
            <a href="{{ route('appeals.create') }}" class="btn btn-primary">เพิ่มข้อมูล</a>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="card shadow bg-body rounded p-3">
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
                        <td class="align-middle">
                            <x-badge>#{{ $appeal->appeal_uuid }}</x-badge>
                        </td>
                        <td class="align-middle">
                            {{ Helper::AppealType($appeal->appeal_type, $appeal->appeal_type_other) }}
                        </td>
                        <td class="align-middle">
                            {{ Helper::AppealChannel($appeal->appeal_channel, $appeal->appeal_channel_other, $appeal->appeal_department_id) }}
                        </td>
                        <td class="align-middle"><x-badge :type="$appeal->appeal_status_id">{{ Helper::AppealStatus($appeal->appeal_status_id) }}</x-badge></td>
                        <td class="align-middle" width="150">
                            <form action="{{ route('appeals.destroy',$appeal->appeal_id) }}" method="POST">   
                                @csrf
                                @method('DELETE')      
                                
                                <div class="btn-group">
                                    <a class="text-info" href="{{ route('appeals.show',$appeal->appeal_id) }}">
                                        <button type="button" class="btn btn-default">
                                            <i class="fas fa-folder-open"></i> เปิด 
                                        </button>
                                    </a> 
                                    <button type="button" class="btn btn-default dropdown-toggle dropdown-icon" data-toggle="dropdown">
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
            {!! $appeals->links() !!} 
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