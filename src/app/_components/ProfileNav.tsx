import Image from "next/image";
import { FaLock } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { RiSettings5Fill } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const ProfileNav = () => {
  return (
    <div className="h-full flex items-center gap-3">
      <IoSearchSharp className="cursor-pointer" size={20} color="#9CA3AF" />
      <IoIosNotifications
        className="cursor-pointer"
        size={20}
        color="#9CA3AF"
      />
      <p className="text-sm cursor-pointer font-medium">Aide</p>
      <p className="text-sm cursor-pointer font-medium">Young & Free</p>
      <div className="h-full flex items-center px-1.5 gap-1 hover:bg-gray-100 rounded">
        <Image src="/profile.png" alt="avatar" width={26} height={26} />
        <MdOutlineKeyboardArrowDown size={18} color="#9CA3AF" />
      </div>
      <FaLock className="cursor-pointer" size={16} color="#9CA3AF" />
      <RiSettings5Fill className="cursor-pointer" size={20} color="#9CA3AF" />
    </div>
  );
};

export default ProfileNav;
