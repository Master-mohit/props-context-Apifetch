import React, { useState } from 'react'
import Counter from './Counter';

const Counterprocess = () => {
    const [count, setcount] = useState(0)
  const countHandler = () => {
    setcount(count + 1);
    console.log(count)
  }
  return (
    <div className='bg-zinc-950 w-screen h-screen text-white p-6 flex items-center justify-center flex-col'>
         <Counter send = {count}/>
      <button onClick={countHandler} className='border rounded px-[3vw] py-[1vw] mt-6 '>Count up❕</button>
      </div>
  )
}

export default Counterprocess
