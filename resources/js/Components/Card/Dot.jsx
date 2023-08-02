import PopUp from "@/Components/Card/PopUp.jsx";
import {useState} from "react";

export default function Dot({className, type}){
    const [show, setShow] = useState(false);

    return (
        <>
            <span
                onClick={() => setShow(!show)}
                className={` text-xl font-bold tracking-widest text-slate-400 cursor-pointer ${className} z-50`}>...</span>

            {type === 'invoice' ? (
                <PopUp type={type} show={show} setShow={setShow}/>
            ) : (type === 'income' ? (
                <PopUp type={type} show={show} setShow={setShow}/>
            ) : ''
            )}
        </>
    )
}