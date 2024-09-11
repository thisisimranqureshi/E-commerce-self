import React from 'react';
import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Stars = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (element, index) => {

    const starIndex = index + 1;
    const isFullStar = stars >= starIndex;
    const isHalfStar = stars >= (starIndex - 0.5) && stars < starIndex;
    const isEmptyStar = !isFullStar && !isHalfStar;

    if (isFullStar) {
      return <FaStar className='full-star' key={index} />;
    } else if (isHalfStar) {
      return <FaStarHalfAlt className='half-star' key={index} />;
    } else if (isEmptyStar) {
      return <AiOutlineStar className='empty-star' key={index} />;
    }
    return null; // Fallback, should not reach here
  });

  return (
    <div className="stars-wrapper">
      {ratingStar}
      <p id='review'>{reviews} Customer Reviews</p>
    </div>
  );
};

export default Stars;
