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
      <h2 className="text-center font-black text-5xl my-10">Blogs</h2>
      <div className="md:w-[85%] w-[95%] mx-auto my-10">
        {faqs.map((faq) => (
          <Blog faq={faq} key={faq.id}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
