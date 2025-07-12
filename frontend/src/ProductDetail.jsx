import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams(); // for fetching product-specific data later

  return (
    <div className="min-h-screen bg-[#f5efe5] text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
        <div className="flex items-center gap-2">
          <img src="/hanger.svg" alt="ReWear Logo" className="w-8 h-8" />
          <h1 className="text-xl font-bold">ReWear</h1>
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-2 rounded-md bg-gray-100 w-64 focus:outline-none"
        />
      </header>

      {/* Main Product Info */}
      <main className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Product Image Upload */}
          <div className="bg-white p-4 rounded shadow h-96 flex justify-center items-center text-gray-500">
            <span>Add Images</span>
          </div>

          {/* Product Description */}
          <div className="bg-white p-6 rounded shadow flex flex-col gap-4">
            <textarea
              placeholder="Add Product Description"
              className="w-full h-48 p-3 rounded bg-gray-100 border border-gray-300"
            ></textarea>
            <button className="self-end bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Available / Swap
            </button>
          </div>
        </div>

        {/* Previous Listings */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Previous Listings:</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((listingId) => (
              <div
                key={listingId}
                className="bg-white rounded-lg shadow p-4 h-48 flex items-center justify-center text-gray-500"
              >
                Listing {listingId}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductDetail;
