"use client";
import { useEffect, useState } from "react";
import OMBASENAVBAR from "../Components/OMBASENAVBAR";
import ImageCarousel from "../Components/ImageCarousel";
import Showcase from "../Components/Showcase";
import ExploreCategory from "../Components/ExploreCategory";
import Template from "../Components/Template";
import Portraits from "../Components/Portraits";
import LatestIT from "../Components/LatestIT";
import CaseStudies from "../Components/CaseStudies";
import PartnerPortal from "../Components/PartnerPortal";
import Footer from "../Components/Footer";
function Ombase() {
  useEffect(() => {
    // Disable right-click (context menu)
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    // Add event listener for context menu
    document.addEventListener("contextmenu", handleContextMenu);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);
  return (
    <div className="w-full h-full">
      <div className="w-full h-[6%]  bg-ombase overflow-hidden">
        <OMBASENAVBAR />
      </div>
      <div className="w-full h-[94%] relative">
        <ImageCarousel />
      </div>
      <div className="w-full  h-full ">
        <Showcase />
      </div>
      <div className="w-full  h-[50%] ">
        <ExploreCategory />
      </div>
      <div className="w-full  lg:h-[80%] h-[70%] flex justify-center items-center ">
        <Template />
      </div>
      <div className="w-full sm:h-[150%] md:h-[130%] xl:h-[100%]  h-[200%] ">
        <Portraits />
      </div>
      <div className="w-full h-[100%] sm:h-[120%] xl:h-[100%] ">
        <LatestIT />
      </div>
      <div className="w-full h-[100%]  ">
        <CaseStudies />
      </div>
      <div className="w-full h-[90%]  ">
        <PartnerPortal />
      </div>
      <div className="w-full h-[30%]">
        <Footer />
      </div>
    </div>
  );
}

export default Ombase;
