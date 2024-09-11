import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../components/css/Singledata.css';
import { items } from './data';
import Stars from './Stars';
import Product from './Product';

const Singledata = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [categoricproducts, setCategoricproducts] = useState([]);

  useEffect(() => {
    const productId = Number(id);
    const filteredProduct = items.find((item) => item.id === productId);
    setProduct(filteredProduct);
  }, [id]);

  useEffect(() => {
    if (product) {
      const categoricProducts = items.filter((p) => p.category === product.category);
      setCategoricproducts(categoricProducts);
      console.log("Categoric products:", categoricProducts);
    }
  }, [product]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const imageUrl = product.imgsrc ? require(`../images/${product.imgsrc}`) : null;

  const handleAddToCart = () => {
    // Add product to local storage and navigate
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    navigate('/Addcart');
  };

  return (
    <>
      <div id='Single-main-div'>
        <div id='single-image-div'>
          {imageUrl ? <img src={imageUrl} alt={product.Title} /> : <div>Image not available</div>}
        </div>
        <div id='single-text-div'>
          <h1 id='single-title'>{product.Title}</h1>
          <h3 id='single-description'>{product.description}</h3>
          <p id='single-detail'>{product.detail}</p>
          <button id='single-price'>{product.price} Pkr</button>
          <button id='singledata-cart' onClick={handleAddToCart}>Add to cart</button>
          <Stars stars={product.stars} reviews={product.reviews} />
        </div>
      </div>
      <Product items={categoricproducts} />
    </>
  );
};

export default Singledata;
