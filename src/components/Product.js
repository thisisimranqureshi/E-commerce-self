import React from "react";
import '../components/css/Product.css';
import { Link } from "react-router-dom";

const Product = ({ items }) => {
    return (
        <div id='project-main-div'>
            <div id="row"> 
                {items.map((singledata) => {
                    const imageurl = require(`../images/${singledata.imgsrc}`);
                    return (
                        <div className="col-lg-3" key={singledata.id}>
                            <div id='container'>
                                <Link to={`/singledata/${singledata.id}`}>
                                    <div id='image'>
                                        <img src={imageurl} alt={singledata.Title} />
                                    </div>
                                    <div id='text'>
                                        <h2>{singledata.Title}</h2> 
                                        <p>{singledata.description}</p>
                                        <br />
                                        <button id='price'>{singledata.price}</button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Product;
