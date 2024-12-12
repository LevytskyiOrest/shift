type IndicatiorProps = {
  active: boolean;
  amout: number;
};

const NotificationIndicator = ({ active, amout }: IndicatiorProps) => {
  return (
    <div
      className={`rounded-xl px-2 py-0.5 flex-1 text-xs min-w-6 flex justify-center ${
        active ? "bg-white text-primary" : "bg-primary text-white"
      }`}
    >
      {amout >= 100 ? "99+" : amout}
    </div>
  );
};

export default NotificationIndicator;
