const timeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

type GetWorkingHoursProps = {
  start: string;
  end: string;
  pause: string;
};

export const getWorkingHours = ({
  start,
  end,
  pause,
}: GetWorkingHoursProps): string => {
  const startMinutes = timeToMinutes(start);
  const endMinutes = timeToMinutes(end);
  const pauseMinutes = !pause ? 0 : timeToMinutes(pause);

  let workingMinutes;
  if (endMinutes < startMinutes) {
    workingMinutes = 1440 - startMinutes + endMinutes - pauseMinutes;
  } else {
    workingMinutes = endMinutes - startMinutes - pauseMinutes;
  }

  const hours = Math.floor(workingMinutes / 60);
  const minutes = workingMinutes % 60;

  return `${hours}:${minutes}`;
};
