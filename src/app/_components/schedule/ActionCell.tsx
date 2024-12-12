import { ActionParams } from "@/types/scheduleTypes";
import EmptyCell from "./EmptyCell";
import Shift from "./Shift";
import Absence from "./Absence";
import { useContextMenu } from "@/context/ContextMenuProvider";

type CellProps = {
  actions: ActionParams[];
  userId: string;
  date: string;
};
const ActionCell = ({ actions, userId, date }: CellProps) => {
  const { showContextMenu } = useContextMenu();
  return (
    <td
      id={`${userId}-${date}`}
      className="border py-2 space-y-1.5 align-top h-full relative"
      align="center"
    >
      {actions.length > 0 ? (
        actions.map((action, index) => (
          <div
            key={action.id}
            onContextMenu={(e) => {
              showContextMenu(e, {
                userId: action.userId,
                actionId: action.id,
                date: action.date,
              });
            }}
          >
            {action.type == "shift" ? (
              <Shift key={action.id} shift={action} index={index} />
            ) : (
              <Absence key={action.id} absence={action} index={index} />
            )}
          </div>
        ))
      ) : (
        <EmptyCell id={`${userId}-${date}`} userId={userId} date={date} />
      )}
    </td>
  );
};

export default ActionCell;
