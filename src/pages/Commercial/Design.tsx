const Design = () => {
  const categories = [
    {
      title: "EDUCATION",
      image: "https://via.placeholder.com/300x220",
    },
    {
      title: "STRENGTH & CONDITIONING",
      image: "https://via.placeholder.com/300x220",
    },
    {
      title: "FRANCHISES",
      image: "https://via.placeholder.com/300x220",
    },
    {
      title: "PERSONAL TRAINING",
      image: "https://via.placeholder.com/300x220",
    },
    {
      title: "FIRE DEPARTMENTS",
      image: "https://via.placeholder.com/300x220",
    },
  ];

  return (
    <div className="bg-white mt-40 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            <span className="bg-blue-600 text-white px-2 mr-2">COMMERCIAL</span>
            GYM DESIGN AND INSTALLATION FOR SCHOOLS, FIRE DEPARTMENTS, STUDIOS
            AND MORE.
          </h2>

         <button className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900  text-white font-semibold hover:bg-blue-950 px-6 py-3 rounded">
            START BUILDING
          </button>
        </div>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((item, index) => (
            <div key={index} className="group">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="mt-3">
                <span className="inline-block bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900  text-white font-semibold hover:bg-blue-950 px-6 py-3 rounded">
                  {item.title} 
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Design;
