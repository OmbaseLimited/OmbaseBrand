import React, { useState } from "react";
import dna from "../Assets/ImageCarousel/dna.avif";
const PartnerPortal = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div
      className="w-full font-sans h-full flex flex-col lg:flex-row lg:items-center lg:justify-around"
      style={{
        backgroundImage: `url(${dna})`,
        backgroundSize: "cover", // Ensures the image covers the entire div
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
      }}
    >
      <p className="h-[2%] flex items-center md:h-[5%] text-white md:text-4xl p-4 md:p-10 drop-shadow-md">
        Partner Showcase
      </p>
      <div className="w-full lg:w-[65%] h-[80%] p-2 lg:p-0">
        <div className="w-full h-full mx-auto ">
          <div className="w-full h-[60px] mb-4 p-2 flex md:space-x-4 py-2 lg:p-2 bg-white rounded-lg shadow-md">
            <button
              onClick={() => setOpenTab(1)}
              className={`flex-1 text-nowrap px-1 py-2 rounded-md focus:outline-none focus:shadow-outline-blue transition-all text-center duration-300 text-[8px] md:text-[14px] w-fit overflow-hidden ${
                openTab === 1 ? "bg-ombase text-white" : ""
              }`}
            >
              For India Partners
            </button>
            <button
              onClick={() => setOpenTab(2)}
              className={`flex-1 text-nowrap px-1 py-2 rounded-md focus:outline-none focus:shadow-outline-blue transition-all text-center duration-300 text-[8px] md:text-[14px] w-fit overflow-hidden ${
                openTab === 2 ? "bg-ombase text-white" : ""
              }`}
            >
              For International Partners
            </button>
            <button
              onClick={() => setOpenTab(3)}
              className={`flex-1 text-nowrap px-1 py-2 rounded-md focus:outline-none focus:shadow-outline-blue transition-all text-center duration-300 text-[8px] md:text-[14px] w-fit overflow-hidden ${
                openTab === 3 ? "bg-ombase text-white" : ""
              }`}
            >
              Search a Partner
            </button>
          </div>

          {/* Section 1 Content */}
          {openTab === 1 && (
            <div className="w-ful h-[calc(100%-60px)] transition-all duration-300 bg-white p-4 rounded-lg  shadow-md  border-l-4 border-ombase flex justify-around">
              <div className="w-full h-full flex flex-col items-center justify-center">
                <h2 className="w-full h-[10%] text-sm md:text-2xl font-semibold md:`mb-2 text-ombase">
                  Partner Registration
                </h2>
                <form
                  method="post"
                  className="flex flex-col justify-around items-center w-[95%] h-[90%] gap-2"
                >
                  <div className="w-full h-full gap-2 flex justify-center items-center">
                    <div className="w-[100%] h-full flex flex-col justify-center items-center">
                      <label
                        htmlFor="gstin"
                        className="w-full block text-[8px] md:text-sm font-medium text-ombase  "
                      >
                        GSTIN No.
                      </label>
                      <input
                        type="text"
                        id="gstin"
                        name="gst"
                        maxLength={15}
                        pattern="^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$"
                        title="Invalid GST Number."
                        className="input input-sm md:input-md placeholder:text-[8px] md:placeholder:text-sm mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter GSTIN number"
                      />
                    </div>
                    <div className="w-[100%] h-full flex flex-col justify-center items-center">
                      <label
                        htmlFor="gstin"
                        className="w-full block text-[8px] md:text-sm font-medium text-ombase  "
                      >
                        PAN No.
                      </label>
                      <input
                        type="text"
                        id="gstin"
                        name="gst"
                        maxLength={15}
                        pattern="^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$"
                        title="Invalid GST Number."
                        className="input input-sm md:input-md placeholder:text-[8px] md:placeholder:text-sm mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter GSTIN number"
                      />
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-center">
                      <label
                        htmlFor="gstin"
                        className="w-full block text-[8px] md:text-sm font-medium text-ombase  "
                      >
                        Entity Type
                      </label>
                      <input
                        type="text"
                        id="gstin"
                        name="gst"
                        maxLength={15}
                        pattern="^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$"
                        title="Invalid GST Number."
                        className="input input-sm md:input-md placeholder:text-[8px] md:placeholder:text-sm mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter GSTIN number"
                      />
                    </div>
                  </div>

                  <div className="w-full h-full gap-2 flex justify-center items-center">
                    <div className="w-full h-full flex flex-col justify-center items-center">
                      <label
                        htmlFor="gstin"
                        className="w-full block text-[8px] md:text-sm font-medium text-ombase  "
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="gstin"
                        name="gst"
                        maxLength={15}
                        pattern="^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$"
                        title="Invalid GST Number."
                        className="input input-sm md:input-md placeholder:text-[8px] md:placeholder:text-sm mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter GSTIN number"
                      />
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-center">
                      <label
                        htmlFor="gstin"
                        className="w-full block text-[8px] md:text-sm font-medium text-ombase  "
                      >
                        Legal Name
                      </label>
                      <input
                        type="text"
                        id="gstin"
                        name="gst"
                        maxLength={15}
                        pattern="^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$"
                        title="Invalid GST Number."
                        className="input input-sm md:input-md placeholder:text-[8px] md:placeholder:text-sm mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter GSTIN number"
                      />
                    </div>
                  </div>
                  <div className="w-full h-full gap-2 flex justify-center items-center">
                    <div className="w-full h-full flex flex-col justify-center items-center">
                      <label
                        htmlFor="gstin"
                        className="w-full block text-[8px] md:text-sm font-medium text-ombase  "
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        id="gstin"
                        name="gst"
                        maxLength={15}
                        pattern="^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$"
                        title="Invalid GST Number."
                        className="input input-sm md:input-md placeholder:text-[8px] md:placeholder:text-sm mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter GSTIN number"
                      />
                    </div>
                  </div>
                  <div className="w-full h-full gap-2 flex justify-center items-center">
                    <div className="w-full h-full flex flex-col justify-center items-center">
                      <label
                        htmlFor="gstin"
                        className="w-full block text-[8px] md:text-sm font-medium text-ombase  "
                      >
                        State
                      </label>
                      <input
                        type="text"
                        id="gstin"
                        name="gst"
                        maxLength={15}
                        pattern="^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$"
                        title="Invalid GST Number."
                        className="input input-sm md:input-md placeholder:text-[8px] md:placeholder:text-sm mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter GSTIN number"
                      />
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-center">
                      <label
                        htmlFor="gstin"
                        className="w-full block text-[8px] md:text-sm font-medium text-ombase  "
                      >
                        City
                      </label>
                      <input
                        type="text"
                        id="gstin"
                        name="gst"
                        maxLength={15}
                        pattern="^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$"
                        title="Invalid GST Number."
                        className="input input-sm md:input-md placeholder:text-[8px] md:placeholder:text-sm mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter GSTIN number"
                      />
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-center">
                      <label
                        htmlFor="gstin"
                        className="w-full block text-[8px] md:text-sm font-medium text-ombase  "
                      >
                        Pincode
                      </label>
                      <input
                        type="text"
                        id="gstin"
                        name="gst"
                        maxLength={15}
                        pattern="^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$"
                        title="Invalid GST Number."
                        className="input input-sm md:input-md placeholder:text-[8px] md:placeholder:text-sm mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter GSTIN number"
                      />
                    </div>
                  </div>
                  <div className="w-full h-full gap-2 flex justify-center items-center">
                    <div className="w-full h-full flex flex-col justify-center items-center">
                      <label
                        htmlFor="gstin"
                        className="w-full block text-[8px] md:text-sm font-medium text-ombase  "
                      >
                        Email ID
                      </label>
                      <input
                        type="text"
                        id="gstin"
                        name="gst"
                        maxLength={15}
                        pattern="^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$"
                        title="Invalid GST Number."
                        className="input input-sm md:input-md placeholder:text-[8px] md:placeholder:text-sm mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter GSTIN number"
                      />
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-center">
                      <label
                        htmlFor="gstin"
                        className="w-full block text-[8px] md:text-sm font-medium text-ombase  "
                      >
                        Phone No.
                      </label>
                      <input
                        type="text"
                        id="gstin"
                        name="gst"
                        maxLength={15}
                        pattern="^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$"
                        title="Invalid GST Number."
                        className="input input-sm md:input-md placeholder:text-[8px] md:placeholder:text-sm mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter GSTIN number"
                      />
                    </div>
                    <div className="w-full h-full flex justify-center items-end">
                      <button className="btn bg-ombase text-white btn-sm h-[80%] w-full">
                        Register
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Section 2 Content */}
          {openTab === 2 && (
            <div className="w-ful h-[calc(100%-120px)] transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 border-ombase">
              <h2 className="text-2xl font-semibold mb-2 text-ombase">
                Available from 2026
              </h2>
              <p className="text-gray-700">Stay Tuned!</p>
            </div>
          )}

          {/* Section 3 Content */}
          {openTab === 3 && (
            <div className="w-ful h-[calc(100%-120px)] transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 border-ombase flex flex-col justify-between items-center">
              <h2 className="w-full h-[8%] text-2xl font-semibold mb-2 text-ombase">
                Search Verified Partners
              </h2>
              <div className="w-full h-[92%] flex justify-center">
                <form method="post" className="w-full h-full">
                  <label className="form-control w-[60%] ">
                    <input
                      type="text"
                      placeholder="Enter Partner name, email, Tax ID, GST "
                      className="input input-bordered w-[80%] "
                    />
                    {/* <div className="label w-[80%]">
                      <span className="label-text-alt">Bottom Left label</span>
                      <span className="label-text-alt">Bottom Right label</span>
                    </div> */}
                  </label>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PartnerPortal;
