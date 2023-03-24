@extends('layouts.app')

@section('content-header')
<div class="col-sm-6">

</div>
<div class="col-6 pr-3 text-right">
    <a href="{{ route('appeals.index') }}" class="btn btn-danger" title="ย้อนกลับ">
        <i class="fas fa-chevron-circle-left"></i> ย้อนกลับ</a>
</div>
@endsection

@section('content')
<div class="px-2 pb-4">
    <div class="row align-items-center">
        <div class="col">
            <div class="card shadow bg-body rounded">
                <div class="card-header text-white bg-light">
                    <div class="row">
                        <div class="col-6 align-middle"><strong class="align-middle">บันทึกข้อมูลการร้องเรียนการใช้งานข้อมูลส่วนบุคคล</strong></div>

                    </div>
                </div>
                <form id="appreal_form" action="{{route('appeals.store')}}" method="post" autocomplete="off" class="needs-validation" enctype="multipart/form-data">
                    @csrf
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12 mt-3">
                                <strong>ข้อมูลการร้องเรียน</strong>
                            </div>
                            <div class="col-12 mt-3">
                                <label for="v_fname" class="form-label">ประเภทคำร้อง<span class="text-danger">*</span></label>
                                <div class="form-check">
                                    <input class="form-check-input" name="appeal_type" type="radio" value="withdraw_consent" id="appeal_right_to_withdraw_consent" required>
                                    <label class="form-check-label pointer" for="appeal_right_to_withdraw_consent">
                                        ขอถอนความยินยอม (Right to withdraw consent)
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" name="appeal_type" type="radio" value="appeal_right_to_access" id="appeal_right_to_access" required>
                                    <label class="form-check-label pointer" for="appeal_right_to_access">
                                        ขอเข้าถึงข้อมูล (Right to access)
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" name="appeal_type" type="radio" value="appeal_right_to_data_portability" id="appeal_right_to_data_portability" required>
                                    <label class="form-check-label pointer" for="appeal_right_to_data_portability">
                                        ขอถ่ายโอนข้อมูล (Right to data portability)
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" name="appeal_type" type="radio" value="appeal_right_to_object" id="appeal_right_to_object" required>
                                    <label class="form-check-label pointer" for="appeal_right_to_object">
                                        ขอคัดค้านการเก็บรวบรวม ใช้ เปิดเผย ข้อมูลส่วนบุคคล (Right to object)
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" name="appeal_type" type="radio" value="appeal_right_to_erasure" id="appeal_right_to_erasure" required>
                                    <label class="form-check-label pointer" for="appeal_right_to_erasure">
                                        ขอให้ลบหรือทำลายข้อมูล (Right to erasure)
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" name="appeal_type" type="radio" value="appeal_right_to_restriction_of_processing" id="appeal_right_to_restriction_of_processing" required>
                                    <label class="form-check-label pointer" for="appeal_right_to_restriction_of_processing">
                                        ขอให้ระงับการใช้ข้อมูล (Right to restriction of processing)
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" name="appeal_type" type="radio" value="appeal_right_to_rectification" id="appeal_right_to_rectification" required>
                                    <label class="form-check-label pointer" for="appeal_right_to_rectification">
                                        ขอให้แก้ไขข้อมูล (Right to rectification)
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" name="appeal_type" type="radio" value="appeal_right_to_other" id="appeal_right_to_other" required>
                                    <label class="form-check-label pointer" for="appeal_right_to_other">
                                        อื่นๆ 
                                    </label>
                                    <input type="text" class="form-control d-none" name="appeal_type_other" id="appeal_type_other_reason" placeholder="ระบุเหตุผล" required disabled>
                                </div>

                            </div>
                            <div class="col-12 mt-3">
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1"
                                        class="form-label">รายละเอียดคำร้องเรียน</label>
                                    <textarea class="form-control" name="appeal_detail" id="exampleFormControlTextarea1" rows="4" required></textarea>
                                </div>
                            </div>
                            <div class="col-6">
                                <label for="v_fname" class="form-label">ช่องทางการแจ้งข้อมูลร้องเรียน<span
                                    class="text-danger">*</span></label>
                                <div class="">
                                    <select class="form-control" name="appeal_channel" id="appeal_channel" 
                                    aria-label="เลือกช่องทางรับเรื่องร้องเรียน" 
                                    data-required="เลือกช่องทางรับเรื่องร้องเรียน"
                                    required>
                                        <option value="" selected disabled>- เลือกช่องทางร้องเรียน -</option>
                                        <option value="department">ติดต่อผ่านทางสำนักงาน</option>
                                        <option value="email">อีเมล์</option>
                                        <option value="telephone">โทรศัพท์</option>
                                        <option value="other">ช่องทางอื่นๆ</option>
                                        </select>
                                </div>
                                @if (Auth::user()->hasRole('Admin') || Auth::user()->hasPermissionTo('appeal-manage'))
                                <div class="mt-1">
                                    <select class="form-control d-none" name="appeal_channel_department_id" id="appeal_channel_department_id" 
                                    aria-label="เลือกหน่วยงานที่รับเรื่องร้องเรียน" 
                                    data-required="เลือกหน่วยงานที่รับเรื่องร้องเรียน" 
                                    required
                                    disabled>
                                        <option value="" selected disabled>- เลือกหน่วยงานที่รับเรื่องร้องเรียน -</option>
                                        <option value="02">โรงพยาบาลจุฬาลงกรณ์</option>
                                        <option value="03">โรงพยาบาลสมเด็จพระบรมราชเทวี ณ ศรีราชา</option>
                                        <option value="04">สถานเสาวภา</option>
                                        <option value="05">สำนักงานยุวกาชาด</option>
                                        <option value="06">สำนักงานอาสากาชาด</option>
                                        <option value="07">ศูนย์บริการโลหิตแห่งชาติ</option>
                                        <option value="08">สำนักงานบรรเทาทุกข์และประชานามัยพิทักษ์</option>
                                        <option value="09">สำนักงานจัดหารายได้</option>
                                        <option value="10">สถาบันการพยาบาลศรีสวรินทิรา สภากาชาดไทย</option>
                                        <option value="11">ศูนย์เวชศาสตร์ฟื้นฟู</option>
                                        <option value="12">สำนักงานการคลัง</option>
                                        <option value="13">ศูนย์ดวงตา</option>
                                        <option value="14">ศูนย์วิจัยโรคเอดส์</option>
                                        <option value="15">มูลนิธิสงเคราะห์เด็กของสภากาชาดไทย</option>
                                        <option value="16">สำนักงานบริหารทรัพยากรบุคคล</option>
                                        <option value="17">สำนักงานบริหารกลาง</option>
                                        <option value="171">สำนักวิเทศสัมพันธ์</option>
                                        <option value="172">สำนักสารนิเทศและสื่อสารองค์กร</option>
                                        <option value="18">สำนักงานโภชนาการสวนจิตรลดา</option>
                                        <option value="19">ศูนย์รับบริจาคอวัยวะ</option>
                                        <option value="20">สำนักงานจัดการทรัพย์สิน</option>
                                        <option value="21">สำนักงานเทคโนโลยีสารสนเทศและดิจิทัล</option>
                                        <option value="22">ศูนย์ฝึกอบรมปฐมพยาบาลและสุขภาพอนามัย</option>
                                        <option value="23">สำนักงานตรวจสอบ</option>
                                        <option value="24">สำนักงานบริหารระบบกายภาพ</option>
                                        <option value="25">สำนักงานบริหารกิจการเหล่ากาชาด</option>
                                        <option value="26">กลุ่มงานกลยุทธ์องค์กร</option>
                                        <option value="261">สำนักนโยบายยุทธศาสตร์และงบประมาณ</option>
                                        <option value="262">สำนักบริหารความเสี่ยงและควบคุมภายใน</option>
                                        <option value="263">สำนักขับเคลื่อนการพัฒนา</option>
                                        <option value="27">สำนักกฎหมาย</option>
                                        </select>
                                </div>
                                @endif
                                <div class="">
                                    <input type="text" class="form-control d-none" name="appeal_channel_other" id="appeal_channel_other_reason" placeholder="ระบุช่องทางรับเรื่องร้องเรียน" disabled required>
                                </div>
                                <!-- <div class="form-check">
                                    <input class="form-check-input" name="appeal[channel]" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        สำนักงาน
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" name="appeal[channel]" type="checkbox" value="" id="flexCheckChecked">
                                    <label class="form-check-label" for="flexCheckChecked">
                                        อีเมล์
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" name="appeal[channel]" type="checkbox" value="" id="flexCheckChecked">
                                    <label class="form-check-label" for="flexCheckChecked">
                                        โทรศัพท์
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" name="appeal[channel]" type="checkbox" value="" id="flexCheckChecked">
                                    <label class="form-check-label" for="flexCheckChecked">
                                        ช่องทางอื่นๆ
                                    </label>
                                </div> -->
                            </div>
                            <div class="col-6">
                                <div class="">
                                    <label for="exampleFormControlInput1" class="form-label">วันที่ร้องเรียน
                                    <span class="text-danger">*</span></label>
                                    <div class="input-group date" id="datetimepicker1" data-target-input="nearest">
                                        <input type="text" class="form-control datetimepicker-input" name="appeal_request_date" id="appeal_request_date" 
                                        placeholder="DD-MM-YYYY" 
                                        data-target="#datetimepicker1"
                                        required> 
                                        <div class="input-group-append" data-target="#datetimepicker1" data-toggle="datetimepicker">
                                            <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 mt-3">
                                <div class="">
                                    <label for="formFile" class="form-label">เอกสารแนบ</label>
                                    {{-- <div class="dropzone" id="myDropzone">
                                    </div> --}}
                                    <input class="form-control" type="file" name="attachment[]" id="formFile" multiple
                                    accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*, .pdf">
                                    <span class="text-sm">กรณีเลือกหลายไฟล์ให้กด CTRL หรือ SHIFT ค้างแล้วเลือกไฟล์ที่ต้องการ</span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 mt-3">
                                <strong>ข้อมูลผู้ร้องเรียน</strong>
                            </div>
                            <div class="col mt-3">
                                <label for="v_citizent_id" class="form-label">เลขที่บัตรประชาชน</label>
                                <input type="text" class="form-control number-only validation-length"
                                    name="data_subject_cid" id="data_subject_cid" maxlength="13" autocomplete="off"
                                    placeholder="เลขที่บัตรประชาชน" data-required="กรุณาระบุเลขที่บัตรประชาชน">
                            </div>
                            <div class="col mt-3">
                                <div class="row g-3 align-items-end">
                                    <div class="col">
                                        <label for="v_title" class="form-label">คำนำหน้า</label>
                                        <select class="form-control" name="data_subject_title" id="data_subject_title"
                                            aria-label="Select prefix name" data-required="กรุณาระบุคำนำหน้า">
                                            <option value="" selected disabled>- เลือก -</option>
                                            <option value="นาย">นาย</option>
                                            <option value="นาง">นาง</option>
                                            <option value="นางสาว">นางสาว</option>
                                            <option value="อื่นๆ">อื่นๆ</option>
                                        </select>
                                    </div>
                                    <div class="col col-prefix d-none">
                                        <input type="text" class="form-control" id="data_subject_title_text" placeholder="คำนำหน้า"
                                            disabled>
                                    </div>
                                </div>
                            </div>
                            <div class="col mt-3">
                                <label for="v_fname" class="form-label">ชื่อ</label>
                                <input type="text" class="form-control" name="data_subject_firstname" id="data_subject_firstname" placeholder="ชื่อ"
                                    data-required="กรุณาระบุชื่อ">
                            </div>
                            <div class="col mt-3">
                                <label for="v_surname" class="form-label">นามสกุล</label>
                                <input type="text" class="form-control" name="data_subject_lastname" id="data_subject_lastname"
                                    placeholder="นามสกุล" data-required="กรุณาระบุนามสกุล">
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-12 mt-3"><strong>ข้อมูลติดต่อ</strong></div>
                            <div class="col mt-3">
								<label for="v_mobile" class="form-label">เบอร์โทรศัพท์มือถือ</label>
                                <span class="text-danger d-none" id="data_subject_telephone_label">*</span></label>
								<input type="text" class="form-control number-only validation-length" name="data_subject_telephone" id="data_subject_telephone" maxlength="10" placeholder="เบอร์โทรศัพท์มือถือ" data-required="กรุณาระบุเบอร์โทรศัพท์มือถือ">
							</div>
							<div class="col mt-3">
								<label for="v_email" class="form-label">Email</label>
                                <span class="text-danger d-none" id="data_subject_email_label">*</span></label>
								<input type="email" class="form-control" name="data_subject_email" id="data_subject_email" placeholder="Email" data-required="กรุณาระบุEmail">
							</div>
							<!-- <div class="col">
								<label for="v_line" class="form-label">Line ID</label>
								<input type="text" class="form-control" name="v_line" id="v_line" placeholder="Line ID">
							</div> -->
							{{-- <div class="col-12 mt-3">ที่อยู่ที่สามารถติดต่อได้</div>
							<div class="col-12">
								<label for="v_ads" class="form-label">รายละเอียดที่อยู่</label>
								<input type="text" class="form-control" name="data_subject_address" id="data_subject_address" data-required="กรุณาระบุรายละเอียดที่อยู่">
							</div>
							<div class="col col-lg-6">
								<label for="v_district" class="form-label">แขวง / ตำบล</label>
								<input type="text" class="form-control" name="data_subject_district" id="data_subject_district" placeholder="แขวง / ตำบล" readonly data-required="กรุณาระบุแขวง / ตำบล">
							</div>
							<div class="col col-lg-6">
								<label for="v_amphoe" class="form-label">เขต / อำเภอ</label>
								<input type="text" class="form-control" name="data_subject_amphoe" id="data_subject_amphoe" placeholder="เขต / อำเภอ" readonly data-required="กรุณาระบุเขต / อำเภอ">
							</div>
							<div class="col col-lg-6">
								<label for="v_province" class="form-label">จังหวัด</label>
								<input type="text" class="form-control" name="data_subject_province" id="data_subject_province" placeholder="จังหวัด" readonly data-required="กรุณาระบุจังหวัด">
							</div>
							<div class="col col-lg-6">
								<label for="v_zipcode" class="form-label">รหัสไปรษณีย์</label>
								<select class="form-control" name="data_subject_zipcode" id="data_subject_zipcode" aria-label="Select zipcode" data-required="กรุณาระบุรหัสไปรษณีย์"></select>
							</div> --}}
                        </div>
                        
                    </div>
                    
					<div class="card-footer bg-light">
						<div class="d-grid gap-2 col-12 col-lg-6 mx-auto py-3 align-items-center text-center">
							<button type="submit" class="btn btn-danger" id="submit-all"><i class="fas fa-save"></i> บันทึกข้อมูล</button>
						</div>
					</div>
                </form>
            </div>
        </div>
    </div>
</div>

</form>
@endsection

@section('csspage')
<link rel="stylesheet" href="{{asset('assets/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css')}}"/>
<link rel="stylesheet" href="https://unpkg.com/dropzone@5/dist/min/dropzone.min.css" type="text/css" />
@endsection

@section('jspage')
<script src="https://unpkg.com/dropzone@5/dist/min/dropzone.min.js"></script>
<script src="{{asset('assets/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js')}}"></script>
<script src="{{asset('assets/plugins/daterangepicker/daterangepicker.js')}}" type="text/javascript"></script>
<script type="text/javascript">
    $(function() {
        $('#appreal_form #datetimepicker1').datetimepicker({
            locale: 'th',
            format: 'DD-MM-YYYY',
            allowInputToggle: true
        });
        $( "#appreal_form #appeal_channel" ).change(function() {
    
            $("#appreal_form #appeal_channel_other_reason").addClass('d-none');
            $("#appreal_form #appeal_channel_other_reason").prop( "disabled", true );
            $("#appreal_form #appeal_channel_department_id").addClass('d-none');
            $("#appreal_form #appeal_channel_department_id").prop( "disabled", true );
            $("#appreal_form #data_subject_email").prop( "required", false );
            $("#appreal_form #data_subject_email_label").addClass('d-none');
            $("#appreal_form #data_subject_telephone").prop( "required", false );
            $("#appreal_form #data_subject_telephone_label").addClass('d-none');
    
            if(this.value == "department") 
            {
                $("#appreal_form #appeal_channel_department_id").removeClass('d-none');
                $("#appreal_form #appeal_channel_department_id").prop( "disabled", false );
                $("#appreal_form #appeal_channel_department_id").focus();
            }
            else if(this.value == "other")  {
                $("#appreal_form #appeal_channel_other_reason").removeClass('d-none');
                $("#appreal_form #appeal_channel_other_reason").prop( "disabled", false );
                $("#appreal_form #appeal_channel_other_reason").focus();
                $("#appreal_form #appeal_channel_department_id").addClass('d-none');
                $("#appreal_form #appeal_channel_department_id").prop( "disabled", true );
            }
            else if(this.value == "email") {
                $("#appreal_form #data_subject_email").prop( "required", true );
                $("#appreal_form #data_subject_email_label").removeClass('d-none');
            }
            else if(this.value == "telephone") {
                $("#appreal_form #data_subject_telephone").prop( "required", true );
                $("#appreal_form #data_subject_telephone_label").removeClass('d-none');
            }
            else {
                $("#appreal_form #appeal_channel_department_id").addClass('d-none');
                $("#appreal_form #appeal_channel_department_id").prop( "disabled", true );
            }
        });
    
        $("input[name='appeal_type']:radio").change(function(){
            if (this.value == "appeal_right_to_other") {
                $("#appreal_form #appeal_type_other_reason").removeClass('d-none');
                $("#appreal_form #appeal_type_other_reason").prop( "disabled", false );
            }
            else{
                $("#appreal_form #appeal_type_other_reason").addClass('d-none');
                $("#appreal_form #appeal_type_other_reason").prop( "disabled", true );
            }
        });

    });
</script>


<script>
Dropzone.options.myDropzone = { // camelized version of the `id`
    url: '{{route('appeals.store')}}',
    autoProcessQueue: false,
    uploadMultiple: true,
    parallelUploads: 100,
    maxFiles: 100,
    paramName: "attachment", // The name that will be used to transfer the file
    maxFilesize: 2, // MB
    acceptedFiles: "image/*,application/pdf",
    addRemoveLinks: true,
    dictDefaultMessage: "คลิกหรือลากไฟล์มาวางที่นี้เพื่ออัพโหลดไฟล์ <span class=\"text-red\">*รองรับไฟล์ รูปภาพ และ PDF เท่านั้น*</span> <br>กรณีเลือกหลายไฟล์ให้กด CTRL หรือ SHIFT ค้างแล้วเลือกไฟล์ที่ต้องการ",
    init: function() {
        dzClosure = this; // Makes sure that 'this' is understood inside the functions below.

        // for Dropzone to process the queue (instead of default form behavior):
        document.getElementById("submit-all").addEventListener("click", function(e) {
            // Make sure that the form isn't actually being sent.
            if (dzClosure.getQueuedFiles().length > 0) {                        
                e.preventDefault();
                e.stopPropagation();
                dzClosure.processQueue();
            } 
            else if($('form.needs-validation').checkValidity() === true) {                       
                $("#appreal_form").submit();
            }
        });
        

        //send all the form data along with the files:
        this.on("sendingmultiple", function(data, xhr, formData) {
            $(":input[name]", $("form")).each(function () {formData.append(this.name, $(':input[name=' + this.name + ']', $("form")).val());});
        });
        this.on("success", function(file, response) {
            window.location.href = "{{route('appeals.store')}}";
        })
        
    }
};
</script>
@endsection