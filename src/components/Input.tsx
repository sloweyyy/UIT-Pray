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
      // Đừng xóa dấu cách ở className và thay đổi màu border thành #dba76e
      className={`w-[15rem] p-4 border-1 border-solid rounded-lg mb-2 border-dba76e ${
        props.className || ""
      }`}
    />
  );
};

export default Input;
