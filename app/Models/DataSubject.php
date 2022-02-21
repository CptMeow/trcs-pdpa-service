<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DataSubject extends Model
{
    use HasFactory;

    protected $primaryKey = 'data_subject_id';

    protected $fillable = [
        'data_subject_cid', 
        'data_subject_title', 
        'data_subject_firstname', 
        'data_subject_lastname',
        'data_subject_telephone',
        'data_subject_email', 
        'data_subject_address',
        'data_subject_district',
        'data_subject_amphoe',
        'data_subject_province',
        'data_subject_zipcode',
    ];
}
