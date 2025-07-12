import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
        <img src="/hanger.svg" alt="ReWear Logo" className="w-8 h-8" />
        <h1 className="text-2xl font-bold">ReWear</h1>
      </Link>

      <nav className="space-x-6 text-sm font-medium">
        <Link to="/browse" className="hover:underline">Browse</Link>
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/admin" className="hover:underline">Admin</Link>

        {!isLoggedIn && (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/register" className="hover:underline">Sign Up</Link>
          </>
        )}

        {isLoggedIn && (
          <button onClick={handleLogout} className="text-red-600 hover:underline">
            Logout
          </button>
        )}
      </nav>
    </header>
  );
}
