<?php

namespace App\Http\Controllers;

use App\Models\Income;
use App\Models\Invoice;
use Illuminate\Support\Carbon;
use Inertia\Inertia;

class DashboardController extends Controller
{

    public function index()
    {
        $user = auth()->user();
        $bankAccountId = $user->bankAccount->id;
        $invoice = Invoice::where('bank_account_id', $bankAccountId);
        $income = Income::where('bank_account_id', $bankAccountId);

        $invoicesCount = $invoice->count();
        $totalInvoices = $invoice->sum('amount');
        $totalIncomes = $income->sum('amount');

        $avgInvoices = $invoicesCount > 0 ? $totalInvoices / $invoicesCount : 0;

        $totalBalance = $totalIncomes - $totalInvoices;

        /* START This Month / Last Month */

        $thisMonthIncome = $this->getThisMonthIncome($income, $bankAccountId);
        $thisMonthInvoice = $this->getThisMonthInvoice($invoice, $bankAccountId);


        $lastMonthIncome = $this->getLastMonthIncome($bankAccountId);
        $lastMonthInvoice = $this->getLastMonthInvoice($bankAccountId);



        $lastMonthSave = $lastMonthIncome - $lastMonthInvoice;
        $thisMonthSave = $thisMonthIncome - $thisMonthInvoice;

        /* END This Month / Last Month */

        $variationIncome = $this->getVariation($lastMonthIncome, $thisMonthIncome);
        $variationInvoice = $this->getVariation($lastMonthInvoice, $thisMonthInvoice);
        $variationSave = $this->getVariation($lastMonthSave, $thisMonthSave);

        /* Recent Invoice */
        $recentInvoice = Invoice::where('bank_account_id', $bankAccountId)->orderBy('created_at', 'desc')->paginate(3);

        /* All months saves */
        $monthlySaves = $this->calculateMonthlySaves($bankAccountId);

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

            'monthlySaves' => $monthlySaves,

            'recentInvoice' => $recentInvoice
        ]);
    }

    private function getVariation($lastMonth, $thisMonth) {
        if ($lastMonth === 0) {
            return 0;
        }

        $variation = (($thisMonth - $lastMonth) / $lastMonth) * 100;
        return round($variation);
    }

    private function getThisMonthIncome($income, $bankAccountId)
    {
        return $this->getMonthlyAmount($income, Carbon::now()->month, $bankAccountId);
    }

    private function getThisMonthInvoice($invoice, $bankAccountId)
    {
        return $this->getMonthlyAmount($invoice, Carbon::now()->month, $bankAccountId);
    }

    private function getLastMonthIncome($bankAccountId)
    {
        return Income::where('bank_account_id', $bankAccountId)->whereMonth('created_at', Carbon::now()->month - 1)->sum('amount');
    }

    private function getLastMonthInvoice($bankAccountId)
    {
        return Invoice::where('bank_account_id', $bankAccountId)->whereMonth('created_at', Carbon::now()->month - 1)->sum('amount');

    }

    private function getMonthlyAmount($model, $month, $bankAccountId)
    {
        return $model->where('bank_account_id', $bankAccountId)->whereMonth('created_at', $month)->sum('amount');
    }


    private function calculateMonthlySaves($bankAccountId)
    {
        $monthlySaves = [];
        for ($month = 1; $month <= 12; $month++) {
            $monthlyIncome = Income::where('bank_account_id', $bankAccountId)->whereMonth('created_at', $month)->pluck('amount')->sum();
            $monthlyInvoice = Invoice::where('bank_account_id', $bankAccountId)->whereMonth('created_at', $month)->pluck('amount')->sum();
            $monthlySaves['month'.$month] = $monthlyIncome - $monthlyInvoice;
        }

        return $monthlySaves;
    }

}

