@props(['type' => null,'icon'=>null])

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

if(isset($icon)) {
    $icon = '<i class="'.$icon.'"></i>';
}
elseif(isset($type)) {
    $icon = '<i class="'.$icon_class.'"></i>';
}
else {
    $icon = '';
}

@endphp

<span class="badge {{ $type_class }} text-white"></i>{!! $icon !!} {{ $slot }}</span>
