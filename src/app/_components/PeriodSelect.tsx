"use client";
import { useState } from "react";

const PeriodSelect = () => {
  const [currentPeriod, setCurrentPeriod] = useState("jour");

  const periods = [
    { label: "Jour", value: "jour" },
    { label: "OPS", value: "ops" },
    { label: "Semaine", value: "semaine" },
    { label: "Mois", value: "mois" },
  ];

  return (
    <div className="w-fit h-8 flex border border-gray-200 rounded divide-x overflow-hidden">
      {periods.map((period) => (
        <button
          key={period.value}
          onClick={() => setCurrentPeriod(period.value)}
          className={`px-3 h-full p-1.5 text-sm font-medium ${
            currentPeriod === period.value
              ? "bg-gray-200 text-gray-800 "
              : "bg-transparent text-gray-400"
          }`}
        >
          {period.label}
        </button>
      ))}
    </div>
  );
};
export default PeriodSelect;
