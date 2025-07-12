import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LandingPage from "./pages/LandingPage";
import ItemDetailPage from "./pages/ItemDetailPage";
import UserDashboard from "./pages/UserDashboard";
import ProductDetail from "./pages/ProductDetail";
import AdminPanel from "./pages/AdminPanel";
import BrowseItems from "./pages/BrowseItems";
import Header from "./components/Header"; // ✅ use Header here

function App() {
  return (
    <Router>
      <Header /> {/* ✅ Shown on all pages */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/item/:id" element={<ItemDetailPage />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/browse" element={<BrowseItems />} />
      </Routes>
    </Router>
  );
}

export default App;
