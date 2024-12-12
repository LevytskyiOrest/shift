export const convertTime = (time: string | null): string => {
  if (!time) return "";
  const [hours, minutes] = time.split(":").map(Number);
  let hoursString = "";
  if (hours > 0) hoursString = `${hours}h`;
  if (minutes > 0) hoursString += `${minutes}`;
  if (hours === 0) hoursString += "m";
  return hoursString;
};
