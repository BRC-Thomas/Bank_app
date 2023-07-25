<?php

namespace App\Http\Controllers;

use App\Models\BankAccount;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{

    public function index()
    {
        $user = auth()->user();
       /* $bankAccount = BankAccount::where('user_id', $user->id)->first();
        dd($bankAccount->user);*/
        return Inertia::render('Dashboard');
    }
}
