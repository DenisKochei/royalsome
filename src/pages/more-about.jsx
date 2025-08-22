import React from "react";

export default function MoreAboutUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div>
            <img
              src="/about.jpeg" // <-- replace with your image path
              alt="About Royalsome Insurance"
              className="rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div>
            <h4 className="text-blue-600 font-semibold uppercase tracking-wide mb-2">
              About the Company
            </h4>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Background</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              A strong desire to offer good and reliable insurance service in Kenya pushed Sammy
              Kochei to establish Royalsome Insurance Agency in 2019. It was first registered as
              Sammy Kochei Kipkurui Agency and later Royalsome Insurance Agency the following year.
              Having worked in insurance industry for over 10 years, Kochei had first hand
              experience of challenges faced by clients. While working in accounts, agency service,
              medical claims, general underwriting, administration, business distribution and
              marketing departments; the founder gained a lot of experience in insurance. This
              planted in him a need and strong urge to establish this reputable agency. The six
              years in service has seen the firm increase its market share in Northrift region of
              Kenya. At the beginning of the year 2021, efforts have been made to widen the
              geographical region of influence to include South Rift, Western, Nyanza and Nairobi.
              This is beginning to bear fruits.
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-center space-x-2">
                <span className="text-yellow-500 font-bold">›</span>
                <span className="font-semibold text-gray-800">Experienced Team</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-yellow-500 font-bold">›</span>
                <span className="font-semibold text-gray-800">Online Insurance Assistant</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-yellow-500 font-bold">›</span>
                <span className="font-semibold text-gray-800">Insurance Coverage</span>
              </li>
            </ul>

            {/* <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
              Read More
            </button> */}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Leadership Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* CEO */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <img
                src="/image1.jpeg" // replace with real image
                alt="CEO"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Sammy Kochei</h3>
              <p className="text-blue-600">Chief Executive Officer</p>
            </div>

            {/* Marketing Director */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <img
                src="/image2.jpeg" // replace with real image
                alt="Marketing Director"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Doe</h3>
              <p className="text-blue-600">Marketing Director</p>
            </div>

            {/* Operations Manager */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <img
                src="/image3.jpeg"
                alt="Operations Manager"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Smith</h3>
              <p className="text-blue-600">Operations Manager</p>
            </div>

            {/* Customer Relations Manager */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <img
                src="/image5.jpeg"
                alt="Customer Relations Manager"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Mary Ann</h3>
              <p className="text-blue-600">Customer Relations Manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
