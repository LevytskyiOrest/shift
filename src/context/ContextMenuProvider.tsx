"use client";
import { SelectedItemParams } from "@/types/selectedItemType";
import { createContext, useContext, useState } from "react";

type ProviderProps = {
  children: React.ReactNode;
};
type ContextMenuParams = {
  isVisible: boolean;
  position: { x: number; y: number };
  selectedItem: null | SelectedItemParams;
  modal: boolean;
  setModal: (value: boolean) => void;
  showContextMenu: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    actionData: SelectedItemParams
  ) => void;
  hideContextMenu: () => void;
};

const ContextMenuContext = createContext<ContextMenuParams | null>(null);
export const useContextMenu = () => {
  return useContext(ContextMenuContext) as ContextMenuParams;
};

const ContextMenuProvider = ({ children }: ProviderProps) => {
  const [isVisible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [selectedItem, setSelectedItem] = useState<null | SelectedItemParams>(
    null
  );
  const [modal, setModal] = useState(false);
  const showContextMenu = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    actionData: SelectedItemParams
  ) => {
    e.preventDefault();
    const { scrollLeft, scrollTop } = document.body;
    const positionX = e.clientX + scrollLeft;
    const positionY = e.clientY + scrollTop;
    setPosition({ x: positionX, y: positionY });
    setVisible(true);
    setSelectedItem(actionData);
  };
  const hideContextMenu = () => {
    setVisible(false);
    setPosition({ x: 0, y: 0 });
  };
  return (
    <ContextMenuContext.Provider
      value={{
        isVisible,
        position,
        selectedItem,
        modal,
        setModal,
        hideContextMenu,
        showContextMenu,
      }}
    >
      {children}
    </ContextMenuContext.Provider>
  );
};

export default ContextMenuProvider;
