"use client";
import { cn } from "@/utils/cn";
import { useState } from "react";

type SwitchProps = {
  className?: string;
};

const Switch = ({ className }: SwitchProps) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className={cn(
        "w-[28px] h-[16px] bg-gray-800 rounded-full p-0.5 cursor-pointer flex items-center",
        className
      )}
      onClick={() => setActive((p) => !p)}
    >
      <div
        className={`h-full aspect-square bg-white rounded-full transition-all duration-100 ${
          active ? "translate-x-full" : "translate-x-0"
        } `}
      ></div>
    </div>
  );
};

export default Switch;
