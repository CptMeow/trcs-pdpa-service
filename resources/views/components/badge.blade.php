@props(['type'])

@php
switch ($type) {
    case '1':
        $type_class = 'bg-success';
        break;
    case '2':
        $type_class = 'bg-info';
        break;
    case '3':
        $type_class = 'bg-success';
        break;
    case '4':
        $type_class = 'bg-info';
        break;
    case '5':
        $type_class = 'bg-danger';
        break;
    case '6':
        $type_class = 'bg-danger';
        break;
    case '7':
        $type_class = 'bg-danger';
        break;
    default:
        $type_class = 'bg-gray';
        break;
}
@endphp

<span class="badge {{ $type_class }}">{{ $slot }}</span>
