import {
  CurrencyDollarIcon,
  PuzzlePieceIcon,
  ShieldCheckIcon,
  MapIcon,
} from "@heroicons/react/24/outline";

const Equipment = () => {
  const features = [
    {
      title: "BULK DISCOUNTS & FINANCING",
      icon: CurrencyDollarIcon,
    },
    {
      title: "ASSEMBLY SERVICES",
      icon: PuzzlePieceIcon,
    },
    {
      title: "WARRANTY",
      icon: ShieldCheckIcon,
    },
    {
      title: "USA BASED CUSTOMER SUPPORT",
      icon: MapIcon,
    },
  ];

  return (
    <div className="bg-white mt-40 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* SECTION TITLE */}
        <h2 className="text-3xl font-extrabold mb-16 tracking-wide">
          COMMERCIAL EQUIPMENT EXCLUSIVES
        </h2>

        {/* FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-6"
              >
                <Icon className="w-20 h-20 text-black" />
                <p className="font-bold text-lg text-center max-w-[200px]">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Equipment;
