import React, { useState } from "react";
import dna from "../Assets/ImageCarousel/dna.avif";
import eye from "../Assets/ImageCarousel/eye.avif";
import flow from "../Assets/ImageCarousel/flow.avif";
import image4 from "../Assets/ImageCarousel/dna.avif"; // Example additional image
import image5 from "../Assets/ImageCarousel/eye.avif"; // Example additional image
// import image6 from "../Assets/ImageCarousel/flow.avif"; // Example additional image
const Template = () => {
  // Define your images
  const images = [dna, eye, flow, image4, image5];

  // State to track the current index of the first image in the set of 3
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next set of images
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 3 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous set of images
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 3 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col md:flex-row items-center p-10 overflow-hidden">
      {/* Left Side: Text */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-xl sm:text-3xl font-bold mb-4">More from us!</h2>
        <p className="text-xs sm:text-lg text-gray-700">
          Discover a variety of things that showcase different concepts. Click
          the buttons to navigate through the images.
        </p>
      </div>
      {/* Right Side: Image Carousel */}
      <div className="h-[300px] w-[420px] sm:h-auto md:w-1/2 flex flex-col justify-center overflow-hidden pl-5 ">
        {/* Image Row */}
        <div
          className="flex gap-4 justify-center overflow-hidden rounded-s-2xl"
          style={{
            width: "199.98%",
            maxWidth: "199.98%",
          }}
        >
          {/* Container for the images, only showing 3 images at a time */}
          <div
            className="flex sm:gap-10 transition-transform duration-500 ease-in-out "
            style={{
              transform: `translateX(-${currentIndex * 26}%)`, // Move the carousel to show the next set of 3 images
              width: `${images.length * 40}%`, // Set the width to fit all images in a row
            }}
          >
            {images.map((image, index) => (
              <div key={index} className="w-1/3 max-w-1/3 h-64 drop-shadow-lg">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-[95%] h-[80%] sm:w-full sm:h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Buttons to navigate through images */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={goToPrevious}
            className="px-6 py-2 btn btn-outline border-ombase text-ombase rounded-lg hover:bg-gray-700 hover:text-white shadow-md"
          >
            Previous
          </button>
          <button
            onClick={goToNext}
            className="px-6 py-2 btn btn-outline  border-ombase text-ombase rounded-lg hover:bg-gray-700 hover:text-white shadow-md"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Template;
