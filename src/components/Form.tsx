import React, { FunctionComponent } from "react";
import Input from "./Input";

const Form: FunctionComponent = () => {
  const handleClick = () => {
    alert("Không học thì khấn cũng không được đâu nha!");
  };

  return (
    <div className="flex flex-col items-center w-full">
      <Input placeholder="MSSV" />
      <Input placeholder="Nội dung bạn muốn khấn" className="h-50px" />
      <button
        onClick={handleClick}
        className="w-[10rem] mt-6 p-4 bg-562a39 text-white border-none rounded-lg cursor-pointer uppercase font-bold"
      >
        Thắp Hương
      </button>
    </div>
  );
};

export default Form;
