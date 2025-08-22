import { useState } from "react";
import { Menu, X, Phone, Search } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  // { name: "Business Insurance", path: "/business" },
  // { name: "Home Insurance", path: "/home-insurance" },
    { name: "Insurance", path: "/insurance" },
  { name: "Claims", path: "/claims" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.jpg" alt="Royalsome Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-gray-600 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-blue-600 transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Call, CTA & Search */}
        <div className="hidden md:flex items-center gap-6">
          <button className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition">
            <Phone className="h-5 w-5" />
            <span>+254722395474</span>
          </button>
          <a
            href="#quote"
            className="px-4 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-md"
          >
            Get a Quote
          </a>
          <button className="text-gray-500 hover:text-blue-600 transition">
            <Search className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden bg-white shadow-lg px-6 py-4 space-y-4 text-gray-600 font-medium transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="block hover:text-blue-600 transition"
            onClick={() => setIsOpen(false)} // closes menu on click
          >
            {link.name}
          </Link>
        ))}

        {/* Phone & CTA in Mobile */}
        <div className="pt-4 border-t space-y-3">
          <button className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition">
            <Phone className="h-5 w-5" />
            <span>+254722395474</span>
          </button>
          <a
            href="#quote"
            className="block w-full text-center px-4 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-md"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
