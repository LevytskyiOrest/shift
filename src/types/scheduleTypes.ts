export type ShiftStatusParams =
  | "caisse"
  | "fermeture"
  | "camion"
  | "ouverture"
  | null;

export type ShiftTypeParams = "shift" | "absence";

export type AbsenceTypeParams = "C" | "RCR" | "MA";

export type AbsenceReasonParams = "conge" | "recuperation" | "maladie";

export type ScheduleParams = {
  id: string;
  date: string;
  calendar: ActionParams[];
};
export type ActionParams = {
  id: string;
  hours: {
    start: string;
    end: string;
    pause: string;
  };
  payment: number;
  status: ShiftStatusParams;
  date: string;
  type: ShiftTypeParams;
  absenceType?: AbsenceTypeParams;
  absenseReason?: AbsenceReasonParams;
  userId: string;
};
