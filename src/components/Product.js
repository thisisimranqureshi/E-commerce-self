import React from "react"
import '../components/css/Product.css'
import { useNavigate } from "react-router-dom";
import { items } from "./data";
import { Link } from "react-router-dom";
const Product = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("local"); // Clear user data from local storage
        navigate('/Login'); // Redirect to login page
    };
  

    return (
        <>
        <div id='home-main-div'> 
        <div id="row"> 
            {
                items.map((singledata)=>{
                    const imageurl=require(`../images/${singledata.imgsrc}`)
                    return( <>
                        
                    <div className="col-lg-3">
                            <div  id='container'>
                                <div>
                                    <Link to={`/singledata/${singledata.id}`}>
                                
                                <div id='image'><img src={imageurl} /></div>
                                <div id='text'> <h2>{singledata.Title}</h2> 
                                <p>{singledata.description}.</p> <br/>
                                <button id='price'>{singledata.price}</button>
                                <button id='cart'>Add to cart</button>
                                </div>
                                </Link>
                                </div>
                            </div>
                            </div>
                            </>
                            
                    )

            }    )
}    </div>
</div>
        </>

    )
}
export default Product