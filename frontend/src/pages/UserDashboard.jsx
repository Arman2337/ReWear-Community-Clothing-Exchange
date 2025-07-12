import React from "react";
import { Link } from "react-router-dom";
// import Header from '../components/Header';

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-[#f5efe5] text-gray-800">
      {/* Header */}
      {/* <Header /> */}

      <main className="p-8 max-w-6xl mx-auto">
        {/* Profile Overview */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Avatar */}
          <div className="flex justify-center md:justify-start">
            <div className="w-32 h-32 rounded-full bg-gray-300"></div>
          </div>

          {/* User Info */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" value="Username" className="bg-white p-2 rounded border border-gray-300" disabled />
              <input type="email" value="user@example.com" className="bg-white p-2 rounded border border-gray-300" disabled />
              <input type="text" value="Location" className="bg-white p-2 rounded border border-gray-300" disabled />
              <input type="text" value="100 points" className="bg-white p-2 rounded border border-gray-300" disabled />
            </div>
            <textarea
              placeholder="Bio or preferences"
              className="bg-white p-3 mt-4 w-full h-24 rounded border border-gray-300"
              disabled
            ></textarea>
          </div>
        </div>

        {/* My Listings */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">My Listings</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((id) => (
              <div key={id} className="bg-white rounded-lg shadow p-4 h-48 flex items-center justify-center text-gray-500">
                Item {id}
              </div>
            ))}
          </div>
        </section>

        {/* My Purchases */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">My Purchases</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((id) => (
              <div key={id} className="bg-white rounded-lg shadow p-4 h-48 flex items-center justify-center text-gray-500">
                Purchase {id}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserDashboard;
