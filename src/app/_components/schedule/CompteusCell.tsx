import { MdEuroSymbol } from "react-icons/md";
import Badge from "../ui/Badge";
import ScheduleContextMenu from "./ScheduleContextMenu";

const CompteusCell = () => {
  return (
    <td className="align-top p-2">
      <div className="flex flex-wrap gap-1 justify-end">
        <Badge className="py-0 h-5 font-medium rounded gap-0">
          <p>76.5h-920</p>
          <MdEuroSymbol size={12} color="#fff" />
        </Badge>
        <Badge className="py-0 h-5 font-medium bg-gray-200 text-red-500 rounded">
          +38.5h
        </Badge>
        <Badge className="py-0 h-5 bg-gray-200 text-black font-medium rounded">
          38h/s
        </Badge>
        <Badge className="py-0 h-5 bg-status-green/40 text-red-500 font-medium rounded">
          X:-204.1h
        </Badge>
        <Badge className="py-0 h-5 bg-status-green rounded font-medium">
          312.6h
        </Badge>
        <Badge className="py-0 h-5 bg-status-green rounded font-medium">
          D:9j
        </Badge>
      </div>
      <ScheduleContextMenu />
    </td>
  );
};

export default CompteusCell;
