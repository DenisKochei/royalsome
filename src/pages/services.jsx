
import { useState } from "react";

const services = [
  {
    name: "Health Insurance",
    description: "Comprehensive health cover for individuals and families.",
    price: "From 5,000 ksh",
  },
  {
    name: "Life Insurance",
    description: "Secure your loved ones’ future with our life protection plans.",
    price: "From 10,000 ksh",
  },
  {
    name: "Motor Insurance",
    description: "Protect your vehicle against accidents, theft, and damage.",
    price: "From 7,000 ksh",
  },
  {
    name: "Travel Insurance",
    description: "Stay safe and covered during your local and international trips.",
    price: "From 3,000 ksh",
  },
  {
    name: "Home Insurance",
    description: "Protect your property and valuables from risks and disasters.",
    price: "From 8,000 ksh",
  },
  {
    name: "Business Insurance",
    description: "Tailored cover for businesses, SMEs, and large enterprises.",
    price: "Custom Pricing",
  },
  {
    name: "Education Policy",
    description: "Secure your children’s education with guaranteed savings.",
    price: "From 15,000 ksh",
  },
  {
    name: "Pension Plans",
    description: "Retirement savings and pension management solutions.",
    price: "From 12,000 ksh",
  },
  {
    name: "Disability Cover",
    description: "Financial support in case of injury or permanent disability.",
    price: "From 6,000 ksh",
  },
  {
    name: "Group Insurance",
    description: "Affordable and flexible group insurance packages.",
    price: "Custom Pricing",
  },
];

export default function Services() {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our Insurance Plans
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {visibleServices.map((service, index) => (
            <div
              key={index}
              className="bg-white text-gray-900 rounded-2xl shadow-lg p-8 flex flex-col justify-between hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-4">{service.name}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="font-bold text-blue-600 mb-4">{service.price}</div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Choose Plan
              </button>
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        <div className="mt-8 text-right">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 shadow"
          >
            {showAll ? "See Less ↑" : "See More →"}
          </button>
        </div>
      </div>
    </section>
  );
}
