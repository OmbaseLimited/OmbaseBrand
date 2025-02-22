import React from "react";
import ombaseLogo from "../Assets/ombaseLogo.png";
import LinkedIn from "../Assets/linkedin.svg";
import Youtube from "../Assets/youtbue.svg";
import Instagram from "../Assets/instagram.svg";

const Footer = () => {
  return (
    <div className="w-full h-full bg-ombaseFaintBg px-4 pt-5 lg:p-10 ">
      <div className="w-full h-full flex flex-col lg:flex-row items-center gap-2 text-black">
        <div className="w-full sm:w-1/6 h-[100%] flex flex-col lg:flex-row items-center justify-center  gap-6 order-2 lg:order-1">
          <img src={ombaseLogo} alt="Ombase Logo" className="w-[30%] md:w-[90%] lg:w-[90%] order-2 lg:order-1" />
          <hr className="lg:w-[1px] lg:h-[60%]  h-[1px] w-[60%] border-none outline-none bg-ombase order-1 lg:order-2 mt-5 sm:mt-0" />
        </div>
        <div className="w-full lg:w-5/6 h-[100%] flex flex-col items-stretch justify-between gap-2 order-1 lg:order-2">
          <div className="w-full flex flex-wrap flex-col justify-center lg:justify-start sm:flex-row  space-y-6 sm:space-y-0 sm:space-x-6 overflow-hidden text-sm font-bold">
            <div className="md:p-3 lg:p-0">
              <p>Company Overview</p>
            </div>
            <div className="md:p-3 lg:p-0">
              <p>Contact Ombase</p>
            </div>
            <div className="md:p-3 lg:p-0">
              <p>Newsroom</p>
            </div>
            <div className="md:p-3 lg:p-0">
              <p>Investors</p>
            </div>
            <div className="md:p-3 lg:p-0">
              <p>Careers</p>
            </div>
            <div className="md:p-3 lg:p-0">
              <p>Corporate Responsibility</p>
            </div>
            <div className="md:p-3 lg:p-0">
              <p>Diversity & Inclusion</p>
            </div>
            <div className="md:p-3 lg:p-0">
              <p>Public Policy</p>
            </div>
          </div>
          <div>
            <div className="flex md:justify-center lg:justify-start items-center space-x-4 my-5 sm:my-0">
              <img src={LinkedIn} alt="Linked In Logo" className="h-[25px]" />
              <img src={Youtube} alt="Youtube Logo" className="h-[25px]" />
              <img src={Instagram} alt="Instagram Logo" className="h-[25px]" />
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-wrap justify-center lg:justify-start items-center sm:space-x-3 w-full gap-2">
              <p className="text-xs font-bold w-[48%] h-[30px] flex items-center justify-start text-nowrap sm:w-auto">©Ombase Limited</p>
              <p className="text-xs font-bold hidden lg:block">|</p>
              <p className="text-xs font-bold w-[48%] h-[30px] flex items-center justify-start text-nowrap sm:w-auto">Terms of Use</p>
              <p className="text-xs font-bold hidden lg:block">|</p>
              <p className="text-xs font-bold w-[48%] h-[30px] flex items-center justify-start text-nowrap sm:w-auto">*Trademarks</p>
              <p className="text-xs font-bold hidden lg:block">|</p>
              <p className="text-xs font-bold w-[48%] h-[30px] flex items-center justify-start text-nowrap sm:w-auto">Cookies</p>
              <p className="text-xs font-bold hidden lg:block">|</p>
              <p className="text-xs font-bold w-[48%] h-[30px] flex items-center justify-start text-nowrap sm:w-auto">Privacy</p>
              <p className="text-xs font-bold hidden lg:block">|</p>
              <p className="text-xs font-bold w-[48%] h-[30px] flex items-center justify-start text-nowrap sm:w-auto">Supply Chain Transparency</p>
              <p className="text-xs font-bold hidden lg:block">|</p>
              <p className="text-xs font-bold w-[48%] h-[30px] flex items-center justify-start text-nowrap sm:w-auto">Site Map</p>
              <p className="text-xs font-bold hidden lg:block">|</p>
              <p className="text-xs font-bold w-[48%] h-[30px] flex items-center justify-start text-nowrap sm:w-auto">Recycling</p>
              <p></p>
            </div>
          </div>
          <div>
            <p className="text-xs text-justify">
              Ombase Limited may require enabled hardware, software or service
              activation. // No product or component can be absolutely secure.
              // Your costs and results may vary. // Performance varies by use,
              configuration and other factors. // See our complete legal Notices
              and Disclaimers. // Ombase is committed to respecting human rights
              and avoiding causing or contributing to adverse impacts on human
              rights. See Ombase’s Global Human Rights Principles. Ombase’s
              products and software are intended only to be used in applications
              that do not cause or contribute to adverse impacts on human
              rights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
