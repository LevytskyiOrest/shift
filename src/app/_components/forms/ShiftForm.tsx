import { usersData } from "@/data/usersData";
import Checkbox from "../ui/Checkbox";
import Input from "../ui/Input";
import Select from "../ui/Select";
import { useContextMenu } from "@/context/ContextMenuProvider";
import { getUserById } from "@/utils/getUserById";
import { getActionById } from "@/utils/getActionById";

const ShiftForm = () => {
  const { selectedItem } = useContextMenu();
  const currentUser = getUserById(selectedItem?.userId || "");
  const currentAction = getActionById(selectedItem?.actionId || "");
  console.log(currentAction);
  return (
    <form className="flex flex-col gap-4">
      <label>
        <p className="text-sm font-medium mb-2">Section</p>
        <Select
          className="h-9 rounded-sm border"
          placeholder="Choisir une section"
          options={["option1", "option2"]}
        />
      </label>
      <label>
        <p className="text-sm font-medium mb-2">Utilisateur</p>
        <Select
          defaultValue={currentUser?.name}
          className="h-9 rounded-sm border"
          options={usersData.map((item) => item.name)}
        />
      </label>
      <label>
        <p className="text-sm font-medium mb-2">Competences</p>
        <Input placeholder="Selectionnez une ou plusieurs competences" />
      </label>
      <label>
        <p className="text-sm font-medium mb-2">Attributs</p>
        <Input placeholder="Selectionnez une ou plusieurs attributs" />
      </label>
      <div className="flex gap-3">
        <label>
          <p className="text-sm font-medium mb-2 before:content-['*'] before:mr-0.5 before:text-red-500">
            Debut
          </p>
          <Input className="w-24" defaultValue={currentAction?.hours.start} />
        </label>
        <label>
          <p className="text-sm font-medium mb-2 before:content-['*'] before:mr-0.5 before:text-red-500">
            Fin
          </p>
          <Input className="w-24" defaultValue={currentAction?.hours.end} />
        </label>
        <label>
          <p className="text-sm font-medium mb-2">Raccourcis</p>
          <Select
            className="w-44 h-9 rounded-sm border"
            placeholder="Raccourcis"
            options={["option1", "option2"]}
          />
        </label>
      </div>
      <div className="flex gap-3">
        <label>
          <p className="text-sm font-medium mb-2">Pause payee</p>
          <Input className="w-36" />
        </label>
        <label>
          <p className="text-sm font-medium mb-2">Pause non payee</p>
          <Input
            className="w-36"
            defaultValue={currentAction?.hours.pause || ""}
          />
        </label>
      </div>
      <label>
        <p className="text-sm font-medium mb-2">Code special RH</p>
        <Select
          className="h-9 rounded-sm border"
          placeholder="Choisir une section"
          options={["option1", "option2"]}
        />
      </label>
      <label className="flex gap-2 items-center mt-4">
        <Checkbox size="small" />
        <p className="text-sm font-medium">
          Shift non comptabilise dans les heures prestees
        </p>
      </label>
    </form>
  );
};

export default ShiftForm;
