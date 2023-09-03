import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';
import Card from '../Components/Card/Card';
import CreditCard from '../Components/CreditCard/CreditCard';
import Title from '../Components/Card/Title.jsx';
import CreditCardInfo from '../Components/CreditCard/CreditCardContent.jsx';
import Dot from '../Components/Card/Dot.jsx';
import './Dashboard.css'
import ChartFullComponent from "@/Components/Chart/ChartFullComponent.jsx";
import Invoice from "@/Components/Invoice/Invoice.jsx";

export default function Dashboard({auth, totalInvoices, avgInvoices, totalIncomes,saves, thisMonthSave, thisMonthIncome, thisMonthInvoice, totalBalance, variationIncome, variationInvoice, variationSave}) {
    console.log(variationIncome)
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard"/>

            <div className="py-6 sm:py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                    <div
                        className="px-2 block sm:grid grid-cols-3 grid-rows-3 gap-2 sm:px-4 sm:grid-cols-12 md:grid-cols-11 md:grid-row-12 lg:grid-cols-9 lg:grid-rows-5 lg:gap-2 ">

                        <div className="sm:col-span-4 md:col-start-2 md:col-span-3 lg:col-start-1 lg:col-span-2 ">
                            <Card
                                title={'Monthly Income'}
                                subtitle={'Last month'}
                                variationIncome={variationIncome}
                                user={auth.user}
                                thisMonthIncome={thisMonthIncome}
                                type={'income'}/>
                        </div>
                        <div
                            className="my-2 sm:my-0 sm:col-span-4 md:col-start-5 md:col-span-3 log:col-start-3 lg:col-span-2">
                            <Card
                                title={'Invoice'}
                                subtitle={'Last month'}
                                variationInvoice={variationInvoice}
                                user={auth.user}
                                thisMonthInvoice={thisMonthInvoice}
                                avgInvoices={avgInvoices}
                                type={'invoice'}/>
                        </div>
                        <div
                            className="my-2 sm:my-0 sm:col-span-4 md:col-start-8 md:col-span-3 log:col-start-5 lg:col-span-2">
                            <Card
                                title={'Monthly Save'}
                                subtitle={'Last month'}
                                variationSave={variationSave}
                                thisMonthSave={thisMonthSave}
                                type={'save'}/>
                        </div>


                        <div
                            className="hidden lg:block my-3 sm:my-0 col-span-full lg:row-span-full lg:col-start-7 ml-2">
                            <div
                                className=" flex-col max-w-[80vw] mx-auto items-end justify-between rounded-lg border border-gray-100 bg-white px-4 py-2 relative sm:max-w-full">
                                <div className={'flex justify-between items-center align-baseline px-4'}>
                                    <Title title={'Your card'}/>
                                    <Dot />
                                </div>
                                <CreditCard/>
                                <CreditCardInfo type={'other'} totalBalance={totalBalance} />
                            </div>
                        </div>

                        <div
                            className="my-3 sm:my-0 sm:col-span-full md:col-span-full md:row-end-3 lg:row-span-2 lg:col-end-7 w-full">
                            <ChartFullComponent/>
                        </div>
                        <div
                            className="my-3 sm:my-0  sm:col-span-full  md:col-span-full lg:row-span-2 lg:col-end-7">
                            <Invoice />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
