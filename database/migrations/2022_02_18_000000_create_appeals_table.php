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
        Schema::create('appeals', function (Blueprint $table) {
            $table->id('appeal_id');
            $table->string('appeal_uuid');
            $table->string('appeal_type');
            $table->string('appeal_type_other')->nullable();
            $table->string('appeal_channel');
            $table->string('appeal_channel_other')->nullable();
            $table->text('appeal_detail')->nullable();
            $table->string('appeal_department_id');
            $table->timestamp('appeal_request_date')->nullable();
            $table->integer('appeal_status_id');
            $table->integer('data_subject_id')->nullable();
            $table->integer('user_id');
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
        Schema::dropIfExists('appeals');
    }
};
