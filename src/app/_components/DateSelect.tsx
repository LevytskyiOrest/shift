import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
const DateSelect = () => {
  return (
    <div className="w-fit flex items-center gap-2 h-8">
      <MdOutlineArrowBackIos />
      <div className=" h-full flex items-center gap-2 px-8 cursor-pointer  bg-gray-100 border border-gray-300 rounded shadow-sm">
        <p className="text-sm text-gray-500">2dec. - 8dec.</p>
      </div>
      <MdArrowForwardIos />
    </div>
  );
};
export default DateSelect;
