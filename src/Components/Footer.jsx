import React from "react";
import ombaseLogo from "../Assets/ombaseLogo.png";
import LinkedIn from "../Assets/linkedin.svg";
import Youtube from "../Assets/youtbue.svg";
import Instagram from "../Assets/instagram.svg";

const Footer = () => {
  return (
    <div className="w-full h-full bg-ombaseFaintBg p-10 ">
      <div className="w-full h-full flex flex-col sm:flex-row items-center gap-2  text-black">
        <div className="w-full sm:w-1/6 h-[250px] flex items-center justify-center  gap-6">
          <img src={ombaseLogo} alt="Ombase Logo" className="h-[70%]" />
          <hr className="w-[0.1px] h-[60%] border-none outline-none bg-ombase" />
        </div>
        <div className="w-full sm:w-5/6 h-[250px] flex flex-col items-stretch justify-between ">
          <div className="w-full flex space-x-6 overflow-hidden">
            <div>
              <p>Company Overview</p>
            </div>
            <div>
              <p>Contact Ombase</p>
            </div>
            <div>
              <p>Newsroom</p>
            </div>
            <div>
              <p>Investors</p>
            </div>
            <div>
              <p>Careers</p>
            </div>
            <div>
              <p>Corporate Responsibility</p>
            </div>
            <div>
              <p>Diversity & Inclusion</p>
            </div>
            <div>
              <p>Public Policy</p>
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-4">
              <img src={LinkedIn} alt="Linked In Logo" className="h-[25px]" />
              <img src={Youtube} alt="Youtube Logo" className="h-[25px]" />
              <img src={Instagram} alt="Instagram Logo" className="h-[25px]" />
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-wrap justify-start sm:space-x-3 w-full">
              <p className="text-xs font-bold">© Ombase Limited</p>
              <p className="text-xs font-bold">|</p>
              <p className="text-xs font-bold">Terms of Use</p>
              <p className="text-xs font-bold">|</p>
              <p className="text-xs font-bold">*Trademarks</p>
              <p className="text-xs font-bold">|</p>
              <p className="text-xs font-bold">Cookies</p>
              <p className="text-xs font-bold">|</p>
              <p className="text-xs font-bold">Privacy</p>
              <p className="text-xs font-bold">|</p>
              <p className="text-xs font-bold">Supply Chain Transparency</p>
              <p className="text-xs font-bold">|</p>
              <p className="text-xs font-bold">Site Map</p>
              <p className="text-xs font-bold">|</p>
              <p className="text-xs font-bold">Recycling</p>
              <p></p>
            </div>
          </div>
          <div>
            <p className="text-xs">
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
