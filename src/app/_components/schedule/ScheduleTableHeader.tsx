import { MdEuroSymbol } from "react-icons/md";
import Badge from "../ui/Badge";
import { HiOutlineUser } from "react-icons/hi";
import { FaInfoCircle } from "react-icons/fa";
import Switch from "../ui/Switch";

const ScheduleTableHeader = () => {
  const week = [
    "Lun 02",
    "Mar 03",
    "Mer 04",
    "Jeu 05",
    "Ven 06",
    "Sam 07",
    "Dim 08",
  ];
  const secondRow = [2, 2, 0, 2, 3, 1, 1];
  return (
    <thead className="w-full ">
      <tr className="w-full">
        <th
          scope="col"
          className="h-[52px] w-[1%] whitespace-nowrap p-2 bg-gray-100 border "
        >
          <input
            className="w-52 h-full rounded border border-gray-300 bg-transparent font-normal px-3"
            placeholder="Rechercher"
          />
        </th>
        {week.map((item, index) => (
          <th
            key={index}
            scope="col"
            className=" h-[52px] min-w-52 w-52 bg-gray-100 border "
          >
            <div className="h-full flex justify-center items-center font-semibold ">
              {item}
            </div>
          </th>
        ))}
        <th scope="col" className="min-w-44 w-52 max-w-52"></th>
      </tr>
      <tr className="w-full divide-x border-y border-gray-300">
        <th scope="col" className="bg-[#F2FFF8]">
          <div className="h-10 flex items-center gap-2 p-2">
            <p className="font-medium text-sm">Shifts disponibles</p>
            <Switch className="bg-gray-500 w-[32px] h-[18px]" />
          </div>
        </th>
        {secondRow.map((item, index) => (
          <th scope="col" key={index} align="center" className="bg-[#F2FFF8]">
            {item ? (
              <p className="font-normal text-sm bg-gray-300 w-fit min-w-7 px-2.5 rounded">
                {item}
              </p>
            ) : null}
          </th>
        ))}

        <th scope="col"></th>
      </tr>
      <tr className="h-10 w-full divide-x">
        <th scope="col" className="bg-[#fed097] px-2">
          <div className="flex items-center">
            <Badge>296h45/120h</Badge>
            <Badge className="bg-gray-600/35 gap-0 ml-2 mr-1">
              <p>3.145</p>
              <MdEuroSymbol size={12} color="#fff" />
            </Badge>
            <FaInfoCircle size={12} />
          </div>
        </th>
        <th scope="col" align="center" className="bg-[#fed097]">
          <div className="flex items-center justify-center">
            <Badge>52h30/24h</Badge>
            <Badge className="bg-gray-600/35 gap-0 ml-2 mr-1">
              <p>530</p>
              <MdEuroSymbol size={12} color="#fff" />
            </Badge>
            <div className="flex items-center gap-0.5">
              <HiOutlineUser size={15} className="text-gray-700" />
              <p className="text-xs font-medium text-gray-700">6/6</p>
            </div>
          </div>
        </th>
        <th scope="col" align="center" className="bg-[#fed097]">
          <div className="flex items-center justify-center">
            <Badge>30h15/24h</Badge>
            <Badge className="bg-gray-600/35 gap-0 ml-2 mr-1">
              <p>98</p>
              <MdEuroSymbol size={12} color="#fff" />
            </Badge>
            <div className="flex items-center gap-0.5">
              <HiOutlineUser size={15} className="text-gray-700" />
              <p className="text-xs font-medium text-gray-700">3/6</p>
            </div>
          </div>
        </th>
        <th scope="col" align="center" className="bg-[#fed097]">
          <div className="flex items-center justify-center">
            <Badge className="bg-[#6b779e]">35h10/24h</Badge>
            <Badge className="bg-gray-600/35 gap-0 ml-2 mr-1">
              <p>465</p>
              <MdEuroSymbol size={12} color="#fff" />
            </Badge>
            <div className="flex items-center gap-0.5">
              <HiOutlineUser size={15} className="text-gray-700" />
              <p className="text-xs font-medium text-gray-700">3</p>
            </div>
          </div>
        </th>
        <th scope="col" align="center" className="bg-[#fed097]">
          <div className="flex items-center justify-center">
            <Badge>48h10/24h</Badge>
            <Badge className="bg-gray-600/35 gap-0 ml-2 mr-1">
              <p>624</p>
              <MdEuroSymbol size={12} color="#fff" />
            </Badge>
            <div className="flex items-center gap-0.5">
              <HiOutlineUser size={15} className="text-gray-700" />
              <p className="text-xs font-medium text-gray-700">4</p>
            </div>
          </div>
        </th>
        <th scope="col" align="center" className="bg-[#fed097]">
          <div className="flex items-center justify-center">
            <Badge>50h10/24h</Badge>
            <Badge className="bg-gray-600/35 gap-0 ml-2 mr-1">
              <p>373</p>
              <MdEuroSymbol size={12} color="#fff" />
            </Badge>
            <div className="flex items-center gap-0.5">
              <HiOutlineUser size={15} className="text-gray-700" />
              <p className="text-xs font-medium text-gray-700">5</p>
            </div>
          </div>
        </th>
        <th scope="col" align="center" className="bg-[#fed097]">
          <div className="flex items-center justify-center">
            <Badge className="bg-gray-600/35">44h</Badge>
            <Badge className="bg-gray-600/35 gap-0 ml-2 mr-1">
              <p>515</p>
              <MdEuroSymbol size={12} color="#fff" />
            </Badge>
            <div className="flex items-center gap-0.5">
              <HiOutlineUser size={15} className="text-gray-700" />
              <p className="text-xs font-medium text-gray-700">4</p>
            </div>
          </div>
        </th>
        <th scope="col" align="center" className="bg-[#fed097]">
          <div className="flex items-center justify-center">
            <Badge className="bg-gray-600/35">36h10</Badge>
            <Badge className="bg-gray-600/35 gap-0 ml-2 mr-1">
              <p>540</p>
              <MdEuroSymbol size={12} color="#fff" />
            </Badge>
            <div className="flex items-center gap-0.5">
              <HiOutlineUser size={15} className="text-gray-700" />
              <p className="text-xs font-medium text-gray-700">3</p>
            </div>
          </div>
        </th>
        <th scope="col" className="bg-gray-300">
          <p className="font-semibold">Compteus</p>
        </th>
      </tr>
    </thead>
  );
};

export default ScheduleTableHeader;
