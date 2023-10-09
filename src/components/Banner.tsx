import React, { FunctionComponent } from "react";

const Banner: FunctionComponent = () => {
  return (
    <div className="my-4 max-h-[30%] overflow-hidden">
      <img
        className="h-auto max-w-full w-[20rem] md:w-[30rem] "
        alt="banner"
        src="https://i.imgur.com/9Yi8hfh.png"
      />
    </div>
  );
};

export default Banner;
