// Star.js

import React, { useState } from "react";
import styled from "@emotion/styled";



const StarRating = ({ totalStars }) => {
  const [rating, setRating] = useState(0);

  const handleClick = index => {
    if (index === rating - 1) {
      // If the same star is clicked again, reset the rating
      setRating(0);
    } else {
      setRating(index + 1);
    }
  };

  const StarContainer = styled.div`
  display: flex;
  width: 80px;
  `;

  const StarIcon = styled.span`
  font-size: 20px;
  color: ${({ filled }) => (filled ? "#FFD700" : "#FFD700")};
  cursor: pointer;
  `;

  return (
    <StarContainer>
      {[...Array(totalStars)].map((_, index) => (
        <StarIcon
          key={index}
          filled={index < rating}
          onClick={() => handleClick(index)}
        >
          &#9733;
        </StarIcon>
      ))}
    </StarContainer>
  );
};

export default StarRating;
