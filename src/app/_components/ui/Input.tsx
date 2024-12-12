import { cn } from "@/utils/cn";
import { InputHTMLAttributes } from "react";

const Input = ({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={cn(
        "w-full h-9 px-3 py-1 border bg-gray-100 rounded text-sm",
        className
      )}
      {...props}
    />
  );
};

export default Input;
