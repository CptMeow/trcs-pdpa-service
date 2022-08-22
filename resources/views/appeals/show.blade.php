@extends('layouts.app')

@section('content-header')
<div class="col-sm-6">
    <h1>
        รายละเอียดใบคำร้องหมายเลข #{{ $appeal->appeal_uuid }}
    </h1>
</div>
<div class="col-6 text-right">
    <a href="{{ route('appeals.edit',$appeal->appeal_id) }}" class="btn btn-danger btn-sm">
        <i class="fas fa-cogs"></i> แก้ไข</a>
    <a href="{{ route('appeals.index') }}" class="btn btn-default btn-sm">
        <i class="fas fa-chevron-circle-left"></i> ย้อนกลับ</a>
</div>
@endsection

@section('content')
<div class="">
    @if ($message = Session::get('success'))
        <div class="alert alert-success mt-3">
            <p>{{ $message }}</p>
        </div>
    @endif
    <div class="row align-items-center">
        <div class="col-12">
            <div class="card shadow bg-body rounded">
                <div class="card-header text-white bg-light">
                    <div class="row">
                        <div class="col-6 align-middle"><strong class="align-middle"><i class="fa-solid fa-file-lines"></i> รายละเอียดใบคำร้องหมายเลข #{{ $appeal->appeal_uuid }} </strong></div>
                        <div class="col-6 text-right d-none">
                            <a href="{{ route('appeals.edit',$appeal->appeal_id) }}" class="btn btn-danger btn-xs">
                                <i class="fas fa-cogs"></i></a>
                            <a href="{{ route('appeals.index') }}" class="btn btn-danger btn-xs">
                                <i class="fas fa-chevron-circle-left"></i></a>
                        </div>
                    </div>
                </div>
                <form id="appreal_form" action="{{route('appeals.store')}}" method="post" autocomplete="off" class="needs-validation" enctype="multipart/form-data">
                    @csrf
                    <div class="card-body ">
                        <div class="row">
                            <div class="col-12 mt-3">
                                <strong>ข้อมูลการร้องเรียน</strong>
                            </div>
                            <div class="col-3 mt-3">
                                ประเภทคำร้อง
                            </div>
                            <div class="col-9 mt-3">
                                {{ Helper::AppealType($appeal->appeal_type, $appeal->appeal_type_other) }} 
                                <x-badge :type="$appeal->appeal_status_id">{{ Helper::AppealStatus($appeal->appeal_status_id) }}</x-badge> 
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3 mt-3">
                                ช่องทางการแจ้งข้อมูลร้องเรียน
                            </div>
                            <div class="col-9 mt-3">
                                {{ Helper::AppealChannel($appeal->appeal_channel, $appeal->appeal_channel_other, $appeal->appeal_department_id) }}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3 mt-3">
                                วันที่ร้องเรียน
                            </div>
                            <div class="col-9 mt-3">
                                {{ Helper::AppealRequestDate($appeal->appeal_request_date) }}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3 mt-3">
                                รายละเอียดคำร้องเรียน
                            </div>
                            <div class="col-9 mt-3">
                                {{ $appeal->appeal_detail }}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 mt-3">
                                <strong>ข้อมูลผู้ร้องเรียน</strong>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3 mt-3">
                                เลขที่บัตรประชาชน
                            </div>
                            <div class="col-9 mt-3">
                                {{ Helper::DataSubjectCid($data_subject->data_subject_cid) }}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3 mt-3">
                                ชื่อ-สกุล
                            </div>
                            <div class="col-9 mt-3">
                                {{ Helper::DataSubjectName($data_subject)}}
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-12 mt-3">
                                <strong>ข้อมูลติดต่อ</strong>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3 mt-3">
                                เบอร์โทรศัพท์มือถือ
                            </div>
                            <div class="col-9 mt-3">
                                {{ Helper::DataSubjectTelephone($data_subject->data_subject_telephone)}}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3 mt-3">
                                Email
                            </div>
                            <div class="col-9 mt-3">
                                {{ Helper::DataSubjectEmail($data_subject->data_subject_email)}}
                            </div>
                        </div>
                        @if (!$attachments->isEmpty())
                        <div class="row mt-3">
                            <div class="col-12 mt-3">
                                <strong>เอกสารแนบ</strong>
                            </div>
                            <div class="col-6 mt-3">
                                @foreach ($attachments as $attachment)
                                    {!! Helper::Attachment($attachment) !!}
                                @endforeach
                            </div>
                        </div>
                        @endif
                    </div>
{{--                     
					<div class="card-footer bg-light">
						<div class="d-grid gap-2 col-12 col-lg-6 mx-auto py-3 align-items-center">
							<button type="submit" class="btn btn-danger">บันทึกข้อมูล</button>
						</div>
					</div> --}}
                </form>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-11">
            <div class="timeline">
                @foreach ($activities as $activity)
                    <x-timeline-item :activity="$activity"/>
                @endforeach
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="imagemodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">              
            <div class="modal-body">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                <img src="" class="imagepreview" style="width: 100%;" >
            </div>
        </div>
    </div>
</div>
@endsection

@section('jspage')
<script>
    $(function() {
            $('.pop').on('click', function() {
                $('.imagepreview').attr('src', $(this).find('img').attr('src'));
                $('#imagemodal').modal('show');   
            });		
    });
</script>
@endsection