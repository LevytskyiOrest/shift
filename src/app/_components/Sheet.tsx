"use client";
import { IoCloseOutline } from "react-icons/io5";
import Tabs from "./ui/Tabs";
import { useEffect, useState } from "react";
import ShiftForm from "./forms/ShiftForm";
import AbsenceForm from "./forms/AbsenceForm";

type SheetProps = {
  open: boolean;
  changeHandler: (value: boolean) => void;
};

const Sheet = ({ open, changeHandler }: SheetProps) => {
  const [isVisible, setVisible] = useState(open);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setVisible(true);
    } else {
      const timer = setTimeout(() => {
        setVisible(false);
        document.body.style.overflow = "unset";
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [open]);

  if (!isVisible) return null;
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      changeHandler(false);
    }
  };
  return (
    <div
      className="fixed indent-0 top-0 left-0 bg-black/50 z-[100] h-full w-full flex justify-end"
      onClick={handleBackdropClick}
      aria-hidden={!open}
    >
      <div
        className={`h-dvh w-[30%] bg-white flex flex-col transform transition-transform duration-300 ${
          open ? "animate-slideIn" : "animate-slideOut"
        }`}
      >
        <div className="h-14 w-full border-b flex items-center gap-3 px-6 ">
          <button
            className="cursror-pointer"
            onClick={() => changeHandler(false)}
            aria-label="Close"
          >
            <IoCloseOutline size={24} className="text-gray-500" />
          </button>
          <h2 className="text-2xl font-medium text-gray-700">
            Creation d&apos;un shift
          </h2>
        </div>
        <div className="flex-1 h-full p-6 overflow-auto">
          <Tabs header={["Shift", "Absence"]}>
            <ShiftForm />
            <AbsenceForm />
          </Tabs>
        </div>
        <div className="p-6 shadow-sheet-footer">
          <ul className="ml-10 mb-4">
            <li className="list-disc text-sm font-medium">
              Depassement des heures hebdomadaires maximales de 38h. (+34 h.)
            </li>
          </ul>
          <div className="flex gap-2">
            <button
              className="bg-[#FF4D50] w-1/2 h-10 rounded text-white font-medium"
              onClick={() => changeHandler(false)}
            >
              Annuler
            </button>
            <button className="bg-[#00A653] w-1/2 h-10 rounded text-white font-medium">
              Creer shift
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sheet;
