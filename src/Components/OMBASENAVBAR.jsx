// "use client";
// import { Button } from "flowbite-react";
// import { useState } from "react";
// import OmbaseLogo from "../Assets/ombaseLogo1.png";

// const OMBASENAVBAR = () => {
//   const [activeTab, setActiveTab] = useState("about");

//   return (
//     <div className="w-full h-full flex flex-col items-center bg-ombaseFaintBg">
//       {/* Navbar Container */}
//       <div className="flex justify-between w-full h-full ">
//         {/* Logo Section */}
//         <div className="w-[20%] sm:w-[15%] md:w-[10%] lg:w-[4%] flex justify-center items-center">
//           <img
//             src={OmbaseLogo}
//             alt="Ombase Logo"
//             className="max-w-full  sm:h-auto"
//           />
//         </div>

//         {/* Navbar Links Section */}
//         <div className="w-full px-5 flex justify-between items-center text-xs">
//           {/* Login and Sign Up */}
//           <div className="order-2 hidden md:flex items-center space-x-4">
//             <a
//               href="#"
//               className="text-sm font-medium text-gray-800 hover:bg-gray-50 px-4 py-2 rounded-lg"
//             >
//               Login
//             </a>
//             <a
//               href="#"
//               className="text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
//             >
//               Signup
//             </a>
//           </div>

//           {/* Navbar Links */}
//           <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
//             <a
//               href="#"
//               className="text-gray-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-600"
//             >
//               Home
//             </a>

//             {/* Company Dropdown */}
//             <div className="relative group">
//               <button className="text-gray-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-600">
//                 Company
//               </button>
//               <div className="absolute left-0 hidden mt-2 bg-white shadow-lg dark:bg-gray-800 group-hover:block">
//                 <div className="flex">
//                   {/* Vertical Tab Navigation */}
//                   <div className="flex flex-col w-64 bg-ombase/20 dark:bg-gray-800 p-4">
//                     <button
//                       onClick={() => setActiveTab("about")}
//                       className="py-2 px-4 text-left w-full hover:bg-gray-200 dark:hover:bg-gray-700"
//                     >
//                       About Us
//                     </button>
//                     <button
//                       onClick={() => setActiveTab("library")}
//                       className="py-2 px-4 text-left w-full hover:bg-gray-200 dark:hover:bg-gray-700"
//                     >
//                       Library
//                     </button>
//                     <button
//                       onClick={() => setActiveTab("resources")}
//                       className="py-2 px-4 text-left w-full hover:bg-gray-200 dark:hover:bg-gray-700"
//                     >
//                       Resources
//                     </button>
//                     <button
//                       onClick={() => setActiveTab("pro")}
//                       className="py-2 px-4 text-left w-full hover:bg-gray-200 dark:hover:bg-gray-700"
//                     >
//                       Pro Version
//                     </button>
//                   </div>

//                   {/* Tab Content */}
//                   <div className="w-64 p-4">
//                     {activeTab === "about" && (
//                       <div className="tab-content">
//                         <p>About Us: Detailed information about our company.</p>
//                       </div>
//                     )}
//                     {activeTab === "library" && (
//                       <div className="tab-content">
//                         <p>
//                           Library: Explore our extensive library of resources.
//                         </p>
//                       </div>
//                     )}
//                     {activeTab === "resources" && (
//                       <div className="tab-content">
//                         <p>Resources: Find helpful tools and guides here.</p>
//                       </div>
//                     )}
//                     {activeTab === "pro" && (
//                       <div className="tab-content">
//                         <p>Pro Version: Upgrade to access premium features.</p>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <a
//               href="#"
//               className="text-gray-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-600"
//             >
//               Team
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OMBASENAVBAR;

"use client";
import { useState } from "react";
import OmbaseLogo from "../Assets/ombaseLogo1.png";
import { Link } from "react-router-dom";

const OMBASENAVBAR = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  return (
    <div className="w-full h-full flex flex-col items-center bg-ombase">
      {/* Navbar Container */}
      <div className="flex justify-between items-center w-full h-full bg-white shadow-md">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src={OmbaseLogo}
            alt="Ombase Logo"
            className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
          />
        </div>

        {/* Navbar Links Section */}
        <div className="flex space-x-6 items-center">
          <Link to="/">
            <a href="#" className="text-gray-800 hover:text-blue-600">
              Home
            </a>
          </Link>

          <button
            onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
            className="text-gray-800 hover:text-blue-600"
          >
            Menu
          </button>

          <Link to="/ContactUS" className="text-gray-800 hover:text-blue-600">
            Contact
          </Link>
        </div>
      </div>

      {/* Mega Menu */}
      {isMegaMenuOpen && (
        <div className="absolute top-11 sm:top-14  left-50% w-full  sm:w-[50%] h-[50%] bg-white shadow-lg z-50">
          {/* Close Button */}
          <button
            onClick={() => setIsMegaMenuOpen(false)}
            className="absolute top-2 right-2 text-gray-600 hover:text-red-600 bg-gray-200 hover:bg-gray-300 rounded-full size-5 sm:size-10 text-xs sm:text-lg "
          >
            ✕
          </button>

          <div className="flex flex-col lg:flex-row h-full">
            {/* Vertical Tabs */}
            <div className="w-full lg:w-1/4 bg-gray-100 p-4">
              <button
                onClick={() => setActiveTab("home")}
                className={`w-full text-left py-2 px-4 mb-2 ${
                  activeTab === "home"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setActiveTab("team")}
                className={`w-full text-left py-2 px-4 mb-2 ${
                  activeTab === "team"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                Team
              </button>
              <button
                onClick={() => setActiveTab("product")}
                className={`w-full text-left py-2 px-4 ${
                  activeTab === "product"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                Product
              </button>
            </div>

            {/* Tab Content */}
            <div className="w-full lg:w-3/4 p-8">
              {activeTab === "home" && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Home</h2>
                  <p>
                    Welcome to our website! Explore the latest updates and
                    features here.
                  </p>
                </div>
              )}
              {activeTab === "team" && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Team</h2>
                  <p>
                    Meet our amazing team of professionals who make everything
                    possible.
                  </p>
                </div>
              )}
              {activeTab === "product" && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Product</h2>
                  <p>
                    Discover our innovative products designed to solve your
                    problems.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OMBASENAVBAR;
