<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model;
use Exception;
use Validator;
use Log;

class PatientsController extends Controller {

    /**
     * Get all patients counts 
     * Client credential
     * 
     * @authenticated
     * 
     * @queryParam group_by array required in:admit_date,distric,region,hospital,status,arrived_country
     * @queryParam type string  in:admit,discharge
     * @queryParam date_from date  date_format:Y-m-d|required_with:date_to
     * @queryParam date_to date  date_format:Y-m-d|before_or_equal:today|required_with:date_from
     * 
     * @response {"success":true,"data":{"admit_date":[{"admit_date":"2020-05-12","count":1},{"admit_date":"2020-05-16","count":1}],"district":[{"district":"Colombo","count":1},{"district":"Colombo","count":1}],"region":[{"region":"Homagama","count":1},{"region":"Homagama","count":1}],"hospital":[{"hospital":"Base Hostpital Homagama","count":1},{"hospital":"Base Hostpital Homagama","count":1}],"status":[{"status":"negative","count":1},{"status":"negative","count":1}],"arrived_country":[{"arrived_country":"USA","count":1}]}}
     * */
    public function getCounts(Request $request) {
        try {
            Log::INFO('PatientsController getAll INPUT: ' . json_encode($request->all()));
            $validated = Validator::make($request->all(), [
                        'group_by' => ' bail|nullable|array|in:admit_date,district,region,hospital,status,arrived_country,positive_date',
                        'filter_date_type' => 'bail|nullable|string|in:admit,discharge,positive',
                        'date_from' => 'bail|nullable|date_format:Y-m-d|required_with:date_to',
                        'date_to' => 'bail|nullable|date_format:Y-m-d|before_or_equal:today|required_with:date_from'
            ]);
            if ($validated->fails()) {
                Log::warning('PatientsController getAll: invalid data provide errors: ' . json_encode($validated->errors()));
                $return = array('success' => false, 'message' => $validated->errors()->first(), 'code' => 422);
            } else {
                $handler = new Model\PatientsHandler();
                //call handler function
                $result = $handler->getCounts($request->all());
                $return = array('success' => true, 'data' => $result);
            }
        } catch (Exception $ex) {
            Log::error('PatientsController show: ' . $ex->getMessage());
            throw $ex;
        }
        Log::DEBUG('PatientsController getAll OUPUT: ' . json_encode($return));
        return response()->json($return, isset($return['code']) ? $return['code'] : 200);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id) {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id) {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id) {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) {
        //
    }

}
