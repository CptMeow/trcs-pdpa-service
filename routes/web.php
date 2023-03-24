<?php
use Illuminate\Support\Facades\Route;

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

/*
Route::get('/public', function () {
return redirect('https://pdpa.redcross.or.th/tools/checklist/');
});
Route::get('/public/tools', function () {
return redirect('https://pdpa.redcross.or.th/tools/checklist/');
});
Route::get('/public/tools/checklist', function () {
return redirect('https://pdpa.redcross.or.th/tools/checklist/');
});
 */

Route::get('{any?}', function () {
    return view('application');
})->where('any', '.*');

// Route::get('/', function () {
//     // return view('welcome');
//     return redirect()->route('home');
// });

// Route::any('/dashboard', function () {
//     // return view('welcome');
//     return redirect()->route('home');
// });

// Route::get('/home', [HomeController::class, 'index'])->middleware(['auth'])->name('home');

// require __DIR__ . '/auth.php';

// // main app
// Route::group(['middleware' => ['auth']], function () {
//     Route::resource('roles', RoleController::class);
//     Route::resource('users', UserController::class);
//     Route::resource('appeals', AppealController::class);
//     Route::get('/appeals/{appeal}/createcomment', [AppealController::class, 'commentCreate'])->middleware(['auth'])->name('appeals.comment.create');
//     Route::put('/appeals/{appeal}/createcomment', [AppealController::class, 'commentStore'])->middleware(['auth'])->name('appeals.comment.store');
// });

// // report
// Route::prefix('report')->group(function () {
//     Route::get('sitecheck', [PDPASiteCheckController::class, 'ReportSiteCheck'])->name('report.sitecheck');
// });

// // short url
// Route::prefix('l')->group(function () {
//     Route::get('{link}', [ShortURLController::class, 'link'])->name('short.link');
// });
