@props(['activity'])

@php
$_data = json_decode($activity->appeal_activities_data);

switch ($activity->appeal_activities_event_name) {
    case 'change_status':
        $type_class = 'bg-orange';
        $comment = property_exists($_data->status, 'comment')?$_data->status->comment:'';
        
        $text = '<span class="text-red">'.Helper::AppealStatus($_data->status->old).'</span> เป็น <span class="text-green">'.Helper::AppealStatus($_data->status->new).'</span>
            <span>'.$comment.'</span>';
        break;
    case 'create_appeal':
        $type_class = 'bg-info';
        $text = '';
        break;
    case '3':
        $type_class = 'bg-success';
        $text = '';
        break;
    case '4':
        $type_class = 'bg-primary';
        $text = '';
        break;
    case '5':
        $type_class = 'bg-danger';
        $text = '';
        break;
    case '6':
        $type_class = 'bg-pink';
        $text = '';
        break;
    case '7':
        $type_class = 'bg-gray';
        $text = '';
        break;
    default:
        $type_class = 'bg-gray';
        $text = '';
        break;
}

@endphp

<div>
    <i class="fas fa-comments bg-gray"></i>
    <div class="timeline-item col">
        <span class="time"><i class="fas fa-clock"></i> {{ $activity->created_at }}</span>
        <h3 class="timeline-header"><a href="#">{{ Helper::Username($activity->user_id) }}</a> เปลี่ยนสภานะใบคำร้อง</h3>
        <div class="timeline-body">
            {!! $text !!}
        </div>
    </div>
</div>