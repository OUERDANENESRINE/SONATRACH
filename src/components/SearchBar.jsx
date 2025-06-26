// src/components/SearchBar.jsx
import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Rechercher un nom..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full md:w-1/2 p-2 border rounded mb-6"
    />
  );
};

export default SearchBar;
