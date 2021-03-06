import React from "react";

const Blog = ({ faq }) => {
  const { question, answer, img } = faq;
  return (
    <div className="grid md:grid-cols-5 my-10 shadow-xl border border-indigo-600 rounded-md overflow-hidden">
      <img src={img} className="w-full h-full" alt="" />
      <div className="col-span-4 p-5">
        <h2 className="font-bold text-4xl my-4">{question}</h2>
        <p className="font-semibold text-xl">{answer}</p>
      </div>
    </div>
  );
};

export default Blog;
