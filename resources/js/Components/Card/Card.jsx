import Dot from './Dot.jsx'
import Title from "./Title.jsx";
import Subtitle from "@/Components/Card/Subtitle.jsx";
import { Link } from '@inertiajs/react'
import Variation from "../svg/Variation.jsx";
export default function Card({title, subtitle, user, type,  totalInvoices, incomes, saves,thisMonthSave, thisMonthIncome, thisMonthInvoice, variationIncome, variationInvoice, variationSave}){
    const getBackgroundColor = (type, variationSave, variationIncome, variationInvoice) => {
        if (type === 'save') {
            return `bg-${variationSave >= 0 ? 'green' : 'red'}-600`;
        } else if (type === 'invoice') {
            return `bg-${variationInvoice >= 0 ? 'red' : 'green'}-600`;
        } else if (type === 'income') {
            return `bg-${variationIncome >= 0 ? 'green' : 'red'}-600`;
        }
        return '';
    };

    return (
        <>
        <section className="relatvie flex-col max-w-[80vw] mx-auto items-end justify-between rounded-lg border border-gray-100 bg-white p-4 relative sm:max-w-full">
            <div className='flex justify-between items-center'>
                <Title title={title}/>
                <Dot type={type} />
            </div>

            <div>
                <Link href={`${type}`}>
                    <p className="text-2xl font-bold text-gray-900 tracking-tight">
                        {type === 'save' ? `${thisMonthSave}` : (type === 'invoice' ? `${thisMonthInvoice}` : thisMonthIncome)} $
                    </p>
                </Link>
            </div>

            <div className='flex justify-between items-center'>
                <p><Subtitle  subtitle={subtitle} /></p>
                <div className={`flex items-center justify-center py-1 px-1.5 rounded bg-opacity-80 ${getBackgroundColor(type, variationSave, variationIncome, variationInvoice)}`}>
                    <Variation type={type} variationIncome={variationIncome} variationInvoice={variationInvoice} variationSave={variationSave}/>
                </div>

            </div>
        </section>
        </>
    )
}
