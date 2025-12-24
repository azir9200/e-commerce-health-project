import {
  FaHandshake,
  FaShoppingBag,
  FaDumbbell,
  FaMoneyBillWave,
} from "react-icons/fa";

const resources = [
  {
    title: "STAY CONNECTED",
    icon: <FaHandshake size={48} />,
  },
  {
    title: "BUYING GUIDES",
    icon: <FaShoppingBag size={48} />,
  },
  {
    title: "SHOWROOMS",
    icon: <FaDumbbell size={48} />,
  },
  {
    title: "REP ADVANTAGE",
    icon: <FaMoneyBillWave size={48} />,
  },
];

const Resource = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16">
          COMMERCIAL EQUIPMENT RESOURCES
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {resources.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="mb-6 text-black">{item.icon}</div>

              {/* Title */}
              <h3 className="font-bold text-lg mb-4">{item.title}</h3>

              {/* Learn More */}
              <button className="flex items-center gap-2 text-sm font-semibold tracking-wide hover:underline">
                LEARN MORE
                <span className="text-xl">→</span>
              </button>

              {/* Divider */}
              <div className="w-full h-px bg-gray-200 mt-6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resource;
