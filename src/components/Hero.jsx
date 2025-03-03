import React from "react";
import Signup from "./Signup";
import { useNavigate } from "react-router-dom";


export default function HeroSection() {
    const navigate = useNavigate()

  return (
    
    <div
      className="relative w-full h-[60vh] flex flex-col items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url('https://5.imimg.com/data5/HA/FU/XH/GLADMIN-11701984/hero-animation-fallback-large.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold opacity-0 animate-fadeIn">
          Discover the Best Deals at{" "}
          <span className="text-blue-400">Cartella!</span>
        </h2>
        <p className="text-lg mt-2 opacity-0 animate-fadeIn delay-200">
          Shop the latest fashion, gadgets, and accessories at unbeatable
          prices.
        </p>
        <button
          onClick={() => {
            navigate('/signup')
          }}
          className="mt-4 px-6 py-2 bg-blue-400 text-black font-semibold rounded-md shadow-lg hover:bg-blue-700 hover:text-white transition-all opacity-0 animate-fadeIn delay-400"
        >
          Explore
        </button>
      </div>
    </div>
  );
}
