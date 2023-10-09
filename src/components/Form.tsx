import React, { FunctionComponent, useState } from "react";
import Input from "./Input";

const Form: FunctionComponent = () => {
  const [showSmoke, setShowSmoke] = useState(false);

  const handleClick = () => {
    alert("Thắp hương thành công");
  };


  return (
    <div className="flex flex-col items-center w-full relative">
      <Input placeholder="MSSV" />
      <Input placeholder="Nội dung bạn muốn khấn" className="h-50px" />
      <button
        onClick={handleClick}
        className="w-[10rem] mt-2 p-4 bg-562a39 text-white border-none rounded-lg cursor-pointer uppercase font-bold"
      >
        Thắp Hương
      </button>
    </div>
  );
};

export default Form;
