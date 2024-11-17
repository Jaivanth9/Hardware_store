import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/Blessify.jpeg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-200 backdrop-blur-md text-black p-4 shadow-lg relative">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Blessify Logo"
            className="h-12 w-12 rounded-full"
          />
          <Link
            to="/eshwar-traders"
            className="font-bold text-2xl md:text-3xl hover:text-red-500"
          >
            Eshwar Traders
          </Link>
        </div>
        <button
          className="md:hidden p-2 hover:bg-gray-800 rounded-lg"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className="hidden md:flex space-x-8 items-center text-lg font-medium">
          <Link to="/eshwar-traders" className="hover:text-red-500 transition">
            Home
          </Link>
          <Link to="/products" className="hover:text-red-500 transition">
            Products
          </Link>
          <Link to="/services" className="hover:text-red-500 transition">
            Services
          </Link>
          
          <div className="flex space-x-6">
            <Link to="/login">
              <button className="bg-white text-red-600 px-6 py-3 rounded-full hover:bg-red-100 transition">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-red-800 text-white px-6 py-3 rounded-full hover:bg-red-700 transition">
                Signup
              </button>
            </Link>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black md:hidden shadow-lg">
            <nav className="flex flex-col p-4 space-y-4">
              <Link
                to="/"
                className="hover:text-red-500 transition px-4 py-2 hover:bg-gray-800 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="hover:text-red-500 transition px-4 py-2 hover:bg-gray-800 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/services"
                className="hover:text-red-500 transition px-4 py-2 hover:bg-gray-800 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
          
              <div className="flex flex-col space-y-4 pt-4 border-t border-gray-700">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full bg-white text-red-600 px-6 py-3 rounded-full hover:bg-red-100 transition">
                    Login
                  </button>
                </Link>
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full bg-red-800 text-white px-6 py-3 rounded-full hover:bg-red-700 transition">
                    Signup
                  </button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}