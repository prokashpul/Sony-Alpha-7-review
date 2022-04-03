import React from "react";
import Review from "../Review/Review";
import useReviews from "../../Hooks/useReviews";
import { useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/solid";
const HomeReview = () => {
  const [reviews] = useReviews();
  const threeReviews = reviews.slice(0, 3);
  const navigate = useNavigate();
  return (
    <section className="md:w-[85%] w-[95%] mx-auto mt-10 mb-20">
      <h2 className="text-center font-bold text-3xl md:text-5xl ">
        Reviews ({threeReviews.length})
      </h2>
      <div className="grid md:grid-cols-3 md:mt-20 mt-10 gap-5">
        {threeReviews.map((reviews) => (
          <Review review={reviews} key={reviews.id}></Review>
        ))}
      </div>
      <div className="my-10 w-full flex justify-center">
        <button
          className="bg-indigo-600  hover:bg-yellow-600 duration-500 text-white text-xl py-2 px-6 rounded-full  mr-4 flex items-center gap-4"
          onClick={() => navigate("/reviews")}
        >
          All Reviews <ArrowRightIcon className="w-6 h-6"></ArrowRightIcon>
        </button>
      </div>
    </section>
  );
};

export default HomeReview;
