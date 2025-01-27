import React, { useState } from "react";
import OMBASENAVBAR from "./OMBASENAVBAR";
import Footer from "./Footer";
import MultiSelectDropdown from "./MultiSelectDropdown";
import contactImage from "../Assets/callcenter.png";
const ContactUs = () => {
  const [openTab, setOpenTab] = useState(1);
  const dropdownOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full h-full">
      <div className="w-full h-[6%]  bg-ombase overflow-hidden">
        <OMBASENAVBAR />
      </div>
      <div
        className="w-full h-[64%] flex justify-center items-center  bg-cover bg-no-repeat"
        // style={{ backgroundImage: `url(${dna})` }}
      >
        <div className="w-[65%] h-[80%]">
          <div className="w-full h-full mx-auto ">
            <div className="w-fit h-[80px] mb-4 flex space-x-4 p-2 bg-white border-[1px] border-ombase rounded-lg ">
              <button
                onClick={() => setOpenTab(1)}
                className={`flex-1 text-nowrap  py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
                  openTab === 1 ? "bg-ombase text-white" : ""
                }`}
              >
                Sales Enquiry
              </button>
              <button
                onClick={() => setOpenTab(2)}
                className={`flex-1 text-nowrap py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
                  openTab === 2 ? "bg-ombase text-white" : ""
                }`}
              >
                Support Query
              </button>
              <button
                onClick={() => setOpenTab(3)}
                className={`flex-1 py-2 px-4 text-nowrap rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
                  openTab === 3 ? "bg-ombase text-white" : ""
                }`}
              >
                Check Warranty
              </button>
            </div>

            {/* Section 1 Content */}
            {openTab === 1 && (
              <div className="w-ful h-[calc(100%-80px)] transition-all duration-300 bg-gradient-to-s from-white from-80% p-4 rounded-lg  border-[1px] border-white  flex justify-around">
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <div className="w-full h-[90%] flex justify-center items-center">
                    <div className="w-1/2 h-full flex flex-col items-center justify-center ">
                      <div className="w-full h-full flex flex-col justify-center items-center">
                        <h2 className="w-full h-[10%] font-semibold mb-2 text-ombase">
                          <p className="text-3xl font-bold flex">
                            Get in touch <p className="text-4xl">👋</p>
                          </p>
                        </h2>
                        <div className="w-full h-full flex flex-col justify-center ">
                          <p className="font-bold text-black">Whatsapp</p>
                          <p className="text-ombase">+91 1800-267-1919</p>
                        </div>
                        <div className="w-full h-full flex flex-col justify-center ">
                          <p className="font-bold text-black">Location</p>
                          <p className="text-ombase">Sr 32/6 Narhe, Pune</p>
                          <p className="text-ombase">
                            Pune Head Office <br /> India - 411041
                          </p>
                        </div>
                        <div className="w-full h-full flex flex-col justify-center ">
                          <p className="font-bold text-black">Email</p>
                          <p className="text-ombase">sales@ombase.in</p>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2 h-full flex justify-center items-center border-[1px] border-ombase rounded-xl">
                      <div className="w-[60%] h-full ">
                        {" "}
                        <form
                          method="post"
                          onSubmit={submitHandler}
                          className="w-full h-full rounded-xl  px-8 py-5  flex flex-col justify-center  gap-3"
                          // className="w-full h-full rounded-xl drop-shadow-md bg-gradient-to-l from-emerald-500/50 px-8 py-5  flex flex-col justify-center  gap-3"
                        >
                          <input
                            type="text"
                            placeholder="Enter Full Name"
                            className="w-[100%] border-0 border-b-[1px] border-ombase outline-none"
                          />
                          <input
                            type="text"
                            placeholder="Enter Email ID"
                            className="w-[100%] border-0 border-b-[1px] border-ombase outline-none"
                          />
                          <input
                            type="text"
                            placeholder="Enter Phone"
                            className="w-[100%] border-0 border-b-[1px] border-ombase outline-none"
                          />

                          <MultiSelectDropdown options={dropdownOptions} />
                          <br />
                          <div className="w-full flex justify-center items-center">
                            <button className="btn bg-white text-ombase shadow-lg border-[1px] border-ombase w-fit hover:bg-ombase hover:text-white">
                              Send Enquiry
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="w-[40%] h-full overflow-hidden flex items-end justify-end">
                        <img
                          src={contactImage}
                          alt="Contact Image"
                          className="h-[80%]"
                        />
                      </div>
                    </div>
                  </div>
                  {/* <form
                    method="post"
                    className="flex flex-col justify-around items-center w-[95%] h-[90%] gap-2"
                  >
                    <div className="w-full h-full gap-2 flex justify-center items-center">
                      <div className="w-[100%] h-full flex flex-col justify-center items-center">
                        <label
                          htmlFor="gstin"
                          className="w-full block text-sm font-medium text-ombase  "
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
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Enter GSTIN number"
                        />
                      </div>
                      <div className="w-[100%] h-full flex flex-col justify-center items-center">
                        <label
                          htmlFor="gstin"
                          className="w-full block text-sm font-medium text-ombase  "
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
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Enter GSTIN number"
                        />
                      </div>
                      <div className="w-full h-full flex flex-col justify-center items-center">
                        <label
                          htmlFor="gstin"
                          className="w-full block text-sm font-medium text-ombase  "
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
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Enter GSTIN number"
                        />
                      </div>
                    </div>

                    <div className="w-full h-full gap-2 flex justify-center items-center">
                      <div className="w-full h-full flex flex-col justify-center items-center">
                        <label
                          htmlFor="gstin"
                          className="w-full block text-sm font-medium text-ombase  "
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
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Enter GSTIN number"
                        />
                      </div>
                      <div className="w-full h-full flex flex-col justify-center items-center">
                        <label
                          htmlFor="gstin"
                          className="w-full block text-sm font-medium text-ombase  "
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
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Enter GSTIN number"
                        />
                      </div>
                    </div>
                    <div className="w-full h-full gap-2 flex justify-center items-center">
                      <div className="w-full h-full flex flex-col justify-center items-center">
                        <label
                          htmlFor="gstin"
                          className="w-full block text-sm font-medium text-ombase  "
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
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Enter GSTIN number"
                        />
                      </div>
                    </div>
                    <div className="w-full h-full gap-2 flex justify-center items-center">
                      <div className="w-full h-full flex flex-col justify-center items-center">
                        <label
                          htmlFor="gstin"
                          className="w-full block text-sm font-medium text-ombase  "
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
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Enter GSTIN number"
                        />
                      </div>
                      <div className="w-full h-full flex flex-col justify-center items-center">
                        <label
                          htmlFor="gstin"
                          className="w-full block text-sm font-medium text-ombase  "
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
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Enter GSTIN number"
                        />
                      </div>
                      <div className="w-full h-full flex flex-col justify-center items-center">
                        <label
                          htmlFor="gstin"
                          className="w-full block text-sm font-medium text-ombase  "
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
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Enter GSTIN number"
                        />
                      </div>
                    </div>
                    <div className="w-full h-full gap-2 flex justify-center items-center">
                      <div className="w-full h-full flex flex-col justify-center items-center">
                        <label
                          htmlFor="gstin"
                          className="w-full block text-sm font-medium text-ombase  "
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
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Enter GSTIN number"
                        />
                      </div>
                      <div className="w-full h-full flex flex-col justify-center items-center">
                        <label
                          htmlFor="gstin"
                          className="w-full block text-sm font-medium text-ombase  "
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
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Enter GSTIN number"
                        />
                      </div>
                      <div className="w-full h-full flex flex-col justify-center items-center">
                        <button className="btn bg-ombase btn-wide text-white">
                          Register
                        </button>
                      </div>
                    </div>
                  </form> */}
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
      <div className="w-full h-[30%] ">
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
