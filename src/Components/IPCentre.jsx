import React from "react";
import OMBASENAVBAR from "./OMBASENAVBAR";
import aarivServer from "../Assets/explore-server.png";
import intelAmd from "../Assets/Server/intelAmd.png";
import bays from "../Assets/Server/bays.png";
import powerSupply from "../Assets/IPCentre/powersupply.svg";
import storage from "../Assets/Server/Storage.png";
import internalDrives from "../Assets/Server/internalDrives.png";
import nvme from "../Assets/Server/nvme.png";
import chassis from "../Assets/Server/Chassis.png";
import fan from "../Assets/Server/Fan.png";
import pcie from "../Assets/Server/PCIE.png";
import processor from "../Assets/IPCentre/processor.svg";
import hdd from "../Assets/IPCentre/hdd.svg";
import gpu from "../Assets/IPCentre/gpu.svg";
import os from "../Assets/IPCentre/os.svg";
import ram from "../Assets/IPCentre/ram.svg";
import screen from "../Assets/IPCentre/screen.svg";
import ubuntuOS from "../Assets/IPCentre/ubuntuOS.png";
import windowsOS from "../Assets/IPCentre/windowsOS.png";
import connectivity from "../Assets/IPCentre/connectivity.png";
import mainImage from "../Assets/IPCentre/IPCentre-300.png";
import coverImage from "../Assets/IPCentre/IPCentre-CoverImage.jpg";
import server from "../Assets/IPCentre/server.png";
import feature1 from "../Assets/IPCentre/feature-01.png";
import feature2 from "../Assets/IPCentre/feature-02.png";
import Footer from "./Footer";
const IPCentre = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-[6%] bg-ombase overflow-hidden">
        <OMBASENAVBAR />
      </div>
      <div className="w-full h-[94%] relative">
        <img src={coverImage} alt="Cover Image" className="w-full h-full" />
        <div className="w-full h-full flex absolute top-[0%]">
          <div className="w-1/2 h-full">
            <p className="h-[20%] md:h-[20%] xl:h-[30%] md:pl-20 lg:pl-28 text-lg flex items-end text-white">
              IPCentre
            </p>
          </div>
          <div className="w-1/2 h-full bg-gradient-to-l from-slate-600 flex items-center ">
            {/* <div className="w-full h-[90%] flex flex-col justify-between items-center">
              <div className="w-[100%] h-[20%] bg-gradient-to-l from-teal-500/30">
                1
              </div>
              <div className="w-[100%] h-[20%] bg-gradient-to-l from-teal-500/30">
                1
              </div>
              <div className="w-[100%] h-[20%] bg-gradient-to-l from-teal-500/30">
                1
              </div>
              <div className="w-[100%] h-[20%] bg-gradient-to-l from-teal-500/30">
                1
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="w-full h-[40%] bg-slate-50 flex justify-center items-center">
        <div className="w-1/2 px-10 space-y-3">
          <p className="text-4xl">Superior Performance</p>
          <p>
            The IPCentre 300 Series is just 8L in volume, but it accommodates a
            slim ODD, 3.5”/2.5” HDD, 2.5” HDD, four low-profile PCI cards, and
            even one card reader! It offers exceptional flexibility and
            scalability for enhanced multi-function applications!
          </p>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img src={server} alt="Server Image" />
        </div>
      </div>
      <div className="w-full h-[60%] bg-slate-50 flex justify-center items-center">
        <div className="w-1/2 h-full  flex flex-col justify-center items-center">
          <p className="w-full h-[10%] text-center text-3xl font-semibold">
            Highly Expandable
          </p>
          <div className="w-full h-[90%] flex items-center gap-5">
            <div className="w-full h-full ] flex items-center">
              <p className="w-[90%] text-center space-y-3">
                <div className="flex justify-end items-center">
                  Optional Type-C 3.2 Gen 2 x 2 (20Gbps)
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="flex justify-end items-center">
                  Optional Car Reader x 1
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </p>
            </div>
            <img src={feature1} alt="Server Image" />
            <div className="w-full h-full ] flex items-center">
              <p className="w-[90%] text-center space-y-3">
                <div className="flex items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  USB 3.0 x 2 + USB 2.0 x 2
                </div>
                <div className="flex items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  HD Audio
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <p className="text-3xl font-semibold">Advanced Thermal Solution</p>
          <p className="w-[90%] text-center">
            Hosts an 80mm case fan with plenty of ventilation providing
            exceptional cooling performance.
          </p>
          <img src={feature2} alt="Server Image" />
        </div>
      </div>
      <div className="w-full h-[70%] flex flex-col justify-center items-center gap-2 bg-slate-50">
        <h1 className="text-4xl h-[10%] font-bold flex justify-center items-center">
          Specifications
        </h1>
        <div className="w-[80%] h-[90%]  flex flex-col justify-center items-center">
          <div className="flex justify-center items-center gap-5 w-full">
            <p className="w-1/2 font-bold text-2xl text-right text-slate-700">
              Case Size
            </p>

            <p className="w-1/2 text-ombase">
              S.F.F. Slim Chassis (Ultra Small Form Factor)
            </p>
          </div>
          <div className="flex justify-center items-center gap-5 w-full">
            <p className="w-1/2 font-bold text-2xl text-right text-slate-700">
              External Drive Bays
            </p>

            <p className="w-1/2 text-ombase">Slim ODD x 1 (9.5mm Thickness)</p>
          </div>
          <div className="flex justify-center items-center gap-5 w-full">
            <p className="w-1/2 font-bold text-2xl text-right text-slate-700">
              Internal Drive Bays
            </p>

            <p className="w-1/2 text-ombase">
              3.5" or 2.5” HDD x 1, 2.5" HDD x 1{" "}
            </p>
          </div>
          <div className="flex justify-center items-center gap-5 w-full">
            <p className="w-1/2 font-bold text-2xl text-right text-slate-700">
              Front Ports
            </p>

            <p className="w-1/2 text-ombase">
              USB 3.0 x 2 or USB 3.0 x 2 + USB 2.0 x 2, HD Audio
            </p>
          </div>
          <div className="flex justify-center items-center gap-5 w-full">
            <p className="w-1/2 font-bold text-2xl text-right text-slate-700">
              Dimensions (H x W x D)
            </p>

            <p className="w-1/2 text-ombase">
              305 x 95 x 276 mm (8L) / 12" x 3.7" x 10.9"
            </p>
          </div>
          <div className="flex justify-center items-center gap-5 w-full">
            <p className="w-1/2 font-bold text-2xl text-right text-slate-700">
              with Front Panel
            </p>

            <p className="w-1/2 text-ombase">
              307 x 95 x 290 mm / 12.1" x 3.7" x 11.4" (with Foot Stand, Clip)
            </p>
          </div>
          <div className="flex justify-center items-center gap-5 w-full">
            <p className="w-1/2 font-bold text-2xl text-right text-slate-700">
              Dimensions (HxWxD)
            </p>

            <p className="w-1/2 text-ombase">305 x 95 x 266 mm (7.7L)</p>
          </div>
          <div className="flex justify-center items-center gap-5 w-full">
            <p className="w-1/2 font-bold text-2xl text-right text-slate-700">
              w/o Front Panel
            </p>

            <p className="w-1/2 text-ombase">12" x 3.7" x 10.5"</p>
          </div>
          <div className="flex justify-center items-center gap-5 w-full">
            <p className="w-1/2 font-bold text-2xl text-right text-slate-700">
              MB Form Factor
            </p>

            <p className="w-1/2 text-ombase">Micro-ATX</p>
          </div>
          <div className="flex justify-center items-center gap-5 w-full">
            <p className="w-1/2 font-bold text-2xl text-right text-slate-700">
              I/O Expansion Slots
            </p>

            <p className="w-1/2 text-ombase">Low Profile Card Slot x 4</p>
          </div>
          <div className="flex justify-center items-center gap-5 w-full">
            <p className="w-1/2 font-bold text-2xl text-right text-slate-700">
              Power Supply
            </p>

            <p className="w-1/2 text-ombase">Standard Flex ATX 12V, 265W</p>
          </div>
          <div className="flex justify-center items-center gap-5 w-full">
            <p className="w-1/2 font-bold text-2xl text-right text-slate-700">
              Thermal Solution
            </p>

            <p className="w-1/2 text-ombase">
              Front: 80x80x15mm PWM Fan (Up to 20mm Thickness)
            </p>
          </div>
          <div className="flex justify-center items-center gap-5 w-full">
            <p className="w-1/2 font-bold text-2xl text-right text-slate-700">
              Safety
            </p>

            <p className="w-1/2 text-ombase">
              Meets RoHS, CE and FCC Class B Requirements
            </p>
          </div>
          <div className="flex justify-center items-center gap-5 w-full">
            <p className="w-1/2 font-bold text-2xl text-right text-slate-700">
              Security
            </p>

            <p className="w-1/2 text-ombase">Padlock Loop / Kensington Slot</p>
          </div>
          <div className="flex justify-center items-center gap-5 w-full ">
            <p className="w-1/2 font-bold text-2xl text-right text-slate-700">
              Optional
            </p>

            <ul className="flex flex-wrap justify-between w-1/2 text-ombase">
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
                    fill-rule="evenodd"
                    d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Type-C x 1
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
                    fill-rule="evenodd"
                    d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Card Reader x 1
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
                    fill-rule="evenodd"
                    d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Internal Speaker
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
                    fill-rule="evenodd"
                    d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Chassis Intrusion Switch
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
                    fill-rule="evenodd"
                    d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                PPCT Cage
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-[30%] border-2">
        <Footer />
      </div>
    </div>
  );
};

export default IPCentre;
