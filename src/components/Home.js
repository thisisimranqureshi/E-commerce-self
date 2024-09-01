import React from 'react'
import {Link} from 'react-router-dom'
import '../components/css/Home.css'
import pic from '../images/1.jpg'
const Home = () => {
  return (
    <div id='main-div'>
      
       <div id='Home-main-image-div'> <img id='main-image' src={pic} />
       <h2>Transform your space with our curated collection<br/>where style meets comfort</h2>
       <button><Link to={'/Product'}>Explore More...</Link></button>
       </div>
      
    </div>
  )
}

export default Home
