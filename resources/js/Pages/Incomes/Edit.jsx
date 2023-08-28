import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head} from "@inertiajs/react";
import { useForm } from '@inertiajs/react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useState} from "react";


export default function Edit({ auth, income, categories }) {

    const initialDate = new Date(income.created_at);
    const [startDate, setStartDate] = useState(initialDate);

    const { data, setData, put, processing, errors } = useForm({
        amount: income.amount,
        category_id: income.category_id,
        created_at : new Date()
    })

    function submit(e) {
        e.preventDefault()
        put(route('income.update', { income: income.id }), data)
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
                            <label htmlFor="amount"  className="block text-sm font-medium text-gray-700">amount</label>
                            <input
                                type="text"
                                value={data.amount}
                                onChange={e => setData('amount', e.target.value)}
                                className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                            />
                            <div className="absolute top-14.5 left-0 text-red-500">{errors.amount}</div>
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
                        </div>
                        <button type="submit" className="inline-block rounded bg-indigo-600 px-8 py-3 mt-6 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                        >Edit</button>
                    </form>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
