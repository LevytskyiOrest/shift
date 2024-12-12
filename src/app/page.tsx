import PeriodSelect from "./_components/PeriodSelect";
import Switch from "./_components/ui/Switch";
import DateSelect from "./_components/DateSelect";
import Button from "./_components/ui/Button";
import { FaRegChartBar } from "react-icons/fa";
import Select from "./_components/ui/Select";
import { MdOutlineRocketLaunch } from "react-icons/md";
import ContextMenuProvider from "@/context/ContextMenuProvider";
import ScheduleTable from "./_components/schedule/ScheduleTable";

export default function Home() {
  return (
    <main className="font-geist-sans h-full flex-1 flex flex-col bg-white rounded pt-6 shadow overflow-hidden">
      <div className="flex items-center justify-between mb-10 px-3">
        <div className="flex items-center gap-3">
          <PeriodSelect />
          <div className="size-8 rounded border border-gray-200 flex items-center justify-center">
            <Switch className="w-4 h-[9px] p-[1px]" />
          </div>
          <p className="text-sm font-medium">s49(1)</p>
        </div>
        <DateSelect />

        <div className="flex items-center gap-3">
          <Button mode="ghost" className="px-1 size-8">
            <FaRegChartBar size={18} className="text-gray-600" />
          </Button>
          <div className="w-24">
            <Select options={["plus", "minus"]} defaultValue="plus" />
          </div>

          <Button mode="primary" className="px-1 size-8">
            <MdOutlineRocketLaunch size={18} color="#fff" />
          </Button>

          <Button mode="primary" className="px-10">
            Generer PDF
          </Button>
        </div>
      </div>
      <ContextMenuProvider>
        <div className="w-full overflow-auto">
          <ScheduleTable />
        </div>
      </ContextMenuProvider>
    </main>
  );
}
