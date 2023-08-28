<?php

namespace App\Http\Controllers;

use App\Models\BankAccount;
use App\Models\Income;
use App\Models\Invoice;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Inertia\Inertia;

class DashboardController extends Controller
{

    public function index()
    {
        $user = auth()->user();
        $bankAccountId = $user->bankAccount->id;

        $invoicesCount = Invoice::where('bank_account_id', $bankAccountId)->count();
        $totalInvoices = Invoice::where('bank_account_id', $bankAccountId)->sum('amount');
        $totalIncome = Income::where('bank_account_id', $bankAccountId)->sum('amount');
        $avgInvoices = $invoicesCount > 0 ? $totalInvoices / $invoicesCount : 0;

        $totalBalance = $totalIncome - $totalInvoices;
        $totalIncomes = Income::where('bank_account_id', $bankAccountId)->sum('amount');

        $thisMonthIncome = Income::whereMonth('created_at',Carbon::now()->month)->sum('amount');
        $thisMonthInvoice = Invoice::whereMonth('created_at',Carbon::now()->month)->sum('amount');

        $thisMonthSaves = $thisMonthIncome - $thisMonthInvoice;

        return Inertia::render('Dashboard',[
            'totalInvoices' => $totalInvoices,
            'avgInvoices' => $avgInvoices,
            'totalIncomes' => $totalIncomes,
            'totalBalance' => $totalBalance,

            'thisMonthSaves' => $thisMonthSaves,
            'thisMonthIncome' => $thisMonthIncome,
            'thisMonthInvoice' => $thisMonthInvoice,
        ]);
    }
}
