import { Handshake, Wallet, Target, Headphones } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      id: "01",
      icon: <Handshake className="w-10 h-10 text-blue-600" />,
      title: "Trusted Company",
      description:
        "We are committed to providing reliable insurance services that safeguard your future.",
    },
    {
      id: "02",
      icon: <Wallet className="w-10 h-10 text-blue-600" />,
      title: "Anytime Money Back",
      description:
        "Flexible refund policies that allow you to get your money back whenever you need.",
    },
    {
      id: "03",
      icon: <Target className="w-10 h-10 text-blue-600" />,
      title: "Always Plan Flexibly",
      description:
        "Choose from a wide range of customizable insurance plans that fit your lifestyle.",
    },
    {
      id: "04",
      icon: <Headphones className="w-10 h-10 text-blue-600" />,
      title: "24/7 Fast Support",
      description:
        "Our expert team is available round the clock to provide support whenever you need.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-blue-50 py-20 overflow-hidden">
      {/* Top Animated Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <div className="animate-wave-slow">
          <svg
            className="relative block w-[200%] h-24 text-blue-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 150"
            preserveAspectRatio="none"
          >
            <path
              d="M0,64L60,69.3C120,75,240,85,360,101.3C480,117,600,139,720,144C840,149,960,139,1080,122.7C1200,107,1320,85,1380,74.7L1440,64L1440,0L0,0Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <span className="text-sm font-medium text-blue-600 bg-blue-100 px-4 py-1 rounded-full">
          Our Features
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
          Insurance Provides You a <br /> Better Future
        </h2>

        {/* Features Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white shadow-lg rounded-2xl p-6 relative hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="flex justify-center">{feature.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mt-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                {feature.description}
              </p>

              {/* Number in background */}
              <span className="absolute top-4 right-4 text-gray-100 text-6xl font-bold select-none pointer-events-none">
                {feature.id}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Animated Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <div className="animate-wave-slow">
          <svg
            className="relative block w-[200%] h-24 text-blue-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 150"
            preserveAspectRatio="none"
          >
            <path
              d="M0,64L60,69.3C120,75,240,85,360,101.3C480,117,600,139,720,144C840,149,960,139,1080,122.7C1200,107,1320,85,1380,74.7L1440,64L1440,0L0,0Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
