import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import Subtitle from "@/Components/Card/Subtitle.jsx";
import Title from "@/Components/Card/Title.jsx";

export default function Chart() {
    const data = [
        {
            name: 'Jan',
            $total: 300,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Feb',
            $total: 2000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Mar',
            $total: 2590,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Apr',
            $total: 1100,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'May',
            $total: 800,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Jun',
            $total: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Jul',
            $total: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Aug',
            $total: 6000,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Sep',
            $total: 7500,
            pv: 4300,
            amt: 2100,
        },
    ];

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
            default:
                return month;
        }
    };

    const CustomTooltip = ({active, payload, label}) => {
        if (active && payload && payload.length) {
            const fullMonthName = getFullMonthName(label);
            return (
                <div className="custom-tooltip bg-slate-50 p-2 rounded">
                    <Subtitle subtitle={fullMonthName}/>
                    <Title title={`Total: $${payload[0].value}`}/>
                </div>
            );
        }

        return null;
    }
    return (

        <div style={{width: '100%', height: 300}}>
            <ResponsiveContainer>
                <AreaChart
                    width='100%'
                    height={250}
                    data={data}
                    margin={{top: 0, right: 0, left: 0, bottom: 0}}
                >
                    <defs>
                        <linearGradient id="color$total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" className={'text-[12px] opacity-60'}/>
                    <YAxis className={'text-[12px] opacity-60'}/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip content={<CustomTooltip/>}/>
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