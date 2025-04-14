import React from "react";

const Products = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 999.99,
      image:
        "https://img.freepik.com/free-photo/desk-with-laptop_23-2147615123.jpg?uid=R189857768&ga=GA1.1.1217248855.1740992013&semt=ais_hybrid",
    },
    {
      id: 2,
      name: "Headphone",
      price: 149.99,
      image:
        "https://img.freepik.com/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072236.jpg?uid=R189857768&ga=GA1.1.1217248855.1740992013&semt=ais_hybrid",
    },
    {
      id: 3,
      name: "Smartphone",
      price: 799.99,
      image:
        "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?uid=R189857768&ga=GA1.1.1217248855.1740992013&semt=ais_hybrid",
    },
    {
      id: 4,
      name: "Smartwatch",
      price: 299.99,
      image:
        "https://img.freepik.com/free-photo/smartwatch-screen-digital-device_53876-96854.jpg?uid=R189857768&ga=GA1.1.1217248855.1740992013&semt=ais_hybrid",
    },
    {
      id: 5,
      name: "Camera",
      price: 499.99,
      image:
        "https://img.freepik.com/free-photo/dslr-camera_1203-8515.jpg?uid=R189857768&ga=GA1.1.1217248855.1740992013&semt=ais_hybrid",
    },
    {
      id: 6,
      name: "Gaming Console",
      price: 499.99,
      image:
        "https://img.freepik.com/free-photo/video-game-controller_53876-93907.jpg?uid=R189857768&ga=GA1.1.1217248855.1740992013&semt=ais_hybrid",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Shop now
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {product.name}
                </h3>
                <p className="text-lg text-gray-700 mt-2">${product.price}</p>
                <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;