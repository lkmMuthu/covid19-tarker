<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\PassportClientRepository;
use Laravel\Passport\PersonalAccessClient;

class Passport extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'passport:client
            {--personal : Create a personal access token client}
            {--password : Create a password grant client}
            {--client : Create a client credentials grant client}
            {--name= : The name of the client}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a client for issuing access tokens';

    /**
     * Execute the console command.
     *
     * @param  \Laravel\Passport\ClientRepository  $clients
     * @return void
     */
    public function handle(PassportClientRepository $clients)
    {
        if ($this->option('personal')) {
            return $this->createPersonalClient($clients);
        }

        if ($this->option('password')) {
            return $this->createPasswordClient($clients);
        }

        if ($this->option('client')) {
            return $this->createClientCredentialClient($clients);
        }

        $this->createAuthCodeClient($clients);
    }

    /**
     * Create a new personal access client.
     *
     * @param  \Laravel\Passport\ClientRepository  $clients
     * @return void
     */
    protected function createPersonalClient(PassportClientRepository $clients)
    {
        $name = $this->option('name') ?: $this->ask(
            'What should we name the personal access client?',
            config('app.name').' Personal Access Client'
        );

        $client = $clients->createPersonalAccessClient(
            null, $name, 'http://localhost'
        );

        $accessClient = new PersonalAccessClient();
        $accessClient->client_id = $client->id;
        $accessClient->save();

        $this->info('Personal access client created successfully.');
        $this->line('<comment>Client ID:</comment> '.$client->id);
        $this->line('<comment>Client Secret:</comment> '.$client->secret);
    }

    /**
     * Create a new password grant client.
     *
     * @param  \Laravel\Passport\ClientRepository  $clients
     * @return void
     */
    protected function createPasswordClient(PassportClientRepository $clients)
    {
        $name = $this->option('name') ?: $this->ask(
            'What should we name the password grant client?',
            config('app.name').' Password Grant Client'
        );

        $client = $clients->createPasswordGrantClient(
            null, $name, 'http://localhost'
        );

        $this->info('Password grant client created successfully.');
        $this->line('<comment>Client ID:</comment> '.$client->id);
        $this->line('<comment>Client Secret:</comment> '.$client->secret);
    }

    /**
     *Create a new clientCredential client.
     *
     * @param  \Laravel\Passport\ClientRepository  $clients
     * @return void
    */
     protected function createClientCredentialClient(PassportClientRepository $clients)
    {
        $name = $this->option('name') ?: $this->ask(
            'What should we name the client?',
            config('app.name').' Client Credentials Grant Client'
        );

        $client = $clients->createPasswordGrantClient(
            null, $name, 'http://localhost'
        );

        $this->info('ClientCredentials client created successfully.');
        $this->line('<comment>Client ID:</comment> '.$client->id);
        $this->line('<comment>Client Secret:</comment> '.$client->secret);
    }

    /**
     * Create a authorization code client.
     *
     * @param  \Laravel\Passport\ClientRepository  $clients
     * @return void
     */
    protected function createAuthCodeClient(PassportClientRepository $clients)
    {
        $userId = $this->ask(
            'Which user ID should the client be assigned to?'
        );

        $name = $this->option('name') ?: $this->ask(
            'What should we name the client?'
        );

        $redirect = $this->ask(
            'Where should we redirect the request after authorization?',
            url('/auth/callback')
        );

        $client = $clients->create(
            $userId, $name, $redirect
        );

        $this->info('New client created successfully.');
        $this->line('<comment>Client ID:</comment> '.$client->id);
        $this->line('<comment>Client secret:</comment> '.$client->secret);
    }
}
