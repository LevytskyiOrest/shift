import Image from "next/image";
import { LuClock4, LuCirclePause } from "react-icons/lu";
import { MdEuroSymbol } from "react-icons/md";
import { ActionParams } from "@/types/scheduleTypes";
import { getWorkingHours } from "@/utils/getWorkingHours";
import { convertTime } from "@/utils/convertTime";
import ShiftStatusBadge from "../ui/ShiftStatusBadge";
import Checkbox from "../ui/Checkbox";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
type ShiftProps = {
  shift: ActionParams;
  index: number;
};

const Shift = ({ shift, index }: ShiftProps) => {
  const getStyles = () => {
    if (shift.status === "fermeture" || !shift.status) return "bg-gray-100";
    return "bg-shift-background";
  };

  const workinHours = getWorkingHours(shift.hours);
  const pause = convertTime(shift.hours.pause);

  const shiftStyes = getStyles();
  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable({
      id: shift.id,
      data: {
        actionId: shift.id,
        userId: shift.userId,
        date: shift.date,
        dragType: "action",
        index,
      },
    });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`${shiftStyes} rounded w-48 px-2.5 py-2`}
    >
      <div className="flex items-start justify-between mb-1">
        <h4 className="font-medium ">
          {shift.hours.start} - {shift.hours.end}
        </h4>
        <Checkbox />
      </div>
      <div className="flex gap-2 mb-2">
        <div className="flex gap-1 items-center">
          <LuClock4 size={14} className="text-gray-500" />
          <p className="text-xs font-medium text-gray-500">
            {convertTime(workinHours)}
          </p>
        </div>
        {pause && (
          <div className="flex gap-1 items-center">
            <LuCirclePause size={14} className="text-gray-500" />
            <p className="text-xs font-medium text-gray-500">{pause}</p>
          </div>
        )}

        <div className="flex gap-1 items-center">
          <Image
            src="/banknote.svg"
            alt="bucknote"
            className="w-4"
            width={16}
            height={8}
          />
          <p className="text-xs font-medium text-gray-500">{shift.payment}</p>
          <MdEuroSymbol size={14} className="text-gray-500" />
        </div>
      </div>
      <ShiftStatusBadge status={shift.status} />
    </div>
  );
};

export default Shift;
