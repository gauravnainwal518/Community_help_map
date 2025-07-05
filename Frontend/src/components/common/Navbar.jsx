import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll"; // optional smooth scroll

const navItems = ["Home", "About", "Services", "Map", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Optional: close menu on resize
  useEffect(() => {
    const handleResize = () => window.innerWidth > 768 && setIsOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-white fixed top-0 w-full shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-2xl font-semibold text-gray-800">
          Community Help Map
        </div>

        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className="text-gray-600 hover:text-gray-900 transition"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 border rounded-md text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Get Help
          </button>
        </div>

        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-gray-900 transition"
            >
              {item}
            </Link>
          ))}
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
          />
          <button className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Get Help
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
