import React from "react";
import girl from "../Assets/intelPortraitGirl.webp";
import boy from "../Assets/intelPortraitBoy.webp";

const Portraits = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="w-full max-w-7xl flex flex-col gap-10">
        {/* First Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Image Section */}
          <div className="w-full md:w-1/2 lg:w-2/5 bg-gradient-to-b from-zinc-600/30 from-40% to-white to-90% flex justify-center">
            <img className="w-3/4" src={girl} alt="Intel Portrait Girl" />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 lg:w-2/5 p-6 flex flex-col justify-center space-y-6">
            <span className="font-bold text-lg">
              Intel Core Ultra Processor
            </span>
            <h1 className="text-2xl md:text-4xl font-bold">
              Elevate how you work, create and play
            </h1>
            <p className="text-sm text-justify">
              Experience the potential of intelligent AI assistants, effortless
              text and image creation, enhanced collaboration effects, and more–
              right at your fingertips. Redefine your PC experience with
              heightened personalization and productivity, where every task is
              now smarter.
            </p>
            <button className="btn btn-outline rounded-none text-ombase">
              Explore More
            </button>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-6">
          {/* Image Section */}
          <div className="w-full md:w-1/2 lg:w-2/5 bg-gradient-to-b from-zinc-600/30 from-40% to-white to-90% flex justify-center">
            <img className="w-3/4" src={boy} alt="Intel Portrait Boy" />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 lg:w-2/5 p-6 flex flex-col justify-center space-y-6">
            <span className="font-bold text-lg">Intel vPro® platform</span>
            <h1 className="text-2xl md:text-4xl font-bold">
              Discover the business benefits of AI PCs
            </h1>
            <p className="text-sm text-justify">
              Finding an AI PC built for the rigors of modern business is easy:
              simply look for Intel vPro®. Designed to help IT secure and manage
              a distributed workforce while boosting user productivity. It’s the
              business computing foundation that makes PCs professional-grade.
            </p>
            <button className="btn btn-outline rounded-none text-ombase">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portraits;
