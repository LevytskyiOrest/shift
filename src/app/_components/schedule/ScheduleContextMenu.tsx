"use client";
import { useActions } from "@/context/ActionsProvider";
import { useContextMenu } from "@/context/ContextMenuProvider";
import { useEffect, useRef } from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdCancel } from "react-icons/md";

const ScheduleContextMenu = () => {
  const menuRef = useRef<null | HTMLDivElement>(null);
  const { isVisible, position, selectedItem, setModal, hideContextMenu } =
    useContextMenu();
  const { deleteAction } = useActions();

  const hideHandler = (e: MouseEvent) => {
    if (!menuRef.current?.contains(e.target as Node)) {
      hideContextMenu();
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener("scroll", hideContextMenu);
      document.addEventListener("click", (e) => hideHandler(e));
    }
    return () => {
      document.removeEventListener("scroll", hideContextMenu);
      document.addEventListener("click", (e) => hideHandler(e));
    };
  }, []);

  if (!isVisible) return null;
  return (
    <div ref={menuRef}>
      <ul
        className="fixed z-50 bg-white shadow w-44 py-2"
        style={{ top: position.y + 2, left: position.x + 2 }}
      >
        <li
          className="flex justify-start items-center gap-1.5 px-4 py-1 hover:bg-gray-100 cursor-pointer"
          onClick={() => setModal(true)}
        >
          <AiFillEdit size={14} />
          <p className="text-sm font-medium">Éditer</p>
        </li>
        <li
          className="flex justify-start items-center gap-1.5 px-4 py-1 hover:bg-gray-100 cursor-pointer"
          onClick={() =>
            selectedItem &&
            deleteAction(
              selectedItem?.userId,
              selectedItem?.date,
              selectedItem?.actionId
            )
          }
        >
          <MdCancel size={14} className="text-terra" />
          <p className="text-sm text-terra font-medium">Supprimer</p>
        </li>
      </ul>
    </div>
  );
};

export default ScheduleContextMenu;
