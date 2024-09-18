import React, { useEffect, useState } from 'react';
import '../components/css/searchdata.css';
import { useParams } from 'react-router-dom';
import { items } from '../components/data';
import Product from '../components/Product';

const Searchdata = () => {
  const { term } = useParams();
  const [filtereddata, setFiltereddata] = useState([]);

  useEffect(() => {
    const functions = () => {
      const data = items.filter((p) => p.Title.toLowerCase().includes(term.toLowerCase()));
      setFiltereddata(data);
    };

    functions();
  }, [term]);

  return (
    <div className="search-results">
      {filtereddata.length === 0 ? (
        <div className="no-results">
          <h2>No Products Found</h2>
          <p>We couldn't find any products matching your search. Please try again with different keywords.</p>
        </div>
      ) : (
        <Product items={filtereddata} />
      )}
    </div>
  );
};

export default Searchdata;
