const BenefitSplement = () => {
  const benefits = [
    {
      title: "Build Lean Muscle",
      icon: "💪",
      description:
        "Protein powders, creatine, and amino acids help increase muscle mass, strength, and workout performance when combined with proper training.",
    },
    {
      title: "Faster Recovery",
      icon: "⚡",
      description:
        "Supplements like BCAAs, glutamine, and electrolytes reduce muscle soreness and speed up recovery between intense workouts.",
    },
    {
      title: "Increase Energy & Focus",
      icon: "🔥",
      description:
        "Pre-workouts and natural stimulants improve energy levels, focus, and endurance so you can train harder and longer.",
    },
    {
      title: "Support Fat Loss",
      icon: "🏃‍♂️",
      description:
        "Fat burners, L-carnitine, and metabolism boosters support weight loss by increasing calorie burn and improving fat utilization.",
    },
    {
      title: "Boost Overall Health",
      icon: "🛡️",
      description:
        "Vitamins, minerals, omega-3s, and antioxidants support immune health, joint strength, and overall body wellness.",
    },
    {
      title: "Convenient Nutrition",
      icon: "🥤",
      description:
        "Supplements help you meet daily nutritional needs easily—perfect for busy lifestyles and consistent fitness goals.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto mb-12 px-4">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">
          Why Use <span className="text-blue-700">Fitness Supplements?</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Supplements are designed to support your fitness journey by enhancing
          performance, recovery, and overall health. When used correctly, they
          help you achieve your gym and body goals faster and more efficiently.
        </p>
      </div>

      {/* Benefit Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-2xl p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-3">
          Fuel Your Body. Transform Your Fitness.
        </h3>
        <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
          Choose high-quality supplements that match your goals—muscle gain, fat
          loss, strength, or overall wellness.
        </p>
        <span className="inline-block bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold">
          Explore Supplements Below 👇
        </span>
      </div>
    </section>
  );
};

export default BenefitSplement;
