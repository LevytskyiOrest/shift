import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import HeaderNav from "./HeaderNav";
import ProfileNav from "./ProfileNav";

const Header = () => {
  return (
    <header className="px-6 py-3 h-14 flex gap-3 justify-between bg-white shadow-md">
      <div className="flex gap-3">
        <h2 className="font-extrabold text-2xl mx-6">shyft</h2>
        <div className="flex items-center bg-gray-100 border border-gray-300 px-2 rounded gap-1.5">
          <p className=" text-gray-500">Toutes les sections</p>
          <MdOutlineKeyboardArrowDown size={18} color="#9CA3AF" />
        </div>
        <HeaderNav />
      </div>
      <ProfileNav />
    </header>
  );
};

export default Header;
