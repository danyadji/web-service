<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lead extends Model
{
    protected $fillable = [
        'name',
        'contact',
        'city',
        'service_interested',
        'message',
        'wa_message_sent',
        'status',
        'ip_address',
    ];
}
