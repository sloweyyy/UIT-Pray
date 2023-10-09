import { FunctionComponent, useState } from "react";

const Input = (props: any) => {
  const [value, setValue] = useState("");

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <input
      onChange={handleChange}
      value={value}
      className="w-[10%] p-4 border-1 border-orange-500 border-solid rounded-lg mb-2"
      {...props}
    />
  );
};

export default Input;
