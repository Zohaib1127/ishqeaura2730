import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#f5f0e6] shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#3e2c2c] tracking-wide">
          Ishq-e<span className="text-[#d4a373]">-Aura</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-[#d4a373] transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="hover:text-[#d4a373] transition-colors duration-300"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-[#d4a373] transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-[#d4a373] transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {menuOpen ? (
            <FaTimes
              className="text-2xl text-[#3e2c2c] cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <FaBars
              className="text-2xl text-[#3e2c2c] cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-[#f5f0e6] flex flex-col space-y-6 py-6 px-8 text-lg font-medium shadow-md">
          <li>
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#d4a373] transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#d4a373] transition-colors duration-300"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#d4a373] transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#d4a373] transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
