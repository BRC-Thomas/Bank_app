import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head, Link, usePage} from "@inertiajs/react";
import {format} from 'date-fns';
import {useEffect, useState} from "react";
import { FiEdit, FiTrash } from "react-icons/fi";

export default function Index({auth, incomes, totalInvoices}) {
    const { flash } = usePage().props
    const [showFlash, setShowFlash] = useState(false);

    const hideFlash = () => {
        setShowFlash(false);
    }

    useEffect(() => {
        if(flash.message){
            setShowFlash(true);

            setTimeout(hideFlash, 3000);
        }
    },[flash.message])


    return (
        <AuthenticatedLayout
            user={auth.user}

        >
            <Head title="Dashboard"/>


            <div className="py-6 sm:py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className='flex justify-end mb-2'>
                        <Link href="/income/create"
                              className='inline-block rounded border border-indigo-600 bg-indigo-600 px-10 py-2.5 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500'>Add +</Link>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm rounded">
                            <thead className="text-left">
                            <tr>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Amount
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Date
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Action
                                </th>
                            </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200">


                            {incomes.map(income => (
                                <tr className="odd:bg-gray-50">
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        {income.amount} $
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                        {format(new Date(income.created_at), 'MMMM d yyyy')}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                        <div className="flex ">
                                            <Link href={`income/${income.id}/edit`}>
                                                <FiEdit className={'mr-4 '}/>
                                            </Link>
                                            <FiTrash />
                                        </div>

                                    </td>
                                </tr>
                            ))}


                            </tbody>
                        </table>
                    </div>
                    <div>
                        {showFlash && flash.message && (
                            <div className='w-fit absolute top-4 right-0'>
                                <div id="alert-additional-content-3"
                                     className="p-4 mb-4 text-green-800 border border-green-300 rounded-lg bg-green-50"
                                     role="alert">
                                    <div className="flex items-center">
                                        <svg className="flex-shrink-0 w-4 h-4 mr-2" aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                                        </svg>
                                        <span className="sr-only">Info</span>
                                        <h2 className="text-lg font-medium">income created successfully.</h2>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
