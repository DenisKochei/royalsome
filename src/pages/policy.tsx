import { Briefcase, Target, Users, Award } from "lucide-react";

export default function PolicySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE - Images + Badge */}
        <div className="relative w-full flex justify-center md:justify-start">
          {/* Dotted Background */}
          <div className="absolute -top-8 -left-8 w-40 h-40 bg-[radial-gradient(circle,_#dbeafe_2px,_transparent_2px)] [background-size:16px_16px] z-0"></div>

          {/* Main Image */}
          <img
            src="/family.jpeg"
            alt="Insurance Family"
            className="relative rounded-2xl shadow-lg w-full max-w-md object-cover z-10"
          />

          {/* Smaller Image (overlap) */}
          <img
            src="/image5.jpeg"
            alt="Meeting"
            className="absolute -bottom-10 -right-6 w-40 md:w-56 rounded-xl shadow-lg border-4 border-white z-20"
          />

          {/* Blue Circle Badge */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 
                          md:left-0 md:translate-x-0 md:-left-12 md:-bottom-12 
                          bg-blue-600 text-white rounded-full w-28 h-28 md:w-36 md:h-36 
                          flex flex-col items-center justify-center text-center shadow-lg p-3 z-30">
            <span className="text-xl md:text-3xl font-bold">12+</span>
            <p className="text-[10px] md:text-xs leading-snug mt-1">
              We have more <br /> than years of <br /> experience
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - Text + Features */}
        <div className="text-center md:text-left">
          {/* Small Label */}
          <p className="text-blue-600 font-semibold mb-2">About Our Company</p>

          {/* Big Heading */}
          <h2 className="text-2xl md:text-4xl font-bold leading-snug mb-4">
            We Provide <span className="text-blue-900">Best Insurance Policy</span> <br className="hidden md:block" />
            for Any Purpose
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            facilis, doloremque laudantium sapiente maiores provident obcaecati!
            Your protection is our priority.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start space-x-3">
              <Briefcase className="text-blue-600 w-6 h-6 shrink-0" />
              <div>
                <h4 className="font-semibold">Business Service</h4>
                <p className="text-sm text-gray-500">Quickly productive in just time strategic theme.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Target className="text-blue-600 w-6 h-6 shrink-0" />
              <div>
                <h4 className="font-semibold">Marketing Plan</h4>
                <p className="text-sm text-gray-500">Quickly productive in just time strategic theme.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Users className="text-blue-600 w-6 h-6 shrink-0" />
              <div>
                <h4 className="font-semibold">Team Management</h4>
                <p className="text-sm text-gray-500">Quickly productive in just time strategic theme.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Award className="text-blue-600 w-6 h-6 shrink-0" />
              <div>
                <h4 className="font-semibold">Award Won</h4>
                <p className="text-sm text-gray-500">Quickly productive in just time strategic theme.</p>
              </div>
            </div>
          </div>

          {/* CTA + Signature */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center md:justify-start gap-6">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 shadow">
              Read More
            </button>
            <span className="italic font-signature text-gray-700 text-xl">
              Signature
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
