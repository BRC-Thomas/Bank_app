import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head, usePage} from "@inertiajs/react";
import { useState } from 'react'
import { useForm } from '@inertiajs/react'


export default function Index({ auth }) {

    const { data, setData, post, processing, errors } = useForm({
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
            <Head title="Dashboard" />


            <div className="py-6 sm:py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <form onSubmit={submit}>
                        <label htmlFor="amount">amount</label>
                        <input type="text" value={data.amount} onChange={e => setData('amount', e.target.value)} />
                        {errors.amount && <div>{errors.amount}</div>}
                        {/*<label htmlFor="category_id">category_id</label>
                        <input type="text" value={data.category_id} onChange={e => setData('category_id', e.target.value)} />
                        {errors.category_id && <div>{errors.category_id}</div>}*/}
                        <button type="submit" disabled={processing}>submit</button>
                    </form>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
