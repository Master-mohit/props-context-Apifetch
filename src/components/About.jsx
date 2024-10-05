import React, { useContext } from 'react'
import { mycontext } from '../context/Context'

const About = () => {
  const {plus,  setplus} = useContext(mycontext)
  const plusHandler = () => {
    setplus(plus + 1)
  }
  return (
    <>
    <div className='bg-zinc-900 w-screen h-screen text-white p-6 flex items-center justify-center flex-col'>
    <p className='text-[2vw] p-6 font-semibold'>Context...</p>
       <h1 className='text-[4vw] font-semibold border px-[15vw] py-[5vw] rounded mb-4'>{plus}</h1>
       <button onClick={plusHandler} className='border rounded px-[3vw] py-[1vw] mt-6 '>Count up❕</button>
    </div>
    </>
  )
}

export default About
