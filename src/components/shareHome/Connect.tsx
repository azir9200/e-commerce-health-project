import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Connect = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

      {/* Contact Form Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Information Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-lg mb-4">
          For any inquiries, feel free to reach out to us via the following:
        </p>
        <ul className="space-y-2 text-lg">
          <li>
            <strong>Email:</strong> support@fitgear.com
          </li>
          <li>
            <strong>Phone:</strong> +1 (123) 456-7890
          </li>
          <li>
            <strong>Address:</strong> 123 Fitness Ave, FitCity, FC 12345
          </li>
        </ul>
      </div>

      {/* Social Media Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            target="_blank"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="#"
            target="_blank"
            className="text-pink-600 hover:text-pink-800"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="#"
            target="_blank"
            className="text-blue-400 hover:text-blue-600"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="#"
            target="_blank"
            className="text-blue-700 hover:text-blue-900"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>

      {/* Google Map Section (Optional) */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Our Location
        </h2>
        <div className="flex justify-center">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509487!2d144.95373531531677!3d-37.81621897975192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5772f38e12a7d0!2sVictoria%20Harbour%2C%20Docklands%20VIC%203008!5e0!3m2!1sen!2sau!4v1642735822086!5m2!1sen!2sau"
            width="100%"
            height="400"
            loading="lazy"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>

      {/* FAQ Section (Optional) */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>
        <p>
          Have any questions? Check out our{" "}
          <Link to="/faq" className="text-blue-500 underline">
            FAQ page
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Connect;