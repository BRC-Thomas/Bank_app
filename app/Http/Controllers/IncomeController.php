<?php

namespace App\Http\Controllers;

use App\Models\Category;
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
        $incomes = Income::with('category')
            ->where('bank_account_id', $user->bankAccount->id)
            ->get();
        $totalIncomes = Income::where('bank_account_id', $user->bankAccount->id)->get()->sum('amount');
        return Inertia::render('Incomes/Index', ['incomes' => $incomes,'totalIncomes' => $totalIncomes]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::where('type', 'income')->get();
        return Inertia::render('Incomes/Create', ['categories' => $categories]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = auth()->user();

        $data = $request->validate([
            'amount' => ['required', 'numeric'],
            'category_id' => ['nullable', 'exists:categories,id'],
        ]);

        if (empty($data['category_id'])) {
            $otherCategory = Category::where('type', 'income')->where('title', 'other')->first();
            if ($otherCategory) {
                $data['category_id'] = $otherCategory->id;
            }
        }

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
        $categories = Category::where('type', 'income')->get();
        return Inertia::render('Incomes/Edit', ['income' => $income, 'categories' => $categories]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Income $income)
    {
        $data = $request->validate([
            'amount' => ['required', 'numeric'],
            'category_id' => ['nullable', 'exists:categories,id'],
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
