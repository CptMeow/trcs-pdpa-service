<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AppealController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PDPASiteCheckController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    // return view('welcome');
    return redirect()->route('home');
});

Route::any('/dashboard', function () {
    // return view('welcome');
    return redirect()->route('home');
});

Route::get('/home', [HomeController::class, 'index'])->middleware(['auth'])->name('home');

require __DIR__.'/auth.php';

// main app
Route::group(['middleware' => ['auth']], function() {
    Route::resource('roles', RoleController::class);
    Route::resource('users', UserController::class);
    Route::resource('appeals', AppealController::class);
});

// report 
Route::prefix('report')->group(function () {
    Route::get('sitecheck', [PDPASiteCheckController::class, 'ReportSiteCheck'])->name('report.sitecheck');
});
