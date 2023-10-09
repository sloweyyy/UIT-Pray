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
      {...props}
      //Dung xoa dau cach o className
      className={
        "w-[15rem] p-4 border-1 border-gray-700 border-solid rounded-lg mb-2 " +
        props.className
      }
    />
  );
};

export default Input;
