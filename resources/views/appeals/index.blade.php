@extends('layouts.app')

@section('content')
<div class="container">
    @if ($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif
    <div class="row my-4">
        <div class="col-12">
            <a href="{{ route('appeals.create') }}" class="btn btn-primary float-end">เพิ่มข้อมูล</a>
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
                        <td class="align-middle">#{{ $appeal->appeal_uuid }}</td>
                        <td class="align-middle">
                            {{ Helper::AppealType($appeal->appeal_type, $appeal->appeal_type_other) }}
                        </td>
                        <td class="align-middle">
                            {{ Helper::AppealChannel($appeal->appeal_channel, $appeal->appeal_channel_other, $appeal->appeal_department_id) }}
                        </td>
                        <td class="align-middle">{{ Helper::AppealStatus($appeal->appeal_status_id) }}</td>
                        <td class="align-middle">
                            <form action="{{ route('appeals.destroy',$appeal->appeal_id) }}" method="POST">   
                                <a class="btn btn-info text-white" href="{{ route('appeals.show',$appeal->appeal_id) }}">Show</a>    
                                <a class="btn btn-primary d-none" href="{{ route('appeals.edit',$appeal->appeal_id) }}">Edit</a>   
                                @csrf
                                @method('DELETE')      
                                <button type="submit" class="btn btn-danger">Delete</button>
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