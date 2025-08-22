export default function ClaimsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[url('/sllide6.jpeg')] text-white bg-cover bg-center  w-full py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Insurance Claims</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We’re here to make your claims process simple, transparent, and stress-free. 
          Follow the steps below to get started with your claim.
        </p>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">How to File a Claim</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">1. Report</h3>
            <p>Notify us of the incident online, via phone, or at our nearest branch.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">2. Submit Documents</h3>
            <p>Provide the necessary documents like claim forms, receipts, or police reports.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">3. Settlement</h3>
            <p>Our team reviews your claim and processes your settlement quickly.</p>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Required Documents</h2>
          <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
            <li className="bg-white p-4 rounded-lg shadow">✔️ Completed Claim Form</li>
            <li className="bg-white p-4 rounded-lg shadow">✔️ Copy of Insurance Policy</li>
            <li className="bg-white p-4 rounded-lg shadow">✔️ Police Report (if applicable)</li>
            <li className="bg-white p-4 rounded-lg shadow">✔️ Original Receipts / Invoices</li>
            <li className="bg-white p-4 rounded-lg shadow">✔️ Medical / Hospital Reports</li>
            <li className="bg-white p-4 rounded-lg shadow">✔️ Photos of Damages or Loss</li>
          </ul>
        </div>
      </section>

      {/* Claim Form */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Submit Your Claim</h2>
        <form className="bg-white shadow-md rounded-lg p-8 space-y-6">
          <div>
            <label className="block mb-2 font-medium">Full Name</label>
            <input type="text" className="w-full border rounded-lg p-3" placeholder="Enter your full name" />
          </div>
          <div>
            <label className="block mb-2 font-medium">Policy Number</label>
            <input type="text" className="w-full border rounded-lg p-3" placeholder="Enter your policy number" />
          </div>
          <div>
            <label className="block mb-2 font-medium">Claim Type</label>
            <select className="w-full border rounded-lg p-3">
              <option>Health Insurance</option>
              <option>Motor Insurance</option>
              <option>Property Insurance</option>
              <option>Life Insurance</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 font-medium">Description of Incident</label>
            <textarea className="w-full border rounded-lg p-3" rows={4} placeholder="Briefly describe the incident"></textarea>
          </div>
          <div>
            <label className="block mb-2 font-medium">Upload Documents</label>
            <input type="file" className="w-full border rounded-lg p-3" multiple />
          </div>
          <button className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition">
            Submit Claim
          </button>
        </form>
      </section>

      {/* Help Section */}
      <section className="bg-blue-900 text-white py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Need Assistance?</h2>
        <p className="mb-6">Call our 24/7 claims hotline or visit your nearest branch for support.</p>
        <div className="flex justify-center space-x-6">
          <a href="tel:+1234567890" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold">
            Call Now
          </a>
          <a href="/contact" className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
