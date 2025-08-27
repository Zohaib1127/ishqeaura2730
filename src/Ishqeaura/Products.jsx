import React, { useState } from "react";
import { Link } from "react-router-dom";
import aa1 from "../assets/aa1.jpg";
import aa2 from "../assets/aa2.jpg";
import aa3 from "../assets/aa3.jpg";
import aa4 from "../assets/aa4.jpg";
import su1 from "../assets/su1.jpg";
import su2 from "../assets/su2.jpg";
import su3 from "../assets/su3.jpg";
import su4 from "../assets/su4.jpg";
import sl1 from "../assets/sl1.jpg";
import sl2 from "../assets/sl2.jpg";
import sl3 from "../assets/sl3.jpg";
import sl4 from "../assets/sl4.jpg";
import fi1 from "../assets/fi1.jpg";
import fi2 from "../assets/fi2.jpg";
import fi3 from "../assets/fi3.jpg";
import fi4 from "../assets/fi4.jpg";
import gu1 from "../assets/gu1.jpg";
import gu2 from "../assets/gu2.jpg";
import gu3 from "../assets/gu3.jpg";
import gu4 from "../assets/gu4.jpg";
import hu1 from "../assets/hu1.jpg";
import hu2 from "../assets/hu2.jpg";
import hu3 from "../assets/hu3.jpg";
import hu4 from "../assets/hu4.jpg";

const Products = () => {
  const [activeTab, setActiveTab] = useState("men");

  const menPerfumes = [
    {
      id: 1,
      name: "Sukoon – Eau de Parfum for Him",
      price: "2,700.00 PKR",
       originalPrice: "3,000 PKR", 
      images: [su1, su2],
      description: "Sukoon is inspired by White Oud: rich, creamy, and refined. A luxurious blend that brings serenity, depth, and timeless elegance to your presence.",
    },
    {
      id: 2,
      name: "Sukoon – Eau de Parfum with Tester",
      price: "2,950.00 PKR",
      images: [su3, su4],
      description: "Sukoon is inspired by White Oud: rich, creamy, and refined. A luxurious blend that brings serenity, depth, and timeless elegance to your presence.",
    },
    {
      id: 3,
      name: "👑 Sultan by Ishq-e-Aura 👑",
      price: "2,700.00 PKR",
      images: [sl1, sl2],
      description: "Sultan is inspired by Azzaro Wanted: powerful, masculine, and magnetic. Crafted for leaders who carry authority and charm.",
    },
    {
      id: 4,
      name: "Sultan with Fitoor Tester",
      price: "2,950.00 PKR",
      images: [sl3, sl4],
      description: "Sultan is inspired by Azzaro Wanted: powerful, masculine, and magnetic. Crafted for leaders who carry authority and charm.",
    },
    {
      id: 5,
      name: "🌊 Gumaan by Ishq-e-Aura 🌊",
      price: "2,700.00 PKR",
      images: [gu1, gu2],
         description: "Gumaan is inspired by Cool Water: fresh, crisp, and energizing. A fragrance that awakens your spirit with aquatic coolness.",
    },
    {
      id: 6,
      name: "Gumaan with Husn Tester",
      price: "2,950.00 PKR",
      images: [gu3, gu4],
        description: "Gumaan is inspired by Cool Water: fresh, crisp, and energizing. A fragrance that awakens your spirit with aquatic coolness.",
    },
  ];

  const womenPerfumes = [
    {
      id: 1,
      name: "Aatish – Eau de Parfum for Her",
      price: "2,700.00 PKR",
      images: [aa1, aa2],
          description: "Aatish is inspired by Bombshell: bold, vibrant, and unforgettable. A fragrance that ignites confidence and leaves a striking impression.",
    },
    {
      id: 2,
      name: "Aatish with Sukoon Tester",
      price: "2,950.00 PKR",
      images: [aa3, aa4],
         description: "Aatish is inspired by Bombshell: bold, vibrant, and unforgettable. A fragrance that ignites confidence and leaves a striking impression.",
    },
    {
      id: 3,
      name: "💖 Fitoor 💖",
      price: "2,700.00 PKR",
      images: [fi1, fi2],
      description: "Fitoor is inspired by Tommy Girl: playful, radiant, and youthful. Perfect for those who embrace joy and spontaneity.",
    },
    {
      id: 4,
      name: "Fitoor with Sultan Tester",
      price: "2,950.00 PKR",
      images: [fi3, fi4],
       description: "Fitoor is inspired by Tommy Girl: playful, radiant, and youthful. Perfect for those who embrace joy and spontaneity.",
    },
    {
      id: 5,
      name: "💎 Husn 💎",
      price: "2,700.00 PKR",
      images: [hu1, hu2],
       description: "Husn is inspired by Polo Girl: elegant, graceful, and captivating. A fragrance that celebrates femininity and sophistication.",
    },
    {
      id: 6,
      name: "Husn with Gumaan Tester",
      price: "2,950.00 PKR",
      images: [hu3, hu4],
         description: "Husn is inspired by Polo Girl: elegant, graceful, and captivating. A fragrance that celebrates femininity and sophistication.",
    },
  ];

  const perfumes = activeTab === "men" ? menPerfumes : womenPerfumes;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-[#3e2c2c]">
        Our Perfume Collection
      </h2>

      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <button
          onClick={() => setActiveTab("men")}
          className={`px-6 py-2 mx-2 rounded-lg font-medium transition ${
            activeTab === "men"
              ? "bg-[#d4a373] text-white"
              : "bg-gray-100 text-[#3e2c2c] hover:bg-gray-200"
          }`}
        >
          Men
        </button>
        <button
          onClick={() => setActiveTab("women")}
          className={`px-6 py-2 mx-2 rounded-lg font-medium transition ${
            activeTab === "women"
              ? "bg-[#d4a373] text-white"
              : "bg-gray-100 text-[#3e2c2c] hover:bg-gray-200"
          }`}
        >
          Women
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {perfumes.map((perfume) => (
          <div
            key={perfume.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl hover:scale-105 transform transition duration-700"
          >
            {/* Image */}
            <div className="w-full h-72 sm:h-80 md:h-96">
              <img
                src={perfume.images[0]}
                alt={perfume.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="p-6 text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-[#3e2c2c] truncate">
                {perfume.name}
              </h3>
              <p className="text-[#6b4f4f] mt-2 text-sm sm:text-base">
                {perfume.price}
              </p>

              {/* Buttons */}
              <div className="flex justify-center gap-4 mt-4">
                <Link
                  to={`/products/${perfume.id}`}
                  state={{ perfume }}
                  className="bg-gray-200 text-[#3e2c2c] px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                >
                  View Details
                </Link>
                 
               

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
