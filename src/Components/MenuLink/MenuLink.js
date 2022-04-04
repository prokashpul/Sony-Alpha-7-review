import React from "react";
import { NavLink } from "react-router-dom";

const MenuLink = ({ links }) => {
  const { name, link } = links;
  return (
    <li className="text-xl uppercase font-semibold my-6 md:my-0">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-indigo-600 underline "
            : " duration-500 text-white md:text-gray-900 hover:text-indigo-600 "
        }
        to={link}
      >
        {name}
      </NavLink>
    </li>
  );
};

export default MenuLink;
