import React, { FunctionComponent } from "react";
import Input from "./Input";

const Form: FunctionComponent = () => {
  const handleClick = () => {
    alert("do something");
  };

  return (
    <div className="flex flex-col items-center w-full">
      <Input placeholder="Mail" />
      <Input placeholder="Nội dung bạn muốn khấn" className="h-50px" />
      <button
        onClick={handleClick}
        className="w-[10rem] mt-6 p-4 bg-orange-600 text-white border-none rounded-lg cursor-pointer uppercase font-bold"
      >
        Thắp Hương
      </button>
    </div>
  );
};

export default Form;
