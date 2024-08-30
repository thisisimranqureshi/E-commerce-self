import React from 'react'
import Signup from './components/Signup'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'

import {BrowserRouter, Route, Routes,Link } from 'react-router-dom'
const App=()=>{

   

  return(
    <div>
      

      <BrowserRouter>
      
      <Navbar/>
      
     
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      
     
    </div>
  )

}
export default App