"use client";
import { createContext, useContext, useState } from "react";
import { usersData } from "@/data/usersData";
import { ActionParams } from "@/types/scheduleTypes";
import { actionsData } from "@/data/actionsData";

type ProviderProps = {
  children: React.ReactNode;
};
type NewActionProps = {
  userId: string;
  date: string;
};
type ActionsContextParams = {
  actions: Record<string, Record<string, ActionParams[]>>;
  getActions: (userId: string, date: string) => ActionParams[];
  updateActions: (
    userId: string,
    date: string,
    actions: ActionParams[]
  ) => void;
  updateAction: (
    actionId: string,
    currentAction: NewActionProps,
    newActionData: NewActionProps
  ) => void;
  deleteAction: (userId: string, date: string, actionId: string) => void;
};

const ActionsContext = createContext<ActionsContextParams | null>(null);
export const useActions = () => {
  return useContext(ActionsContext) as ActionsContextParams;
};
const inithiateData = () => {
  const userIds = usersData.map((user) => user.id);
  const dates = [
    "2024-12-02",
    "2024-12-03",
    "2024-12-04",
    "2024-12-05",
    "2024-12-06",
    "2024-12-07",
    "2024-12-08",
  ];
  const result = userIds.reduce((acc, user) => {
    acc[user] = dates.reduce((dateAcc, date) => {
      dateAcc[date] = [];
      return dateAcc;
    }, {} as Record<string, ActionParams[]>);
    return acc;
  }, {} as Record<string, Record<string, ActionParams[]>>);

  actionsData.forEach((action) => {
    if (result[action.userId]) {
      result[action.userId][action.date].push(action);
    }
  });
  return result;
};

const ActionsProvider = ({ children }: ProviderProps) => {
  const initialData = inithiateData();
  const [actions, setActions] =
    useState<Record<string, Record<string, ActionParams[]>>>(initialData);
  const getActions = (userId: string, date: string) => {
    return actions[userId][date] ?? [];
  };
  const updateActions = (
    userId: string,
    date: string,
    actions: ActionParams[]
  ) => {
    setActions((p) => {
      return { ...p, [userId]: { ...p[userId], [date]: actions } };
    });
  };
  const updateAction = (
    actionId: string,
    currentAction: NewActionProps,
    newActionData: NewActionProps
  ) => {
    setActions((prevState) => {
      const updatedState = { ...prevState };
      const actionToUpdate = updatedState[currentAction.userId]?.[
        currentAction.date
      ]?.find((action) => action.id === actionId);

      if (!actionToUpdate) return updatedState;

      const updatedFromActions = updatedState[currentAction.userId]?.[
        currentAction.date
      ]?.filter((action) => action.id !== actionId);

      const updatedToActions = [
        ...(updatedState[newActionData.userId]?.[newActionData.date] || []),
        {
          ...{
            ...actionToUpdate,
            userId: newActionData.userId,
            date: newActionData.date,
          },
          id: `actions-${Date.now()}`,
        },
      ];

      updatedState[currentAction.userId] = {
        ...updatedState[currentAction.userId],
        [currentAction.date]: updatedFromActions,
      };

      updatedState[newActionData.userId] = {
        ...updatedState[newActionData.userId],
        [newActionData.date]: updatedToActions,
      };

      return updatedState;
    });
  };
  const deleteAction = (userId: string, date: string, actionId: string) => {
    setActions((prevState) => {
      const updatedState = { ...prevState };
      const updatedActions = updatedState[userId]?.[date]?.filter(
        (action) => action.id !== actionId
      );
      updatedState[userId] = {
        ...updatedState[userId],
        [date]: updatedActions,
      };
      return updatedState;
    });
  };
  return (
    <ActionsContext.Provider
      value={{ actions, getActions, updateActions, updateAction, deleteAction }}
    >
      {children}
    </ActionsContext.Provider>
  );
};

export default ActionsProvider;
