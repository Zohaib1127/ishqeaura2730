import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const { state } = useLocation();
  const perfume = state?.perfume;
  const [showForm, setShowForm] = useState(false);

  if (!perfume) {
    return <p className="text-center text-red-500">No product found.</p>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Images */}
        <div className="space-y-4">
          {perfume.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={perfume.name}
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          ))}
        </div>

        {/* Info */}
        <div>
          <h2 className="text-3xl font-bold text-[#3e2c2c]">{perfume.name}</h2>
          <p className="text-lg text-[#6b4f4f] mt-2">{perfume.price}</p>
          <p className="mt-4 text-gray-700 leading-relaxed">{perfume.description}</p>

          {/* Order Button */}
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="mt-6 bg-[#d4a373] text-white px-6 py-2 rounded-lg hover:bg-[#b58960] transition"
            >
              Order Now
            </button>
          ) : (
            /* Formspree Form */
            <form
              action="https://formspree.io/f/xqadakaw"
              method="POST"
              className="mt-6 bg-gray-50 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#3e2c2c]">
                Complete Your Order
              </h3>

              <input type="hidden" name="perfume" value={perfume.name} />

              <div className="mb-4">
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-2 border rounded mt-1"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-2 border rounded mt-1"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium">Phone</label>
                <input
                  type="text"
                  name="phone"
                  required
                  className="w-full p-2 border rounded mt-1"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium">Address</label>
                <textarea
                  name="message"
                  rows="3"
                  className="w-full p-2 border rounded mt-1"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#d4a373] text-white px-6 py-2 rounded-lg hover:bg-[#b58960] transition"
              >
                Submit Order
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
