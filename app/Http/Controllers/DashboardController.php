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

        /* START This Month / Last Month */

        $thisMonthIncome = Income::whereMonth('created_at',Carbon::now()->month)->sum('amount');
        $thisMonthInvoice = Invoice::whereMonth('created_at',Carbon::now()->month)->sum('amount');

        $lastMonthIncome = Income::whereMonth('created_at',Carbon::now()->month-1)->sum('amount');
        $lastMonthInvoice = Invoice::whereMonth('created_at',Carbon::now()->month-1)->sum('amount');

        $lastMonthSave = $lastMonthIncome - $lastMonthInvoice;
        $thisMonthSave = $thisMonthIncome - $thisMonthInvoice;

        /* END This Month / Last Month */

        $variationIncome = $this->getVariation($lastMonthIncome, $thisMonthIncome);
        $variationInvoice = $this->getVariation($lastMonthInvoice, $thisMonthInvoice);
        $variationSave = $this->getVariation($lastMonthSave, $thisMonthSave);

        return Inertia::render('Dashboard',[
            'totalInvoices' => $totalInvoices,
            'avgInvoices' => $avgInvoices,
            'totalIncomes' => $totalIncomes,
            'totalBalance' => $totalBalance,

            'thisMonthSave' => $thisMonthSave,
            'thisMonthIncome' => $thisMonthIncome,
            'thisMonthInvoice' => $thisMonthInvoice,

            'variationIncome' => $variationIncome,
            'variationInvoice' => $variationInvoice,
            'variationSave' => $variationSave
        ]);
    }

    function getVariation($lastMonth, $thisMonth) {
        if ($lastMonth === 0) {
            return 0;
        }

        $variation = (($thisMonth - $lastMonth) / $lastMonth) * 100;
        return round($variation);
    }
}
