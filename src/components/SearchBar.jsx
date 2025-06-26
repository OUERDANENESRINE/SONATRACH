// src/components/SearchBar.jsx
import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Rechercher un nom..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full md:w-1/2 p-3 rounded-md border border-gray-300 shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent placeholder-gray-400 text-gray-800 transition duration-200 ease-in-out"
    />
  );
};

export default SearchBar;
