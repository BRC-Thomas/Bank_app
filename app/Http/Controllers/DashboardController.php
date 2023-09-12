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

        /* All months saves */
        $jan = Income::whereMonth('created_at',1)->sum('amount') - Invoice::whereMonth('created_at',1)->sum('amount');
        $feb = Income::whereMonth('created_at',2)->sum('amount') - Invoice::whereMonth('created_at',2)->sum('amount');
        $mar = Income::whereMonth('created_at',3)->sum('amount') - Invoice::whereMonth('created_at',3)->sum('amount');
        $apr = Income::whereMonth('created_at',4)->sum('amount') - Invoice::whereMonth('created_at',4)->sum('amount');
        $may = Income::whereMonth('created_at',5)->sum('amount') - Invoice::whereMonth('created_at',5)->sum('amount');
        $jun = Income::whereMonth('created_at',6)->sum('amount') - Invoice::whereMonth('created_at',6)->sum('amount');
        $jul = Income::whereMonth('created_at',7)->sum('amount') - Invoice::whereMonth('created_at',7)->sum('amount');
        $aug = Income::whereMonth('created_at',8)->sum('amount') - Invoice::whereMonth('created_at',8)->sum('amount');
        $sep = Income::whereMonth('created_at',9)->sum('amount') - Invoice::whereMonth('created_at',9)->sum('amount');
        $oct = Income::whereMonth('created_at',10)->sum('amount') - Invoice::whereMonth('created_at',10)->sum('amount');
        $nov = Income::whereMonth('created_at',11)->sum('amount') - Invoice::whereMonth('created_at',11)->sum('amount');
        $dec = Income::whereMonth('created_at',12)->sum('amount') - Invoice::whereMonth('created_at',12)->sum('amount');

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
            'variationSave' => $variationSave,

            'jan' => $jan,
            'feb' => $feb,
            'mar' => $mar,
            'apr' => $apr,
            'may' => $may,
            'jun' => $jun,
            'jul' => $jul,
            'aug' => $aug,
            'sep' => $sep,
            'oct' => $oct,
            'nov' => $nov,
            'dec' => $dec,
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
