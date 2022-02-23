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
        Schema::create('pdpa_site_check', function (Blueprint $table) {
            $table->id('id');
            $table->string('domain');
            $table->string('tag_css')->nullable();
            $table->string('tag_id')->nullable();
            $table->string('tag_name')->nullable();
            $table->text('text')->nullable();
            $table->text('url')->nullable();
            $table->timestamp('dataset_date')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pdpa_site_check');
    }
};
