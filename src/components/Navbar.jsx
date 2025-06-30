import React from "react";
import logo from "../assets/images/logo.png";
import { Menu } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import Home from "../pages/Home";
const links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Anime",
    path: "anime",
  },
  {
    label: "Movies",
    path: "movies",
  },
  {
    label: "ChinaSeries",
    path: "china-series",
  },
  {
    label: "About",
    path: "about",
  },
];
const Navbar = () => {
  return (
    <div className=" flex justify-between items-center bg-gray-800 text-white p-4">
      <Link to="/">
        <img src={logo} alt="logo" className="w-20 h-20 my-4" />
      </Link>
      <ul className="flex gap-4 my-4">
        {links.map((link) => {
          return (
            <li key={link.label}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `hover:text-gray-300 transition-colors duration-300 ${
                    isActive ? "text-blue-500" : "textwhi "
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <button>
        <Menu className="cursor-pointer" />
      </button>
    </div>
  );
};

export default Navbar;
