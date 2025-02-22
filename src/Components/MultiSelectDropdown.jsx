import React, { useState } from "react";

const MultiSelectDropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCheckboxChange = (option) => {
    setSelectedOptions(
      (prev) =>
        prev.includes(option)
          ? prev.filter((item) => item !== option) // Remove if already selected
          : [...prev, option] // Add if not selected
    );
  };

  return (
    <div className="relative inline-block">
      {/* Dropdown Button */}
      <button
        className="w-full px-4 py-2 text-left bg-white border rounded shadow-md focus:outline-none text-[8px] md:text-[10px] lg:text-[14px] "
        onClick={toggleDropdown}
      >
        Select Products
        <span className="float-right">&#9662;</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white border rounded shadow-lg">
          {options.map((option) => (
            <label
              key={option}
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 text-[8px] md:text-[10px] "
            >
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
