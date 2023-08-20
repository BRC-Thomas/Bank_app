import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head, usePage} from "@inertiajs/react";
import {useForm} from '@inertiajs/react'


export default function Index({auth}) {

    const {data, setData, post, processing, errors} = useForm({
        amount: "",
        category_id: "",
        bank_account_id: "",
    })

    function submit(e) {
        e.preventDefault()
        post('/income')
    }


    return (
        <AuthenticatedLayout
            user={auth.user}

        >
            <Head title="Dashboard"/>

            <div className="py-6 sm:py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex justify-center">
                    <form onSubmit={submit} className="w-[80%] max-w-xl">
                        <div className="relative">
                            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                                Amount
                            </label>
                            <input
                                type="text"
                                value={data.amount}
                                onChange={e => setData('amount', e.target.value)}
                                placeholder="100"
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
                                
                                onChange={e => setData('category_id', e.target.value)}
                                className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                            />
                            {errors.category_id && <div>{errors.category_id}</div>}
                        </div>
                        <button
                            type="submit"

                            className="inline-block rounded bg-indigo-600 px-8 py-3 mt-6 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                        >
                            submit
                        </button>
                    </form>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
