import React from "react";
import { Link } from "react-router-dom";
// import Header from '../components/Header';

const mockItems = [
  { id: "1", title: "Vintage Denim Jacket", image: "/sample1.jpg" },
  { id: "2", title: "Boho Floral Dress", image: "/sample2.jpg" },
  { id: "3", title: "Striped Polo Tee", image: "/sample3.jpg" },
  { id: "4", title: "Canvas Tote Bag", image: "/sample4.jpg" },
];

const BrowseItems = () => {
  return (
    <div className="bg-[#f5efe5] min-h-screen text-gray-800">
      {/* Header */}
      {/* <Header /> */}


      {/* Page Title */}
      <section className="px-6 py-8">
        <h2 className="text-3xl font-bold mb-4">Browse Items</h2>
        <p className="text-gray-600 mb-6">Explore what others are swapping!</p>

        {/* Grid of Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockItems.map((item) => (
            <Link
              to={`/product/${item.id}`}
              key={item.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded mb-3"
              />
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BrowseItems;
