import React from "react";
import OMBASENAVBAR from "./OMBASENAVBAR";
import Footer from "./Footer";
import aarivServer from "../Assets/explore-server.png";
import intelAmd from "../Assets/Server/intelAmd.png";
import bays from "../Assets/Server/bays.png";
import chassis from "../Assets/Server/Chassis.png";
import fan from "../Assets/Server/Fan.png";
import pcie from "../Assets/Server/PCIE.png";
import powerSupply from "../Assets/Server/powerSupply.png";
import storage from "../Assets/Server/Storage.png";
import internalDrives from "../Assets/Server/internalDrives.png";
import nvme from "../Assets/Server/nvme.png";
import server1 from "../Assets/Server/server1.png";
import server2 from "../Assets/Server/server-2.png";
import server3 from "../Assets/Server/server3.png";
import glowNvme from "../Assets/Server/glow-nvme.png";
import dualFan from "../Assets/Server/dualFan.png";
import odd from "../Assets/Server/ODD.png";
import ssd from "../Assets/Server/ssd.png";
import connectivity from "../Assets/Server/connectivity.png";
import ventilation from "../Assets/Server/ventilation.png";
import ic from "../Assets/Server/IC.png";
import temperature from "../Assets/Server/Temperature.png";
import warning from "../Assets/Server/Warning.png";
import sound from "../Assets/Server/Sound.png";

const AarivServer = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-[6%] bg-ombase overflow-hidden">
        <OMBASENAVBAR />
      </div>
      <div class="w-full border-2 overflow-hidden whitespace-nowrap bg-red-500 text-white py-4 flex gap-10">
        {/* <span class="w-full inline-block  text-xl font-bold animate-marquee">
          Website under upgradation
        </span>
        <span class="w-full inline-block  text-xl font-bold animate-marquee">
          Website under upgradation
        </span>
        <span class="w-full inline-block  text-xl font-bold animate-marquee">
          Website under upgradation
        </span>
        <span class="w-full inline-block  text-xl font-bold animate-marquee">
          Website under upgradation
        </span> */}
        <marquee  direction="left" scrollamount="10" class="text-xl font-bold text-white">
        Website under upgradation &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Website under upgradation
        
</marquee>

      </div>
     

      <div className="w-full h-[94%] md:p-10 ">
        <div className="w-full h-full rounded flex flex-col lg:flex-row justify-center items-center">
          <div className="w-full lg:w-[40%] h-[50%] md:h-[60%] lg:h-full flex justify-center items-center">
            <div className="w-full lg:w-[90%] h-[90%] rounded flex flex-col justify-center items-center">
              <div className="w-full h-[100%]  md:h-full flex flex-col md:flex-row lg:flex-col gap-5 lg:gap-0">
                <div className="w-full h-[40%] md:h-full flex flex-col justify-center items-center lg:block lg:h-[30%] space-y-3 md:space-y-5">
                  <p className="text-sm md:text-4xl lg:text-2xl w-fit text-center text-slate-700">
                    2U NVMe Hybrid Rackmount Server
                  </p>
                  <hr className="w-[85%] lg:w-full h-[1px] bg-slate-500" />
                  <img
                    src={aarivServer}
                    alt="ProductMainLogo"
                    className="w-full h-[50%] sm:h-[30%] lg:h-[60%] object-cover"
                  />
                </div>
                <div className="w-full h-[70%] px-5 md:h-[100%] ">
                  <ol className="w-full md:space-y-3 text-[8px] md:text-[12px] lg:text-[13px]">
                    <li className="flex items-center">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Intel® Xeon Scalable & AMD EPYC family compliant
                    </li>{" "}
                    <li className="flex items-center">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Backplanes with Mini-SAS HD or OCuLink connectors
                      (compatible with PCIe 4.0)
                    </li>{" "}
                    <li className="flex items-center">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      2.5"/3.5" HDD trays x 8 (optional NVMe trays x 4,
                      distinguishes U.2 NVMe SSDs)
                    </li>{" "}
                    <li className="flex items-center">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Rear drive bays support 2 x 2.5" SAS/SATA SSDs for system
                      disks
                    </li>{" "}
                    <li className="flex items-center">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Internal disk brackets for 4 x 2.5" SAS/SATA SSDs (one can
                      be replaced with a slim ODD)
                    </li>{" "}
                    <li className="flex items-center">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      550W/800W redundant power supply, 80 Plus® Platinum CRPS
                      (optional)
                    </li>{" "}
                    <li className="flex items-center">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      High-speed cooling fans for excellent thermal performance
                    </li>
                    <li className="flex items-center">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Supports low-profile PCle slots x 7
                    </li>
                  </ol>
                  <div className="w-full my-10 flex items-center">
                    <button className="btn btn-outline md:flex items-center text-ombase gap-2 hidden ">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 20 20"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                      </svg>
                      Enquiry Now
                    </button>
                    <button className="btn btn-xs btn-outline text-ombase  flex items-center gap-2  md:hidden">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 20 20"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                      </svg>
                      Enquiry Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[60%] h-[50%] md:h-full overflow-hidden flex flex-col justify-center items-center ">
            <div className="w-[90%] h-[90%] flex flex-col justify-center items-center gap-5">
              <div className="w-full h-full flex justify-center items-center gap-5">
                <div className="w-full h-full rounded shadow-sm flex justify-center items-center bg-ombase/10 flex-col space-y-5">
                  <img src={intelAmd} alt="" className="w-[50%] md:w-[50%] " />
                  <p className="text-[8px] md:text-lg">Compliant</p>
                </div>
                <div className="w-full h-full rounded shadow-sm flex justify-center items-center bg-ombase/10 flex-col space-y-5">
                  <img src={bays} alt="" className="w-[50%] md:w-[50%] " />
                  <p className="text-[8px] md:text-lg">2.5"/3.5" SSD</p>
                </div>
                <div className="w-full h-full rounded shadow-sm flex justify-center items-center bg-ombase/10 flex-col space-y-5">
                  <img
                    src={internalDrives}
                    alt=""
                    className="w-[50%] md:w-[50%] "
                  />
                  <p className="text-[8px] md:text-lg">Internal drives</p>
                </div>
              </div>
              <div className="w-full h-full flex justify-center items-center gap-5">
                <div className="w-full h-full flex rounded shadow-sm justify-center items-center bg-ombase/10 flex-col space-y-5">
                  <img src={nvme} alt="" className="w-[50%] md:w-[50%] " />
                  <p className="text-[8px] md:text-lg">x 4 bays</p>
                </div>
                <div className="w-full h-full flex rounded shadow-sm justify-center items-center bg-ombase/10 flex-col space-y-5">
                  <img src={storage} alt="" className="w-[50%] md:w-[50%] " />
                  <p className="text-[8px] md:text-lg">System disks</p>
                </div>
                <div className="w-full h-full flex rounded shadow-sm justify-center items-center bg-ombase/10 flex-col space-y-5">
                  <img
                    src={powerSupply}
                    alt=""
                    className="w-[50%] md:w-[50%] "
                  />
                  <p className="text-[8px] md:text-lg">CRPS</p>
                </div>
              </div>
              <div className="w-full h-full flex justify-center items-center gap-5">
                <div className="w-full h-full flex rounded shadow-sm justify-center items-center bg-ombase/10 flex-col space-y-5">
                  <img src={pcie} alt="" className="w-[50%] md:w-[50%] " />
                  <p className="text-[8px] md:text-lg">PCle slot x 7</p>
                </div>
                <div className="w-full h-full flex rounded shadow-sm justify-center items-center bg-ombase/10 flex-col space-y-5">
                  <img src={chassis} alt="" className="w-[50%] md:w-[50%] " />
                  <p className="text-[8px] md:text-lg">26" deep chassis</p>
                </div>
                <div className="w-full h-full flex rounded shadow-sm justify-center items-center bg-ombase/10 flex-col space-y-5">
                  <img src={fan} alt="" className="w-[50%] md:w-[50%] " />
                  <p className="text-[8px] md:text-lg">80 x 38mm fans x 4</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[10%] flex justify-center items-center">
        <p className="w-[80%] lg:w-[60%] h-full text-center text-[8px] sm:text-[10px] md:text-[12px] lg:text-[16px]">
          NVMe hybrid storage server is suitable for the{" "}
          <span className="font-bold">High - Performance Computing</span>{" "}
          industry for the flexibility to meet the intensive compute or storage
          needs. It is a high-value, yet economical option for your most
          intensive compute and storage applications.
        </p>
      </div>
      <div className="w-full h-[350%] bg-slate-50 flex flex-col justify-start items-start">
        <div className="w-full h-[20%] flex flex-col justify-around relative my-10">
          <div className="space-y-4 ">
            <p className="w-[100%] text-3xl md:text-2xl lg:text-4xl font-bold pl-10 ">
              Flexible.
            </p>
            <p className="text-xl pl-10 text-ombase">
              Various Storage Options.
            </p>
          </div>
          <div className="w-full  flex justify-between items-center">
            <div className="w-1/2">
              <img src={server1} alt="Server Image" />
            </div>
            <div className="w-1/2 space-y-4">
              <p className="font-bold text-xl md:text-5xl">Front</p>
              <p className="text-[10px] md:text-xl leading-loose">
                Up to 8 x 2.5"/3.5" <br />
                hot-swap SAS/SATA drive bays, or 4 x 2.5"/3.5" hot-swap SAS/SATA{" "}
                <br /> 4 x 2.5"(15mm) U.2 NVMe drives bays.
              </p>
              <div className="absolute -bottom-10 -right-0 xl:bottom-0 xl:right-0">
                <img
                  src={glowNvme}
                  alt="Glow"
                  className="h-[100px] md:h-[150px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[20%] flex flex-col justify-around relative">
          <div className="w-full flex justify-between items-center">
            <div className="w-1/2 space-y-4">
              <p className="font-bold text-2xl md:text-6xl xl:text-5xl pl-10">
                Rear
              </p>
              <p className="text-xs md:text-xl leading-loose pl-10">
                2 x 2.5" SAS/SATA hot-swap SSD bays.
              </p>
            </div>
            <div className="w-1/2 flex justify-end">
              <img src={dualFan} alt="Server Image" />
            </div>
          </div>
        </div>
        <div className="w-full h-[20%] flex flex-col justify-around relative">
          <div className="w-full flex justify-between items-center">
            <div className="w-1/2 relative">
              <img src={server2} alt="Server Image" className=" md:w-[50%]" />
              <img
                src={odd}
                alt="Server Image"
                className="w-[40%] md:w-[20%] absolute top-[10%] right-[10%] md:top-[8%] md:right-[53%]"
              />
              <img
                src={ssd}
                alt="Server Image"
                className="w-[40%] md:w-[20%] absolute top-[10%] right-[10%] md:top-[8%] md:right-[53%]"
              />
            </div>
            <div className="w-1/2 space-y-4">
              <p className="font-bold text-2xl md:text-4xl">Internal</p>
              <p className="text-[8px] md:text-xl leading-loose">
                Supports 4 X 2.5" SAS/SATA SSDs (one can be replaced with slim
                ODD)
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[20%] flex flex-col justify-around items-center relative">
          <p className="w-full text-center text-xl lg:text-4xl font-light flex justify-center items-center my-5">
            <p className="font-bold">Choose</p>
            &nbsp;Your Preference
          </p>
          <div>
            <img src={server3} alt="ServerImage" />
          </div>
          <div className="w-full flex justify-center items-center">
            <p className="w-[60%] text-center text-xs lg:text-lg my-5">
              Ombase provides different combinations based on customers'
              preferences for the storage configurations.
            </p>
          </div>
          <div className="w-full md:w-[80%] flex justify-around items-center gap-5 px-10 md:px-0">
            <div className="w-[15%] hidden md:block ">
              <img src={connectivity} alt="Connectivity" />
            </div>
            <div className="w-1/2 md:w-[34%] space-y-2">
              <p className="text-xs md:text-lg font-bold">Hot-swap tray</p>
              <hr />
              <p className="text-[8px] md:text-sm font-semibold">
                Swapping drives in seconds.
              </p>
            </div>
            <div className="w-1/2 md:w-[34%] space-y-2">
              <p className="text-xs md:text-lg font-bold">Tool-free design</p>
              <hr className="w-[80%]" />
              <p className="text-[8px] md:text-sm font-semibold w-full md:w-[70%]">
                Mounting/Removing 3.5" HDDs without screws (2.5" SSDs with
                screws).
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[20%] flex flex-col md:flex-row justify-around items-center relative">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
            <img src={ic} alt="IC" className="w-[80%]" />
          </div>
          <div className="w-full md:w-1/2 px-10 md:p-0">
            <p className="text-xl lg:text-3xl xl:text-4xl font-bold w-full text-center">
              Mini-SAS HD & OCuLink or Slimline Backplane
            </p>
          </div>
        </div>
        <div className="w-full h-[20%] md:h-[20%] lg:h-[40%] overflow-hidden flex flex-col justify-around items-center relative">
          <img src={ventilation} alt="ventilation" />
          <div className="w-full md:w-[80%] flex flex-col md:flex-row justify-between items-center">
            <div className="w-full h-full  flex justify-center items-center">
              <p className="text-2xl md:text-3xl font-bold">
                Optimized Cooling Design
              </p>
            </div>
            <div className="w-full h-full flex justify-around items-center gap-2 md:gap-5 my-10 md:m-0">
              {/* <img src={temperature} alt="Warning" className=" border-2" />
              <img src={sound} alt="Warning" className=" border-2" />
              <img src={warning} alt="Warning" className=" border-2" /> */}
              <div className="h-fit flex flex-col justify-center items-center gap-3">
                <div className="w-fit h-fit p-4 border-2 border-ombase text-ombase rounded-full">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="h-[30px] md:h-[60px]"
                    // height="4em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M416 0c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm0 128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm-160-16C256 50.1 205.9 0 144 0S32 50.1 32 112v166.5C12.3 303.2 0 334 0 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-34-12.3-64.9-32-89.5V112zM144 448c-44.1 0-80-35.9-80-80 0-25.5 12.2-48.9 32-63.8V112c0-26.5 21.5-48 48-48s48 21.5 48 48v192.2c19.8 14.8 32 38.3 32 63.8 0 44.1-35.9 80-80 80zm16-125.1V304c0-8.8-7.2-16-16-16s-16 7.2-16 16v18.9c-18.6 6.6-32 24.2-32 45.1 0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.5-32-45.1z"></path>
                  </svg>
                </div>
                <p className="text-xs text-center font-bold">
                  Excellent heat dissipation
                </p>
              </div>
              <div className="h-fit flex flex-col justify-center items-center gap-3">
                <div className="w-fit h-fit p-4 border-2 border-ombase text-ombase rounded-full">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="h-[30px] md:h-[60px]"
                    // height="4em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M13 7.22L9.603 10H6v4h3.603L13 16.78V7.22zM8.889 16H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .817.387v15.89a.5.5 0 0 1-.817.387L8.89 16zm9.974.591l-1.422-1.422A3.993 3.993 0 0 0 19 12c0-1.43-.75-2.685-1.88-3.392l1.439-1.439A5.991 5.991 0 0 1 21 12c0 1.842-.83 3.49-2.137 4.591z"></path>
                    </g>
                  </svg>
                </div>
                <p className="text-xs text-center font-bold">Low Sound</p>
              </div>
              <div className="h-fit flex flex-col justify-center items-center gap-3">
                <div className="w-fit h-fit p-4 border-2 border-ombase text-ombase rounded-full">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="h-[30px] md:h-[60px]"
                    // height="4em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 15h2V9H0v6zm3 2h2V7H3v10zm19-8v6h2V9h-2zm-3 8h2V7h-2v10zM16.5 3h-9C6.67 3 6 3.67 6 4.5v15c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5zM16 19H8V5h8v14z"></path>
                  </svg>
                </div>
                <p className="text-xs text-center font-bold">Anti Vibration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full h-[50%] flex p-10 gap-5">
        <div className="w-4/6 h-full border-2 bg-slate-600/30"></div>
        <div className="w-2/6 h-full ">
          <img src={eye} alt="EyeLogo" className="w-full h-full rounded" />
        </div>
      // </div> */}
 <div className="w-full h-[30%] border-2"><Footer /></div>
    </div>
  );
};

export default AarivServer;
