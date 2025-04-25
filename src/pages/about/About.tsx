import React from "react";

const About: React.FC = () => {

  return (
    <div className="bg-slate-700 py-12 mt-2">
      
      <div className="max-w-7xl text-white mx-auto px-4 sm:px-6  lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Welcome to FitGear Store!
          </h2>
          <p className="text-lg leading-relaxed">
            At <strong>FitGear Store</strong>, we believe that fitness is not
            just a goal—it’s a lifestyle. We are dedicated to providing
            top-quality fitness equipment and accessories to help you stay
            active, healthy, and strong. Whether you are a seasoned athlete or
            just beginning your fitness journey, we have everything you need to
            achieve your goals.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            Our mission is to empower individuals to live healthier lives by
            offering a wide range of high-quality fitness products that cater to
            all levels of fitness enthusiasts. We are passionate about helping
            our customers find the perfect gear to suit their needs, from
            weightlifting equipment to yoga accessories.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>
              Quality Products: We source the best fitness equipment to ensure
              durability and performance.
            </li>
            <li>
              Wide Range of Selections: From gym machines to small accessories,
              we offer a comprehensive selection for every fitness need.
            </li>
            <li>
              Customer-Centered Experience: Our platform is designed to make
              shopping for fitness gear effortless and enjoyable.
            </li>
            <li>
              Expert Support: Our customer support team is knowledgeable and
              always ready to help you find the right product.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <p className="text-lg leading-relaxed">
            - Top Fitness Equipment: State-of-the-art machines, weights, and
            workout accessories.
            <br />
            - Curated Collections: Carefully selected fitness gear for strength
            training, cardio, yoga, and more.
            <br />
            - Product Details and Reviews: Detailed product descriptions and
            honest customer reviews to help you make informed decisions.
            <br />- Secure Checkout: With integrated payment solutions like
            Stripe, we ensure a safe and smooth purchasing experience.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-lg leading-relaxed">
            We envision a world where fitness is accessible and enjoyable for
            everyone. By constantly evolving our product offerings and enhancing
            our customer experience, we strive to be your go-to fitness partner.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
          <p className="text-lg leading-relaxed">
            Our dedicated team is made up of fitness enthusiasts and experts who
            work tirelessly to bring you the best products and advice. We are
            passionate about fitness, and we bring that energy into everything
            we do—from product selection to customer service.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <p className="text-lg leading-relaxed">
            Have any questions or need help? Reach out to our support team at{" "}
            <a
              href="mailto:support@fitgearstore.com"
              className="text-blue-500 hover:underline"
            >
              support@fitgearstore.com
            </a>{" "}
            or visit our FAQ page for quick answers.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
