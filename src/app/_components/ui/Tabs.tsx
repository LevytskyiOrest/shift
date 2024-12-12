"use client";
import { useState } from "react";
type TabsProps = {
  header: string[];
  children: React.ReactNode;
};

const Tabs = ({ header, children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <div className="w-full shadow flex rounded-sm overflow-hidden border">
        {header.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`w-full h-10 flex items-center justify-center font-medium transition-colors duration-100 ${
              activeTab === index
                ? "bg-gray-300 text-gray-800"
                : "bg-white text-gray-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-2">
        {Array.isArray(children) ? children[activeTab] : children}
      </div>
    </div>
  );
};

export default Tabs;
