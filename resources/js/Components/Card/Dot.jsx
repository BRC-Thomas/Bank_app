import PopUp from "@/Components/Card/PopUp.jsx";
import {useState, useEffect} from "react";

export default function Dot({className, type}){
    const [show, setShow] = useState(false);

    function handleClick() {
        setShow(!show);
    }

    useEffect(() => {
        const intervalID = setInterval(() => {
            setShow(false)
        }, 2000)

        return () => clearInterval(intervalID);
    },[show])

    return (
        <>
            <span
                onClick={() => handleClick()}
                className={`relative text-xl font-bold tracking-widest text-slate-400 cursor-pointer ${className} z-50`}>
                ...

                {type === 'invoice' ? (
                    <PopUp type={type} show={show} setShow={setShow}/>
                ) : (type === 'income' ? (
                    <PopUp type={type} show={show} setShow={setShow}/>
                ) : <PopUp type={type} show={show} setShow={setShow}/>
                )}
            </span>
        </>
    )
}