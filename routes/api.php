<?php

use App\Http\Controllers\Api\ChartController;
use App\Models\Appeal;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::middleware('auth')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/test', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:web')->get('/appeal', function (Request $request) {
    return Appeal::get();
});
Route::middleware('auth:web')->get('/chart/appeal/channel', [ChartController::class, 'channel']);
Route::middleware('auth:web')->get('/chart/appeal/requestdate', [ChartController::class, 'requestDate']);
Route::middleware('auth:web')->get('/chart/appeal/type', [ChartController::class, 'type']);
Route::middleware('auth:web')->get('/chart/test', [ChartController::class, 'test']);
