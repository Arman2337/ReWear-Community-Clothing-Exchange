import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import LandingPage from "./LandingPage";
import ItemDetailPage from "./ItemDetailPage";
import UserDashboard from "./UserDashboard";
import ProductDetail from "./ProductDetail";
import AdminPanel from "./AdminPanel";
import BrowseItems from "./BrowseItems";

function App() {
  return (
    <Router>
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
