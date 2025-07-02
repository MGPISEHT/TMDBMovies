import React, { useState } from "react"; 
import logo from "../assets/images/logo3.png";
import { Menu, X } from "lucide-react"; 
import { Link, NavLink } from "react-router-dom";

const links = [
  { label: "Home", path: "/" },
  { label: "Anime", path: "anime" },
  { label: "Movies", path: "movies" },
  { label: "ChinaSeries", path: "china-series" },
  { label: "About", path: "about" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // use for managing mobile menu state

  return (
    <div className="flex justify-between items-center bg-gray-800 text-white  relative z-10"> 
      <Link to="/">
        <img src={logo} alt="logo" className=" md:w-15 md:h-15  w-10 h-10 my-4" />
      </Link>

      {/* Button សម្រាប់ Mobile Menu */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)} 
        // ប្រើសម្រាប់ toggle menu​ បើក​ (true = !isMenuOpen) និងបិទ (false = isMenuOpen)
        className="cursor-pointer lg:hidden focus:outline-none" // focus:outline-none ដើម្បីលុបស្លាក outline នៅពេលចុច
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />} 
        {/* ប្រើសម្រាប់បិទបើក menu បើ true បិត X បើ false បើ Menu */}
      </button>

      {/* Mobile Menu Overlay/Sidebar (នឹងបង្ហាញនៅពីលើខ្លឹមសារផ្សេងទៀត) */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-gray-900 flex flex-col items-center justify-center space-y-8 z-20">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 focus:outline-none"
            aria-label="Close menu"
          >
            <X size={32} className="text-white" />
          </button>
          <ul className="flex flex-col gap-8 text-2xl">
            {links.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)} // បិទ menu ពេលចុច link
                  className={({ isActive }) =>
                    `hover:text-gray-300 transition-colors duration-300 ${
                      isActive ? "text-blue-400" : "text-white" 
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex gap-4 my-4 font-semibold ">
        {links.map((link) => (
          <li key={link.label}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `hover:underline underline-offset-4  transition-colors duration-300 ${
                  isActive ? "text-blue-400 " : "text-white "
                }`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;