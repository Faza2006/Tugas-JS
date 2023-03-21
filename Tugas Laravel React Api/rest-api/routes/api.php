<?php

use App\Http\Controllers\Api\V1\SkillController;
use App\Http\Controllers\Api\v1\PelangganController;
use App\Http\Controllers\Api\v1\DummyController;
use App\Http\Controllers\Api\V1\OrderController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'v1'], function ()
{
    Route::apiResource('skills', SkillController::class);

    Route::apiResource('order', OrderController::class);
});

Route::group(['prefix' => 'v1'], function ()
{
    Route::apiResource('dummies', DummyController::class);
});

Route::group(['prefix' => 'v1'], function ()
{
    Route::apiResource('pelanggans', PelangganController::class);
});
