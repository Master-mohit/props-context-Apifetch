import React, { useState } from 'react'
import Counter from './components/Counter'
import Nav from './components/Nav'
import Routeshadler from './routerStore/Routeshadler'
import Welcome from './components/Welcome'
import ProPage from './components/ProPage'

const App = () => {
  
  return (
      <>
       <Nav/>
    <Routeshadler/>
    {/* <Welcome/> */}
   </>

  )
}

export default App
