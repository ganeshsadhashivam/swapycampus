import { useState } from "react";

export default function CountryDropdown() {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleSelect = (country: string) => {
    setSelectedCountry(country);
  };

  return (
    <div className="relative w-64 mx-auto mt-8">
      <button
        className="w-full text-left px-4 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-gray-200"
        onClick={() => setSelectedCountry("")}
      >
        {selectedCountry || "Select a Country"}
      </button>
      {selectedCountry === "" && (
        <ul className="absolute left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleSelect("France")}
          >
            France
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleSelect("Luxembourg")}
          >
            Luxembourg
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleSelect("Belgium")}
          >
            Belgium
          </li>
        </ul>
      )}
    </div>
  );
}
