import { FaRegCalendarAlt, FaRegChartBar, FaRegUser } from "react-icons/fa";
import { IoMdStopwatch } from "react-icons/io";
import { IoDocumentTextSharp } from "react-icons/io5";
import NotificationIndicator from "./ui/NotificationIndicator";

const HeaderNav = () => {
  return (
    <nav className="h-full">
      <ul className="h-full flex">
        <li className="flex h-full items-center gap-2 px-3 py-1 cursor-pointer rounded  bg-primary hover:bg-primary/90 text-white">
          <FaRegCalendarAlt size={15} color="#fff" />
          <p className="uppercase text-sm">Horaires</p>
          <NotificationIndicator active={true} amout={110} />
        </li>
        <li className="flex items-center gap-2 px-3 py-1 cursor-pointer hover:bg-gray-100">
          <IoMdStopwatch size={17} color="#06a753" />
          <p className="uppercase text-sm">Pointages</p>
        </li>
        <li className="flex items-center gap-2 px-3 py-1 cursor-pointer hover:bg-gray-100">
          <FaRegUser size={15} color="#06a753" />
          <p className="uppercase text-sm">Equipe</p>
          <NotificationIndicator active={false} amout={1} />
        </li>
        <li className="flex items-center gap-2 px-3 py-1 cursor-pointer hover:bg-gray-100">
          <FaRegChartBar size={15} color="#06a753" />
          <p className="uppercase text-sm">Rapports</p>
        </li>
        <li className="flex items-center gap-2 px-3 py-1 cursor-pointer hover:bg-gray-100">
          <IoDocumentTextSharp size={17} color="#06a753" />
          <p className="uppercase text-sm">Documents</p>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
