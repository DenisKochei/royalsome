// src/components/WhatsAppButton.jsx
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText((prev) => !prev);
    }, 3000); // toggle text every 3s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 flex items-center space-x-2 z-50">
      {/* Interval text */}
      {showText && (
        <span className="bg-green-500 text-white px-3 py-1 rounded-lg shadow-md animate-bounce">
          Make inquiries
        </span>
      )}

      {/* WhatsApp button */}
      <a
        href="https://wa.me/254700000000" // replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}
