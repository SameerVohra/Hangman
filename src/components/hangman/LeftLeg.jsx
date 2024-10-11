import React from 'react';

function LeftLeg() {
  return (
    <div className='flex flex-col items-center -translate-y-8 transform rotate-45'>
      <div className='h-48 w-12 border-2 border-black rounded-3xl'></div>
      <div className='h-12 w-12 border-2 border-black rounded-full mt-[-1rem] bg-gray-300'></div>
    </div>
  );
}

export default LeftLeg;
