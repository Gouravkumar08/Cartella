import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div id='contact' className="min-h-lvh flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>

      {/* Contact Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-8xl w-full">
        {/* Contact Form */}
        <div className="w-full md:w-1/2 bg-white p-7 rounded-lg shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <form className="space-y-1">
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                placeholder="Enter your message"
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;