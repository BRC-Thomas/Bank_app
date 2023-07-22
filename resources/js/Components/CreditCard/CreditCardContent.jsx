import Subtitle from "./../Card//Subtitle.jsx";
import Title from "./../Card/Title.jsx"
import {HiDownload, HiUpload} from 'react-icons/hi'
import Dot from "@/Components/Card/Dot.jsx";
import CreditCardGoal from "@/Components/CreditCard/CreditCardGoal.jsx";

export default function CreditCradInfo() {
    return (
        <>
            {/*Header card info*/}
            <section className='pt-3 px-4'>
                <div className='flex justify-between'>
                    <div>
                        <Title title='Total Balance'/>
                        <p className='flex items-baseline text-2xl font-bold'>$10.321 <Subtitle subtitle='USD' className='ml-1 font-medium'/>
                        </p>
                    </div>
                    <div className='flex justify-between w-1/2 gap-2'>
                        <div
                            className='w-full flex flex-col  items-center justify-center text-center bg-slate-100  rounded-xl transition-transform transform hover:scale-105 '>
                            <HiDownload fill='gray' className='mx-auto'/>
                            <Subtitle subtitle='Deposit' className=' text-[12px] text-slate-400 cursor-pointer'/>

                        </div>
                        <div
                            className='w-full flex flex-col items-center justify-center text-center bg-slate-100 rounded-xl transition-transform transform hover:scale-105'>
                            <HiUpload fill='gray' className='mx-auto'/>
                            <Subtitle subtitle='Withdraw' className=' text-[12px] text-slate-400 cursor-pointer'/>
                        </div>
                    </div>
                </div>
            </section>
            {/* Body card info*/}
            <section className='px-4'>
                <div className='m-2'>
                    <div className="flex justify-between items-baseline">
                        <Title title='Total Goals'/>
                        <Dot/>
                    </div>
                    <div className='justify-between [&>*:nth-child(even)]:bg-slate-100/80'>
                        <CreditCardGoal title={'StartUp Plan'} date={'Thu 26 Jan'} stats={[6,3,1,8,1]}/>
                        <CreditCardGoal title={'Wedding'} date={'Sun 22 Dec'} stats={[5,6,8,9,3]}/>
                        <CreditCardGoal title={'South Korea'} date={'Mon 18 Nov'} stats={[10,1,4,1,5]}/>
                    </div>
                </div>
            </section>
        </>
    )
}