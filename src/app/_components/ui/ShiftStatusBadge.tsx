import { ShiftStatusParams } from "@/types/scheduleTypes";

type BadgeProps = {
  status: ShiftStatusParams;
};

const ShiftStatusBadge = ({ status }: BadgeProps) => {
  if (!status) return null;
  const getStyles = () => {
    switch (status) {
      case "caisse":
        return "bg-status-green";
      case "fermeture":
        return "bg-status-red text-white";
      case "camion":
        return "bg-status-blue";
      case "ouverture":
        return "bg-status-yellow";
    }
  };
  const style = getStyles();

  return (
    <div
      className={`${style} capitalize rounded-md text-left font-medium text-xs px-2 py-0.5`}
    >
      {status}
    </div>
  );
};

export default ShiftStatusBadge;
