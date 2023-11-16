import React, { useState } from 'react';
import Input from './Input';

const Form = () => {
    const [showIncense, setShowIncense] = useState(false);
    const [animateOut, setAnimateOut] = useState(false);
  
    const handleClick = () => {
      setShowIncense(true);
      setAnimateOut(false);
      setTimeout(() => {
        setAnimateOut(true);
        setTimeout(() => setShowIncense(false), 0);
      }, 5000);
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

        {showIncense && (
          <>
            <div className={`overlay ${showIncense ? 'visible' : 'hidden'}`}></div>
            <img 
              src="https://i.imgur.com/RIPG0ym.gif" 
              className={`incense-stick ${animateOut ? 'hidden' : 'visible'}`}
              alt="Incense Stick"
              style={{ zIndex: 20 }}
            />
          </>
        )}
      </div>
    );
};

export default Form;
