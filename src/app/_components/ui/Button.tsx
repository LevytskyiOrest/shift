import { cn } from "@/utils/cn";

type ButtonProps = {
  className?: string;
  mode: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
};
const Button = ({ className, mode, children }: ButtonProps) => {
  const getSyle = () => {
    switch (mode) {
      case "primary":
        return "bg-secondary text-white hover:bg-secondary-120";
      case "secondary":
        return "bg-gray-200 text-gray-800 hover:bg-gray-300";
      case "ghost":
        return "bg-transparent text-gray-800 hover:bg-gray-100";
      default:
        return "bg-secondary text-white";
    }
  };
  const styles = getSyle();
  return (
    <button
      className={cn(
        `${styles} w-fit h-8 flex items-center justify-center px-6 py-1 rounded-md text-sm font-medium transition-colors duration-100`,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
