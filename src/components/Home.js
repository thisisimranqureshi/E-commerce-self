import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/css/Home.css';
import Product from './Product';
import { items } from './data'; // Import your product data

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(items);
  }, []);

  return (
    <>
      <div id='home-main-div'>
        <div id='Home-main-image-div'> 
          <h2>Transform your space with our curated collection<br/>where style meets comfort</h2>
          <button><Link to={'/Product'}>Explore More...</Link></button>
        </div>
        <h1 id='home-h3'>New Collection</h1>
        <h4 id='home-p'>Transform your space with our cultured collection where style meets comfort</h4>
      </div>
      <Product items={products} /> 
    </>
  );
}

export default Home;
