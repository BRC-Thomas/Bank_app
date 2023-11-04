import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Subtitle from "@/Components/Card/Subtitle.jsx";
import Title from "@/Components/Card/Title.jsx";
import { useEffect, useState } from "react";

export default function Chart({ monthlySaves, selectedPeriod }) {
    const [filteredData, setFilteredData] = useState([]);

    const data = [
        {
            name: 'Jan',
            $total: monthlySaves.month1,
        },
        {
            name: 'Feb',
            $total: monthlySaves.month2,
        },
        {
            name: 'Mar',
            $total: monthlySaves.month3,
        },
        {
            name: 'Apr',
            $total: monthlySaves.month4,
        },
        {
            name: 'May',
            $total: monthlySaves.month5,
        },
        {
            name: 'Jun',
            $total: monthlySaves.month6,
        },
        {
            name: 'Jul',
            $total: monthlySaves.month7,
        },
        {
            name: 'Aug',
            $total: monthlySaves.month8,
        },
        {
            name: 'Sep',
            $total: monthlySaves.month9,
        },
        {
            name: 'Oct',
            $total: monthlySaves.month10,
        },
        {
            name: 'Nov',
            $total: monthlySaves.month11,
        },
        {
            name: 'Dec',
            $total: monthlySaves.month12,
        }
    ];

    useEffect(() => {
        //lastMonth  thisYear lastSixMonths
        if(selectedPeriod === 'lastSixMonths'){
            const currentMonth = new Date().getMonth();

            const startMonthIndex = currentMonth - 5 >= 0 ? currentMonth - 5 : 12 + (currentMonth - 5);

            const filteredData = data.slice(startMonthIndex, currentMonth + 1);
            setFilteredData(filteredData);
        } else if (selectedPeriod === 'lastMonth'){
            const currentMonth = new Date().getMonth();

            const startMonthIndex = currentMonth - 1 >= 0 ? currentMonth - 1 : 12 + (currentMonth - 1);

            const filteredData = data.slice(startMonthIndex, currentMonth + 1);
            setFilteredData(filteredData);
        } else {
            setFilteredData(data);
        }
    }, [selectedPeriod]);


    const getFullMonthName = (month) => {
        switch (month) {
            case "Jan":
                return "January";
            case "Feb":
                return "February";
            case "Mar":
                return "March";
            case "Apr":
                return "April";
            case "May":
                return "May";
            case "Jun":
                return "June";
            case "Jul":
                return "July";
            case "Aug":
                return "August";
            case "Sep":
                return "September";
            case "Oct":
                return "October";
            case "Nov":
                return "November";
            case "Dec":
                return "December";
            default:
                return month;
        }
    };

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const fullMonthName = getFullMonthName(label);
            return (
                <div className="custom-tooltip bg-slate-50 p-2 rounded">
                    <Subtitle subtitle={fullMonthName} />
                    <Title title={`Total: $${payload[0].value}`} />
                </div>
            );
        }

        return null;
    }

    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <AreaChart
                    width='100%'
                    height={250}
                    data={filteredData}
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient id="color$total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" className={'text-[12px] opacity-60'} />
                    <YAxis className={'text-[12px] opacity-60'} />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                        type="monotone"
                        dataKey="$total"
                        stroke="#8884d8"
                        fillOpacity={1}
                        fill="url(#color$total)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
