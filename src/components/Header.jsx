import React from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa"; // Importing icons
import logo from "../assets/Cartella_logo.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-gradient-to-br from-black to-gray-800 w-full h-[4rem] flex items-center px-6">
        {/* Logo */}
        <div
          className="text-white flex font-bold text-amber-50 text-3xl hover:scale-110 hover:text-blue-400 cursor-pointer "
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            className="w-[40px] h-[40px] cursor-pointer hover:scale-110 duration-300 mx-2"
            src={logo}
            alt="Cartella Logo"
          />
          Cartella
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-white ml-10 text-lg">
          <a href="#hero" className="hover:text-blue-400 duration-300">
            Home
          </a>
          <a href="#about" className="hover:text-blue-400 duration-300">
            About
          </a>
          <a href="#contact" className="hover:text-blue-400 duration-300">
            Contact
          </a>
        </div>

        {/* Search Bar */}
        <div className="flex-grow flex justify-center">
          <input
            type="text"
            className="px-3 h-[2rem] w-[20rem] border bg-gray-200 text-black rounded-xl outline-none"
            placeholder="Search"
          />
        </div>

        {/* User and Cart Icons */}
        <div className="flex items-center gap-6 text-white text-2xl">
          <FaUser className="cursor-pointer hover:text-blue-400 duration-300" />
          <FaShoppingCart className="cursor-pointer hover:text-blue-400 duration-300" />
        </div>
      </div>
    </div>
  );
}
