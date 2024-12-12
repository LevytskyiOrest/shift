import { actionsData } from "@/data/actionsData";

export const getActionById = (id: string) => {
  return actionsData.find((action) => action.id === id);
};
