import React from 'react';

function Words({onCharacterSelect}) {
  const r1 = "qwertyuiop".split('');
  const r2 = "asdfghjkl".split('');
  const r3 = "zxcvbnm".split('');

  const handleSelect = (char) => {
    onCharacterSelect(char);
  }

  return (
    <>
      <div className='text-2xl space-y-5'>
        {/* First Row */}
        <div className='flex flex-row flex-wrap justify-center gap-4'>
          {r1.map((item, idx) => (
            <button key={idx} className='text-2xl bg-purple-400 w-10 h-12 rounded-full shadow-black shadow-xl hover:bg-purple-600 transition duration-200' onClick={()=>handleSelect(item)}>{item}</button>
          ))}
        </div>

        {/* Second Row */}
        <div className='flex flex-row flex-wrap justify-center gap-4 ml-5'>
          {r2.map((item, idx) => (
            <button key={idx} className='text-2xl bg-purple-400 w-10 h-12 rounded-full shadow-black shadow-xl hover:bg-purple-600 transition duration-200' onClick={()=>handleSelect(item)}>{item}</button>
          ))}
        </div>

        {/* Third Row */}
        <div className='flex flex-row flex-wrap justify-center gap-4 ml-7'>
          {r3.map((item, idx) => (
            <button key={idx} className='text-2xl bg-purple-400 w-10 h-12 rounded-full shadow-black shadow-xl hover:bg-purple-600 transition duration-200' onClick={()=>handleSelect(item)}>{item}</button>
          ))}
        </div>
       <div className='flex flex-row flex-wrap justify-center gap-4 ml-7'>
                      <button className='text-2xl bg-purple-400 w-fit h-12 rounded-full shadow-black shadow-xl hover:bg-purple-600 transition duration-200 px-5 text-center' onClick={()=>handleSelect(" ")}>SPACE</button>
                 </div>
      </div>
    </>
  );
}

export default Words;
