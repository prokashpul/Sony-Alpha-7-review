import React, { useState } from "react";
import { MenuAlt2Icon, XIcon } from "@heroicons/react/solid";
import MenuLink from "../MenuLink/MenuLink";
const Header = () => {
  const [openMenu, setMenu] = useState(false);
  const links = [
    { name: "Home", link: "/", id: 1 },
    { name: "Reviews", link: "/reviews", id: 2 },
    { name: "Dashboard", link: "/dashboard", id: 3 },
    { name: "Blogs", link: "/blogs", id: 4 },
    { name: "About ", link: "/about", id: 4 },
  ];
  return (
    <nav className="md:flex sticky bg-white top-0 duration-500 justify-between items-center h-20  shadow-lg md:px-10 px-5">
      <div className="flex justify-between w-full h-20 items-center">
        <div className="font-bold text-5xl">
          <span className="text-yellow-600">Pro</span>web
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
        className={`min-h-[88.5vh] md:flex items-center justify-end gap-5 absolute md:static top-20 md:bg-transparent bg-yellow-500 duration-500  w-full  text-center py-10 md:py-0 ${
          openMenu ? "left-0" : "left-[-100%]"
        }`}
      >
        {links.map((link) => (
          <MenuLink links={link} key={link.key}></MenuLink>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
