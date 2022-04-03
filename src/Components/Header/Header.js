import React, { useState } from "react";
import { MenuAlt2Icon, XIcon } from "@heroicons/react/solid";
import MenuLink from "../MenuLink/MenuLink";
import { Link } from "react-router-dom";
const Header = () => {
  const [openMenu, setMenu] = useState(false);
  const links = [
    { name: "Home", link: "/" },
    { name: "Reviews", link: "/reviews" },
    { name: "Dashboard", link: "/dashboard" },
    { name: "Blogs", link: "/blogs" },
    { name: "About ", link: "/about" },
  ];
  return (
    <nav className="z-50 md:flex sticky bg-white top-0 duration-500 justify-between items-center h-20  shadow-lg md:px-10 px-5">
      <div className="flex justify-between w-full h-20 items-center">
        <div className="font-bold text-5xl">
          <Link to="/">
            <span className="text-indigo-600">Pro</span>web
          </Link>
        </div>
        <div
          onClick={() => setMenu(!openMenu)}
          className="text-6xl font-bold md:hidden"
        >
          {!openMenu ? (
            <MenuAlt2Icon className="w-10 h-10 text-6xl font-bold" />
          ) : (
            <XIcon className="w-10 h-10 text-6xl font-bold"></XIcon>
          )}
        </div>
      </div>
      <ul
        onClick={() => setMenu(!openMenu)}
        className={`min-h-[88.5vh] md:flex items-center justify-end gap-5 absolute md:static top-20 md:bg-transparent bg-indigo-900 duration-500  w-full  text-center py-10 md:py-0 ${
          openMenu ? "left-0" : "left-[-100%]"
        }`}
      >
        {links.map((link, index) => (
          <MenuLink links={link} key={index}></MenuLink>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
