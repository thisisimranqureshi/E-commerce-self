import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Product from './components/Product';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Searchdata from './components/Searchdata';
import Singledata from './components/Singledata';
import Addcart from './components/Addcart';
import Footer from './components/Footer';
import { items } from './components/data';

const App = () => {
    const [data, setData] = useState(items); // Initialize with all items
    const location = useLocation();

    // Check if the current path is neither Signup nor Login
    const showFooter = !['/Signup', '/Login'].includes(location.pathname);

    return (
        <div>
            <Navbar setData={setData} />
            <Routes>
                <Route path='/' element={<Signup/>} />
                <Route path='/Home' element={<Home/>} />
                <Route path='/Product' element={<Product items={data} />} />
                <Route path='/Singledata/:id' element={<Singledata />} />
                <Route path='/Searchdata/:term' element={<Searchdata />} />
                <Route path='/Addcart' element={<Addcart />} />
                <Route path='/Signup' element={<Signup />} />
                <Route path='/Login' element={<Login />} />
            </Routes>
            {showFooter && <Footer />}
        </div>
    );
};

const Wrapper = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

export default Wrapper;
