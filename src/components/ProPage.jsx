import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProPage = () => {
  
const [single, setsingle] = useState(null)
const {id} = useParams();
useEffect(() => {
  const fetch = async() => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
    setsingle(response.data)
  }
  fetch();

}, [id])

if(!single){ 
  return 
  <div>
    <p>loading..</p>
  </div>
}
  return (
    <div className='w-screen p- h-screen bg-zinc-950 text-white'>
     <div className=' flex items-center justify-center flex-col'>
     <img className='mb-10 mt-10 w-[15vw] h-[20vh]object-cover bg-yellow-400'  src={single.image}/>
     <h1 className='mt-2' >{single.title}</h1>
     <h1>{single.price}</h1>
     <h1>{single.category}</h1>
     <h1>{single.description}</h1>
     </div>

    </div>
  )
}

export default ProPage
