import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import signupImage from "../assets/signup-banner.jpg";
import logo from "../assets/Cartella_logo.png";

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    navigate("/");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="flex h-[550px] w-[800px] bg-gradient-to-br from-slate-50 to-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Side - Signup Form */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          {/* Logo and Cartella Name */}
          <div className="flex items-center space-x-2">
            <img
              className="w-[40px] cursor-pointer hover:scale-110 duration-300"
              src={logo}
              alt="Cartella Logo"
            />
            <h2 className="text-black text-3xl font-bold">Cartella</h2>
          </div>

          <h2 className="text-3xl font-bold text-blue-500 mt-6 mb-2">Sign Up</h2>
          <p className="text-gray-900 mb-6">Join Cartella & start shopping!</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-600" />
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="w-full bg-white text-gray-800 px-10 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-600" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full bg-white text-gray-800 px-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-600" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full bg-white text-gray-800 px-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 transition duration-300 py-2 rounded-md font-semibold"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-black text-center">
            Already have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => navigate("/login")}
            >
              Log in
            </span>
          </p>
        </div>

        {/* Right Side - Image */}
        <div
          className="w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${signupImage})` }}
        >
          <div className="w-full h-full bg-black bg-opacity-45 flex items-center justify-center">
            <h3 className="text-4xl font-bold text-white">
              Join the Cartella Community
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
