import React from "react";
import useReviews from "../../Hooks/useReviews";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  console.log(reviews);
  return (
    <section className="md:w-[85%] md:w-[95%] mx-auto my-20">
      <h2 className="text-center font-bold text-3xl md:text-5xl ">
        All Reviews ({reviews.length})
      </h2>
      {reviews.map((reviews) => (
        <Review reviews={reviews} key={reviews.id}></Review>
      ))}
    </section>
  );
};

export default Reviews;
