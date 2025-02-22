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
      {/* <div className="w-full h-[6%]  bg-ombase overflow-hidden">
        <OMBASENAVBAR />
      </div> */}
      <div
        className="w-full h-full flex justify-center items-center p-5 bg-cover bg-no-repeat"
        // style={{ backgroundImage: `url(${dna})` }}
      >
      {/* <div
        className="w-full h-[64%] border border-red-500 flex justify-center items-center p-5 bg-cover bg-no-repeat"
        // style={{ backgroundImage: `url(${dna})` }}
      > */}
        <div className="w-full md:w-full md:h-full lg:w-[65%] lg:h-[80%] ">
          <div className="w-full h-full mx-auto ">
            <div className="w-full h-[60px] mb-4 p-2 flex md:space-x-4 py-2 lg:p-2 bg-white border border-ombase rounded-lg shadow-m ">
              <button
                onClick={() => setOpenTab(1)}
                className={`flex-1 text-nowrap px-1 py-2 rounded-md focus:outline-none focus:shadow-outline-blue transition-all text-center duration-300 text-[8px] md:text-[14px] w-fit overflow-hidden ${
                  openTab === 1 ? "bg-ombase text-white" : ""
                }`}
              >
                Sales Enquiry
              </button>
              <button
                onClick={() => setOpenTab(2)}
                className={`flex-1 text-nowrap px-1 py-2 rounded-md focus:outline-none focus:shadow-outline-blue transition-all text-center duration-300 text-[8px] md:text-[14px] w-fit overflow-hidden ${
                  openTab === 2 ? "bg-ombase text-white" : ""
                }`}
              >
                Support Query
              </button>
              <button
                onClick={() => setOpenTab(3)}
                className={`flex-1 text-nowrap px-1 py-2 rounded-md focus:outline-none focus:shadow-outline-blue transition-all text-center duration-300 text-[8px] md:text-[14px] w-fit overflow-hidden ${
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
                  <div className="w-full h-[90%] flex flex-col md:flex-row justify-center items-center gap-5 md:gap-0">
                    <div className="w-full md:w-1/3 h-full flex flex-col items-center justify-center ">
                      <div className="w-full h-full flex flex-col justify-center items-center">
                        <h2 className="w-full h-[10%] font-semibold mb-2 text-ombase">
                          <p className="text-xl md:text-3xl font-bold flex">
                            Get in touch <p className="text-xl md:text-4xl">👋</p>
                          </p>
                        </h2>
                        <div className="w-full h-full flex flex-col justify-center ">
                          <p className="text-sm md:text-3xl font-bold text-black">Whatsapp</p>
                          <p className="text-[10px] md:text-lg text-ombase">+91 1800-267-1919</p>
                        </div>
                        <div className="w-full h-full flex flex-col justify-center ">
                          <p className="text-sm md:text-3xl font-bold text-black">Location</p>
                          <p className="text-[10px] md:text-lg text-ombase">Sr 32/6 Narhe, Pune</p>
                          <p className="text-[10px] md:text-lg text-ombase">
                            Pune Head Office <br /> India - 411041
                          </p>
                        </div>
                        <div className="w-full h-full flex flex-col justify-center ">
                          <p className="text-sm md:text-3xl font-bold text-black">Email</p>
                          <p className="text-[10px] md:text-lg text-ombase">sales@ombase.in</p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-2/3 h-full flex justify-center items-center border-[1px] border-ombase rounded-xl">
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
                            className="w-[100%] outline-none input input-bordered input-sm md:input-md placeholder:text-[8px] md:placeholder:text-[10px] lg:placeholder:text-[14px]"
                          />
                          <input
                            type="text"
                            placeholder="Enter Email ID"
                            className="w-[100%] outline-none input input-bordered input-sm md:input-md placeholder:text-[8px] md:placeholder:text-[10px] lg:placeholder:text-[14px]"
                          />
                          <input
                            type="text"
                            placeholder="Enter Phone"
                            className="w-[100%] outline-none input input-bordered input-sm md:input-md placeholder:text-[8px] md:placeholder:text-[10px] lg:placeholder:text-[14px]"
                          />

                          <MultiSelectDropdown options={dropdownOptions} />
                          <br />
                          <div className="w-full flex justify-center items-center">
                            <button className="btn btn-sm md:btn-wide text-[8px] bg-white text-ombase shadow-lg border-[1px] border-ombase w-fit hover:bg-ombase hover:text-white">
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
      {/* <div className="w-full h-[30%] ">
        <Footer />
      </div> */}
    </div>
  );
};

export default ContactUs;
