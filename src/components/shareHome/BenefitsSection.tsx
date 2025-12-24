import React from "react";

const benefits = [
  {
    title: "Quality Products",
    description:
      "We offer top-notch fitness equipment that enhances your workout experience.",
    image:
      "https://images.healthshots.com/healthshots/en/uploads/2023/06/10230401/gym-1600x900.jpg",
  },
  {
    title: "Affordable Prices",
    description:
      "Get the best value for your money with our competitively priced products.",
    image: "https://i.postimg.cc/rwZDfdsc/pexels-ketut-subiyanto-4720822.jpg",
  },
  {
    title: "Expert Support",
    description:
      "Our team of experts is here to help you with any questions or concerns.",
    image: "https://i.postimg.cc/CMWTswSt/kike-vega-F2qh3yjz6-Jk-unsplash.jpg",
  },
  {
    title: "Fast Shipping",
    description:
      "Enjoy quick and reliable delivery for all your fitness equipment needs.",
    image: "https://i.postimg.cc/xCMqjtRT/pexels-pavel-danilyuk-6296018.jpg",
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="bg-slate-400 py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-2">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-sky-100 shadow-lg rounded-lg p-2 flex flex-col items-center text-center"
            >
              <img
                src={benefit.image}
                alt={benefit.title}
                className="h-44 w-84 object-cover mb-2 rounded-full"
              />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
