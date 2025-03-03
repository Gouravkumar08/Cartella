import React from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa"; // Importing icons
import logo from "../assets/Cartella_logo.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-black to-gray-800 w-full h-[4rem] flex items-center justify-between px-4 md:px-6">
      {/* Logo */}
      <div
        className="text-white flex items-center font-bold text-3xl hover:text-blue-400 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          className="w-[40px] h-[40px] cursor-pointer hover:scale-110 duration-300 mx-2"
          src={logo}
          alt="Cartella Logo"
        />
        Cartella
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-6 text-white text-lg">
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
      <div className="flex-grow mx-4 md:mx-6">
        <input
          type="text"
          className="w-full px-3 h-[2rem] border bg-gray-200 text-black rounded-xl outline-none"
          placeholder="Search"
        />
      </div>

      {/* User and Cart Icons */}
      <div className="flex items-center gap-4 md:gap-6 text-white text-2xl">
        <FaUser className="cursor-pointer hover:text-blue-400 duration-300" />
        <FaShoppingCart className="cursor-pointer hover:text-blue-400 duration-300" />
      </div>
    </div>
  );
}