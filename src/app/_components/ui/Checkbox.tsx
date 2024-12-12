import { useState } from "react";
import { FaCheck } from "react-icons/fa";

type CheckboxProps = {
  size?: "small" | "standart";
};

const Checkbox = ({ size = "standart" }: CheckboxProps) => {
  const [checked, setChecked] = useState(false);

  const getStyles = () => {
    switch (size) {
      case "small":
        return { box: "size-4", icon: 10 };
      case "standart":
        return { box: "size-5", icon: 12 };
    }
  };
  const styles = getStyles();
  const toggleCheckbox = () => {
    setChecked((p) => !p);
  };
  return (
    <label
      className={`flex items-center justify-center bg-white rounded border border-gray-300 cursor-pointer ${styles.box}`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={toggleCheckbox}
        className="hidden"
      />
      {checked && <FaCheck size={styles.icon} className="text-gray-700" />}
    </label>
  );
};

export default Checkbox;
