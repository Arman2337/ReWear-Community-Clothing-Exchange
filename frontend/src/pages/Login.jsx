// import React from "react";
// import { Link } from "react-router-dom";

// const Login = () => {
//   return (
//     <div className="min-h-screen flex flex-col md:flex-row bg-[#f5efe5]">
//       {/* Left section: Logo and heading */}
//       <div className="flex flex-col justify-center items-center md:w-1/2 py-12">
//         <img src="/hanger.svg" alt="ReWear logo" className="w-20 h-20 mb-4" />

//         <h1 className="text-4xl font-bold text-gray-800">ReWear</h1>
//         <p className="text-lg text-gray-600 mt-2">Community Clothing Exchange</p>
//       </div>

//       {/* Right section: Login card */}
//       <div className="flex flex-col justify-center items-center md:w-1/2 p-6">
//         <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md">
//           <h2 className="text-3xl font-bold mb-6 text-gray-900">Log in</h2>
//           <form className="space-y-4">
//             <div>
//               <label className="block mb-1 text-gray-700">Email</label>
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full px-4 py-2 bg-gray-100 rounded-md text-gray-800 focus:outline-none"
//               />
//             </div>
//             <div>
//               <label className="block mb-1 text-gray-700">Password</label>
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full px-4 py-2 bg-gray-100 rounded-md text-gray-800 focus:outline-none"
//               />
//             </div>
//             <div className="text-right">
//               <Link
//                 to="/forgot-password"
//                 className="text-sm text-blue-600 hover:underline"
//               >
//                 Forgot password?
//               </Link>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
//             >
//               Log in
//             </button>
//           </form>
//           <p className="mt-4 text-center text-gray-700">
//             Don’t have an account?{" "}
//             <Link to="/register" className="text-blue-600 hover:underline">
//               Sign up
//             </Link>

//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(email, password);
      login(data.token);
      navigate("/"); // redirect to homepage
    } catch (error) {
      setErrorMsg(error.response?.data?.message || "Login failed.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#f5efe5]">
      {/* Left */}
      <div className="flex flex-col justify-center items-center md:w-1/2 py-12">
        <img src="/hanger.svg" alt="ReWear logo" className="w-20 h-20 mb-4" />
        <h1 className="text-4xl font-bold text-gray-800">ReWear</h1>
        <p className="text-lg text-gray-600 mt-2">Community Clothing Exchange</p>
      </div>

      {/* Right */}
      <div className="flex flex-col justify-center items-center md:w-1/2 p-6">
        <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Log in</h2>

          {errorMsg && (
            <p className="bg-red-100 text-red-600 p-2 mb-4 rounded">{errorMsg}</p>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-700">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-4 py-2 bg-gray-100 rounded-md"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-2 bg-gray-100 rounded-md"
              />
            </div>

            <div className="text-right">
              <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Log in
            </button>
          </form>

          <p className="mt-4 text-center text-gray-700">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
