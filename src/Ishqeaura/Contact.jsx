import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#f5f0e6] min-h-screen">
      <div className="container mx-auto px-6 py-16">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-[#3e2c2c] mb-12">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            action="https://formspree.io/f/xqadakaw" // replace with your Formspree ID
            method="POST"
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-[#3e2c2c] mb-6">
              Send us a Message
            </h3>

            <div className="mb-4">
              <label className="block mb-2 text-[#3e2c2c]">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-[#3e2c2c]">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-[#3e2c2c]">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#d4a373] hover:bg-[#c08b5c] text-white py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-[#3e2c2c] mb-6">
              Get in Touch
            </h3>
            <p className="text-[#6b4f4f] mb-4">
              Have questions or want to place an order? Feel free to reach out
              to us anytime. We’re here to help you find your perfect fragrance.
            </p>

            <p className="text-[#3e2c2c] font-medium mb-2">
              📍 Location: Gujrat, Pakistan
            </p>
            <p className="text-[#3e2c2c] font-medium mb-2">
              📞 Phone: +92 317 7395554
            </p>
            <p className="text-[#3e2c2c] font-medium mb-6">
              ✉️ Email: ishqeaura@gmail.com
            </p>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/923177395554?text=Hi,%20I%20want%20to%20order%20a%20perfume"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition mb-6">
                Chat on WhatsApp
              </button>
            </a>

            {/* Socials */}
            <div className="flex space-x-6 text-2xl text-[#3e2c2c]">
  <a 
    href="https://facebook.com/share/1D9i5Z59F9" 
    target="_blank" 
    rel="noreferrer"
  >
    🌐 Facebook
  </a>
  <a 
    href="https://instagram.com/ishqeaura2730" 
    target="_blank" 
    rel="noreferrer"
  >
    📸 Instagram
  </a>
  <a 
    href="https://tiktok.com/@ishqeaura2730" 
    target="_blank" 
    rel="noreferrer"
  >
    🎵 TikTok
  </a>
  <a 
    href="https://s.daraz.pk/s.bgZUu" 
    target="_blank" 
    rel="noreferrer"
  >
    🛒 Daraz
  </a>
  <a 
    href="https://wa.me/c/923219765772" 
    target="_blank" 
    rel="noreferrer"
  >
    📖 WhatsApp Catalog
  </a>
  <a 
    href="https://whatsapp.com/channel/0029VaAJhCoG3R3oUHlH1Z25" 
    target="_blank" 
    rel="noreferrer"
  >
    📢 WhatsApp Channel
  </a>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
