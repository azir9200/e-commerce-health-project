import React from "react";

const images = [
  "https://imagizer.imageshack.com/img924/4629/XZAq25.jpg",
  "https://imagizer.imageshack.com/img923/4648/St7DS1.jpg",
  "https://imagizer.imageshack.com/img922/5638/nqEUyL.jpg",
  "https://imagizer.imageshack.com/img924/3928/rIHdTD.jpg",
  "https://imagizer.imageshack.com/img922/8127/igCFos.jpg",
  "https://imagizer.imageshack.com/img923/1219/B3Hs72.jpg",
  "https://imagizer.imageshack.com/img922/9643/9saopo.jpg",
  "https://imagizer.imageshack.com/img924/4629/XZAq25.jpg",
  "https://imagizer.imageshack.com/img923/4648/St7DS1.jpg",
  "https://imagizer.imageshack.com/img922/5638/nqEUyL.jpg",
  "https://imagizer.imageshack.com/img924/3928/rIHdTD.jpg",
  "https://imagizer.imageshack.com/img922/8127/igCFos.jpg",
  "https://imagizer.imageshack.com/img923/1219/B3Hs72.jpg",
  "https://imagizer.imageshack.com/img922/9643/9saopo.jpg",
  "https://imagizer.imageshack.com/img923/7833/iMKjl6.jpg",
];

const ImageGallery: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white border-b border-blue-800/30">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300"
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                <p className="text-white font-bold text-lg">
                  Image {index + 1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
