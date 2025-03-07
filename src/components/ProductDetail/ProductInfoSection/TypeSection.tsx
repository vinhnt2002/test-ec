"use client";

import React, { useState } from "react";

const TypeSection = () => {
  const [selectedType, setSelectedType] = useState("Male");

  return (
    <div className="mb-4 flex items-center space-x-8">
      <div className="text-gray-700 ">Type</div>
      <div className="flex space-x-2">
        <button
          className={`px-6 py-2 rounded-full ${
            selectedType === "Male"
              ? "bg-gray-200"
              : "bg-white border border-gray-300"
          }`}
          onClick={() => setSelectedType("Male")}
        >
          Male
        </button>
        <button
          className={`px-6 py-2 rounded-full ${
            selectedType === "Female"
              ? "bg-indigo-900 text-white"
              : "bg-white border border-gray-300"
          }`}
          onClick={() => setSelectedType("Female")}
        >
          Female
        </button>
      </div>
    </div>
  );
};

export default TypeSection;
