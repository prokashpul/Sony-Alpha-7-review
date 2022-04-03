import React from "react";
import { NavLink } from "react-router-dom";

const MenuLink = ({ links }) => {
  const { name, link } = links;
  return (
    <li className="text-2xl font-semibold my-6 md:my-0">
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-indigo-600" : " duration-500 hover:text-indigo-600"
        }
        to={link}
      >
        {name}
      </NavLink>
    </li>
  );
};

export default MenuLink;
