<?php

use Illuminate\Http\Request;

/*
  |--------------------------------------------------------------------------
  | API Routes
  |--------------------------------------------------------------------------
  |
  | Here is where you can register API routes for your application. These
  | routes are loaded by the RouteServiceProvider within a group which
  | is assigned the "api" middleware group. Enjoy building your API!
  |
 */

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});
Route::group(['middleware' => 'client'], function () {
    Route::get('patients/get-count', 'PatientsController@getCounts');
    Route::get('quarantine-people/get-all', 'QuarantinePeopleController@getCounts');
    Route::get('pcr-test/get-all', 'PcrTestController@getCounts');
});

// Route::get('patients/get-count', 'PatientsController@getCounts');
// Route::get('quarantine-people/get-all', 'QuarantinePeopleController@getCounts');
// Route::get('pcr-test/get-all', 'PcrTestController@getCounts');
 
// Route::resource('patients', PatientsController::class)->only([
//    'index', 'show'
//]);
// Route::resource('quarantine-people', QuarantinePeopleController::class)->only([
//    'index', 'show'
//]);
// Route::resource('pcr-test', PcrTestController::class)->only([
//    'index', 'show'
//]);