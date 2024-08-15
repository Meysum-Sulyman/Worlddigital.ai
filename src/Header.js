import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/Group.png";
import user from "./assets/user-cirle.png";
import vertical from "./assets/VerticalBorder.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="background-red p-4 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        {/* Hamburger Menu for Mobile/Tablet */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className={`md:flex space-x-6 text-white hidden md:block`}>
          <Link to="/" className="hover:text-red-300">
            Home
          </Link>
          <Link to="/about-us" className="hover:text-red-300">
            About
          </Link>
          <Link to="/services" className="hover:text-red-300">
            Services
          </Link>
          <Link to="/carrer" className="hover:text-red-300">
            Career
          </Link>
          <Link to="/" className="hover:text-red-300">
            Contact
          </Link>
        </div>

        {/* Sign In and User Icons */}
        <div className={`flex space-x-4 items-center hidden md:flex`}>
          <button className="text-white">
            <img src={vertical} alt="Vertical Divider" />
          </button>
          <button className="text-white">
            <img src={user} alt="User" />
          </button>
          <button className="bg-gradient-to-r from-purple-500 to-red-500 text-white px-6 py-2 rounded-full">
            Sign In
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 bg-red-600 p-4 rounded-lg">
          <Link to="/" className="text-white hover:text-red-300">
            Home
          </Link>
          <Link to="/about-us" className="text-white hover:text-red-300">
            About
          </Link>
          <Link to="/services" className="text-white hover:text-red-300">
            Services
          </Link>
          <Link to="/carrer" className="text-white hover:text-red-300">
            Career
          </Link>
          <Link to="/" className="text-white hover:text-red-300">
            Contact
          </Link>
          <div className="flex space-x-4 items-center mt-4">
            <button className="text-white">
              <img src={vertical} alt="Vertical Divider" />
            </button>
            <button className="text-white">
              <img src={user} alt="User" />
            </button>
            <button className="bg-gradient-to-r from-purple-500 to-red-500 text-white px-6 py-2 rounded-full">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
