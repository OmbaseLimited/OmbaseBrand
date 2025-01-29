import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ombase from "./Components/Ombase";
import ContactUs from "./Components/ContactUs";
import MultiSelectDropdown from "./Components/MultiSelectDropdown";
import IPBook from "../src/Components/IPBook";
import AarivServer from "./Components/AarivServer";
import IPCentre from "../src/Components/IPCentre";
import IPStation from "../src/Components/IPStation";
import MiniPc from "../src/Components/MiniPc";
import Workstation from "../src/Components/Workstation";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AarivServer />} />
        {/* <Route path="/ContactUS" element={<ContactUs />} />
        <Route path="/multiselect" element={<MultiSelectDropdown />} />
        <Route path="/IPBook" element={<IPBook />} />
        <Route path="/AarivServer" element={<AarivServer />} />
        <Route path="/IPCentre" element={<IPCentre />} />
        <Route path="/IPStation" element={<IPStation />} />
        <Route path="/MiniPc" element={<MiniPc />} />
        <Route path="/Workstation" element={<Workstation />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
