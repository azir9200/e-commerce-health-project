import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "../../../components/ui/button";

export default function LeftBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);


  const bannerData = [
    {
      id: 1,
      image: "https://i.ibb.co/Ndz9PfnN/8641099.jpg",
      title: "Premium Luxury gym equipment",
      subtitle: "Experience the ultimate gym equipment",
      cta: "Explore Collection",
    },
    {
      id: 2,
      image: "https://i.ibb.co/FbCv8Bmn/view-pair-boxing-gloves.jpg",
      title: "Sports Performance",
      subtitle: "Unleash the power within  Fit=Gear Site",
      cta: "View Models",
    },
    {
      id: 3,
      image:
        "https://i.ibb.co/ymNtH4k5/top-view-perfectly-ordered-fitness-items.jpg",
      title: "Electric Future",
      subtitle: "Sustainable Best Design",
      cta: "Learn More",
    },
  ];

  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerData.length);
    }, 5000);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useState(() => {
    if (isPlaying) startAutoplay();
    return () => stopAutoplay();
  });

  const handlePrevious = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + bannerData.length) % bannerData.length
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerData.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  };

  return (
    <div className="relative w-full h-full group overflow-hidden">
      {/* Background Images */}
      {bannerData.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-start p-8 lg:p-12">
        <div className="text-white max-w-lg animate-fade-in">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">
            {bannerData[currentSlide].title}
          </h1>
          <p className="text-lg lg:text-xl mb-8 text-gray-200">
            {bannerData[currentSlide].subtitle}
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            {bannerData[currentSlide].cta}
          </Button>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <Button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Play/Pause Control */}
      <button
        onClick={togglePlayPause}
        className="absolute top-4 right-4 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm"
      >
        {isPlaying ? (
          <Pause className="w-4 h-4" />
        ) : (
          <Play className="w-4 h-4" />
        )}
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {bannerData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20">
        <div
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{
            width: `${((currentSlide + 1) / bannerData.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}
