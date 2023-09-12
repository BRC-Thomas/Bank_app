import Chart from "@/Components/Chart/Chart.jsx";
import Title from "@/Components/Card/Title.jsx";
import Subtitle from "@/Components/Card/Subtitle.jsx";

export default function ChartFullComponent({jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec}){

    return (
        <section className='bg-white p-4 px-6 sm:-mt-36 lg:-mt-10  rounded-lg'>
            <div className='flex justify-between items-center'>
                <Title title='Analitics Report' className='mb-4' />
                <div className='flex gap-4'>
                    <button className='bg-slate-200 p-1 rounded'><Subtitle subtitle='1 Month' className='text-[12px] hover:text-indigo-800'/></button>
                    <button className='bg-slate-200 p-1 rounded'><Subtitle subtitle='6 Month' className='text-[12px] hover:text-indigo-800'/></button>
                    <button className='bg-slate-200 p-1 rounded'><Subtitle subtitle='Custom Range' className='text-[12px] text-indigo-500 hover:text-indigo-800'/></button>
                </div>
            </div>
            <Chart jan={jan} feb={feb} mar={mar} apr={apr} may={may} jun={jun} jul={jul} aug={aug} sep={sep} oct={oct} nov={nov} dec={dec}/>
        </section>
    )
}