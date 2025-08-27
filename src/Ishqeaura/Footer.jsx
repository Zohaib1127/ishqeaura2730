import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#3e2c2c] text-white py-10 mt-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Ishq-e-<span className="text-[#d4a373]">Aura</span>
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            Luxury perfumes crafted with passion and elegance. 
            Discover your signature scent today.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-[#d4a373] transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-[#d4a373] transition">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#d4a373] transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#d4a373] transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm md:text-base">
            <a 
              href="https://facebook.com/share/1D9i5Z59F9" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-[#d4a373]"
            >
              🌐 Facebook
            </a>
            <a 
              href="https://instagram.com/ishqeaura2730" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-[#d4a373]"
            >
              📸 Instagram
            </a>
            <a 
              href="https://tiktok.com/@ishqeaura2730" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-[#d4a373]"
            >
              🎵 TikTok
            </a>
            <a 
              href="https://s.daraz.pk/s.bgZUu" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-[#d4a373]"
            >
              🛒 Daraz
            </a>
            <a 
              href="https://wa.me/c/923219765772" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-[#d4a373]"
            >
              📖 WhatsApp Catalog
            </a>
            <a 
              href="https://whatsapp.com/channel/0029VaAJhCoG3R3oUHlH1Z25" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-[#d4a373]"
            >
              📢 WhatsApp Channel
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-gray-400 mt-10 border-t border-gray-700 pt-6 text-sm">
        © {new Date().getFullYear()} Ishq-e-Aura. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
