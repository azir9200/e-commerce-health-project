import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomeSlide = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      transitionTime={500}
      interval={3000}
      className="relative "
    >
      <div className="relative h-screen/2">
        <img
          src="https://i.ibb.co/YRvx6Jr/pexels-shotpot-4047156.jpg"
          alt="Banner Image 1"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-6 bg-black bg-opacity-50 rounded">
            <h2 className="text-white text-6xl font-bold mb-4">
              Elevate Your Fitness Journey
            </h2>
            <p className="text-white text-xl mb-4">
              Discover premium equipment designed for success.
            </p>
            <a
              href="/product"
              className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>

      <div className="relative h-screen/2">
        <img
          src="https://i.ibb.co/gJBX42t/pexels-victorfreitas-897061.jpg"
          alt="Banner Image 3"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-6 bg-black bg-opacity-50 rounded">
            <h2 className="text-white text-6xl font-bold mb-4">
              Elevate Your Fitness Journey
            </h2>
            <p className="text-white text-xl mb-4">Achieve Your Goal.</p>
            <a
              href="/product"
              className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>

      <div className="relative h-screen/2">
        <img
          src="https://i.ibb.co/x6LyFyG/pexels-willpicturethis-1954524.jpg"
          alt="Banner Image 4"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-6 bg-black bg-opacity-50 rounded">
            <h2 className="text-white text-6xl font-bold mb-4">
              Elevate Your Fitness Journey
            </h2>
            <p className="text-white text-xl mb-4">
              Discover premium equipment designed for success.
            </p>
            <a
              href="/product"
              className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
      <div className="relative h-screen/2">
        <img
          src="https://i.ibb.co/Xz5FNq3/istockphoto-864793658-1024x1024.jpg"
          alt="Banner Image 5"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-6 bg-black bg-opacity-50 rounded">
            <h2 className="text-white text-6xl font-bold mb-4">
              Elevate Your Fitness Journey
            </h2>
            <p className="text-white text-xl mb-4">
              Explore Your Best Fitness Equipment.
            </p>
            <a
              href="/product"
              className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>

      <div className="relative h-screen/2">
        <img
          src="https://i.ibb.co/QCgTBdc/istockphoto-623174598-1024x1024.jpg"
          alt="Banner Image 6"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-6 bg-black bg-opacity-50 rounded">
            <h2 className="text-white text-6xl font-bold mb-4">
              Elevate Your Fitness Journey
            </h2>
            <p className="text-white text-xl mb-4">
              Discover premium equipment designed for success.
            </p>
            <a
              href="/product"
              className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default HomeSlide;
