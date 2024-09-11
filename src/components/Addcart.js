import React, { useEffect, useState } from 'react';
import './css/Addcart.css';

const Addcart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch cart items from local storage
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    setCart(savedCart);
  });

  const handleDelete = (productId) => {
    // Remove product from cart
    const updatedCart = cart.filter(product => product.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div id="addcart-main-div">
      <div id="Addcart-cart">
        <h1>Your Cart</h1>
        {cart.length > 0 ? (
          <table className="table-container">
            <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product, index) => (
                <tr key={index}>
                  <td>{product.Title}</td>
                  <td>{product.price} Pkr</td>
                  <td>{product.category}</td>
                  <td>
                    <button 
                      className="delete-button" 
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Addcart;
