import React from "react";
import dna from "../Assets/ImageCarousel/dna.avif";
import eye from "../Assets/ImageCarousel/eye.avif";
import flow from "../Assets/ImageCarousel/flow.avif";

const CaseStudies = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-5 py-5 sm:py-10">
      <div className="w-[80%] h-[15%] flex justify-between items-center ">
        <p className="sm:text-3xl font-bold">Case Studies</p>
        <button className="btn btn-outline border-ombase text-ombase font-bold text-[10px] btn-sm w-[100px] sm:text-md sm:btn-lg sm:w-[170px] ">
          View All &gt;{" "}
        </button>
      </div>
      <div className="w-[98%] sm:w-[80%] h-[85%] flex flex-col gap-5">
        <div className="w-full h-full flex flex-col sm:flex-row  justify-center items-center gap-5">
          <div
            className="w-full sm:w-5/12 h-full p-5 flex flex-col justify-around bg-gradient-to-br from-zinc-600/30 from-20% to-90% shadow-xl sm:hover:scale-[1.1] border-2 border-white rounded-md"
            style={{
              backgroundImage: `url(${dna})`,
              backgroundPosition: "center",
            }}
          >
            <p className="font-bold text-[10px] lg:text-xl 2xl:text-3xl text-ombase line-clamp-2 md:line-clamp-3 ">
              Optimizing Performance: How Ombase Workstations Empower High-End
              Design & Engineering Workflows
            </p>
            <span className="text-[7px] lg:text-[12px] line-clamp-2 text-white ">
              Focus on how workstations enhance productivity for professionals
              in 3D modeling, animation, and engineering.
            </span>
            <button className="btn btn-outline btn-xs text-[8px] lg:btn-md lg:text-[10px] w-fit text-white hover:bg-white hover:text-ombase hover:font-bold">
              Click to know more <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M459.15 269.75a133.197 133.197 0 0 1-55.862 179.975l-42.782 22.541-10.52 5.533a71.277 71.277 0 0 1-62.966 1.685l-167.077-71.38 15.733-46.676 99.363 19.194-51.458-97.78-82.843-157.411 40.357-21.232 82.844 157.457 19.934-10.485-36.521-69.445 40.335-21.22 36.52 69.445 19.935-10.485-28.2-53.598 40.358-21.232 28.2 53.598 19.945-10.576-19.354-36.886 40.346-21.174 19.354 36.885 54.348 103.301zM73.268 146.674a60.03 60.03 0 0 1 42.361-102.459 60.098 60.098 0 0 1 56.58 80.169l10.588 20.013A78.29 78.29 0 0 0 115.708 26a78.233 78.233 0 0 0-5.635 156.262L99.428 162.02a59.688 59.688 0 0 1-26.16-15.346z"></path></svg>
            </button>
          </div>
          <div
            className="w-full sm:w-7/12 h-full p-5 flex flex-col justify-around bg-gradient-to-br from-zinc-600/30 from-20% to-90% shadow-xl sm:hover:scale-[1.1] border-2 border-white rounded-md"
            style={{
              backgroundImage: `url(${eye})`,
              backgroundPosition: "bottom left",
            }}
          >
            <p className="font-bold text-[10px] lg:text-xl 2xl:text-3xl text-ombase line-clamp-2 md:line-clamp-3 ">
            Power & Portability: The Rise of MiniPCs in Enterprise & Home Office Setups


            </p>
            <span className="text-[7px] lg:text-[12px] line-clamp-2 text-white">
            Explore the growing demand for MiniPCs, their benefits over traditional desktops, and real-world applications.
            </span>
            <button className="btn btn-outline btn-xs text-[8px] lg:btn-md lg:text-[10px] w-fit text-white hover:bg-white hover:text-ombase hover:font-bold">
              Click to know more <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M459.15 269.75a133.197 133.197 0 0 1-55.862 179.975l-42.782 22.541-10.52 5.533a71.277 71.277 0 0 1-62.966 1.685l-167.077-71.38 15.733-46.676 99.363 19.194-51.458-97.78-82.843-157.411 40.357-21.232 82.844 157.457 19.934-10.485-36.521-69.445 40.335-21.22 36.52 69.445 19.935-10.485-28.2-53.598 40.358-21.232 28.2 53.598 19.945-10.576-19.354-36.886 40.346-21.174 19.354 36.885 54.348 103.301zM73.268 146.674a60.03 60.03 0 0 1 42.361-102.459 60.098 60.098 0 0 1 56.58 80.169l10.588 20.013A78.29 78.29 0 0 0 115.708 26a78.233 78.233 0 0 0-5.635 156.262L99.428 162.02a59.688 59.688 0 0 1-26.16-15.346z"></path></svg>
            </button>
          </div>
        </div>
        <div className="w-full h-full flex flex-col sm:flex-row justify-center items-center gap-5">
          <div
            className="w-full sm:w-7/12 h-full p-5 flex flex-col justify-around bg-gradient-to-br from-zinc-600/30 from-20% to-90% shadow-xl sm:hover:scale-[1.1] border-2 border-white rounded-md"
            style={{
              backgroundImage: `url(${dna})`,
              backgroundPosition: "center",
            }}
          >
            <p className="font-bold text-[10px] lg:text-xl 2xl:text-3xl text-ombase line-clamp-2 md:line-clamp-3">
            Maximizing Data Center Efficiency: The Role of Ombase Servers in Scalable IT Infrastructure            </p>
            <span className="text-[7px] lg:text-[12px] line-clamp-2 text-white">
            Showcase how Ombase Servers help businesses scale, manage workloads, and improve efficiency.
            </span>
            <button className="btn btn-outline btn-xs text-[8px] lg:btn-md lg:text-[10px] w-fit text-white hover:bg-white hover:text-ombase hover:font-bold">
              Click to know more <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M459.15 269.75a133.197 133.197 0 0 1-55.862 179.975l-42.782 22.541-10.52 5.533a71.277 71.277 0 0 1-62.966 1.685l-167.077-71.38 15.733-46.676 99.363 19.194-51.458-97.78-82.843-157.411 40.357-21.232 82.844 157.457 19.934-10.485-36.521-69.445 40.335-21.22 36.52 69.445 19.935-10.485-28.2-53.598 40.358-21.232 28.2 53.598 19.945-10.576-19.354-36.886 40.346-21.174 19.354 36.885 54.348 103.301zM73.268 146.674a60.03 60.03 0 0 1 42.361-102.459 60.098 60.098 0 0 1 56.58 80.169l10.588 20.013A78.29 78.29 0 0 0 115.708 26a78.233 78.233 0 0 0-5.635 156.262L99.428 162.02a59.688 59.688 0 0 1-26.16-15.346z"></path></svg>
            </button>
          </div>
          <div
            className="w-full sm:w-5/12 h-full p-5 flex flex-col justify-around bg-gradient-to-br from-zinc-600/30 from-20% to-90% shadow-xl sm:hover:scale-[1.1] border-2 border-white rounded-md"
            style={{
              backgroundImage: `url(${flow})`,
              backgroundPosition: "center",
            }}
          >
            <p className="font-bold text-[10px] lg:text-xl 2xl:text-3xl text-ombase line-clamp-2 md:line-clamp-3">
            Performance vs. Affordability: How Ombase Laptops Compete in the Modern Business & Consumer Market Consumer Market Consumer Market


            </p>
            <span className="text-[7px] lg:text-[12px] line-clamp-2 text-white">
              Analyze how Ombase Laptops balance power, design, and cost-effectiveness for professionals and casual users.
            </span>
            <button className="btn btn-outline btn-xs text-[8px] lg:btn-md lg:text-[10px] w-fit text-white hover:bg-white hover:text-ombase hover:font-bold">
              Click to know more <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M459.15 269.75a133.197 133.197 0 0 1-55.862 179.975l-42.782 22.541-10.52 5.533a71.277 71.277 0 0 1-62.966 1.685l-167.077-71.38 15.733-46.676 99.363 19.194-51.458-97.78-82.843-157.411 40.357-21.232 82.844 157.457 19.934-10.485-36.521-69.445 40.335-21.22 36.52 69.445 19.935-10.485-28.2-53.598 40.358-21.232 28.2 53.598 19.945-10.576-19.354-36.886 40.346-21.174 19.354 36.885 54.348 103.301zM73.268 146.674a60.03 60.03 0 0 1 42.361-102.459 60.098 60.098 0 0 1 56.58 80.169l10.588 20.013A78.29 78.29 0 0 0 115.708 26a78.233 78.233 0 0 0-5.635 156.262L99.428 162.02a59.688 59.688 0 0 1-26.16-15.346z"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
