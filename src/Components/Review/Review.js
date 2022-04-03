import React from "react";

const Review = ({ review }) => {
  const { name, reviews, img, rating } = review;
  return (
    <div className="shadow hover:shadow-lg duration-500 p-10  rounded-lg border-indigo-600 border">
      <div className="flex gap-4 items-center justify-start">
        <img src={img} alt={name} className="w-14 h-14 rounded-full" />
        <h2 className="text-2xl font-mono font-semibold">{name}</h2>
      </div>
      <h4 className={"text-2xl my-2"}>
        Rating :{" "}
        <span
          className={rating >= 5 ? "text-red-700 font-bold" : "text-gray-900"}
        >
          {rating}

          <small>star</small>
        </span>
      </h4>
      <p>{reviews}</p>
    </div>
  );
};

export default Review;
