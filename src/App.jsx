import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Ishqeaura/Navbar";
import Home from "./Ishqeaura/Home";
import Products from "./Ishqeaura/Products";
import About from "./Ishqeaura/About";
import Contact from "./Ishqeaura/Contact";
import Footer from "./Ishqeaura/Footer";
import ProductDetails from "./Ishqeaura/Details"; // new

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} /> {/* new */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
