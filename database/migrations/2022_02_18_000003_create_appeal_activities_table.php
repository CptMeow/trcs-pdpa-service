<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('appeal_activities', function (Blueprint $table) {
            $table->id('appeal_activities_id');
            $table->string('appeal_activities_event_name')->nullable();
            $table->integer('appeal_id');
            $table->integer('user_id');
            $table->text('appeal_activities_data')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('appeal_activities');
    }
};
