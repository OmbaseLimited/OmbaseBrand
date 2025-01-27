import React, { useState, useEffect } from "react";
import dna from "../Assets/ImageCarousel/dna.avif";
import eye from "../Assets/ImageCarousel/eye.avif";
import flow from "../Assets/ImageCarousel/flow.avif";
import CoverPage from "./CoverPage";

const ImageCarousel = () => {
  const images = [dna, eye, dna, flow, dna];
  const imageText = [
    "IPBook",
    "IPStation",
    "IPCenter",
    "Aariv Server",
    "Mini PC",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerDuration = 3000; // 3 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, timerDuration);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-full mx-auto bg-gradient-to-t from-black">
      {/* Carousel Images */}
      <div className="carousel-item relative w-full h-full ">
        <div className="absolute w-full h-full px-20 flex flex-col gap-5 justify-center right-0 bottom-0 text-white text-6xl font-bold">
          {imageText[currentIndex]}
          {/* <button className="btn w-fit bg-gray-800 rounded-none border-s-0 border-r-0 border-b-0 border-t-[2px]  text-gray-600 hover:bg-gradient-to-tr from-gray-800 from-70% to-gray-200 hover:text-white">
            Click to explore more
          </button> */}
          <button className="btn w-fit bg-gray-800 rounded-none border-s-0 border-r-0 border-b-0 border-t-[1px] text-gray-600 hover:text-white hover:bg-gradient-to-tr from-gray-800 from-70% to-gray-200 transition-colors duration-1000 ease-in-out">
            Click to explore more
          </button>
          <div className="w-full sm:w-[40%] sm:h-[20%]  mt-5">
            <CoverPage />
          </div>
        </div>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2  justify-between hidden">
          <button
            onClick={goToPrevious}
            className="btn btn-circle text-white bg-gray-800 hover:bg-gray-700"
          >
            ❮
          </button>
          <button
            onClick={goToNext}
            className="btn btn-circle text-white bg-gray-800 hover:bg-gray-700"
          >
            ❯
          </button>
        </div>
      </div>

      {/* Full-Width Progress Bar with Text */}
      <div className="absolute h-[100px] bottom-0 left-0 right-0 px-5  ">
        <div className="flex gap-4">
          {images.map((_, index) => (
            <div key={index} className="flex-1">
              {/* Progress Bar */}
              <div className="h-[3px] bg-stone-700 relative">
                {index === currentIndex && (
                  <div
                    className="h-full bg-blue-500 absolute top-0 left-0"
                    style={{
                      animation: `progressBar ${timerDuration}ms linear`,
                    }}
                  />
                )}
              </div>
              {/* Image Text */}
              <div
                className={`mt-2 font-bold ${
                  index === currentIndex ? "text-white" : "text-gray-700"
                }`}
              >
                {imageText[index]}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes progressBar {
            from {
              width: 0;
            }
            to {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ImageCarousel;
