"use client";

import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
const SIZE_OPTIONS = [
  { value: "S", price: 31.95 },
  { value: "M", price: 32.95 },
  { value: "L", price: 32.95 },
  { value: "XL", price: 33.95 },
  { value: "2XL", price: 34.95 },
  { value: "3XL", price: 35.95 },
  { value: "4XL", price: 37.95 },
  { value: "5XL", price: 38.95 },
];
const SizeSection = () => {
  const [selectedSize, setSelectedSize] = useState("");
  return (
    <div className="mb-4 flex items-center space-x-8 ">
      <div className="flex items-center">
        <span className="text-gray-700">Size</span>
        <FaQuestionCircle className="text-gray-400 text-sm ml-2" />
      </div>
      <div className="relative flex-1">
        <select
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
          className=" block w-full px-4 py-3 text-gray-700 bg-white border border-gray-400/70 rounded-2xl appearance-none focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500
              "
        >
          <option value="" disabled className="text-gray-400">
            Choose a size
          </option>
          {SIZE_OPTIONS.map((size) => (
            <option
              key={size.value}
              value={size.value}
              className="
                    text-gray-800 
                    hover:bg-blue-500 
                    focus:bg-purple-50
                  "
            >
              {size.value} (${size.price.toFixed(2)})
            </option>
          ))}
        </select>

        {/* Custom dropdown arrow */}
        <div
          className="
              pointer-events-none 
              absolute 
              inset-y-0 
              right-0 
              flex 
              items-center 
              px-3 
              text-gray-700
            "
        >
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SizeSection;
