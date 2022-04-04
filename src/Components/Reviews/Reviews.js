import React from "react";
import useReviews from "../../Hooks/useReviews";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews] = useReviews();
  return (
    <section className="md:w-[85%] w-[95%] mx-auto my-10 md:my-20">
      <h2 className="text-center font-bold text-3xl md:text-5xl ">
        All Customer Reviews ({reviews.length})
      </h2>
      <div className="grid md:grid-cols-3 md:mt-20 mt-10 gap-5">
        {reviews.map((reviews) => (
          <Review review={reviews} key={reviews.id}></Review>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
