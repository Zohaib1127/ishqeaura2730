import React from "react";
import img1 from "../assets/img1.jpg";
import aboutVideo from "../assets/about.mp4"; 

const About = () => {
  return (
    <div className="bg-[#f5f0e6] min-h-screen">
      <div className="container mx-auto px-6 py-16">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-[#3e2c2c] mb-12">
          About Us
        </h2>

        {/* Brand Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <img
            src={img1}
            alt="Perfume Brand"
            className="rounded-xl shadow-lg"
          />

          {/* Text */}
          <div>
            <h3 className="text-2xl font-semibold text-[#3e2c2c] mb-4">
              🌸 Our Story
            </h3>
            <p className="text-[#6b4f4f] leading-relaxed mb-6">
              <span className="font-semibold">Ishq-e-Aura</span> was born with a
              passion for creating perfumes that speak the language of emotions.
              Each fragrance is carefully crafted to capture the essence of love,
              elegance, and individuality. Inspired by the finest international
              scents, our collection brings together timeless sophistication with
              a touch of local artistry. We believe that every fragrance tells a
              story — and at Ishq-e-Aura, that story is yours.
            </p>

            <h3 className="text-2xl font-semibold text-[#3e2c2c] mb-4">
              🎯 Our Mission
            </h3>
            <p className="text-[#6b4f4f] leading-relaxed mb-6">
              Our mission is simple: to make luxury fragrances accessible to
              everyone without compromising on quality. We aim to deliver
              long-lasting perfumes that not only smell divine but also leave an
              unforgettable aura wherever you go. Every product is designed with
              love, precision, and passion — because you deserve nothing less
              than perfection.
            </p>

            <h3 className="text-2xl font-semibold text-[#3e2c2c] mb-4">
              💎 Why Choose Us?
            </h3>
            <ul className="list-disc list-inside text-[#6b4f4f] space-y-2">
              <li>
                ✔️ Premium Quality – Long-lasting perfumes inspired by
                world-class fragrances.
              </li>
              <li>
                ✔️ Affordable Luxury – Experience international scents at
                budget-friendly prices.
              </li>
              <li>
                ✔️ Unique Identity – Each fragrance is thoughtfully designed to
                suit different moods and personalities.
              </li>
              <li>
                ✔️ Trust & Authenticity – 100% original creations made with care
                and precision.
              </li>
              <li>
                ✔️ Customer Love – We believe in building relationships, not
                just sales — your satisfaction is our success.
              </li>
            </ul>
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-16 flex justify-center">
          <video
            src={aboutVideo}
            controls
            autoPlay
            loop
            muted
            className="rounded-xl shadow-lg w-full md:w-3/4 h-auto max-h-[500px] object-cover"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default About;
