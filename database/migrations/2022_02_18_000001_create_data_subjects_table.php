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
        Schema::create('data_subjects', function (Blueprint $table) {
            $table->id('data_subject_id');
            $table->string('data_subject_cid',13)->nullable();
            $table->string('data_subject_title',50)->nullable();
            $table->string('data_subject_firstname',100)->nullable();
            $table->string('data_subject_lastname',100)->nullable();
            $table->string('data_subject_telephone',20)->nullable();
            $table->string('data_subject_email',100)->nullable();
            $table->string('data_subject_address')->nullable();
            $table->string('data_subject_district',50)->nullable();
            $table->string('data_subject_amphoe',50)->nullable();
            $table->string('data_subject_province',50)->nullable();
            $table->string('data_subject_zipcode',10)->nullable();

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
        Schema::dropIfExists('data_subjects');
    }
};
