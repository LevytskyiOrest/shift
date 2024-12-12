"use client";
import { useContextMenu } from "@/context/ContextMenuProvider";
import ScheduleTableHeader from "./ScheduleTableHeader";
import Sheet from "../Sheet";
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import { SortableContext } from "@dnd-kit/sortable";
import UserCell from "./UserCell";
import ActionCell from "./ActionCell";
import CompteusCell from "./CompteusCell";
import { useClient } from "@/hooks/useClient";
import { useActions } from "@/context/ActionsProvider";
import { useDrag } from "@/hooks/useDrag";

const ScheduleTable = () => {
  const { modal, setModal } = useContextMenu();
  const isClient = useClient();
  const { actions } = useActions();
  const { onDragOver } = useDrag();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  return (
    <div>
      {isClient && (
        <DndContext sensors={sensors} onDragOver={onDragOver}>
          <table className="w-full border-collapse">
            <ScheduleTableHeader />
            <tbody>
              {Object.entries(actions).map(([user, dates]) => (
                <tr key={user}>
                  <UserCell userId={user} />
                  {Object.entries(dates).map(([date, actions]) => (
                    <SortableContext
                      key={`${user}-${date}`}
                      items={actions?.map((a) => a.id)}
                    >
                      <ActionCell actions={actions} userId={user} date={date} />
                    </SortableContext>
                  ))}
                  <CompteusCell />
                </tr>
              ))}
            </tbody>
          </table>
        </DndContext>
      )}
      <Sheet open={modal} changeHandler={setModal} />
    </div>
  );
};

export default ScheduleTable;
