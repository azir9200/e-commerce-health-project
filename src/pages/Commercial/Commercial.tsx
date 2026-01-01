import { Link } from "react-router-dom";
import Design from "./Design";
import Equipment from "./Equipment";
import Resource from "./Resources";

const Commercial = () => {
  return (
    <div className=" bg-gray-100 mt-20">
      <div className="mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 pt-20">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl font-extrabold mb-6">
              WORKING WITH <span className="tracking-widest">FIT-GEAR</span>
            </h1>

            <p className="text-gray-700 leading-relaxed mb-6">
              At REP, we specialize in creating high-performance, highly
              functional training environments tailored to your unique space and
              goals. Whether you're outfitting a corporate wellness center,
              university gym, or boutique training facility, we design every
              inch to deliver maximum efficiency and versatility.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Our process starts with a deep understanding of your vision.
              You'll work directly with a dedicated account manager and our
              expert outfitting team to explore layout concepts that unlock your
              space’s full potential. From there, we turn your ideas into
              reality with collaborative planning sessions—either in person or
              virtual— featuring immersive 3D digital renderings of your
              facility.
            </p>

            <h3 className="text-gray-600 font-bold tracking-wide">
              WE’RE WITH YOU EVERY STEP OF THE WAY
            </h3>

            {/* BUTTONS */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link to="/contact">
                <button className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900  text-white text-semibold hover:bg-blue-950 px-6 py-3 rounded">
                  CONTACT US
                </button>
              </Link>
              <Link to="/supplement">
                <button className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900  text-white text-semibold hover:bg-blue-950 px-6 py-3 rounded">
                  BOOK CONSULT
                </button>
              </Link>
              <Link to="/product-page">
                <button className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900  text-white text-semibold hover:bg-blue-950 px-6 py-3 rounded">
                  ABOUT HEALTH
                </button>
              </Link>
              <Link to="/about">
                <button className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900  text-white text-semibold hover:bg-blue-950 px-6 py-3 rounded">
                  Book Appointment
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full">
            <img
              src="https://i.ibb.co/DHLcnFTf/Designs-05.jpg"
              alt="Commercial Gym Equipment"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
        <Design />
        <Equipment />
        <Resource />
      </div>
    </div>
  );
};

export default Commercial;
