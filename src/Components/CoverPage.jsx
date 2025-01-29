import React from "react";
import Laptop from "../Assets/explore-Laptop.png";
import Desktop from "../Assets/explore-desktop.png";
import Workstation from "../Assets/explore-workstation.png";
import MiniPC from "../Assets/explore-minipc.png";
import AllInOne from "../Assets/explore-AIO.png";
import Server from "../Assets/explore-server.png";

const CoverPage = () => {
  return (
    <div className="rounded-s-lg w-full h-full bg-gradient-to-r from-slate-600 py-10 px-2 ">
      <p className="text-xs sm:text-lg">
        A versatile tech OEM crafting an extensive array of computing devices,
        from desktops and Chromebooks to all-in-ones, laptops, workstations.
      </p>
    </div>
  );
};

export default CoverPage;
