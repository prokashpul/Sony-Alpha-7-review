import React from "react";
import { NavLink } from "react-router-dom";
import facebook from "../../Assets/Images/Facebook Icon.svg";
import instagram from "../../Assets/Images/Instagram Icon.svg";
import twitter from "../../Assets/Images/Twitter Icon.svg";
import linkdIn from "../../Assets/Images/Linkedin Icon.svg";
import youtube from "../../Assets/Images/Youtube Icon.svg";
const Footer = () => {
  return (
    <footer className="h-96 bg-[#0a142f] flex flex-col justify-center items-center">
      <h2 className="text-5xl font-bold text-white">
        <span className="text-indigo-600">Pro</span>web
      </h2>
      <div className="flex flex-wrap justify-center gap-2 md:gap-6 text-white mt-5 text-2xl">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-indigo-600" : " duration-500 hover:text-indigo-600"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-indigo-600" : " duration-500 hover:text-indigo-600"
          }
          to="/reviews"
        >
          Reviews
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-indigo-600" : " duration-500 hover:text-indigo-600"
          }
          to="/dashboard"
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-indigo-600" : " duration-500 hover:text-indigo-600"
          }
          to="/blogs"
        >
          Blogs
        </NavLink>
      </div>
      <div className="m-10 justify-center  flex gap-4 flex-wrap">
        <a href="https://www.facebook.com/prokash.pul/">
          <img
            className="p-2 bg-indigo-500 hover:bg-transparent border-2 h-14 w-14 rounded-lg border-white hover:border-indigo-500"
            src={facebook}
            alt="facebook"
          />
        </a>
        <a href="https://www.instagram.com/prokash_pul/">
          <img
            className="p-2 bg-indigo-500 hover:bg-transparent border-2 h-14 w-14 rounded-lg border-white hover:border-indigo-500"
            src={instagram}
            alt="nstagram"
          />
        </a>
        <a href="https://www.facebook.com/prokash.pul/">
          <img
            className="p-2 bg-indigo-500 hover:bg-transparent border-2 h-14 w-14 rounded-lg border-white hover:border-indigo-500"
            src={twitter}
            alt="Twitter"
          />
        </a>
        <a href="https://www.linkedin.com/in/prokash-pul-90a4ab1b5/">
          <img
            className="p-2 bg-indigo-500 hover:bg-transparent border-2 h-14 w-14 rounded-lg border-white hover:border-indigo-500"
            src={linkdIn}
            alt="linkdIn"
          />
        </a>
        <a href="https://www.facebook.com/prokash.pul/">
          <img
            className="p-2 bg-indigo-500 hover:bg-transparent   duration-500 border-2 h-14 w-14 rounded-lg border-white hover:border-indigo-500"
            src={youtube}
            alt="facebook"
          />
        </a>
      </div>
      <p className="text-white"> &copy; copyright 2022 Proweb </p>
    </footer>
  );
};

export default Footer;
