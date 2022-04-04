import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [faqs, setFaqs] = useState([]);
  useEffect(() => {
    fetch("faqData.json")
      .then((res) => res.json())
      .then((data) => setFaqs(data));
  }, []);
  return (
    <div className="mb-20">
      <div className=" h-44 md:h-96 w-full bg-[url('https://cdn.pixabay.com/photo/2014/12/27/15/31/camera-581126_960_720.jpg')] bg-no-repeat bg-cover relative">
        <div className=" h-44 md:h-96 w-full absolute bg-indigo-700/50 justify-center flex items-center">
          <h2 className="font-black text-3xl md:text-5xl text-white uppercase text-center">
            Blogs
          </h2>
        </div>
      </div>
      <div className="md:w-[85%] w-[95%] mx-auto my-10">
        {faqs.map((faq) => (
          <Blog faq={faq} key={faq.id}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
