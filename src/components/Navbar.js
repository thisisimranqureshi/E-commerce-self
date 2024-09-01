import React from "react"
import { json, NavLink ,useNavigate } from "react-router-dom"
import '../components/css/Navbar.css'
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
                    <li><NavLink to='/product'>Product</NavLink></li>
                    <li><NavLink to='/Contact'>Contact </NavLink></li>
                    <li><NavLink onClick={handleLogout} to='/Login'>Logout </NavLink></li>
                </ul>
                <div id="search-bar">
                    <input placeholder="Search"></input>
                    <button> Search</button>
                </div>
            </nav>


        <div id="categories">
            <ul>
                <li><a href="#">Women</a></li>
                <li><a href="">Men</a>   </li>
                <li><a href="">Children</a></li>
                <li><a href="#">Clothes</a></li>
                <li><a href="">Laptop</a></li>
                <li><a href="">Mobile</a></li>
                
                <li><a href="">Makeup</a></li>

            </ul>

        </div>

         </div>
    )

}
export default Navbar