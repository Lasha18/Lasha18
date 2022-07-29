import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/ErrorPage";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="profile"> Profile </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <div> Footer </div>
    </Router>
  );
}

export default App;
