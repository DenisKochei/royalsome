import { useState } from "react";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });

  // Remove TS annotations (just JS now)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quote Request:", formData);
    alert("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", type: "", message: "" });
  };

  return (
    <footer className="bg-blue-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo + About */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Royalsome</h3>
          <p className="text-gray-300 text-sm">
            Protecting your future with reliable and affordable insurance solutions.  
            Trusted by thousands across the country.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4">Insurance Plans</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Health Insurance</li>
            <li>Life Insurance</li>
            <li>Auto Insurance</li>
            <li>Business Insurance</li>
          </ul>
        </div>

        {/* Get a Quote Form */}
        <div>
          <h4 className="font-semibold mb-4">Get a Quote</h4>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-white text-gray-800 text-sm focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-white text-gray-800 text-sm focus:outline-none"
              required
            />
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-white text-gray-800 text-sm focus:outline-none"
              required
            >
              <option value="">Select Insurance Type</option>
              <option value="Health">Health Insurance</option>
              <option value="Life">Life Insurance</option>
              <option value="Auto">Auto Insurance</option>
              <option value="Business">Business Insurance</option>
            </select>
            <textarea
              name="message"
              placeholder="Additional Details"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className="w-full px-3 py-2 rounded bg-white text-gray-800 text-sm focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
            >
              Request Quote
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Royalsome Insurance. All rights reserved.
      </div>
    </footer>
  );
}
