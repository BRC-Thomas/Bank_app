<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->enum('type',['income','invoice']);
            $table->timestamps();
        });

        DB::table('categories')->insert([
            ['title' => 'other', 'type' => 'income'],
            ['title' => 'other', 'type' => 'invoice'],

            ['title' => 'alimentary', 'type' => 'invoice'],
            ['title' => 'restaurants', 'type' => 'invoice'],
            ['title' => 'shopping', 'type' => 'invoice'],
            ['title' => 'transport', 'type' => 'invoice'],
            ['title' => 'travel', 'type' => 'invoice'],
            ['title' => 'entertainment', 'type' => 'invoice'],
            ['title' => 'health', 'type' => 'invoice'],
            ['title' => 'payment', 'type' => 'invoice'],
            ['title' => 'credit', 'type' => 'invoice'],

            ['title' => 'salary', 'type' => 'income'],
            ['title' => 'bonus', 'type' => 'income'],
            ['title' => 'rent', 'type' => 'income'],
    ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('categories');
    }
};
