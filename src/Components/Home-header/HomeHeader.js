import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { useNavigate } from "react-router-dom";
import sony from "../../Assets/Images/sony-a7.png";
const HomeHeader = () => {
  const navigate = useNavigate();
  return (
    <section className="grid md:grid-cols-2 gap-5 md:w-[85%] py-10  mx-auto">
      <div className="p-10 order-1">
        <p className="flex gap-3 items-center bg-slate-100 p-2 rounded-xl">
          <span className="h-6 w-6 block bg-indigo-600 rounded-full"></span>{" "}
          Alpha 7 IV full-frame hybrid camera
        </p>
        <h2 className="font-black text-3xl md:text-5xl mt-10">
          Your Future Camera
        </h2>
        <h2 className="font-black text-3xl md:text-4xl mt-5">
          Sony is your <span className="text-indigo-600"> Bast Choice</span>
        </h2>
        <p className="my-6 text-lg">
          With groundbreaking performance in both still and movie recording, the
          α7 IV is the ideal hybrid, providing breathtaking imagery along with
          on-the-spot delivery and distribution. The α7 IV is a camera designed
          to bring to life the artistic visions of today's creators.
        </p>
        <div className="my-10 w-full flex justify-center md:justify-start">
          <button
            className="bg-indigo-600  hover:bg-yellow-600 duration-500 text-white text-xl py-2 px-6 rounded-full  mr-4 flex  gap-4"
            onClick={() => navigate("/about")}
          >
            Learn More <ArrowRightIcon className="w-6 h-6"></ArrowRightIcon>
          </button>
        </div>
      </div>
      <div className="md:p-10 p-5 md:order-1">
        <img className="h-96 w-full " src={sony} alt="Sony Alpha 7 IV" />
      </div>
    </section>
  );
};

export default HomeHeader;
