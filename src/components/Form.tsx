import React, { FunctionComponent } from "react";
import Input from "./Input";

const Form: FunctionComponent = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <Input placeholder="Mail" />
      <Input placeholder="Nội dung bạn muốn khấn" />
    </div>
  );
};

export default Form;
