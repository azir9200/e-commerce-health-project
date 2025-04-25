import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const ContactPage = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    toast.success(
      "You Message sent to the authority, You will have response as soon as possible, thank you."
    );
  };

  return (
    <div className=" bg-slate-600 min-h-screen flex flex-col items-center justify-center py-10 px-4 mt-6">
      <h1 className="text-3xl font-bold text-white mb-6">Contact Us</h1>

      <div className="max-w-4xl bg-slate-700 shadow-lg rounded-lg p-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-white mb-6">
              Have a question or want to reach out? We'd love to hear from you!
            </p>
            <div className="mb-4">
              <h3 className="text-lg font-medium text-white">Address:</h3>
              <p className="text-white">123 Fitness Street, Lisbon, Portugal</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-700">Phone:</h3>
              <p className="text-white">+351 123 456 789</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-medium text-white">Email:</h3>
              <p className="text-white">info@fitnessstore.com</p>
            </div>
            <div className="flex space-x-4 mt-4">
              {/* Social Media Links */}
              <a
                href="#"
                className="rounded-md  text-white  hover:bg-emerald-500 hover:text-slate-800"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a
                href="#"
                className="rounded-md  text-white  hover:bg-emerald-500 hover:text-slate-800"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-800"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Send a Message
            </h2>
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-black text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-200 focus:outline-none px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-200 focus:outline-none px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  placeholder="Your Message"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-200 focus:outline-none px-3 py-2"
                  rows={4}
                ></textarea>
              </div>

              <button
                type="submit"
                // onClick={() => navigate("/products")}
                className="w-full bg-white  text-black  hover:bg-emerald-500 hover:text-white text-xl font-bold py-2 px-4 rounded shadow-md transition duration-300 mb-4"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
