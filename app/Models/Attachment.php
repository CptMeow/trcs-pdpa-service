<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class attachment extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'file_original_name',
        'file_upload_name',  
        'file_extension', 
        'file_path', 
        'file_size', 
        'weight', 
        'appeal_id'
    ];
}
