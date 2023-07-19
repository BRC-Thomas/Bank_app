import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { FaBeer } from 'react-icons/fa';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-6 sm:py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">


                   <div className="block sm:grid sm:gap-2 md:grid-cols-11 md:grid-row-12 grid-cols-4 grid-rows-3 lg:grid-cols-4 lg:grid-rows-5 lg:gap-4 ">
                        <div className="bg-blue-200 mb-3 sm:my-0 sm:col-span-4 {/*sm:h-[150px]*/} md:col-start-2 md:col-span-3 lg:col-end-1">1</div>
                        <div className="bg-blue-200 my-3 sm:my-0 sm:col-span-2 {/*sm:h-[150px]*/} md:col-span-3 lg:col-start-2 lg:col-end-2">2</div>
                        <div className="bg-blue-200 my-3 sm:my-0 sm:col-span-2 {/*sm:h-[150px]*/} md:col-span-3 lg:col-start-3 lg:col-end-3">3</div>

                        <div className="bg-red-400 my-3 sm:my-0 {/*h-[400px]*/} col-span-full lg:row-span-full lg:col-start-4">4</div>

                        <div className="bg-green-400 my-3 sm:my-0 sm:col-span-2 md:col-span-full md:row-end-4         lg:row-start-2 lg:col-span-3">5</div>
                        <div className="bg-green-400 my-3 sm:my-0  sm:col-span-2  md:col-span-full lg:col-span-3 lg:row-start-4 lg:row-end-6      ">6</div>
                    </div>


                    {/* <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 mt-4 text-gray-900">DIV insideCOMPONENTS</div>
                    </div>*/}
                  {/*  <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mt-4">
                        <div className="p-6 mt-4 text-gray-900">DIV insideCOMPONENTS</div>
                    </div>*/}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
