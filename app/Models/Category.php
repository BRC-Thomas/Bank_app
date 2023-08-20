<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'type',
    ];

    public function invoice(): HasMany
    {
        return $this->hasMany(Invoice::class);
    }

    public function incomes(): HasMany
    {
        return $this->hasMany(Invoice::class);
    }
}
