import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head, usePage} from "@inertiajs/react";
import { useState } from 'react'
import { useForm } from '@inertiajs/react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Create({ auth, categories }) {
    const [startDate, setStartDate] = useState(new Date());
    const { data, setData, post, processing, errors } = useForm({
        amount: "",
        category_id: "",
        bank_account_id: "",
        created_at : new Date()
    })

    function submit(e) {
        e.preventDefault()
        post('/invoice/')
    }
    return (
        <AuthenticatedLayout
            user={auth.user}

        >
            <Head title="Dashboard" />


            <div className="py-6 sm:py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex justify-center">
                    <form onSubmit={submit} className="w-[80%] max-w-xl">
                        <div className="relative mt-4">
                            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
                            <input
                                type="text"
                                value={data.amount}
                                placeholder="100"
                                onChange={e => setData('amount', e.target.value)}
                                className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                            />
                            {errors.amount &&
                                <div className="absolute top-14.5 left-0 text-red-500">{errors.amount}</div>}
                        </div>
                        <div className="relative mt-4">
                            <label htmlFor="category_id" className="block text-sm font-medium text-gray-700">
                                Category
                            </label>
                            <select
                                name="category_id"
                                value={data.category_id}
                                onChange={e => setData('category_id', e.target.value)}
                                className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                            >
                                <option value="">Select a category</option>
                                {categories.map(category => (
                                    <option key={category.id} value={category.id}>
                                        {category.title}
                                    </option>
                                ))}
                            </select>
                            {errors.category_id &&
                                <div className="absolute top-14.5 left-0 text-red-500">{errors.category_id}</div>}
                        </div>
                        <div className="flex justify-between mt-4">
                            <DatePicker
                                className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                selected={startDate}
                                onChange={date => {
                                    setData('created_at', date);
                                    setStartDate(date);
                                }}
                            />
                            {errors.created_at &&
                                <div className="absolute top-14.5 left-0 text-red-500">{errors.created_at}</div>
                            }
                            <button
                                type="submit"
                                className="inline-block rounded bg-indigo-600 px-8 py-3 mt-6 ml-4 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                            >
                                submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
