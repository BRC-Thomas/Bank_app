const PopUp = ({ type, show, setShow }) => {
    return (
        <aside
            className={`absolute top-2 right-0 z-50 flex items-center justify-center gap-4 rounded-lg bg-indigo-600 p-2 text-white whitespace-nowrap tracking-normal ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-500`}
        >
            {type === 'invoice' ? (
                <a href={route("income.index")} className="text-sm font-medium">
                    Add +
                </a>
            ) : type === 'income' ? (
                <a href={route("invoice.index")} className="text-sm font-medium">
                    Add +
                </a>
            ) :
                <a href='#'/*{route(`${type}.index`)}*/ className="text-sm font-medium">
                    Show +
                </a>
            }

            <button onClick={() => setShow(false)} className="rounded bg-white/20 p-1 hover:bg-white/10">
                <span className="sr-only">Close</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
        </aside>
    );
};

export default PopUp;
