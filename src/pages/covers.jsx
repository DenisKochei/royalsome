
import { motion } from "framer-motion";

const insuranceTypes = [
  {
    title: "Motor Insurance",
    description:
      "Protect your vehicle from accidents, theft, and damage with our comprehensive motor insurance.",
    longDescription:
      "Whether you drive a personal, commercial, or PSV vehicle, our motor insurance gives you peace of mind. Choose between third-party, fire & theft, or comprehensive cover tailored to your needs.",
     image: "/picture4.jpg", // Use the first image
  },
  {
    title: "Home Insurance",
    description:
      "Safeguard your home and belongings against fire, theft, and natural disasters.",
    longDescription:
      "Your home is your haven. Our policy covers damage to building and contents, with add-ons like natural disaster coverage, burglary protection, and more.",
    image: "/picture3.jpg"
  },
  {
    title: "Health Insurance",
    description:
      "Access quality medical care for you and your family when you need it most.",
    longDescription:
      "Cover includes outpatient services, hospitalization, maternity, and critical illness support—tailored to your healthcare needs.",
    image: "/picture5.jpg"
  },
  {
    title: "Travel Insurance",
    description:
      "Secure your travel with protection against emergencies, delays, and lost luggage.",
    longDescription:
      "Enjoy your journey with confidence—our travel insurance covers medical emergencies, trip cancellations, lost baggage, and more, both locally and abroad.",
    image:"/picture6.jpg" 
  },
  {
    title: "WIBA Insurance",
    description:
      "Protect your employees with Workers' Injury Benefits Act (WIBA) insurance.",
    longDescription:
      "Ensure your workforce is covered against workplace injuries and illnesses. Our WIBA insurance provides compensation for medical expenses, lost wages, and rehabilitation costs.",
    image:"/picture8.jpg" 
  },
  {
    title: "livestock Insurance",
    description:
      "Protect your livestock against diseases, accidents, and natural disasters.",
    longDescription:" Ensure your farm's productivity with our livestock insurance. Cover includes disease outbreaks, accidents, and natural disasters that can affect your animals' health and productivity.",
      image:"/picture7.jpg" 
  },
  {
    title: "Crops Insurance",
    description:
      "Safeguard your crops against adverse weather, pests, and diseases.",
    longDescription:" Protect your agricultural investments with our crop insurance. Cover includes losses from drought, floods, pests, and diseases that can impact your harvest.",
      image:"/picture9.jpg" 
  },
];

export default function InsuranceTypes() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 space-y-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">
          Insurance Covers We Offer
        </h2>

        {insuranceTypes.map((type, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <motion.div
              className="w-56 h-56 flex-shrink-0 rounded-xl shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={type.image}
                alt={type.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-bold text-blue-700">{type.title}</h3>
              <p className="mt-3 text-gray-600 text-lg">{type.description}</p>
              <p className="mt-3 text-gray-500">{type.longDescription}</p>
              <motion.button
                className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
