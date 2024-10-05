import React, { useState } from 'react'

const Counter = ({send}) => {
    
  return (
    
     <div>
        <p className='text-[2vw] font-bold p-6'>Props Drilling...</p>
     <h1 className='text-[4vw] font-semibold border px-[15vw] py-[5vw] rounded mb-4'>{send}</h1>
     </div>
    
  )
}

export default Counter
