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
        dd($bankAccountId);
        $invoicesCount = $invoice->count();
        $totalInvoices = $invoice->sum('amount');
        $totalIncomes = $income->sum('amount');

        $avgInvoices = $invoicesCount > 0 ? $totalInvoices / $invoicesCount : 0;

        $totalBalance = $totalIncomes - $totalInvoices;

        /* START This Month / Last Month */

        $thisMonthIncome = $this->getThisMonthIncome($income);
        $thisMonthInvoice = $this->getThisMonthInvoice($invoice);


        $lastMonthIncome = $this->getLastMonthIncome($income);
        $lastMonthInvoice = $this->getLastMonthInvoice($invoice);


        $lastMonthSave = $lastMonthIncome - $lastMonthInvoice;
        $thisMonthSave = $thisMonthIncome - $thisMonthInvoice;

        /* END This Month / Last Month */

        $variationIncome = $this->getVariation($lastMonthIncome, $thisMonthIncome);
        $variationInvoice = $this->getVariation($lastMonthInvoice, $thisMonthInvoice);
        $variationSave = $this->getVariation($lastMonthSave, $thisMonthSave);

        /* Recent Invoice */
        $recentInvoice = $invoice->where('bank_account_id', $bankAccountId)->orderBy('created_at', 'desc')->paginate(3);

        /* All months saves */
        $monthlySaves = $this->calculateMonthlySaves($income, $invoice);

         /* $jan = $income->whereMonth('created_at',1)->sum('amount') - $invoice->whereMonth('created_at',1)->sum('amount');
          $feb = $income->whereMonth('created_at',2)->sum('amount') - $invoice->whereMonth('created_at',2)->sum('amount');
          $mar = $income->whereMonth('created_at',3)->sum('amount') - $invoice->whereMonth('created_at',3)->sum('amount');
          $apr = $income->whereMonth('created_at',4)->sum('amount') - $invoice->whereMonth('created_at',4)->sum('amount');
          $may = $income->whereMonth('created_at',5)->sum('amount') - $invoice->whereMonth('created_at',5)->sum('amount');
          $jun = $income->whereMonth('created_at',6)->sum('amount') - $invoice->whereMonth('created_at',6)->sum('amount');
          $jul = $income->whereMonth('created_at',7)->sum('amount') - $invoice->whereMonth('created_at',7)->sum('amount');
          $aug = $income->whereMonth('created_at',8)->sum('amount') - $invoice->whereMonth('created_at',8)->sum('amount');
          $sep = $income->whereMonth('created_at',9)->sum('amount') - $invoice->whereMonth('created_at',9)->sum('amount');
          $oct = $income->whereMonth('created_at',10)->sum('amount') - $invoice->whereMonth('created_at',10)->sum('amount');
          $nov = $income->whereMonth('created_at',11)->sum('amount') - $invoice->whereMonth('created_at',11)->sum('amount');
          $dec = $income->whereMonth('created_at',12)->sum('amount') - $invoice->whereMonth('created_at',12)->sum('amount');*/

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

    private function getThisMonthIncome($income)
    {
        return $income->whereMonth('created_at',Carbon::now()->month)->sum('amount');
    }

    private function getThisMonthInvoice($invoice)
    {
        return $invoice->whereMonth('created_at',Carbon::now()->month)->sum('amount');
    }

    private function getLastMonthIncome($income)
    {
        return $income->whereMonth('created_at',Carbon::now()->month-1)->sum('amount');
    }

    private function getLastMonthInvoice($invoice)
    {
        return $invoice->whereMonth('created_at',Carbon::now()->month-1)->sum('amount');
    }

    private function calculateMonthlySaves($income, $invoice)
    {
        $monthlySaves = [];
        for ($month = 1; $month <= 12; $month++) {
            $monthlyIncome = $income->whereMonth('created_at', $month)->sum('amount');
            $monthlyInvoice = $invoice->whereMonth('created_at', $month)->sum('amount');
            $monthlySaves['month'.$month] = $monthlyIncome - $monthlyInvoice;
        }


        return $monthlySaves;
    }

}
