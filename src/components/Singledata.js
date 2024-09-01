import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../components/css/Singledata.css';
import { items } from './data';


const Singledata = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null); // Initialize with null

  useEffect(() => {
    console.log("Items array:", items);
    const productId = Number(id);

    const filteredProduct = items.find((item) => item.id === productId);
    console.log(filteredProduct);

    setProduct(filteredProduct); // Update state with the found product or null if not found
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // Handle the case where product is not found or is loading
  }
  const imageUrl = require(`../images/${product.imgsrc}`);

  return (
    <div id='Single-main-div'>
      <div id='single-image-div'><img src={imageUrl} alt={product.name} /></div>
      <div id='single-text-div'>
      <h1 id='single-title'>{product.Title}</h1>
      <h3 id='single-description'>{product.description}</h3>
      <p id='single-detail'>{product.detail}</p>
      <h3 id='single-price'>{product.price} Pkr</h3>

      </div>
    
    </div>
  );
}

export default Singledata;
