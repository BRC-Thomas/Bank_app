import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head, usePage} from "@inertiajs/react";
import { useState } from 'react'
import { useForm } from '@inertiajs/react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Create({ auth }) {

    const { data, setData, post, processing, errors } = useForm({
        amount: "",
        category_id: "",
        bank_account_id: "",
        created_at : Date.now()
    })

    function submit(e) {
        e.preventDefault()
        post('/invoice/')
    }
    const [startDate, setStartDate] = useState(data.created_at);
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

                        <DatePicker selected={startDate} onChange={date => {
                            setStartDate(date);
                            setData('created_at', date); // Update created_at in the form data
                        }} />
                        {errors.created_at && <div>{errors.created_at}</div>}

                        <button type="submit" disabled={processing}>submit</button>
                    </form>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
