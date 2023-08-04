<?php

namespace App\Http\Controllers;

use App\Models\Income;
use Illuminate\Http\Request;
use Inertia\Inertia;


class IncomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();
        $incomes = Income::where('bank_account_id', $user->bankAccount->id)->get();
        $totalIncomes = Income::where('bank_account_id', $user->bankAccount->id)->get()->sum('amount');
        return Inertia::render('Incomes/Index', ['incomes' => $incomes,'totalIncomes' => $totalIncomes]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Incomes/Create', []);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = auth()->user();

        $data = $request->validate([
            'amount' => ['required', 'numeric'],
        ]);
        $data['bank_account_id'] = $user->bankAccount->id;

        Income::create($data);

        return redirect()->route('income.index')->with('message','Income added successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Income $income)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Income $income)
    {
        return Inertia::render('Incomes/Edit', ['income' => $income]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Income $income)
    {
        $data = $request->validate([
            'amount' => ['required', 'numeric'],
        ]);

        $income->update($data);

        return redirect()->route('income.index')->with('message', 'Income updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Income $income)
    {
        $income->delete();

        return redirect()->route('income.index')->with('message', 'Income deleted successfully');

    }
}
