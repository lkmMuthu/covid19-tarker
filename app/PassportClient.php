<?php

namespace App;

use Laravel\Passport\Client;

class PassportClient extends Client
{
    
    protected $primaryKey = 'id'; // or null

    public $incrementing = false;

}
