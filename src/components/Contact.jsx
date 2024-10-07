import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
const [products, setproducts] = useState([])

useEffect(() => {
  const fetchapi = async() => {
    const response = await axios.get('https://fakestoreapi.com/products');
    setproducts(response.data);
  }
  fetchapi();
}, [])

  return (
    <div className='w-screen h-fit bg-zinc-950 text-white p-10 flex flex-col'>
      <h1 className='mb-6 text-[2.3vw]'><b>Api fetching...</b></h1>
  {
    products.map((pro) => (
     <Link to={`/product_page/${pro.id}`}>
       <div className='flex itens-center justify-evenly gap-8 mb-10 '>
    
    <div className='w-[12vw] h-[17vh] overflow-hidden rounded bg-yellow-300'>
      <img className='w-[100%] h-[100%] object-cover' src={pro.image}/>
     </div>
     <div className='w-[85vw] - h-fit'>
       <p>{pro.title}</p>
        <p>{pro.price}</p>
       <p>{pro.description}</p>
     </div>
     
    </div>
     </Link>
    ))
  }
   
    </div>
  )
}


export default Contact
