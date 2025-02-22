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
import AarivServer from "./AarivServer";
import ContactUs from "./ContactUs";
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
      <div className="w-full h-[6%] bg-ombase overflow-hidden md:h-[4%] lg:h-[8%] 2xl:h-[6%]">
        <OMBASENAVBAR />
      </div>
      <div className="w-full h-[94%] relative">
        <ImageCarousel />
      </div>
      <div className="w-full h-full ">
        <Showcase />
      </div>
      <div className="w-full h-[50%]">
        <ExploreCategory />
      </div>
      <div className="w-full h-[60%] lg:h-[50%] md:h-[50%] flex justify-center items-center ">
        <Template />
      </div>
      <div className="w-full sm:h-[150%] md:h-[65%] xl:h-[100%]  h-[200%] ">
        <Portraits />
      </div>
      <div className="w-full h-[100%] sm:h-[100%] xl:h-[100%] ">
        <LatestIT />
      </div>
      <div className="w-full h-[100%] md:h-[40%] lg:h-[80%] 2xl:h-[70%] ">
        <CaseStudies />
      </div>
      <div className="w-full h-[90%] md:h-[60%] lg:h-[80%] 2xl:h-[70%] ">
        <PartnerPortal />
      </div>
      <div className="w-full h-[100%] md:h-[40%] lg:h-[80%] 2xl:h-[70%] ">
        <ContactUs />
      </div>
      <div className="w-full h-fit lg:h-[30%] bg-ombaseFaintBg">
        <Footer />
      </div>
    </div>
  );
}

export default Ombase;
