import { ScheduleParams } from "./scheduleTypes";

export type UserParams = {
  id: string;
  name: string;
  role: string;
  hours: number;
  schedule: ScheduleParams[];
};
