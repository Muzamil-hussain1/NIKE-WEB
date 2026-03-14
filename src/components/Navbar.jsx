import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // state for menu toggle

  const linkClass = ({ isActive }) =>
    `hover:text-white cursor-pointer ${
      isActive ? "text-white underline" : ""
    }`;

  return (
    <nav className="w-full bg-red-500">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-2">

        {/* Logo */}
        <NavLink to="/">
          <img
            src="/images/nike.png"
            alt="nike logo"
            className="w-10 h-10 md:w-12 md:h-12"
          />
        </NavLink>

        {/* Menu */}
        <ul className="flex gap-1 md:gap-8 text-xs md:text-base font-bold items-center">
          <li>
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
          </li>

            <li>
            <NavLink to="/contact" className={linkClass}>
              Store
            </NavLink>
          </li>

          {/* Menu with dropdown */}
          <li className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="hover:text-white cursor-pointer"
            >
              Menu
            </button>

            {/* Dropdown menu */}
            {menuOpen && (
              <ul className="absolute top-full left-0 mt-2 w-40 bg-white text-black shadow-lg rounded z-50">
                <li className="px-4 py-2 hover:bg-red-500 hover:text-white">
                  <NavLink to="/contact">shopping</NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-red-500 hover:text-white">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-red-500 hover:text-white">
                  <NavLink to="/contact">Accessories</NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-red-500 hover:text-white">
                  <NavLink to="/Signin">Sign In</NavLink>
                </li>
              </ul>
            )}
          </li>

       
          <li>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
          </li>

        </ul>

        {/* Buttons */}
        <div className="flex gap-2 md:gap-3 text-xs md:text-sm">
          <NavLink
            to="/Signin"
            className="bg-white text-black px-2 py-1 md:px-3 md:py-1 rounded"
          >
            Sign in
          </NavLink>

          <NavLink
            to="/Signin"
            className="bg-black text-white px-2 py-1 md:px-3 md:py-1 rounded"
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;