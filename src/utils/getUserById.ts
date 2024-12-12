import { usersData } from "@/data/usersData";

export const getUserById = (id: string) => {
  return usersData.find((user) => user.id === id);
};
