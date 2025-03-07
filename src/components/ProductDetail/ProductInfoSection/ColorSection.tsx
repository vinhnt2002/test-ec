"use client";

import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const COLOR_OPTIONS = [
  { name: "Red Tie-Dye", value: "red-tie-dye", hex: "#FF0000" },
  { name: "Pink", value: "pink", hex: "#FFC0CB" },
  { name: "Blue", value: "blue", hex: "#0000FF" },
  { name: "Teal", value: "teal", hex: "#008080" },
  { name: "White", value: "white", hex: "#FFFFFF" },
  { name: "Gray", value: "gray", hex: "#808080" },
];

const ColorSection = () => {
  const [selectedColor, setSelectedColor] = useState("red-tie-dye");
  const getTextColor = (hex: string) => {
    // Chuyển đổi hex sang RGB
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);

    // Công thức tính độ sáng (relative luminance - WCAG)
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness > 128 ? "text-black" : "text-white";
  };
  return (
    <div className="mb-4 flex items-center  space-x-8">
      <div className="text-gray-700">Color</div>
      <div className="flex flex-wrap space-x-2 space-y-2">
        {COLOR_OPTIONS.map((color) => (
          <button
            key={color.value}
            className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold 
               ${
                 selectedColor === color.value
                   ? "border-indigo-900 ring-2 ring-offset-2 ring-indigo-900"
                   : "border-gray-300"
               }`}
            style={{ backgroundColor: color.hex }}
            onClick={() => setSelectedColor(color.value)}
            title={color.name}
          >
            {selectedColor === color.value && (
              <span className={`${getTextColor(color.hex)} font-light`}>
                <FaCheck />
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorSection;
