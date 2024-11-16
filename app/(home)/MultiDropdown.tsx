"use client";

import { useState } from "react";

const MultiDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedCampus, setSelectedCampus] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  type DataType = {
    [key: string]: {
      cities: string[];
      campuses: Record<string, string[]>;
      products: string[];
      services: string[];
    };
  };

  const data: DataType = {
    France: {
      cities: ["Paris", "Lyon", "Marseille"],
      campuses: {
        Paris: ["Sorbonne", "Sciences Po"],
        Lyon: ["Lyon Business School", "Jean Moulin University"],
        Marseille: ["Aix-Marseille University", "Mediterranean Institute"],
      },
      products: ["Books", "Electronics", "Fashion"],
      services: ["Tutoring", "Consulting", "Delivery"],
    },
    Belgium: {
      cities: ["Brussels", "Antwerp", "Ghent"],
      campuses: {
        Brussels: ["Vrije Universiteit", "University of Brussels"],
        Antwerp: ["University of Antwerp", "Antwerp Management School"],
        Ghent: ["Ghent University", "Artevelde University"],
      },
      products: ["Furniture", "Clothing", "Groceries"],
      services: ["Cleaning", "Transportation", "Catering"],
    },
    Luxembourg: {
      cities: ["Luxembourg City", "Esch-sur-Alzette", "Differdange"],
      campuses: {
        "Luxembourg City": ["University of Luxembourg"],
        "Esch-sur-Alzette": ["Belval Campus"],
        Differdange: ["Differdange Institute"],
      },
      products: ["Stationery", "Gardening", "Appliances"],
      services: ["Legal Assistance", "Maintenance", "Insurance"],
    },
  };

  const cities =
    selectedCountry && data[selectedCountry]
      ? data[selectedCountry].cities
      : [];
  const campuses =
    selectedCountry &&
    selectedCity &&
    data[selectedCountry]?.campuses[selectedCity]
      ? data[selectedCountry].campuses[selectedCity]
      : [];
  const products =
    selectedCountry && data[selectedCountry]?.products
      ? data[selectedCountry].products
      : [];
  const services =
    selectedCountry && data[selectedCountry]?.services
      ? data[selectedCountry].services
      : [];

  const Dropdown = ({
    label,
    items,
    selected,
    setSelected,
    disabled,
  }: {
    label: string;
    items: string[];
    selected: string | null;
    setSelected: (value: string) => void;
    disabled?: boolean;
  }) => (
    <div className="relative my-2 mx-2 w-26">
      <select
        className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
        value={selected || ""}
        onChange={(e) => setSelected(e.target.value)}
        disabled={disabled}
      >
        <option value="" disabled>
          {label}
        </option>
        {items.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div>
      <div className="flex flex-row justify-center">
        <p className="m-8 text-xl">What is your Need?</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 p-4">
        <Dropdown
          label="Select a Country"
          items={Object.keys(data)}
          selected={selectedCountry}
          setSelected={(value) => {
            setSelectedCountry(value);
            setSelectedCity(null);
            setSelectedCampus(null);
            setSelectedProduct(null);
            setSelectedService(null);
          }}
        />
        <Dropdown
          label="Select a City"
          items={cities}
          selected={selectedCity}
          setSelected={(value) => {
            setSelectedCity(value);
            setSelectedCampus(null);
          }}
          disabled={!selectedCountry}
        />
        <Dropdown
          label="Select a Campus"
          items={campuses}
          selected={selectedCampus}
          setSelected={setSelectedCampus}
          disabled={!selectedCity}
        />
        <Dropdown
          label="Select a Product"
          items={products}
          selected={selectedProduct}
          setSelected={setSelectedProduct}
          disabled={!selectedCountry}
        />
        <Dropdown
          label="Select a Service"
          items={services}
          selected={selectedService}
          setSelected={setSelectedService}
          disabled={!selectedCountry}
        />
      </div>
    </div>
  );
};

export default MultiDropdown;
