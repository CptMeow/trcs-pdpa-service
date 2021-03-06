@props(['activity'])

@php
$_data = json_decode($activity->appeal_activities_data);
$_comment = '';

switch ($activity->appeal_activities_event_name) {
    case 'change_status':

        if(!empty($_data->comment)) {
            $_comment = property_exists($_data, 'comment')?$_data->comment:'';
        }

        $text = '<span class="text-red">'.Helper::AppealStatus($_data->status->old).'</span> เป็น <span class="text-green">'.Helper::AppealStatus($_data->status->new).'</span>
            <span>'.$_comment.'</span>';
        $title = 'เปลี่ยนสถานะใบคำร้อง';
        $type_class = 'fas fa-exchange-alt bg-orange';

        break;
    case 'create_appeal':
        if(!empty($_data->comment)) {
            $_comment = property_exists($_data, 'comment')?$_data->comment:'';
        }

        $text = $_comment;
        $title = 'สร้างใบคำร้อง';
        $type_class = 'fas fa-envelope-open-text bg-info';
        break;
    case '3':
        $text = '';
        $type_class = 'bg-success';
        break;
    case '4':
        $text = '';
        $type_class = 'bg-primary';
        break;
    case '5':
        $text = '';
        $type_class = 'bg-danger';
        break;
    case '6':
        $text = '';
        $type_class = 'bg-pink';
        break;
    case '7':
        $text = '';
        $type_class = 'bg-gray';
        break;
    default:
        $text = '';
        $type_class = 'bg-gray';
        break;
}

@endphp

<div>
    <i class="{{ $type_class }} text-white"></i>
    <div class="timeline-item col">
        <span class="time"><i class="fas fa-clock"></i> {{ $activity->created_at }}</span>
        <h3 class="timeline-header"><strong>{{ Helper::Username($activity->user_id) }}</strong> {{ $title }}</h3>
        <div class="timeline-body">
            {!! $text !!}
        </div>
    </div>
</div>