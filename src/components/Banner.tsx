import React, { FunctionComponent } from "react";

const Banner: FunctionComponent = () => {
  return (
    <div className="my-4 max-h-[30%] relative overflow-hidden">
      <img
        className="h-auto max-w-full w-[20rem] md:w-[30rem] "
        alt="banner"
        src="https://i.imgur.com/x5NicDI.png"
      />
      {/* <img
        className="h-auto max-w-full w-[20rem] md:w-[30rem] absolute top-0 left-0"
        alt="overlay"
        src="https://i.imgur.com/TuxHSxS.gif"
        style={{ zIndex: 1, width: '20%', left: '40%', top: '70%' }}
      /> */}
    </div>
  );
};

export default Banner;
