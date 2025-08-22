

const clients = [
  { name: "Digilance Global", logo: "/clients/digilance.png" },
  { name: "Digital Marketing", logo: "/clients/digital.png" },
  { name: "Keith Smart Home", logo: "/clients/keith.png" },
  { name: "Grace & Growth", logo: "/clients/grace.png" },
  { name: "ZaoDirect", logo: "/clients/zaodirect.png" },
  { name: "Digilance Global 2", logo: "/clients/digilance2.png" },
];

export default function Clients() {
  return (
    <section className="bg-white py-16 px-6 relative">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-blue-600 font-semibold uppercase tracking-wide mb-2">
          Companies we have worked with
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Our Clients
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 items-center justify-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center transition transform hover:scale-105"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
