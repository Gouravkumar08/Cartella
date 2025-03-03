import React from "react";
import { useNavigate } from "react-router-dom";
import aboutImage from "../assets/about-banner.jpg"; // Adjust the path based on your project structure

const About = () => {
  const navigate = useNavigate();

  const handleShopClick = () => {
    navigate("/signup"); // Navigate to the Shop component
  };

  return (
    <div id='about'className="min-h-lvh flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* Page Title */}
      <h1 className="text-5xl font-bold text-gray-900 mb-8">About Cartella</h1>

      {/* About Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl w-full">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={aboutImage}
            alt="About Cartella"
            className="w-full h-auto rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            Cartella is your one-stop destination for the latest trends and
            exclusive deals. We are committed to providing high-quality products
            at unbeatable prices, ensuring a seamless shopping experience for our
            customers.
          </p>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Our mission is to make shopping easy, affordable, and enjoyable. From
            fashion to gadgets, we offer a wide range of products to suit your
            lifestyle.
          </p>
          <button
            onClick={handleShopClick}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg"
          >
            Explore Our Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;