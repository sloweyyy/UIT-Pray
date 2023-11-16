import React, { useState } from 'react';
import Input from './Input'; // Assuming you have an Input component

const Form = () => {
    const [showIncense, setShowIncense] = useState(false);
    const [animateOut, setAnimateOut] = useState(false);
  
    const handleClick = () => {
      setShowIncense(true);
      setAnimateOut(false);
      setTimeout(() => {
        setAnimateOut(true);
        setTimeout(() => setShowIncense(false), 1000); // Wait for animation to complete
      }, 5000); // Duration before starting fade out
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
            src="../assets/incense_stick.png" // Update with the correct path
            className={`incense-stick ${animateOut ? 'hidden' : 'visible'}`}
            alt="Incense Stick"
          />
        </>
      )}
    </div>
  );
};

export default Form;
