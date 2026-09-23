<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('leads', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('contact');
            $table->string('city')->nullable();
            $table->string('service_interested')->nullable();
            $table->text('message');
            $table->text('wa_message_sent')->nullable();
            $table->enum('status', ['new', 'contacted', 'deal', 'closed'])->default('new')->index();
            $table->string('ip_address')->nullable();
            $table->timestamps();

            $table->index('created_at');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('leads');
    }
};
