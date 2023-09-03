const Variation = ({type, variationIncome, variationInvoice, variationSave}) => {
    const getSvgColor = (type, variation, variationIncome, variationInvoice) => {
        if (type === 'save') {
            return variation >= 0 ? '#14532d' : '#7f1d1d';
        } else if (type === 'invoice') {
            return variationInvoice >= 0 ? '#14532d' : '#7f1d1d';
        } else if (type === 'income') {
            return variationIncome >= 0 ? '#14532d' : '#7f1d1d';
        }
        return '';
    }

    const getSvgClasses = (variationSave, variationIncome, variationInvoice) => {
        if (variationSave || variationIncome || variationInvoice < 0) {
            return 'rotate-[60deg]';
        }
        return '';
    }

    const color = getSvgColor(type, variationSave, variationIncome, variationInvoice);
    const rotation = getSvgClasses(variationSave, variationIncome, variationInvoice);

    return (
            <>
            <span className="text-xs  font-medium">
                {type === 'save' ? `${variationSave}` : (type === 'invoice' ? `${variationInvoice}` : variationIncome)}%
            </span>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 ml-0.5 ${rotation}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke={color}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
            </svg>
        </>
    )
}

export default Variation;
