import React from 'react';

const Button = ({ text, onClick, type = 'button', className = '' }) => {
  return (
    <>
    <button type={type} className={` py-1 px-3 rounded-md bg-[#5757e2] text-white font-bold ${className}`} onClick={onClick}>
      {text}
    </button>
    </>
  );
};

export default Button;