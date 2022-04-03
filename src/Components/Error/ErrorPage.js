import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../../Assets/Images/error-404.svg";
const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center  py-20">
      <img
        src={errorImg}
        className="md:w-86 w-11/12  md:h-60 "
        alt="Error 404"
      />
      <h2 className="font-bold text-4xl my-4">Oops!</h2>
      <p>We can’t seem to find the page you are looking for</p>
      <Link
        className="bg-indigo-600 py-2 px-4 text-2xl text-white rounded-full my-10"
        to="/"
      >
        Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
