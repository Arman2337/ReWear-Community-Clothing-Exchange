// import React from "react";
// import { Link } from "react-router-dom";

// const Register = () => {
//   return (
//     <div className="min-h-screen flex flex-col md:flex-row bg-[#f5efe5]">
//       {/* Left section: Registration form */}
//       <div className="flex flex-col justify-center items-center md:w-1/2 px-6 py-10">
//         {/* Avatar Placeholder */}
//         <div className="w-20 h-20 mb-6 rounded-full border-4 border-gray-400 flex items-center justify-center">
//           <span className="text-gray-500">🧍</span>
//         </div>

//         {/* Registration Form */}
//         <form className="w-full max-w-sm space-y-4 bg-white p-6 rounded-2xl shadow-md">
//           <h2 className="text-3xl font-bold text-center text-gray-800">Register</h2>
//           <input
//             type="text"
//             placeholder="Full Name"
//             className="w-full px-4 py-2 bg-gray-100 rounded text-gray-800 focus:outline-none"
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full px-4 py-2 bg-gray-100 rounded text-gray-800 focus:outline-none"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full px-4 py-2 bg-gray-100 rounded text-gray-800 focus:outline-none"
//           />
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             className="w-full px-4 py-2 bg-gray-100 rounded text-gray-800 focus:outline-none"
//           />

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
//           >
//             Register
//           </button>
//         </form>
//       </div>

//       {/* Right section: Info + Social Login */}
//       <div className="hidden md:flex flex-col justify-center items-center md:w-1/2 px-10">
//         <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md text-gray-800">
//           <h3 className="text-xl font-semibold mb-4">Why Join ReWear?</h3>
//           <ul className="list-disc ml-5 space-y-2">
//             <li>Form-based signup for security & control</li>
//             <li>Optional social login (Google, GitHub, etc.)</li>
//             <li>Redirects to dashboard after registration</li>
//           </ul>

//           <div className="mt-6">
//             <p className="text-sm text-gray-600">Already have an account?</p>
//             <Link
//               to="/"
//               className="text-blue-600 hover:underline text-sm font-medium"
//             >
//               Log in here
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api/auth";


const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPass) {
      setErrorMsg("Passwords do not match.");
      return;
    }

    try {
      await registerUser(name, email, password);
      navigate("/"); // redirect to login page
    } catch (err) {
      setErrorMsg(err.response?.data?.message || "Registration failed.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#f5efe5]">
      {/* Left */}
      <div className="flex flex-col justify-center items-center md:w-1/2 px-6 py-10">
        <div className="w-20 h-20 mb-6 rounded-full border-4 border-gray-400 flex items-center justify-center">
          <span className="text-gray-500">🧍</span>
        </div>

        <form onSubmit={handleRegister} className="w-full max-w-sm space-y-4 bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold text-center text-gray-800">Register</h2>

          {errorMsg && (
            <p className="bg-red-100 text-red-600 p-2 rounded">{errorMsg}</p>
          )}

          <input
            type="text"
            placeholder="Full Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 bg-gray-100 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 bg-gray-100 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 bg-gray-100 rounded"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            required
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            className="w-full px-4 py-2 bg-gray-100 rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
      </div>

      {/* Right */}
      <div className="hidden md:flex flex-col justify-center items-center md:w-1/2 px-10">
        <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md text-gray-800">
          <h3 className="text-xl font-semibold mb-4">Why Join ReWear?</h3>
          <ul className="list-disc ml-5 space-y-2">
            <li>Form-based signup for security & control</li>
            <li>Optional social login (Google, GitHub, etc.)</li>
            <li>Redirects to dashboard after registration</li>
          </ul>

          <div className="mt-6">
            <p className="text-sm text-gray-600">Already have an account?</p>
            <Link to="/login" className="text-blue-600 hover:underline text-sm font-medium">
              Log in here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
