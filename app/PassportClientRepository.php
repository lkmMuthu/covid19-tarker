<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use \Laravel\Passport\ClientRepository;

class PassportClientRepository extends ClientRepository {

    /**
     * Store a new client.
     *
     * @param  int  $userId
     * @param  string  $name
     * @param  string  $redirect
     * @param  bool  $personalAccess
     * @param  bool  $password
     * @return \Laravel\Passport\Client
     */
    public function create($userId, $name, $redirect, $personalAccess = false, $password = false) {
        $client = (new PassportClient)->forceFill([
            'id' => $this->getClientId(),
            'user_id' => $userId,
            'name' => $name,
            'secret' => str_random(40),
            'redirect' => $redirect,
            'personal_access_client' => $personalAccess,
            'password_client' => $password,
            'revoked' => false,
        ]);

        $client->save();

        return $client;
    }

    private function getClientId() {

        return md5(uniqid());
    }

}
