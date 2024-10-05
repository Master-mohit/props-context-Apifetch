import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div className='w-[100vw] h-[4vw] bg-zinc-600 text-white p-10 flex items-center justify-between'>
      <div className='flex'>
     <h1 className='text-[2vw] font-medium'>Routes</h1>
      </div>
      <div className='font-serif flex justify-between gap-6 text-[1.3vw]'>
      <Link to="/props"><h1>Props</h1></Link>
   <Link to="/context"><h1>Context</h1></Link>
   <Link to="/apifetch"><h1>ApiFetch</h1></Link>
   
      </div>
    </div>
  )
}

export default Nav
