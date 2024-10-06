import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import ProPage from '../components/ProPage'

const Routeshadler = () => {
  return (
    <div>
      <Routes>
        <Route path='/props' Component={Home}/>
        <Route path='/context' Component={About}/>
        <Route path='/apifetch' Component={Contact} />
        <Route path='/product_page/:id' Component={ProPage} />
      </Routes>
    </div>
  )
}

export default Routeshadler
