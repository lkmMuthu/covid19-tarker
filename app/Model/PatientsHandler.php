<?php

namespace App\Model;

use Exception;
use Log;
use DB;

class PatientsHandler {

    //get all count of patients recodes for given grouping
    function getCounts($request) {
        try {
            $result = array();
            $filter_type = '';
            //apply filters
            if (isset($request['date_from'])) {
                $filter_type = 'positive_date';
                if (isset($request['filter_date_type']) && $request['filter_date_type'] == 'admit') {
                    $filter_type = 'admit_date';
                } else if (isset($request['filter_date_type']) && $request['filter_date_type'] == 'discharge') {
                    $filter_type = 'discharge_date';
                }
            }
            //apply grouping
            $groups = isset($request['group_by']) ? $request['group_by'] : array('discharge_date', 'date_of_death', 'positive_date', 'district', 'admit_date', 'region', 'hospital', 'status', 'arrived_country');
            foreach ($groups as $item) {
                if ($filter_type) {
                    $result[$item] = DB::table('patients')->select($item, DB::raw('count(id) as count'))
                                    ->where([[$filter_type, '>=', $request['date_from']], [$filter_type, '<=', $request['date_to']]])
                                    ->whereNotNull($item)->groupBy($item)->orderBy($item)->get();
                } else {
                    $result[$item] = DB::table('patients')->select($item, DB::raw('count(id) as count'))
                                    ->whereNotNull($item)->groupBy($item)->orderBy($item)->get();
                }
            }
            return $result;
        } catch (Exception $ex) {
            Log::error('PatientsHanlder getCounts: ' . $ex->getMessage());
            throw $ex;
        }
    }

}
