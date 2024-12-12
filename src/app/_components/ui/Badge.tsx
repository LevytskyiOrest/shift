import { cn } from "@/utils/cn";

type BadgeProps = {
  className?: string;
  children: React.ReactNode;
};
const Badge = ({ className, children }: BadgeProps) => {
  return (
    <div
      className={cn(
        "bg-terra w-fit flex items-center gap-0.5 font-normal px-1.5 py-1 rounded-sm text-xs text-white",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Badge;
