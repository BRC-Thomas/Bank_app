import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head} from "@inertiajs/react";
import { useForm } from '@inertiajs/react'


export default function Edit({ auth, income }) {

    const { data, setData, put, processing, errors } = useForm({
        amount: income.amount,
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
