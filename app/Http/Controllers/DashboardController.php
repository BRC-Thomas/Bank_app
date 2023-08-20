<?php

namespace App\Http\Controllers;

use App\Models\BankAccount;
use App\Models\Income;
use App\Models\Invoice;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{

    public function index()
    {
        $user = auth()->user();
        $bankAccountId = $user->bankAccount->id;

        $invoicesCount = Invoice::where('bank_account_id', $bankAccountId)->count();
        $totalInvoices = Invoice::where('bank_account_id', $bankAccountId)->sum('amount');
        $avgInvoices = $invoicesCount > 0 ? $totalInvoices / $invoicesCount : 0;

        $totalIncomes = Income::where('bank_account_id', $bankAccountId)->sum('amount');

        $saves = $totalIncomes - $totalInvoices; /*all time, monthly save to do*/
        $totalInvoices; /*all time, monthly save to do*/

        return Inertia::render('Dashboard',[
            'totalInvoices' => $totalInvoices,
            'avgInvoices' => $avgInvoices,
            'totalIncomes' => $totalIncomes,
            'saves' => $saves,
        ]);
    }
}
