<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model;
use Exception;
use Validator;
use Log;

class DashboardController extends Controller {

    public function renderPatients(Request $request) {
        try {
            $handler = new Model\PatientsHandler();
            //call handler function
            $result = $handler->getCounts($request->all());
            $today = date("Y-m-d");
//                $death = $result['date_of_death'];
//                $discharge = $result['discharge_date'];
//                $positive = $result['positive_date'];

            $data['total_discharge'] = 0;
            $data['total_death'] = 0;
            $data['total_positive'] = 0;

//                $data['today_discharge']= 0;
//                $data['today_death'] =0;
//                $data['today_positive'] = 0;
            if ($result) {
                foreach ($result['status'] as $status) {
                    if ($status->status == 'dead') {
                        $data['total_death'] = $status->count;
                    }
                    if ($status->status == 'positive') {
                        $data['total_positive'] = $status->count;
                    }
                }
                foreach ($result['discharge_date'] as $discharge) {
                    $data['total_discharge'] = $data['total_discharge'] + $discharge->count;
                }
            }

            return view('dashbaord', compact('data'));
        } catch (Exception $ex) {
            Log::error('LoginController getSettings: ' . $ex->getMessage());
            throw $ex;
        }
    }

}
