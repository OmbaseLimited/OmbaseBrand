import React, { useState, useEffect } from "react";
import axios from "axios";
import thinkpad from "../Assets/think.webp";
import processor from "../Assets/processor.svg";
import ram from "../Assets/ram.svg";
import storage from "../Assets/hdd.svg";
import gpu from "../Assets/gpu.svg";
import display from "../Assets/screen.svg";
import windows from "../Assets/windowsOS.png";
import OMBASENAVBAR from "./OMBASENAVBAR";

const FiltersComponentWithDrawer = () => {
  const [category, setCategory] = useState("");
  const [filters, setFilters] = useState({});
  const [selectedFilters, setSelectedFilters] = useState({});
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [drawerData, setDrawerData] = useState(null);
  const [prefix, setPrefix] = useState("");
  const [filterSearch, setFilterSearch] = useState(""); // 🔍 State to store search input for each filter

  // Custom labels mapping for filter keys
  const customLabels = {
    //All In One Custom Labels
    AIOProductCategory: "Product Category",
    AIOSeries: "Series",
    AIOFormFactor: "Form Factor",
    AIOScreenSize: "Screen Size",
    AIOProcessor: "Processor",
    AIOProcessorDescription: "Processor Description",
    AIOProcessorGeneration: "Processor Generation",
    AIORAM: "RAM",
    AIORAMExpandable: "RAM Expandable",
    AIOChipset: "Chipset",
    AIOStorage: "Storage",
    AIODIMMSlot: "DIMMSlot",
    AIOOperatingSystem: "Operating System",
    AIOFrontPorts: "Front Ports",
    AIORearPorts: "Rear Ports",
    AIOKeyboard: "Keyboard",
    AIOMouse: "Mouse",
    AIOWebcam: "Webcam",
    AIOAudio: "Audio",
    AIOConnectivity: "Connectivity",
    AIOACAdapter: "AC Adapter",
    AIOSecurity: "Security",
    AIOWarranty: "Warranty",
    AIOColor: "Color",
    AIOChassisBody: "Chassis Body",
    AIOWeight: "Weight",
    AIOOpticalDrive: "Optical Drive",
    AIODisplay: "Display",
    AIOGraphics: "Graphics",
    AIODimension: "Dimension",
    AIOStand: "Stand",
    AIOCertification: "Certification",
    AIOSoftware: "Software",
    AIOModelName: "Model Name",
    AIOPartNumber: "Part Number",
    AIOBatteryBackup: "Battery Backup",

    //Mini PC Custom Labels
    MiniPCACAdapter: "AC Adapter",
    MiniPCAudio: "Audio",
    MiniPCCertification: "Certification",
    MiniPCChassisBody: "Chassis Body",
    MiniPCChipset: "Chipset",
    MiniPCColor: "Color",
    MiniPCConnectivity: "Connectivity",
    MiniPCDIMMSlot: "DIMM Slot",
    MiniPCDimension: "Dimension",
    MiniPCFormFactor: "Form Factor",
    MiniPCFrontPorts: "Front Ports",
    MiniPCGraphics: "Graphics",
    MiniPCOperatingSystem: "Operating System",
    MiniPCProcessor: "Processor",
    MiniPCProcessorDescription: "Processor Description",
    MiniPCProcessorGeneration: "Processor Generation",
    MiniPCRAM: "RAM",
    MiniPCRAMExpandable: "RAM Expandable",
    MiniPCRearPorts: "Rear Ports",
    MiniPCSecurity: "Security",
    MiniPCSeries: "Series",
    MiniPCproductCategory: "Product Category",
    MiniPCSoftware: "Software",
    MiniPCWarranty: "Warranty",
    MiniPCWeight: "Weight",
    MiniPCStorage: "Storage",
    MiniPCModelName: "Model Name",
    MiniPCPartNumber: "Part Number",

    //Laptop PC Custom Labels
    NBProductCategory: "Product Category",
    NBACAdapter: "AC Adapter",
    NBAudio: "Audio",
    NBBatteryBackup: "Battery backup",
    NBCertification: "Certification",
    NBChassisBody: "Chassis Body",
    NBChipset: "Chipset",
    NBColor: "Color",
    NBConnectivity: "Connectivity",
    NBDIMMSlot: "DIMM Slot",
    NBDimension: "Dimension",
    NBDisplay: "Display",
    NBFormFactor: "Form Factor",
    NBGraphics: "Graphics",
    NBKeyboard: "Keyboard",
    NBMouse: "Mouse",
    NBOperatingSystem: "Operating System",
    NBOpticalDrive: "Optical Drive",
    NBPorts: "Ports",
    NBProcessor: "Processor",
    NBProcessorDescription: "Processor Description",
    NBProcessorGeneration: "Processor Generation",
    NBRAM: "RAM",
    NBRAMExpandable: "RAM Expandable",
    NBRotation: "Rotation",
    NBScreenSize: "Screen Size",
    NBSecurity: "Security",
    NBSeries: "Series",
    NBSoftware: "Software",
    NBStorage: "Storage",
    NBWarranty: "Warranty",
    NBWebcam: "Webcam",
    NBWeight: "Weight",
    NBModelName: "Model Name",
    NBPartNumber: "Part Number",

    //Desktop Custom Labels
    DTAudio: "Audio",
    DTCertification: "Certification",
    DTChassisBody: "Chassis Body",
    DTChipset: "Chipset",
    DTColor: "Color",
    DTConnectivity: "Connectivity",
    DTDIMMSlot: "DIMM Slot",
    DTDimension: "Dimension",
    DTFormFactor: "Form Factor",
    DTFrontPorts: "Front Ports",
    DTGraphics: "Graphics",
    DTKeyboard: "Keyboard",
    DTModelName: "Model Name",
    DTMouse: "Mouse",
    DTOperatingSystem: "Operating System",
    DTOpticalDrive: "Optical Drive",
    DTPartNumber: "Part Number",
    DTPowerSupply: "Power Supply",
    DTProcessor: "Processor",
    DTProcessorDescription: "Processor Description",
    DTProcessorGeneration: "Processor Generation",
    DTProductCategory: "Product Category",
    DTRAM: "RAM",
    DTRAMExpandable: "RAM Expandable",
    DTRearPorts: "Rear Ports",
    DTSecurity: "Security",
    DTSeries: "Series",
    DTSoftware: "Software",
    DTStorage: "Storage",
    DTWarranty: "Warranty",
    DTWeight: "Weight",
    DTModelName: "Model Name",
    DTPartNumber: "Part Number",

    //Server Custom Labels
    ServerCertification: "Certification",
    ServerChassisBody: "Chassis Body",
    ServerChipset: "Chipset",
    ServerColor: "Color",
    ServerConnectivity: "Connectivity",
    ServerCoolingOptions: "Cooling Options",
    ServerDIMMSlot: "DIMM Slot",
    ServerDimension: "Dimension",
    ServerDriveBays: "Drive Bays",
    ServerFans: "Fans",
    ServerFormFactor: "Form Factor",
    ServerFrontPorts: "Front Ports",
    ServerGraphics: "Graphics",
    ServerIPMI: "IPMI",
    ServerNetworkController: "Network Controller",
    ServerOperatingSystem: "Operating System",
    ServerOpticalDrive: "Optical Drive",
    ServerPowerConfiguration: "Power Configuration",
    ServerProcessor: "Processor",
    ServerProcessorDescription: "Process Description",
    ServerProcessorGeneration: "Processor Generation",
    ServerRAM: "RAM",
    ServerRAMExpandable: "RAM Expandable",
    ServerRaidSupport: "Raid Support",
    ServerRearPorts: "Rear Ports",
    ServerSecurity: "Security",
    ServerSoftware: "Software",
    ServerStorage: "Storage",
    ServerWarranty: "Warranty",
    ServerWeight: "Weight",
    ServerModelName: "Model Name",
    ServerPartNumber: "Part Number",
    ServerSerialNumber: "Serial Number",
    ServerProductCategory: "Product Category",
    ServerSeries: "Series",
    ServerModelName: "Model Name",
    ServerPartNumber: "Part Number",

    //Workstation Custom Label
    WorkstationAudio: "Audio",
    WorkstationCertification: "Certification",
    WorkstationChassisBody: "Chassis Body",
    WorkstationChipset: "Chipset",
    WorkstationColor: "Color",
    WorkstationConnectivity: "Connectivity",
    WorkstationDIMMSlot: "DIMM Slot",
    WorkstationDimension: "Dimension",
    WorkstationFormFactor: "Form Factor",
    WorkstationFrontPorts: "Front Ports",
    WorkstationGraphics: "Graphics",
    WorkstationKeyboard: "Keyboard",
    WorkstationModelName: "Model Name",
    WorkstationMouse: "Mouse",
    WorkstationOperatingSystem: "Operating System",
    WorkstationOpticalDrive: "Optical Drive",
    WorkstationPowerSupply: "Power Supply",
    WorkstationProcessor: "Processor",
    WorkstationProcessorDescription: "Processor Description",
    WorkstationProcessorGeneration: "Processor Generation",
    WorkstationProductCategory: "Product Category",
    WorkstationRAM: "RAM",
    WorkstationRAMExpandable: "RAM Expandable",
    WorkstationRearPorts: "Rear Ports",
    WorkstationSecurity: "Security",
    WorkstationSeries: "Series",
    WorkstationSoftware: "Software",
    WorkstationStorage: "Storage",
    WorkstationWarranty: "Warranty",
    WorkstationWeight: "Weight",
    WorkstationModelName: "Model Name",
    WorkstationPartNumber: "Part Number",
    createdAt: "Created At",
    updatedAt: "Updated At",
  };

  const fetchData = async (selectedCategory) => {
    if (!selectedCategory) return;
    try {
      const response = await axios.get(
        `http://localhost:1402/api/getAllModels?category=${selectedCategory}`
      );
      let data = response.data.data || [];
      console.log(response);
      // Remove _id and __v from each object
      data = data.map(({ _id, __v, ...rest }) => {
        const prefixMapping = {
          minipc: "MiniPC",
          laptop: "NB",
          desktop: "DT",
          server: "Server",
          allinone: "AIO",
          workstation: "Workstation",
        };
        const serialNumber = prefixMapping[selectedCategory] + "SerialNumber";
        const { [serialNumber]: _, ...filteredData } = rest;
        return filteredData;
      });

      setData(data);
      setFilteredData(data);

      // Create filter key-value pairs
      const allFilters = {};
      data.forEach((record) => {
        Object.keys(record).forEach((key) => {
          // Skip createdAt and updatedAt
          if (key === "createdAt" || key === "updatedAt") return;
          if (!allFilters[key]) {
            allFilters[key] = new Set();
          }
          const value = record[key];
          if (Array.isArray(value)) {
            value.forEach((val) => allFilters[key].add(val.toString()));
          } else if (typeof value === "object" && value !== null) {
            allFilters[key].add(JSON.stringify(value));
          } else if (value !== undefined && value !== null) {
            allFilters[key].add(value.toString());
          }
        });
      });

      const formattedFilters = {};
      Object.keys(allFilters).forEach((key) => {
        formattedFilters[key] = Array.from(allFilters[key]);
      });

      setFilters(formattedFilters);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleCategoryChange = (e) => {
    const prefixMapping = {
      minipc: "MiniPC",
      laptop: "NB",
      desktop: "DT",
      server: "Server",
      allinone: "AIO",
      workstation: "Workstation",
    };
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setFilters({});
    setSelectedFilters({});
    setFilteredData([]);
    fetchData(selectedCategory);

    setPrefix(prefixMapping[selectedCategory] || "");
  };

  const handleFilterChange = (key, value) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (!updatedFilters[key]) {
        updatedFilters[key] = [value];
      } else if (updatedFilters[key].includes(value)) {
        updatedFilters[key] = updatedFilters[key].filter(
          (item) => item !== value
        );
        if (updatedFilters[key].length === 0) {
          delete updatedFilters[key];
        }
      } else {
        updatedFilters[key].push(value);
      }

      applyFilters(updatedFilters);
      return updatedFilters;
    });
  };

  const applyFilters = (selectedFilters) => {
    const filtered = data.filter((item) => {
      return Object.keys(selectedFilters).every((key) => {
        const filterValues = selectedFilters[key];
        if (!filterValues || filterValues.length === 0) return true;

        const itemValue = item[key];
        if (Array.isArray(itemValue)) {
          return itemValue.some((val) => filterValues.includes(val.toString()));
        } else if (typeof itemValue === "object" && itemValue !== null) {
          return filterValues.includes(JSON.stringify(itemValue));
        } else {
          return filterValues.includes(itemValue?.toString());
        }
      });
    });

    setFilteredData(filtered);
  };

  const filteredFilterKeys = Object.keys(filters).filter((filterKey) =>
    (customLabels[filterKey] || filterKey)
      .toLowerCase()
      .includes(filterSearch.toLowerCase())
  );

  return (
    <div className="w-full h-full space-y-4 relative">
      <div className="w-full h-[6%]">
        <OMBASENAVBAR />
      </div>
      <div className="w-full h-[80px] p-4 ">
        <div>
          <label className="block mb-2 text-sm font-bold">
            Select Product Category:
          </label>
          <select
            value={category}
            onChange={handleCategoryChange}
            className=" select select-bordered p-2 border rounded w-full border-ombase"
          >
            <option value="" disabled>
              Select a Product Category
            </option>
            <option value="minipc">Mini PC</option>
            <option value="laptop">Laptop</option>
            <option value="desktop">Desktop</option>
            <option value="server">Server</option>
            <option value="allinone">All-in-One</option>
            <option value="workstation">Workstation</option>
          </select>
        </div>
      </div>

      <div className="flex gap-5 justify-around w-full h-[calc(90%-80px)] overflow-hidden">
        {/* Filters */}
        <div className="p-4 w-1/6 h-full space-y-4 flex flex-col justify-around">
          <h2 className="text-xl h-[3%] font-bold text-ombase">Filters</h2>

          {/* 🔍 Search Box for Filtering Filter Keys */}
          <div className="h-[5%] ">
            <input
              type="search"
              placeholder="Search filters..."
              value={filterSearch}
              onChange={(e) => setFilterSearch(e.target.value)}
              className="p-1 w-full input mb-2 border-b border-ombase focus-within:outline-none focus-within:border-ombase pl-2"
            />
          </div>

          {/* Filters List */}
          <div className="w-full h-[85%] space-y-4 overflow-hidden overflow-y-scroll">
            {filterSearch && (
              <button
                onClick={() => {
                  setFilterSearch("");
                  const response = window.confirm(
                    "Are you sure want to clear all the filter?"
                  );
                  if (response) {
                    setFilters({});
                    setSelectedFilters({});
                    setFilteredData([]);
                    fetchData(category);
                    setFilterSearch("");
                  }
                }}
                className="p-1 text-sm outline-none rounded btn w-full btn-sm btn-outline text-red-500 hover:bg-red-400 hover:text-white hover:border-none"
              >
                Clear
              </button>
            )}
            {filteredFilterKeys.length > 0 ? (
              filteredFilterKeys.map((filterKey, idx) => (
                <div
                  key={filterKey}
                  className="collapse bg-base-200 rounded border border-ombase"
                >
                  <input
                    type="checkbox"
                    id={`collapse-${idx}`}
                    className="hidden peer"
                  />
                  <label
                    htmlFor={`collapse-${idx}`}
                    className="collapse-title font-medium p-2 flex items-center justify-between cursor-pointer"
                  >
                    {customLabels[filterKey] || filterKey}
                    <svg
                      className="w-4 h-4 transition-transform duration-300 peer-checked:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </label>
                  <div className="collapse-content peer-checked:block hidden">
                    {filters[filterKey].map((option, index) => (
                      <label
                        key={index}
                        className="flex items-center cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          value={option}
                          className="checkbox checkbox-sm"
                          checked={
                            selectedFilters[filterKey]?.includes(option) ||
                            false
                          }
                          onChange={() => handleFilterChange(filterKey, option)}
                        />
                        <span className="ml-2">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-yellow-500 text-center">No filters found</p>
            )}
          </div>
        </div>

        {/* Display Filtered Data */}
        <div className="p-4 w-5/6">
          <h2 className="text-xl h-[35px] font-bold mb-4">Filtered Data</h2>
          {filteredData.length === 0 ? (
            <p>No data found matching the selected filters.</p>
          ) : (
            <div className="w-full h-[calc(100%-35px)]">
              {/* <ul className="space-y-2 ">
                {filteredData.map((item, index) => (
                  <li key={index} className="p-2 border rounded">
                    <p>
                      <strong>Processor:</strong>{" "}
                      {item[prefix + "Processor"] || "N/A"}
                    </p>
                    <p>
                      <strong>RAM:</strong> {item[prefix + "RAM"] || "N/A"}
                    </p>
                    <p>
                      <strong>Storage:</strong>{" "}
                      {item[prefix + "Storage"] || "N/A"}
                    </p>
                    <p>
                      <strong>GPU:</strong> {item[prefix + "Graphics"] || "N/A"}
                    </p>
                    {(item[prefix + "Display"] ||
                      item[prefix + "ScreenSize"]) && (
                      <p>
                        <strong>Display / Screen Size:</strong>{" "}
                        {item[prefix + "Display"] ||
                          item[prefix + "ScreenSize"]}
                      </p>
                    )}
                    <label
                      htmlFor="my-drawer-4"
                      className="btn btn-sm btn-outline text-ombase  hover:bg-ombase hover:text-white hover:border-none"
                      onClick={() => setDrawerData(item)}
                    >
                      View Details
                    </label>
                  </li>
                ))}
              </ul> */}

              <div className="w-full h-[calc(100%-35px)] flex flex-wrap gap-4">
                {filteredData.map((item, index) => (
                  <div
                    key={index}
                    className="w-[48%] h-[33%] bg-base-100 border-[0.5px] border-blue-200 relative flex items-center gap-4 shadow-sm hover:rounded-md hover:scale-[1.02] hover:shadow-md"
                  >
                    {/* Left Section: Image & Model Info */}
                    <figure className="flex flex-col w-[30%] items-center">
                      <p className="text-[12px]">
                        SKU: <span>{item[prefix + "PartNumber"] || "N/A"}</span>
                      </p>
                      <img src={thinkpad} alt="Laptop" className="size-32" />
                      <p className="text-wrap">- Model -</p>
                      <span className="font-bold">
                        {item[prefix + "ModelName"] || "N/A"}
                      </span>
                    </figure>

                    <hr className="w-[1px] h-[80%] bg-blue-300" />

                    {/* Right Section: Specs */}
                    <div className="w-[65%] h-[85%] flex flex-col justify-between">
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-1 items-center">
                          <img
                            src={processor}
                            alt="Processor Logo"
                            className="size-[20px]"
                          />
                          :
                          <p className="text-ombase text-xs">
                            {item[prefix + "Processor"] || "N/A"}
                          </p>
                        </div>
                        <div className="flex gap-1 items-center">
                          <img src={ram} alt="RAM" className="size-[20px]" />:
                          <p className="text-ombase text-xs">
                            {item[prefix + "RAM"] || "N/A"}
                          </p>
                        </div>
                        <div className="flex gap-1 items-center">
                          <img
                            src={storage}
                            alt="Storage"
                            className="size-[20px]"
                          />
                          :
                          <p className="text-ombase text-xs">
                            {item[prefix + "Storage"] || "N/A"}
                          </p>
                        </div>
                        <div className="flex gap-1 items-center">
                          <img src={gpu} alt="GPU" className="size-[20px]" />:
                          <p className="text-ombase text-xs">
                            {item[prefix + "Graphics"] || "N/A"}
                          </p>
                        </div>
                        {(item[prefix + "Display"] ||
                          item[prefix + "ScreenSize"]) && (
                          <div className="flex gap-1 items-center">
                            <img
                              src={display}
                              alt="Display"
                              className="size-[20px]"
                            />
                            :
                            <p className="text-ombase text-xs">
                              {item[prefix + "Display"] ||
                                item[prefix + "ScreenSize"]}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* OS Logo & Buttons */}
                      <div className="absolute top-2 right-3">
                        <img
                          src={windows}
                          alt="Windows Logo"
                          className="h-[10px]"
                        />
                      </div>
                      <div className="w-full flex justify-between items-center py-2 pr-4">
                        <p className="text-xs font-bold">
                          Launch Date:{" "}
                          <span className="text-ombase font-normal">
                            &nbsp;
                            {item?.createdAt?.split("T")[0] ?? "N/A"}
                          </span>
                        </p>
                        {/* <button
                          className="btn text-ombase btn-outline btn-xs"
                          onClick={() => setDrawerData(item)}
                        >
                          More info
                        </button> */}
                        <label
                          htmlFor="my-drawer-4"
                          className="btn btn-sm btn-outline text-ombase  hover:bg-ombase hover:text-white hover:border-none"
                          onClick={() => setDrawerData(item)}
                        >
                          View Details
                        </label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Drawer */}
        <div className="drawer drawer-end absolute">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content"></div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              className="drawer-overlay"
              aria-label="Close Drawer"
            ></label>
            <div className="menu bg-base-200 h-full border-2 text-base-content p-4 w-[30%]">
              {drawerData ? (
                <>
                  <div className="w-full h-[50px] flex items-center text-ombase font-bold">
                    <h2 className="text-lg font-bold mb-2">Product Details</h2>
                  </div>
                  <hr className="my-2 border-none outline-none w-full h-[1px] bg-ombase" />
                  {/* {drawerData.MiniPCStorage} */}
                  <div className="w-full h-[calc(100%-80px)] space-y-4 overflow-hidden overflow-y-scroll ">
                    {Object.entries(drawerData).map(([key, value]) => (
                      <div>
                        <p key={key}>
                          <span className="text-ombase">
                            <strong> {customLabels[key] || key}:</strong>
                          </span>
                          &nbsp; {value}
                          <hr />
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <p>No data to display</p>
              )}
            </div>
          </div>
        </div>

        {/* Display Filtered Data (unchanged) */}
      </div>
    </div>
  );
};

export default FiltersComponentWithDrawer;
