<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AppealActivity extends Model
{
    use HasFactory, SoftDeletes;   

    protected $fillable = [
        'appeal_activities_event_name',
        'appeal_id',  
        'user_id', 
        'appeal_activities_data',
    ];
}
