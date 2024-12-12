import { ActionParams } from "@/types/scheduleTypes";
import { convertTime } from "@/utils/convertTime";
import { getWorkingHours } from "@/utils/getWorkingHours";
import Image from "next/image";
import { LuClock4 } from "react-icons/lu";
import { MdEuroSymbol } from "react-icons/md";
import Checkbox from "../ui/Checkbox";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
type AbsenceProps = {
  absence: ActionParams;
  index: number;
};

const Absence = ({ absence, index }: AbsenceProps) => {
  const workinHours = getWorkingHours(absence.hours);
  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable({
      id: absence.id,
      data: {
        actionId: absence.id,
        userId: absence.userId,
        date: absence.date,
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
      className="bg-gray-200 rounded w-48 px-2.5 py-2 "
    >
      <div className="flex items-start justify-between mb-0.5">
        <div className="flex gap-0.5 items-center">
          <h4 className="font-semibold">{absence.absenceType}</h4>
          <div className="flex gap-2">
            <div className="flex gap-1 items-center">
              <LuClock4 size={14} className="text-gray-500" />
              <p className="text-xs font-medium text-gray-500">
                {convertTime(workinHours)}
              </p>
            </div>
            {absence.payment ? (
              <div className="flex gap-1 items-center">
                <Image
                  src="/banknote.svg"
                  alt="bucknote"
                  className="w-4"
                  width={16}
                  height={8}
                />
                <p className="text-xs font-medium text-gray-500">
                  {absence.payment}
                </p>
                <MdEuroSymbol size={14} className="text-gray-500" />
              </div>
            ) : null}
          </div>
        </div>
        <Checkbox />
      </div>
      <p className="text-sm font-medium text-left text-gray-500 mb-2 capitalize">
        {absence.absenseReason}
      </p>
      <p className="text-xs text-left font-medium text-gray-500">
        {absence.hours.start} - {absence.hours.end}
      </p>
    </div>
  );
};

export default Absence;
