import React from "react";
import "../../styles/StarRating.css";

const StarRating = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="container">
      {arr.map((item) => {
        return (
          <button>
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
