import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head, router, usePage} from "@inertiajs/react";
import { useForm } from '@inertiajs/react'
import {useState, useEffect} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function Edit({ auth, invoice, categories }) {
    const { flash } = usePage().props
    const [showFlash, setShowFlash] = useState(false);
    const initialDate = new Date(invoice.created_at);
    const [startDate, setStartDate] = useState(initialDate);

    const { data, setData, put, processing, errors } = useForm({
        amount: invoice.amount,
        category_id: invoice.category_id,
        created_at : new Date()
    })

    function submit(e) {
        e.preventDefault()
        put(route('invoice.update', { invoice: invoice.id }), data)
    }


    const hideFlash = () => {
        setShowFlash(false);
    }

    useEffect(() => {
        if(flash.message){
            setShowFlash(true);

            setTimeout(hideFlash, 3000);
        }
    },[flash.message])


    function handleEdit(id) {
        router.visit(`invoice/${id}/edit`)
    }

    function handleDelete(id) {
        router.delete(`invoice/${id}`)
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
                            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">amount</label>
                            <input
                                type="text"
                                value={data.amount}
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
                                Edit
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
