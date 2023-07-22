export default function CreditCard() {

    return (
        <>
            {/*Credit card before header*/}
            <div
                className="relative w-90 h-50 m-auto rounded-xl text-white transition-transform transform hover:scale-105 z-10">
                <img className="object-cover w-full h-full " src="/images/applePay.png" alt="card"/>

                <div className="w-full px-8 absolute bottom-5">
                    <div className="pt-3 pr-6">
                        <div className="">
                            <p className="font-medium text-md font-mono tracking-[-1px]">
                                03/25
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className="font-thin tracking-[-1.8px] font-mono">
                            **** **** **** <strong>4642</strong>
                        </p>
                    </div>
                </div>
                <div className={'absolute -bottom-0.5 left-8 rounded-b-xl w-3/4 h-24 bg-slate-500/20 -z-10 '}></div>
            </div>
        </>
    )
}