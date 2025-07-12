// import React from "react";
// import { Link } from "react-router-dom";

// const LandingPage = () => {
//     return (
//         <div className="bg-[#f5efe5] min-h-screen text-gray-800">
//             {/* Header */}
//             {/* <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
//                 <Link
//                     to="/"
//                     onClick={() => window.location.href = "/"}
//                     className="flex items-center gap-2 hover:opacity-80 transition"
//                 >
//                     <img src="/hanger.svg" alt="ReWear Logo" className="w-8 h-8" />
//                     <h1 className="text-2xl font-bold">ReWear</h1>
//                 </Link>


//                 <nav className="space-x-6 text-sm font-medium">
//                     <Link to="/browse" className="hover:underline">Browse</Link>
//                     <Link to="/login" className="hover:underline">Login</Link>
//                     <Link to="/register" className="hover:underline">Sign Up</Link>
//                 </nav>
//             </header> */}

//             {/* Hero Section */}
//             <section className="text-center py-12 px-4">
//                 <h2 className="text-4xl font-bold mb-4">Give Clothes a Second Life</h2>
//                 <p className="mb-6 text-lg text-gray-600">
//                     Swap, save, and support sustainable fashion with the community.
//                 </p>
//                 <div className="flex justify-center gap-4">
//                     <Link
//                         to="/register"
//                         className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
//                     >
//                         Start Swapping
//                     </Link>
//                     <Link
//                         to="/browse"
//                         className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-100 transition"
//                     >
//                         Browse Items
//                     </Link>
//                 </div>
//             </section>

//             {/* Carousel Placeholder */}
//             <section className="px-6 py-8">
//                 <h3 className="text-2xl font-semibold mb-4">Featured Clothing Items</h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                     {[1, 2, 3, 4].map((item) => (
//                         <div
//                             key={item}
//                             className="bg-white rounded-lg shadow-md p-4 h-48 flex items-center justify-center text-gray-400"
//                         >
//                             Image {item}
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* Categories Section */}
//             <section className="px-6 py-8">
//                 <h3 className="text-2xl font-semibold mb-4">Categories</h3>
//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//                     {["Men", "Women", "Kids", "Accessories", "Shoes", "Winterwear"].map(
//                         (cat) => (
//                             <div
//                                 key={cat}
//                                 className="bg-white p-4 rounded-md text-center shadow-sm hover:shadow-md transition"
//                             >
//                                 {cat}
//                             </div>
//                         )
//                     )}
//                 </div>
//             </section>

//             {/* Product Listings */}
//             <section className="px-6 py-8">
//                 <h3 className="text-2xl font-semibold mb-4">Latest Listings</h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                     {[1, 2, 3, 4].map((item) => (
//                         <div
//                             key={item}
//                             className="bg-white rounded-lg shadow-md p-4 h-56 flex items-center justify-center text-gray-400"
//                         >
//                             Product {item}
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* Optional Testimonials */}
//             <section className="px-6 py-12 text-center">
//                 <h3 className="text-xl font-semibold mb-4">What Our Users Say</h3>
//                 <p className="text-gray-600 italic">
//                     “I love how easy it is to swap clothes on ReWear. It’s a win-win!”
//                 </p>
//             </section>
//         </div>
//     );
// };

// export default LandingPage;



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  fetchFeaturedItems,
  fetchLatestItems,
  fetchCategories,
} from "../api/landing";

const LandingPage = () => {
  const [featured, setFeatured] = useState([]);
  const [latest, setLatest] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchFeaturedItems().then(setFeatured).catch(console.error);
    fetchLatestItems().then(setLatest).catch(console.error);
    fetchCategories().then(setCategories).catch(console.error);
  }, []);

  return (
    <div className="bg-[#f5efe5] min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-12 px-4">
        <h2 className="text-4xl font-bold mb-4">Give Clothes a Second Life</h2>
        <p className="mb-6 text-lg text-gray-600">
          Swap, save, and support sustainable fashion with the community.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/register"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Start Swapping
          </Link>
          <Link
            to="/browse"
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-100 transition"
          >
            Browse Items
          </Link>
        </div>
      </section>

      {/* Featured Clothing Items */}
      <section className="px-6 py-8">
        <h3 className="text-2xl font-semibold mb-4">Featured Clothing Items</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featured.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-lg shadow-md p-4 h-48 flex items-center justify-center text-gray-800"
            >
              {item.title}
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      {/* <section className="px-6 py-8">
        <h3 className="text-2xl font-semibold mb-4">Categories</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div
              key={cat}
              className="bg-white p-4 rounded-md text-center shadow-sm hover:shadow-md transition"
            >
              {cat}
            </div>
          ))}
        </div>
      </section> */}

      <section className="px-6 py-8">
  <h3 className="text-2xl font-semibold mb-4">Categories</h3>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {categories.length > 0 ? (
      categories.map((cat) => (
        <Link
          to={`/browse?category=${cat}`}
          key={cat}
          className="bg-white p-4 rounded-md text-center shadow-sm hover:shadow-md transition cursor-pointer"
        >
          {cat}
        </Link>
      ))
    ) : (
      <p className="text-gray-600 col-span-full">No categories found.</p>
    )}
  </div>
</section>


      {/* Latest Listings */}
      <section className="px-6 py-8">
        <h3 className="text-2xl font-semibold mb-4">Latest Listings</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {latest.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-lg shadow-md p-4 h-56 flex items-center justify-center text-gray-800"
            >
              {item.title}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-12 text-center">
        <h3 className="text-xl font-semibold mb-4">What Our Users Say</h3>
        <p className="text-gray-600 italic">
          “I love how easy it is to swap clothes on ReWear. It’s a win-win!”
        </p>
      </section>
    </div>
  );
};

export default LandingPage;
