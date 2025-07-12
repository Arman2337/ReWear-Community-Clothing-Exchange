import React from "react";
import { Link } from "react-router-dom";

const ItemDetailPage = () => {
  return (
    <div className="min-h-screen bg-[#f5efe5] text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
        <div className="flex items-center gap-2">
          <img src="/hanger.svg" alt="ReWear Logo" className="w-8 h-8" />
          <h1 className="text-xl font-bold">ReWear</h1>
        </div>
        <nav className="space-x-6 text-sm font-medium">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/browse" className="hover:underline">Browse</Link>
          <Link to="/login" className="hover:underline">Login</Link>
        </nav>
      </header>

      {/* Item detail section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8 max-w-6xl mx-auto">
        {/* Product Image */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex items-center justify-center h-[400px]">
          <img
            src="/placeholder.png"
            alt="Clothing item"
            className="object-cover h-full w-full"
          />
        </div>

        {/* Product Info */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Vintage Denim Jacket</h2>
            <p className="text-gray-600 mb-4">Size M · Unisex · Good condition</p>
            <p className="text-gray-700 leading-relaxed">
              This vintage denim jacket has a classic faded look and comes with original buttons. It’s been gently worn and fits true to size.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
              Request Swap
            </button>
            <button className="border border-blue-600 text-blue-600 py-2 px-4 rounded hover:bg-blue-100 transition">
              Redeem with Points
            </button>
          </div>
        </div>
      </section>

      {/* Suggested Items */}
      <section className="px-6 py-8 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">You may also like</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-white rounded-lg shadow p-4 h-56 flex items-center justify-center text-gray-400"
            >
              Suggested Item {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ItemDetailPage;
