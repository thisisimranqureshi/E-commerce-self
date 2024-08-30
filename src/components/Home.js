import React from "react"
import './Home.css'
import { useNavigate } from "react-router-dom";
const Home=()=>{
    const navigate=useNavigate();
        const handleLogout = () => {
        localStorage.removeItem("local"); // Clear user data from local storage
        navigate('/Login'); // Redirect to login page
    };
    return(
        <div id='home-main-div'>
            <div id='container1'>
                <div id='image1'></div>
                <div id='text1'><p>Jeans For Mens|Stretchable|Gray Color</p>
                <p>pkr 1200</p></div>
            </div>
            <div id='container2'>
                <div id='image2'></div>
                <div id='text2'><p>Jeans For Mens|Stretchable|Gray Color</p>
                <p>pkr 1700</p></div>
            </div>
            <div id='container3'>
                <div id='image3'></div>
                <div id='text3'><p>Jeans For Mens|Stretchable|Gray Color</p>
                <p>pkr 1350</p></div>
            </div>
            <div id='container4'>
                <div id='image4'></div>
                <div id='text4'><p>Jeans For Mens|Stretchable|Gray Color</p>
                <p>pkr 3100</p></div>
            </div>
            <div id='container5'>
                <div id='image5'></div>
                <div id='text5'><p>Jeans For Mens|Stretchable|Gray Color</p>
                <p>pkr 1500</p></div>
            </div>
            <div id='container6'>
                <div id='image6'></div>
                <div id='text6'><p>Jeans For Mens|Stretchable|Gray Color</p>
                <p>pkr 700</p></div>
            </div>
            <div id='container7'>
                <div id='image7'></div>
                <div id='text7'><p>Jeans For Mens|Stretchable|Gray Color</p>
                <p>pkr 1900</p></div>
            </div>
            <div id='container8'>
                <div id='image8'></div>
                <div id='text8'><p>Jeans For Mens|Stretchable|Gray Color</p>
                <p>pkr 1780</p></div>
            </div>
            <div id='container9'>
                <div id='image9'></div>
                <div id='text9'><p>Jeans For Mens|Stretchable|Gray Color</p>
                <p>pkr 1600</p></div>
            </div>
            <div id='container10'>
                <div id='image10'></div>
                <div id='text10'><p>Jeans For Mens|Stretchable|Gray Color</p>
                <p>pkr 3700</p></div>
            </div>
            <div id='container11'>
                <div id='image11'></div>
                <div id='text11'><p>Jeans For Mens|Stretchable|Gray Color</p>
                <p>pkr 2700</p></div>
            </div>
            <div id='container12'>
                <div id='image12'></div>
                <div id='text12'><p>Jeans For Mens|Stretchable|Gray Color</p>
                <p>pkr 2800</p></div>
            </div>
        </div>
        
    )
}
export default Home