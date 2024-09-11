import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import '../components/css/Navbar.css';
import { items } from "./data";

const Navbar = ({ setData }) => {

    const [searchitem,setSearchitem]=useState('');
    const navigate = useNavigate();
    const auth = localStorage.getItem("local");

    const handleCategory = (category) => {
        if (category === "All") {
            setData(items); // Show all items
            navigate('/Product'); // Redirect to the Product page
        } else {
            const filteration = items.filter((p) => p.category === category);
            console.log(filteration);
            setData(filteration);
            navigate('/Product'); // Redirect to the Product page
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("local"); // Clear user data from local storage
        navigate('/Login'); // Redirect to login page
    };

    if (!auth) {
        return null; 
    }
    const handlesearch=()=>{
        navigate(`/search/${searchitem}`);
    }

    return (
        <div>
            <nav>
                <span><b>S</b>hopi<b>Q</b></span>
                <ul>
                    <li><NavLink to='/Home'>Home</NavLink></li>
                    <li><NavLink to='/Product'>Product</NavLink></li>
                    <li><NavLink to='/Addcart'>Cart</NavLink></li>
                    <li><NavLink onClick={handleLogout} to='/Login'>Logout</NavLink></li>
                </ul>
                <div id="search-bar">
                    <input  onChange={(e)=>{
                        setSearchitem(e.target.value);
                    }}  
                    placeholder="Search" />
                    <button onClick={handlesearch}>Search</button>
                </div>
            </nav>

            <div id="categories">
                <ul>
                    <li onClick={() => handleCategory("All")}><p>All</p></li>
                    <li onClick={() => handleCategory("pants")}><p>Pants</p></li>
                    <li onClick={() => handleCategory("shoes")}><p>Shoes</p></li>
                    <li onClick={() => handleCategory("shirts")}><p>Shirts</p></li>
                    <li onClick={() => handleCategory("laptops")}><p>Laptop</p></li>
                    <li onClick={() => handleCategory("mobiles")}><p>Mobile</p></li>
                    <li onClick={() => handleCategory("makeups")}><p>Makeup</p></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
