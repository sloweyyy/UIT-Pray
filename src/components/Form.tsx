import React, { useState } from 'react';
import Input from './Input';

const Form = () => {
    const [showIncense, setShowIncense] = useState(false);
    const [animateOut, setAnimateOut] = useState(false);
    const [mssv, setMssv] = useState('');
    const [prayer, setPrayer] = useState('');

    const handleClick = () => {
        setShowIncense(true);
        setAnimateOut(false);
        setTimeout(() => {
            setAnimateOut(true);
            setTimeout(() => {
                setShowIncense(false);
                setMssv('');
                setPrayer('');
            }, 0);
        }, 5000);
        setTimeout(() => { 
            alert('Không thành đâu, đừng có mơ!'); 
        }, 6000);
    };

    return (
        <div className="flex flex-col items-center w-full relative">
            <Input 
                placeholder="MSSV"
                value={mssv}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMssv(e.target.value)}
            />
            <Input 
                placeholder="Nội dung bạn muốn khấn"
                className="h-50px"
                value={prayer}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrayer(e.target.value)}
            />
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
