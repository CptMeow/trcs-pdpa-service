@extends('layouts.app')

@section('content')

<div class="container">
<div class="row my-4 align-items-center">
    <div class="col">
        <div class="card shadow bg-body rounded">
            <div class="card-header text-white bg-danger">
                <div class="row">
                    <div class="col-6 align-middle"><strong class="align-middle"><i class="fa-solid fa-file-lines"></i> {{ __('แก้ไขสถานะใบคำร้องหมายเลข') }} #{{ $appeal->appeal_uuid }} </strong></div>
                    <div class="col-6 text-right">
                        <a href="{{ route('appeals.edit',$appeal->appeal_id) }}" class="btn btn-danger btn-sm active">
                            <i class="fas fa-cogs"></i></a>
                        <a href="{{ route('appeals.index') }}" class="btn btn-danger btn-sm active">
                            <i class="fas fa-chevron-circle-left"></i></a>
                    </div>
                </div>
            </div>
                <form id="appreal_form" action="{{route('appeals.update',$appeal->appeal_id)}}" method="post" autocomplete="off" class="needs-validation" enctype="multipart/form-data">
                <div class="card-body bg-light">        
                    @csrf
                    @method('PUT')

                    <div class="col-12 mt-3">
                        <label for="appeal_status" class="form-label">สถานะใบคำร้อง</label>
                        {{ Form::select('appeal_status', Helper::AppealStatus(), $appeal->appeal_status_id, ['id' => 'appeal_status', 'placeholder' => 'เลือกสถานะใบคำร้อง']) }}
                    </div>
                    <div class="col-12 mt-3">
                        <label for="activity_comment" class="form-label">คำอธิบาย</label>
                        {{ Form::textarea('activity_comment', null, ['id' => 'activity_comment', 'class' => 'test', 'rows' => 5]) }}
                    </div>
                </div>  
                <div class="card-footer bg-light">
                    <div class="d-grid gap-2 col-12 col-lg-6 mx-auto py-3 align-items-center">
                        <button type="submit" class="btn btn-danger">บันทึกข้อมูล</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</div>
@endsection

@section('jspage')
    
@endsection