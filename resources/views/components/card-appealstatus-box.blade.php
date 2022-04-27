@props(['type'])

@php
switch ($type) {
    case '1': //เปิด
        $icon_class = 'fas fa-envelope-open-text';
        $type_class = 'bg-orange';
        break;
    case '2': //อยู่ระหว่างดำเนินการ
        $icon_class = 'fas fa-exchange-alt';
        $type_class = 'bg-info';
        break;
    case '3': //close
        $icon_class = 'far fa-envelope';
        $type_class = 'bg-success';
        break;
    case '4': //ส่งต่อหน่วยงานเจ้าของข้อมูล
        $icon_class = 'fas fa-share';
        $type_class = 'bg-primary';
        break;
    case '5': //ปฏิเสธ
        $icon_class = 'fas fa-times';
        $type_class = 'bg-danger';
        break;
    case '6': //ส่งต่อ สคส
        $icon_class = 'fas fa-share';
        $type_class = 'bg-pink';
        break;
    case '7': //re-open
        $icon_class = 'fas fa-redo';
        $type_class = 'bg-gray';
        break;
    default:
        $icon_class = '';
        $type_class = 'bg-gray';
        break;
}
@endphp

@if($slot!="0")
<a href="{{route('appeals.index',['status' => $type])}}">
    <div class="info-box">
        <span class="info-box-icon {{ $type_class }}"><i class="{{ $icon_class }}"></i></span>
        <div class="info-box-content">
            <span class="info-box-text">{{ Helper::AppealStatus($type) }}</span>
            <span class="info-box-number">{{ $slot }}</span>
        </div> 
    </div>
</a>
@else 
<div class="info-box">
    <span class="info-box-icon {{ $type_class }}"><i class="{{ $icon_class }}"></i></span>
    <div class="info-box-content">
        <span class="info-box-text">{{ Helper::AppealStatus($type) }}</span>
        <span class="info-box-number">{{ $slot }}</span>
    </div> 
</div>
@endif