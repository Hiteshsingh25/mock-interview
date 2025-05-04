import React from 'react';

const SecondaryButton = ({ text, onClick, type = 'button', className = '' }) => {
  return (
    <>
    <button type={type} className={` py-1 px-3 rounded-md text-[#5757e2] border border-[#5757e2] font-bold ${className}`} onClick={onClick}>
      {text}
    </button>
    </>
  );
};

export default SecondaryButton;