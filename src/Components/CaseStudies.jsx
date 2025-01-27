import React from "react";
import dna from "../Assets/ImageCarousel/dna.avif";
import eye from "../Assets/ImageCarousel/eye.avif";
import flow from "../Assets/ImageCarousel/flow.avif";

const CaseStudies = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-5 py-10">
      <div className="w-[80%] h-[15%] flex justify-between items-center ">
        <p className="sm:text-3xl font-bold">Case Studies</p>
        <button className="btn btn-outline border-ombase text-ombase font-bold">
          View All &gt;{" "}
        </button>
      </div>
      <div className="w-[80%] h-[85%] flex flex-col gap-5">
        <div className="w-full h-full flex flex-col sm:flex-row  justify-center items-center gap-5">
          <div
            className="w-full sm:w-5/12 h-full p-5 flex flex-col justify-around bg-gradient-to-br from-zinc-600/30 from-20% to-90% shadow-xl hover:scale-[1.1] border-2 border-white rounded-md"
            style={{
              backgroundImage: `url(${dna})`,
              backgroundPosition: "center",
            }}
          >
            <p className="font-bold text-xl sm:text-3xl text-ombase drop-shadow-md">
              Financial Services
            </p>
            <span className="text-xs text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptas, doloribus.
            </span>
            <button className="btn btn-outline btn-xs sm:btn-lg sm:text-[12px] w-fit text-white hover:bg-white hover:text-ombase">
              Click to know more &gt;
            </button>
          </div>
          <div
            className="w-full sm:w-7/12 h-full p-5 flex flex-col justify-around bg-gradient-to-br from-zinc-600/30 from-20% to-90% shadow-xl hover:scale-[1.1] border-2 border-white rounded-md"
            style={{
              backgroundImage: `url(${eye})`,
              backgroundPosition: "bottom left",
            }}
          >
            <p className="font-bold text-xl sm:text-3xl  text-ombase drop-shadow-md">
              Financial Services
            </p>
            <span className="text-xs text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptas, doloribus.
            </span>
            <button className="btn btn-outline btn-xs sm:btn-lg sm:text-[12px] w-fit text-white hover:bg-white hover:text-ombase">
              Click to know more &gt;
            </button>
          </div>
        </div>
        <div className="w-full h-full flex flex-col sm:flex-row justify-center items-center gap-5">
          <div
            className="w-full sm:w-7/12 h-full p-5 flex flex-col justify-around bg-gradient-to-br from-zinc-600/30 from-20% to-90% shadow-xl hover:scale-[1.1] border-2 border-white rounded-md"
            style={{
              backgroundImage: `url(${dna})`,
              backgroundPosition: "center",
            }}
          >
            <p className="font-bold text-xl sm:text-3xl text-ombase drop-shadow-md">
              Financial Services
            </p>
            <span className="text-xs text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptas, doloribus.
            </span>
            <button className="btn btn-outline  btn-xs sm:btn-lg sm:text-[12px] w-fit text-white hover:bg-white hover:text-ombase">
              Click to know more &gt;
            </button>
          </div>
          <div
            className="w-full sm:w-5/12 h-full p-5 flex flex-col justify-around bg-gradient-to-br from-zinc-600/30 from-20% to-90% shadow-xl hover:scale-[1.1] border-2 border-white rounded-md"
            style={{
              backgroundImage: `url(${flow})`,
              backgroundPosition: "center",
            }}
          >
            <p className="font-bold text-xl sm:text-3xl text-ombase drop-shadow-md">
              Financial Services
            </p>
            <span className="text-xs text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptas, doloribus.
            </span>
            <button className="btn btn-outline btn-xs sm:btn-lg sm:text-[12px] w-fit text-white hover:bg-white hover:text-ombase">
              Click to know more &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
