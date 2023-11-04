import Chart from "@/Components/Chart/Chart.jsx";
import Title from "@/Components/Card/Title.jsx";
import Subtitle from "@/Components/Card/Subtitle.jsx";
import { useState } from "react";

export default function ChartFullComponent({ monthlySaves }) {
    const [selectedPeriod, setSelectedPeriod] = useState("thisYear");

    const handlePeriodChange = (period) => {
        setSelectedPeriod(period);
    };

    return (
        <section className="bg-white p-4 px-6 sm:-mt-36 lg:-mt-10  rounded-lg">
            <div className="flex justify-between items-center">
                <Title title="Analytics Report" className="mb-4" />
                <div className="flex gap-4">
                    <button
                        onClick={() => handlePeriodChange("lastMonth")}
                        className={`p-1 rounded ${
                            selectedPeriod === "lastMonth"
                                ? "bg-indigo-500/50"
                                : "bg-slate-200"
                        }`}
                    >
                        <Subtitle
                            subtitle="1 Month"
                            className={`text-[12px] text-indigo-500 ${
                                selectedPeriod === "lastMonth"
                                    ? "hover:text-slate-600"
                                    : "hover:text-indigo-800"
                            }`}
                        />
                    </button>
                    <button
                        onClick={() => handlePeriodChange("lastSixMonths")}
                        className={`p-1 rounded ${
                            selectedPeriod === "lastSixMonths"
                                ? "bg-indigo-500/50"
                                : "bg-slate-200"
                        }`}
                    >
                        <Subtitle
                            subtitle="6 Months"
                            className={`text-[12px] text-indigo-500 ${
                                selectedPeriod === "lastSixMonths"
                                    ? "hover:text-slate-600"
                                    : "hover:text-indigo-800"
                            }`}
                        />
                    </button>
                    <button
                        onClick={() => handlePeriodChange("thisYear")}
                        className={`p-1 rounded ${
                            selectedPeriod === "thisYear"
                                ? "bg-indigo-500/50"
                                : "bg-slate-200"
                        }`}
                    >
                        <Subtitle
                            subtitle="This Year"
                            className={`text-[12px] text-indigo-500 ${
                                selectedPeriod === "thisYear"
                                    ? "hover:text-slate-600"
                                    : "hover:text-indigo-800"
                            }`}
                        />
                    </button>
                </div>
            </div>
            <Chart
                monthlySaves={monthlySaves}
                selectedPeriod={selectedPeriod}
            />
        </section>
    );
}
