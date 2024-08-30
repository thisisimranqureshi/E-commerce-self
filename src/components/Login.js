import React from 'react'
import { useState,useEffect } from 'react'
import { Link,useNavigate,json } from 'react-router-dom'
import '../App.css'

const Login=()=>{
    const navigate=useNavigate(); 
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    useEffect(()=>{
        const auth=localStorage.getItem("local")
        if(auth){
            navigate('/Home')
        }
    }) 

    const fetchingfun=async()=>{
        try{ 
        let fetching=await fetch('http://localhost:3500/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            } } )
             fetching=await fetching.json();
             if(fetching.name){   //check name property exist or not .it will asssure that user has sucessfully login
             localStorage.setItem("local",JSON.stringify(fetching))
             navigate('/Home')
                }}
        catch{
            console.log(Error)   }
    } 
    const emailtext=(e)=>{
        setEmail(e.target.value)}

        const passwordtext=(e)=>{
            setPassword(e.target.value) }

            const clicked=()=>{
                fetchingfun();}


    return(
        <div id='login-image-div'>
        <div id='login-main-div'>
            <div id='login-tag'>  <h1>Login</h1>  </div>
            <div id='login-email-input'>< input  onChange={emailtext} placeholder='Enter Your Email'/></div>
            <div id='login-password-input'><input onChange={passwordtext} placeholder='Enter Your Password'/></div>
            <div id='login-button'> <button onClick={clicked} > Login</button></div>
            <div id='login-signup'>  <p>Don't Have An Account?</p>
            <Link to='/Signup'>Signup</Link>    </div>

        </div>
        </div>
    )

}
export default Login