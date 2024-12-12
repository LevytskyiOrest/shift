"use client";
import { cn } from "@/utils/cn";
import { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

type SelectProps = {
  placeholder?: string;
  options: string[];
  className?: string;
  defaultValue?: string;
};

const Select = ({
  defaultValue = "",
  options,
  placeholder = "Select",
  className,
}: SelectProps) => {
  const selectRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<null | string>(defaultValue);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative w-full" ref={selectRef}>
      <div
        className={cn(
          "relative w-full h-8 bg-gray-100 py-1 pl-3 rounded-md  flex items-center cursor-pointer pr-6 text-sm",
          className
        )}
        onClick={() => setOpen(!open)}
      >
        {!value ? (
          <p className="text-gray-400">{placeholder}</p>
        ) : (
          <p className="text-gray-800 font-medium capitalize">{value}</p>
        )}

        <IoMdArrowDropdown
          size={18}
          className={`absolute right-1.5 text-gray-800 ${
            open ? "-scale-100" : "scale-100"
          }`}
        />
      </div>
      {open && (
        <div className="absolute z-50 mt-2 bg-gray-100 w-full p-1 rounded border border-gray-200 shadow-sm">
          <ul className="divide-y">
            {options.map((option, index) => (
              <li
                key={index}
                className={`text-sm px-2 py-1 cursor-pointer hover:bg-gray-200 rounded-sm capitalize ${
                  value === option ? "bg-gray-200" : ""
                }`}
                onClick={() => {
                  setValue(option);
                  setOpen(false);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Select;
