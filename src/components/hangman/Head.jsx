import React from 'react';

function Head() {
  return (
    <div className='h-24 w-24 rounded-full border-2 border-black flex flex-col justify-center items-center'>
      <div className='flex justify-around w-full mt-4'>
        <div className='h-4 w-4 rounded-full bg-black' />
        <div className='h-4 w-4 rounded-full bg-black' />
      </div>
      <div className='relative mt-2'>
        <h1 className='text-2xl'>_</h1>
      </div>
    </div>
  );
}

export default Head;
