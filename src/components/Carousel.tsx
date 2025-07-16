import { useState, useEffect } from "react";

const images = [
  "public/certifications/AWS CCP.png",
  "public/certifications/AWS CLOUD 101.png",
  "public/certifications/AWS Security.png",
  "public/certifications/AWS Serverless.png",
];

export default function CustomCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function prevSlide() {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  function nextSlide() {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  return (
    <div className="relative w-44 max-w-3xl mx-auto overflow-hidden rounded-lg ">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="w-44 h-auto object-cover transition-all duration-500 bg-dark"
      />

      {/* Prev/Next Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        ›
      </button>
    </div>
  );
}
