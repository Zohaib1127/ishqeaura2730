import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div>
      {/* Hero Slider */}
      <Slider {...settings} className="w-full max-h-[500px] overflow-hidden">
        {[img1, img2, img3, img4, img5, img6, img7, img8].map((img, i) => (
          <div key={i}>
            <img
              src={img}
              alt={`Perfume ${i + 1}`}
              className="w-full h-[250px] sm:h-[400px] md:h-[500px] object-cover"
            />
          </div>
        ))}
      </Slider>

      {/* Tagline / Welcome Section */}
      <div className="text-center py-12 px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3e2c2c]">
          Discover Your Signature Scent
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#5c4747] max-w-2xl mx-auto">
          Explore our luxury collection of perfumes crafted to leave a lasting impression. 
          Elegant, timeless, and unforgettable.
        </p>
        <button
          onClick={() => navigate("/products")}
          className="mt-6 bg-[#d4a373] hover:bg-[#c08b5c] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md transition"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Home;
