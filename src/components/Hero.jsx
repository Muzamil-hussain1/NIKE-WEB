import React, { useState } from "react";
import{Link} from "react-router-dom"

function Hero() {
  const shoesImages = [
    "/images/shoes.png",
    "/images/shoes2.png",
    "/images/shoes3.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? shoesImages.length - 1 : currentIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === shoesImages.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <main className="flex flex-col lg:flex-row max-w-7xl mx-auto items-center px-5 gap-10 min-h-screen mt-10 mb-10">
      {/* mt-20 -> top spacing, mb-20 -> bottom spacing */}

      {/* LEFT CONTENT */}
      <div className="bg-red-500 p-6 rounded-2xl flex flex-col gap-6 w-full lg:w-1/2 flex-1 min-h-0">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold">
          your feet deserve the best
        </h1>

        <p className="font-bold text-sm md:text-base">
          Your feet deserve the best. We are here to provide shoes that comfort you.
          Discover the latest Nike shoes designed for performance and style.
          Every step feels lighter, every move feels faster.
          Get your perfect pair today!
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
    <Link to="/contact" className="w-full sm:w-auto">
          <button className=" w-full  sm:w-auto bg-black text-white px-6 py-3 hover:border-2 hover:border-white transition-all">
            shop now
          </button>
        </Link>

    <Link to="/contact" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-white px-6 py-3 hover:border-2 hover:border-black transition-all">
            category
          </button>
           </Link> 
        </div>

        <div>
          <p className="font-semibold">available on</p>
          <div className="flex gap-4 mt-2">
            <img src="/images/amazon.png" alt="amazon" className="w-8 h-8" />
            <img src="/images/shopify.png" alt="shopify" className="w-8 h-8" />
          </div>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex flex-col items-center gap-6 w-full lg:w-1/2 flex-1 min-h-0">
        <div className="bg-amber-400 w-full max-w-md h-80 flex items-center justify-center rounded-2xl">
          <img
            src={shoesImages[currentIndex]}
            alt="shoes"
            className="w-64 md:w-72 lg:w-80 object-contain"
          />
        </div>

        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition"
          >
            Prev
          </button>
          <button
            onClick={nextSlide}
            className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600 transition"
          >
            Next
          </button>
        </div>
      </div>
    </main>
  );
}

export default Hero;