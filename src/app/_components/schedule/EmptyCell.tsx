import React from "react";
import { useDroppable } from "@dnd-kit/core";

const EmptyCell = ({
  id,
  userId,
  date,
}: {
  id: string;
  userId: string;
  date: string;
}) => {
  const { setNodeRef } = useDroppable({ id, data: { userId, date } });

  return <div ref={setNodeRef} className="w-full inset-0 absolute"></div>;
};

export default EmptyCell;
