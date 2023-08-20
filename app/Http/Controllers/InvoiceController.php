<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Invoice;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Inertia\Inertia;

class InvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();
        $invoices = Invoice::with('category')
            ->where('bank_account_id', $user->bankAccount->id)
            ->get();
        $totalInvoices = Invoice::where('bank_account_id', $user->bankAccount->id)->get()->sum('amount');
        return Inertia::render('Invoices/Index', ['invoices' => $invoices,'totalInvoices' => $totalInvoices]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::where('type', 'invoice')->get();
        return Inertia::render('Invoices/Create', ['categories' => $categories]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
       $user = $request->user();

       $data = $request->validate([
            'amount' => ['required', 'numeric'],
            'category_id' => ['nullable', 'exists:categories,id'],
            'created_at' => ['required']
        ]);

        if (empty($data['category_id'])) {
            $otherCategory = Category::where('type', 'invoice')->where('title', 'other')->first();
            if ($otherCategory) {
                $data['category_id'] = $otherCategory->id;
            }
        }

        $data['bank_account_id'] = $user->bankAccount->id;
        $data['created_at'] = Carbon::parse($data['created_at']);
        Invoice::create($data);

        return redirect()->route('invoice.index')->with('message','Invoice Created Successfully');

    }

    /**
     * Display the specified resource.
     */
    public function show(Invoice $invoice)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Invoice $invoice)
    {
        $categories = Category::where('type', 'invoice')->get();
        return Inertia::render('Invoices/Edit', ['invoice' => $invoice,'categories' => $categories]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Invoice $invoice)
    {
        $data = $request->validate([
            'amount' => ['required', 'numeric'],
            'created_at' => ['required']
        ]);

        $invoice->update($data);

        return redirect()->route('invoice.index')->with('message', 'Invoice updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Invoice $invoice)
    {
        $invoice->delete();

        return redirect()->route('invoice.index')->with('message', 'Invoice deleted successfully');

    }
}
