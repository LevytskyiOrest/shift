import { useActions } from "@/context/ActionsProvider";
import { DragOverEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useCallback } from "react";

export const useDrag = () => {
  const { getActions, updateActions, updateAction } = useActions();

  const onDragOver = useCallback(
    (event: DragOverEvent) => {
      const { active, over } = event;

      if (!over || !active) return;

      const fromData = active.data.current;
      const toData = over.data.current;
      if (!fromData || !toData) return;

      if (fromData.dragType === "action" && toData.dragType === "action") {
        if (
          fromData.userId !== toData.userId ||
          fromData.date !== toData.date
        ) {
          updateAction(
            fromData.actionId,
            { userId: fromData.userId, date: fromData.date },
            { userId: toData.userId, date: toData.date }
          );
          return;
        }
        const currentActions = getActions(fromData.userId, fromData.date);

        const modifiedActions = arrayMove(
          currentActions,
          fromData.index,
          toData.index
        );

        updateActions(fromData.userId, fromData.date, modifiedActions);
        return;
      }

      if (fromData.userId === toData.userId && fromData.date === toData.date)
        return;

      updateAction(
        fromData.actionId,
        { userId: fromData.userId, date: fromData.date },
        { userId: toData.userId, date: toData.date }
      );
    },
    [getActions, updateActions, updateAction]
  );

  return { onDragOver };
};
