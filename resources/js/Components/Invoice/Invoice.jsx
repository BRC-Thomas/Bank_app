import Title from "@/Components/Card/Title.jsx";

export default function Invoice({recentInvoice}) {
    return (
        <div className="relative overflow-x-auto bg-white rounded-lg sm:-mt-10 lg:mt-0">
            <div className='flex justify-between items-center px-4 py-2'>
                <Title title='Recent Invoice' className=''/>
                <div>
                   {/* <button>downlonad</button>
                    <button>view report</button>*/}
                    {/* TODO BUTTON*/}
                </div>
            </div>
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase ">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Recipent
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                        No
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Amount
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Status
                    </th>
                </tr>
                </thead>
                <tbody className='[&>*:nth-child(even)]:bg-slate-100/80'>
                {recentInvoice.data.map((item)=> {
                    const date = "2023-09-12T17:34:21.000000Z";
                    const dateObj = new Date(item.created_at);
                    const options = {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                    };
                    const formattedDate = dateObj.toLocaleString('fr-FR', options);
                    return (
                        <>
                            <tr className="bg-white border-b">
                                <th scope="row"
                                    className="flex align-baseline px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    <img src="/images/icons8-mastercard-48.png" alt="mastercard logo" className='w-5 mr-2'/>MasterCard
                                </th>
                                <td className="px-6 py-4">
                                    {formattedDate}
                                </td>
                                <td className="px-6 py-4">
                                    INV{item.id}
                                </td>
                                <td className="px-6 py-4">
                                    ${item.amount}
                                </td>
                                <td className="px-6 py-4 text-center text-green-500">
                                    <p className='bg-green-200/40 rounded py-1'>
                                        Success
                                    </p>
                                </td>
                            </tr>
                    </>
                    )
                })}
                            {/*TODO PAGINATION A FAIRE*/}
                {/*
                    <tr className="bg-white border-b">
                            <th scope="row"
                                className="flex align-baseline px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                <img src="/images/icons8-mastercard-48.png" alt="mastercard logo" className='w-5 mr-2'/>MasterCard
                            </th>
                            <td className="px-6 py-4">
                                Thu 26 Jan
                            </td>
                            <td className="px-6 py-4">
                                A2330
                            </td>
                            <td className="px-6 py-4">
                                $688.80
                            </td>
                            <td className="px-6 py-4 text-center text-green-500">
                                <p className='bg-green-200/40 rounded py-1'>
                                    Success
                                </p>
                            </td>
                        </tr>
                        <tr className="bg-white border-b">
                            <th scope="row"
                                className="flex align-baseline px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                <img src="/images/icons8-mastercard-48.png" alt="mastercard logo" className='w-5 mr-2'/>MasterCard
                            </th>
                            <td className="px-6 py-4">
                                Mon 23 Jan
                            </td>
                            <td className="px-6 py-4">
                                A2329
                            </td>
                            <td className="px-6 py-4">
                                $36.50
                            </td>
                            <td className="px-6 py-4 text-center text-green-500">
                                <p className='bg-green-200/40 rounded py-1'>
                                    Success
                                </p>
                            </td>
                        </tr>
                */}
                </tbody>
            </table>
          {/*  <ol className="flex justify-center gap-1 text-xs font-medium my-4">
                <li>
                    <a
                        href="#"
                        className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                    >
                        <span className="sr-only">Prev Page</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </li>

                <li>
                    <a
                        href="#"
                        className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                    >
                        1
                    </a>
                </li>

                <li
                    className="block h-8 w-8 rounded border-indigo-600 bg-indigo-600/90 text-center leading-8 text-white"
                >
                    2
                </li>

                <li>
                    <a
                        href="#"
                        className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                    >
                        3
                    </a>
                </li>

                <li>
                    <a
                        href="#"
                        className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                    >
                        4
                    </a>
                </li>

                <li>
                    <a
                        href="#"
                        className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                    >
                        <span className="sr-only">Next Page</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </li>
            </ol>*/}
        </div>

    )
}

