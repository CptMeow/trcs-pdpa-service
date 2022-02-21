<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;

class appeal extends Model
{
    use HasFactory, SoftDeletes;

    protected $primaryKey = 'appeal_id';

    protected $fillable = [
        'appeal_uuid', 
        'appeal_type', 
        'appeal_type_other', 
        'appeal_department_id',
        'appeal_detail', 
        'appeal_channel', 
        'appeal_channel_other',
        'appeal_status_id', 
        'appeal_request_date',
        'user_id'
    ];

}
