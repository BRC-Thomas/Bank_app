<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Income extends Model
{
    use HasFactory;

    protected $fillable = [
        'amount',
        'bank_account_id',
        'date',
        'created_at',
        'category_id',
    ];

    public function bankAccount(): BelongsTo
    {
        return $this->belongsTo(BankAccount::class);
    }
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function goal(): HasOne
    {
        return $this->hasOne(Goal::class);
    }
}
