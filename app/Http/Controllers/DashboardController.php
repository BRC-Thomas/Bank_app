<?php

namespace App\Http\Controllers;

use App\Models\BankAccount;
use App\Models\Invoice;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{

    public function index()
    {
        $user = auth()->user();
        $totalInvoices = Invoice::where('bank_account_id', $user->bankAccount->id)->get()->sum('amount');
        $avgInvoices = $totalInvoices / Invoice::where('bank_account_id', $user->bankAccount->id)->get()->count();
        /* compare avg to avg month -1*/

        return Inertia::render('Dashboard',['totalInvoices' => $totalInvoices, 'avgInvoices' => $avgInvoices]);
    }
}
