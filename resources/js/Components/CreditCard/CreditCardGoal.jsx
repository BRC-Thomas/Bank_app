import Subtitle from "./../Card/Subtitle.jsx";
import { FaArrowRight } from 'react-icons/fa'
import Title from "./../Card/Title.jsx";
import Stats from './Stats.jsx';

export default function CreditCardGoal({title, date, stats}){

    return (
        <>
            <article className='flex'>
                <div  className='flex items-center w-full py-2'>
                    <div className='w-full '>
                        <Title title={title} className='text-black text-md'/>
                        <Subtitle subtitle={date} className='text-[12px] ' />
                    </div>
                   <div className= 'w-1/2'>
                    <Stats stats={stats}/>
                   </div>
                </div>

                <div className=' w-1/6 flex justify-center items-center'>
                    <div className='bg-indigo-600/40 rounded-full p-1 '>
                <FaArrowRight fill={'#4f46e5'} size={'10'}/>
                    </div>
                </div>
            </article>
        </>
    )
}