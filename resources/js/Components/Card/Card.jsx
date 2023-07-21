import Dot from './Dot.jsx'
import Title from "./Title.jsx";
import Subtitle from "@/Components/Card/Subtitle.jsx";
export default function Card({title, subtitle}){

    return (
        <>
        <article
            className="relatvie flex-col max-w-[80vw] mx-auto items-end justify-between rounded-lg border border-gray-100 bg-white p-4 relative sm:max-w-full"
        >
            <div className='flex justify-between items-center'>
                <Title title={title}/>
                <Dot />
            </div>

            <div>
                <p className="text-2xl font-bold text-gray-900 tracking-tight">$240.94</p>
            </div>

            <div className='flex justify-between items-center'>
                <p><Subtitle  subtitle={subtitle} /></p>

                <div className='flex bg-emerald-100/75 p-1 rounded'>
                    <span className="text-xs text-green-600 font-medium"> 67%  </span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#16a34a"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                    </svg>
                </div>
            </div>
        </article>
        </>
    )
}