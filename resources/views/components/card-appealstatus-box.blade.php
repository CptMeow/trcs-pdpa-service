@props(['type'])

@php
switch ($type) {
    case '1':
        $type_class = 'bg-orange';
        break;
    case '2':
        $type_class = 'bg-info';
        break;
    case '3':
        $type_class = 'bg-success';
        break;
    case '4':
        $type_class = 'bg-primary';
        break;
    case '5':
        $type_class = 'bg-danger';
        break;
    case '6':
        $type_class = 'bg-pink';
        break;
    case '7':
        $type_class = 'bg-gray';
        break;
    default:
        $type_class = 'bg-gray';
        break;
}
@endphp

<div class="info-box">
    <span class="info-box-icon {{ $type_class }}"><i class="far fa-envelope"></i></span>
    <div class="info-box-content">
        <span class="info-box-text">{{ Helper::AppealStatus($type) }}</span>
        @if($slot!="0")
        <span class="info-box-number"><a href="{{route('appeals.index',['status' => $type])}}">{{ $slot }}</a></span>
        @else
        <span class="info-box-number">{{ $slot }}</span>
        @endif
    </div>
</div>