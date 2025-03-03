import React from "react";
import { useNavigate } from "react-router-dom";
import headphoneImage from "../assets/headphones.jpg";
import phoneImage from "../assets/elegant-smartphone.jpg";

const PromoCards = () => {
  const navigate = useNavigate();

  const handleShopClick = () => {
    navigate("/signup");
  };

  return (
    <div className=" flex flex-col items-center justify-center  bg-gray-100 py-7">
      {/* Page Title and Description */}
      <div className="text-center mb-6 px-4">
        <p className="text-2xl font-semibold text-gray-700">
          Shop the latest gadgets, and accessories at unbeatable prices
        </p>
      </div>

      {/* Promo Cards */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full px-4">
        {/* First Promo Card - Smartphone */}
        <div
          className="relative w-full md:w-[700px] h-[400px] rounded-lg shadow-lg overflow-hidden text-white flex items-center justify-center bg-cover bg-center transform transition-transform duration-300 hover:scale-105"
          style={{ backgroundImage: `url(${phoneImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center p-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold">Holiday Deals</h3>
              <h2 className="text-4xl font-bold mt-2">Up to 30% Off</h2>
              <p className="text-sm mt-2">Selected Smartphone Brands</p>
              <button
                onClick={handleShopClick}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>

        {/* Second Promo Card - Headphones */}
        <div
          className="relative w-full md:w-[700px] h-[400px] rounded-lg shadow-lg overflow-hidden text-white flex items-center justify-center bg-cover bg-center transform transition-transform duration-300 hover:scale-105"
          style={{ backgroundImage: `url(${headphoneImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center p-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold">Take Your</h3>
              <h2 className="text-4xl font-bold mt-2">Sound Anywhere</h2>
              <p className="text-sm mt-2">Top Headphone Brands</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoCards;