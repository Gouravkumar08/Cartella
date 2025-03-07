import React from "react";

const ShopByCategory = () => {
  const categories = [
    {
      name: "Laptop",
      image:
        "https://img.freepik.com/free-photo/desk-with-laptop_23-2147615123.jpg?uid=R189857768&ga=GA1.1.1217248855.1740992013&semt=ais_hybrid",
    },
    {
      name: "Headphone",
      image:
        "https://img.freepik.com/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072236.jpg?uid=R189857768&ga=GA1.1.1217248855.1740992013&semt=ais_hybrid",
    },
    {
      name: "Mobile",
      image:
        "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?uid=R189857768&ga=GA1.1.1217248855.1740992013&semt=ais_hybrid",
    },
    {
      name: "Electronics",
      image:
        "https://img.freepik.com/free-photo/top-view-smartphone-with-keyboard-charger_23-2149404177.jpg?uid=R189857768&ga=GA1.1.1217248855.1740992013&semt=ais_hybrid",
    },
    {
      name: "Fashion",
      image:
        "https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg?uid=R189857768&ga=GA1.1.1217248855.1740992013&semt=ais_hybrid",
    },
    {
      name: "TVs",
      image:
        "https://img.freepik.com/free-photo/room-interior-design_23-2148899490.jpg?uid=R189857768&ga=GA1.1.1217248855.1740992013&semt=ais_hybrid",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
