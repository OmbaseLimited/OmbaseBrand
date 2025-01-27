import React from "react";
import Laptop from "../Assets/explore-Laptop.png";
import Desktop from "../Assets/explore-desktop.png";
import Workstation from "../Assets/explore-workstation.png";
import MiniPC from "../Assets/explore-minipc.png";
import AllInOne from "../Assets/explore-AIO.png";
import Server from "../Assets/explore-server.png";

const ExploreCategory = () => {
  return (
    <div className="w-full h-full flex items-center justify-center py-5 ">
      <div className="w-full sm:w-[80%] h-full flex flex-col sm:flex-row justify-center items-center gap-4">
        <div className="w-full h-[200px] sm:w-1/2 sm:h-[350px] flex flex-col justify-between   sm:justify-around  bg-gradient-to-r from-zinc-600/30 from-20% sm:p-10 px-5 py-10">
          {/* <p className="text-2xl font-bold text-white drop-shadow-md">
            Explore
          </p> */}
          <span className="text-stone-500 drop-shadow-md sm:text-3xl  ">
            From powerful performance to sleek designs, we have it all!
          </span>
          <button className="btn btn-outline w-fit border-2 border-gray-200 text-white my-5 sm:my-0 drop-shadow-md hover:bg-ombase hover:border-white ">
            Explore
          </button>
        </div>
        <div className="w-full sm:w-1/2 h-[350px] flex flex-col items-center justify-center gap-2">
          <div className="w-full h-1/2 flex items-center justify-around gap-2">
            <div className="w-[80%] h-[80%] sm:w-full sm:h-full bg-gradient-to-l from-gray-100 flex justify-center items-center">
              <img
                src={Server}
                alt="laptop"
                className="h-[100px] sm:h-[150px]"
              />
            </div>
            <div className="w-[80%] h-[80%] sm:w-full sm:h-full bg-gray-100 flex justify-center items-center">
              <img
                src={MiniPC}
                alt="minipc"
                className="w-[100px] sm:w-[150px]"
              />
            </div>
            <div className="w-[80%] h-[80%] sm:w-full sm:h-full bg-gray-100 flex justify-center items-center">
              <img
                src={AllInOne}
                alt="desktop"
                className="h-[70px] sm:h-[150px]"
              />
            </div>
          </div>
          <div className="w-full h-1/2 flex items-center justify-around gap-2">
            <div className="w-[80%] h-[80%] sm:w-full sm:h-full bg-gradient-to-l from-gray-100 flex justify-center items-center">
              <img
                src={Laptop}
                alt="workstation"
                className="h-[60px] sm:h-[110px]"
              />
            </div>
            <div className="w-[80%] h-[80%] sm:w-full sm:h-full bg-gray-100 flex justify-center items-center">
              <img src={Desktop} alt="aio" className="h-[70px] sm:h-[150px]" />
            </div>
            <div className="w-[80%] h-[80%] sm:w-full sm:h-full bg-gray-100 flex justify-center items-center">
              <img
                src={Workstation}
                alt="server"
                className="h-[70px] sm:h-[150px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCategory;
