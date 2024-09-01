import React from 'react'
import Home from './components/Home'
import Signup from './components/Signup'
import Product from './components/Product'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Searchdata from './components/Searchdata'
import Singledata from './components/Singledata'

import {BrowserRouter, Route, Routes,Link } from 'react-router-dom'
const App=()=>{

   

  return(
    <div>
      

      <BrowserRouter>
      
      <Navbar/>
      
     
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Product' element={<Product/>}/>
        <Route path='/Singledata/:id' element={<Singledata/>}/>
        <Route path='/Searchdata/:term' element={<Searchdata/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      
     
    </div>
  )

}
export default App