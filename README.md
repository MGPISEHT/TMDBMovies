# how to create toggle menu in React Js 
import React, { useState } from "react"; 
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // use for managing mobile menu state

  return (
    

      {/* Button សម្រាប់ Mobile Menu */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)} 
        // ប្រើសម្រាប់ toggle menu​ បើក​ (true = !isMenuOpen) និងបិទ (false = isMenuOpen)
        className="cursor-pointer lg:hidden focus:outline-none" 
        // focus:outline-none ដើម្បីលុបស្លាក outline នៅពេលចុច
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        {/* ប្រើសម្រាប់បិទបើក menu បើ true បិត X បើ false បើ Menu */}
      </button>

      {/* Mobile Menu Overlay/Sidebar (នឹងបង្ហាញនៅពីលើខ្លឹមសារផ្សេងទៀត) */}
      {isMenuOpen && (
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
                      isActive ? "text-blue-500" : "text-white" // ជួសជុល "textwhi"
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

    </div>
  );
};

export default Navbar;
# TMDBMovies
# First Commit 
