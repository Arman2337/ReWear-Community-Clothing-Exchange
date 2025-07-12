import React, { useState, useEffect } from "react";


const mockListings = [
  {
    id: "1",
    title: "Denim Jacket",
    image: "/sample1.jpg",
    submittedBy: "user1@example.com",
    status: "pending",
  },
  {
    id: "2",
    title: "Vintage Sweater",
    image: "/sample2.jpg",
    submittedBy: "user2@example.com",
    status: "pending",
  },
];

const AdminPanel = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // Replace this with actual API/Firebase call
    setListings(mockListings);
  }, []);

  const handleStatusChange = (id, newStatus) => {
    const updated = listings.map((item) =>
      item.id === id ? { ...item, status: newStatus } : item
    );
    setListings(updated);
    // Optional: send status change to server
  };

  return (
    <div className="min-h-screen bg-[#f5efe5] p-6">
      <header className="mb-6 text-3xl font-bold text-gray-800">Admin Panel</header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {listings.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded mb-3"
            />
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600 mb-2">Submitted by: {item.submittedBy}</p>
            <div className="flex justify-between gap-2 mt-3">
              <button
                onClick={() => handleStatusChange(item.id, "approved")}
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
              >
                Approve
              </button>
              <button
                onClick={() => handleStatusChange(item.id, "rejected")}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
              >
                Reject
              </button>
              <button
                onClick={() => handleStatusChange(item.id, "removed")}
                className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
            {item.status !== "pending" && (
              <p className="mt-2 text-sm text-blue-700">Status: {item.status}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
