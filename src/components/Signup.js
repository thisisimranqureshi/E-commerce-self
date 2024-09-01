import '../components/css/Signup.css';
import { useState,useEffect } from 'react';
import { Navigate,json, useNavigate,Link, } from 'react-router-dom';
import background from '../images/background.jpg'

function Signup() {
  const navigate=useNavigate();
  
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    useEffect(()=>{
      const auth=localStorage.getItem("local")
      if(auth){
          navigate('/Home')
      }
  },[navigate])

    

    let fetchinfun=async()=>{
        try{ 
        let fetching=await fetch('http://localhost:3500/Signup',{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json'} 
        })

        fetching=await fetching.json()
        console.warn(fetching)
        localStorage.setItem("local",JSON.stringify(fetching))
        navigate('/Home')}
        catch{console.log(Error)}}

         const nametexting=(e)=>{
           setName(e.target.value)}
        const emailtexting=(e)=>{
           setEmail(e.target.value)}
        const passwordtexting=(e)=>{
            setPassword(e.target.value)}

            const clicked=()=>{
                fetchinfun();
            }

        
  return (
    <div> 
    <div id='signup-image-div' >
      <div id='signup-main-div'> 
      <div id='register-form'>   <h1>Registration form</h1>   </div>
      <div id='name-input'> 
        <input onChange={nametexting} type='text' placeholder='Enter Your Name'/></div>
        <div id='email-input'> 
          <input onChange={emailtexting} type='text' placeholder='Enter Your Email'/>  </div>
          <div id='password-input'> 
          <input onChange={passwordtexting} type='text' placeholder='Enter Your Password'/>  </div>
          <div  onClick={clicked} id='button-register'><button>Submit</button></div>
          <div id='signup-login'>  <p>Already Have An Account?</p>
          <Link to='/Login'>Login</Link>    </div>
      </div>

    </div>
    </div>
  );
}

export default Signup;
