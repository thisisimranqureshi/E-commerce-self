import React from "react"
import { json, NavLink ,useNavigate } from "react-router-dom"
import './Navbar.css'
const Navbar=()=>{
    const navigate=useNavigate();
    const auth=localStorage.getItem("local")


    const handleLogout = () => {
        localStorage.removeItem("local"); // Clear user data from local storage
        navigate('/Login');} // Redirect to login page


        if (!auth) {
            return null; 
        }
    return(
        <div>  
            <nav>
                <span><b>S</b>hopi<b>Q</b></span>
                <ul>
                    <li><NavLink to='/Home'>Home</NavLink></li>
                    <li><NavLink to='/About'>About</NavLink></li>
                    <li><NavLink to='/Contact'>Contact </NavLink></li>
                    <li><NavLink onClick={handleLogout} to='/Login'>Logout </NavLink></li>
                </ul>
            </nav>

         </div>
    )

}
export default Navbar