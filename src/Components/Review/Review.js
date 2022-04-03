import React from "react";

const Review = ({ reviews }) => {
  const { name, review, img, star } = reviews;
  return (
    <div>
      <div>
        <img src={img} alt={name} className="w-20 h-20 rounded-full" />
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default Review;
