import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'

const Routeshadler = () => {
  return (
    <div>
      <Routes>
        <Route path='/props' Component={Home}/>
        <Route path='/context' Component={About}/>
        <Route path='/apifetch' Component={Contact} />
      </Routes>
    </div>
  )
}

export default Routeshadler
