// // import React from "react";
// // import { useParams } from "react-router-dom";
// // // import Header from '../components/Header';

// // const ProductDetail = () => {
// //   const { id } = useParams(); // for fetching product-specific data later

// //   return (
// //     <div className="min-h-screen bg-[#f5efe5] text-gray-800">
// //       {/* Header */}
// //       {/* <Header /> */}

// //       {/* Main Product Info */}
// //       <main className="max-w-6xl mx-auto p-8">
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
// //           {/* Product Image Upload */}
// //           <div className="bg-white p-4 rounded shadow h-96 flex justify-center items-center text-gray-500">
// //             <span>Add Images</span>
// //           </div>

// //           {/* Product Description */}
// //           <div className="bg-white p-6 rounded shadow flex flex-col gap-4">
// //             <textarea
// //               placeholder="Add Product Description"
// //               className="w-full h-48 p-3 rounded bg-gray-100 border border-gray-300"
// //             ></textarea>
// //             <button className="self-end bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
// //               Available / Swap
// //             </button>
// //           </div>
// //         </div>

// //         {/* Previous Listings */}
// //         <section>
// //           <h2 className="text-2xl font-semibold mb-4">Previous Listings:</h2>
// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
// //             {[1, 2, 3, 4].map((listingId) => (
// //               <div
// //                 key={listingId}
// //                 className="bg-white rounded-lg shadow p-4 h-48 flex items-center justify-center text-gray-500"
// //               >
// //                 Listing {listingId}
// //               </div>
// //             ))}
// //           </div>
// //         </section>
// //       </main>
// //     </div>
// //   );
// // };

// // export default ProductDetail;



// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const ProductDetail = () => {
//   const { id } = useParams(); // fetch product ID from URL
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get(`http://localhost:5000/api/items/${id}`)
//       .then((res) => {
//         setProduct(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching item:", err);
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) return <div className="p-8">Loading...</div>;
//   if (!product) return <div className="p-8 text-red-600">Item not found</div>;

//   return (
//     <div className="min-h-screen bg-[#f5efe5] text-gray-800">
//       <main className="max-w-6xl mx-auto p-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
//           {/* Product Image */}
//           <div className="bg-white p-4 rounded shadow h-96 flex justify-center items-center text-gray-500">
//             {product.imagePath ? (
//               <img
//                 src={`http://localhost:5000/${product.imagePath}`}
//                 alt={product.title}
//                 className="object-contain h-full"
//               />
//             ) : (
//               <span>No Image</span>
//             )}
//           </div>

//           {/* Product Info */}
//           <div className="bg-white p-6 rounded shadow flex flex-col gap-4">
//             <h2 className="text-2xl font-bold">{product.title}</h2>
//             <p className="text-gray-700">{product.description}</p>
//             <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
//               <p><strong>Category:</strong> {product.category}</p>
//               <p><strong>Type:</strong> {product.type}</p>
//               <p><strong>Size:</strong> {product.size}</p>
//               <p><strong>Condition:</strong> {product.condition}</p>
//               <p><strong>Status:</strong> {product.status}</p>
//               <p><strong>Owner:</strong> {product.owner?.name}</p>
//             </div>
//             <button className="self-start mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
//               Available / Swap
//             </button>
//           </div>
//         </div>

//         {/* Optional: Related Listings Placeholder */}
//         <section>
//           <h2 className="text-2xl font-semibold mb-4">Other Listings:</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {[1, 2, 3, 4].map((listingId) => (
//               <div
//                 key={listingId}
//                 className="bg-white rounded-lg shadow p-4 h-48 flex items-center justify-center text-gray-500"
//               >
//                 Listing {listingId}
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default ProductDetail;



import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null); // from localStorage token later
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    // Fetch current user (assuming backend has /api/auth/me endpoint)
    axios
      .get("http://localhost:5000/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setCurrentUserId(res.data._id);
      })
      .catch((err) => console.error("User fetch failed", err));

    // Fetch product details
    axios
      .get(`http://localhost:5000/api/items/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching item:", err);
        setLoading(false);
      });
  }, [id]);

  const handleSwapRequest = () => {
  const token = localStorage.getItem("token");

  axios.post(`http://localhost:5000/api/swap/swap/${product._id}`, {}, {
    headers: { Authorization: `Bearer ${token}` },
  })
  .then((res) => {
    alert(res.data.message);
  })
  .catch((err) => {
    alert(err?.response?.data?.message || "Swap request failed");
    console.error(err);
  });
};
  const handleEdit = () => {
    navigate(`/edit/${product._id}`);
  };

  if (loading) return <div className="p-8">Loading...</div>;
  if (!product) return <div className="p-8 text-red-600">Item not found</div>;

  return (
    <div className="min-h-screen bg-[#f5efe5] text-gray-800">
      <main className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Product Image */}
          <div className="bg-white p-4 rounded shadow h-96 flex justify-center items-center text-gray-500">
            {product.imagePath ? (
              <img
                src={`http://localhost:5000/${product.imagePath}`}
                alt={product.title}
                className="object-contain h-full"
              />
            ) : (
              <span>No Image</span>
            )}
          </div>

          {/* Product Info */}
          <div className="bg-white p-6 rounded shadow flex flex-col gap-4">
            <h2 className="text-2xl font-bold">{product.title}</h2>
            <p className="text-gray-700">{product.description}</p>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Type:</strong> {product.type}</p>
              <p><strong>Size:</strong> {product.size}</p>
              <p><strong>Condition:</strong> {product.condition}</p>
              <p><strong>Status:</strong> {product.status}</p>
              <p><strong>Owner:</strong> {product.owner?.name}</p>
            </div>

            {/* Conditional Buttons */}
            <div className="flex gap-4 mt-4">
              {currentUserId === product.owner?._id ? (
                <button
                  onClick={handleEdit}
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
                >
                  Edit Item
                </button>
              ) : (
                <button
                  onClick={handleSwapRequest}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Request Swap
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Related listings placeholder */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Other Listings</h2>
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
