import React from "react";

export default function ContactUs() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="w-full h-64 flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-white text-4xl md:text-5xl font-bold">
          Contact Us
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                placeholder="Write your message here..."
                rows="5"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              Our team is ready to assist you with any questions, claims, or
              support you need regarding your insurance policy.
            </p>

            <div className="space-y-4">
              <p className="flex items-center gap-3">
                <span className="text-blue-600 text-xl">📍</span>
                123 Insurance Street, Nairobi, Kenya
              </p>
              <p className="flex items-center gap-3">
                <span className="text-blue-600 text-xl">📞</span>
                +254 700 123 456
              </p>
              <p className="flex items-center gap-3">
                <span className="text-blue-600 text-xl">✉️</span>
                support@royalsomeinsurance.com
              </p>
              <p className="flex items-center gap-3">
                <span className="text-blue-600 text-xl">🕒</span>
                Mon - Fri: 9:00 AM - 5:00 PM
              </p>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="mt-8">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.19725485661!2d36.8219467!3d-1.2920659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c9c7e3df9%3A0xdea5b6d529a8c6df!2sNairobi!5e0!3m2!1sen!2ske!4v1692293237890!5m2!1sen!2ske"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
