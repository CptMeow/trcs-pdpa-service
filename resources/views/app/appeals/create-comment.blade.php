@extends('layouts.app')

@section('content-header')
  <div class="col-sm-6">
    <h1>
      {{ __('เพิ่มความเห็นใบคำร้องหมายเลข') }} #{{ $appeal->appeal_uuid }}
    </h1>
  </div>
  <div class="col-6 text-right">
    <a href="{{ route('appeals.index', $appeal->appeal_id) }}" class="btn btn-default btn-sm">
      <i class="fas fa-chevron-circle-left"></i> ย้อนกลับ</a>
  </div>
@endsection

@section('content')
  <div class="row align-items-center">
    <div class="col">
      <div class="card shadow bg-body rounded">
        <div class="card-header text-white bg-light">
          <div class="row">
            <div class="col-6 align-middle"><strong class="align-middle"><i class="fa-solid fa-file-lines"></i> {{ __('เพิ่มความเห็นใบคำร้องหมายเลข') }} #{{ $appeal->appeal_uuid }} </strong></div>
            <div class="col-6 text-right">
            </div>
          </div>
        </div>
        <form id="appreal_form" action="{{ route('appeals.comment.store', $appeal->appeal_id) }}" method="post" autocomplete="off" class="needs-validation form-horizontal" enctype="multipart/form-data">
          <div class="card-body">
            @csrf
            @method('PUT')
            <div class="form-group row">
              <label for="activity_comment" class="col-sm-2 col-form-label">ข้อความ</label>
              <div class="col-sm-10">
                {{ Form::textarea('activity_comment', null, [
                    'class' => 'form-control',
                    'id' => 'activity_comment',
                    'rows' => 5,
                ]) }}
              </div>
            </div>
          </div>
          <div class="card-footer bg-light">
            <div class="d-grid gap-2 col-12 col-lg-6 mx-auto py-3 align-items-center">
              <button type="submit" class="btn btn-danger"><i class="fas fa-save"></i> บันทึกข้อมูล</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
@endsection

@section('jspage')
@endsection
