import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ombase from "./Components/Ombase";
import ContactUs from "./Components/ContactUs";
import MultiSelectDropdown from "./Components/MultiSelectDropdown";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ombase />} />
        <Route path="/ContactUS" element={<ContactUs />} />
        <Route path="/multiselect" element={<MultiSelectDropdown />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
