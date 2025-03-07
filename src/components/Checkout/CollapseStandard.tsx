"use client";
import React, { useState } from "react";
import { FaTruck, FaQuestionCircle } from "react-icons/fa";

interface ShippingOption {
  title: string;
  price: string;
  deliveryTime: string;
  features: string[];
}

interface CollapsibleProps {
  options: ShippingOption[];
  selectedOption: string;
  onSelect: (option: string) => void;
}

const CollapseStandard: React.FC<CollapsibleProps> = ({
  options,
  selectedOption,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const selectedOptionData = options.find(
    (option) => option.title.toLowerCase() === selectedOption
  );
  const selectedTitle = selectedOptionData
    ? selectedOptionData.title
    : options[0].title;
  const selectedPrice = selectedOptionData
    ? selectedOptionData.price
    : options[0].price;

  return (
    <div className="border-2 border-blue-200 rounded-md shadow-sm">
      {/* Header of the collapsible card */}
      <div
        className="flex justify-between items-center p-3 cursor-pointer bg-blue-50 hover:bg-blue-100 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-2">
          <FaTruck className="w-5 h-5 text-gray-600" />
          <div className="flex items-center">
            <h3 className="text-sm font-medium text-gray-900">
              {selectedTitle}
            </h3>
            <FaQuestionCircle className="w-4 h-4 text-gray-700 ml-1" />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm font-bold text-gray-900">
            {selectedPrice}
          </span>
          <span className="text-gray-400 text-sm">{isOpen ? "▲" : "▼"}</span>
        </div>
      </div>
      <div
        className="p-3 cursor-pointer bg-blue-50 hover:bg-blue-100 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-sm text-gray-600 mb-2">
          {selectedOptionData?.deliveryTime}
        </p>
        <ul className="space-y-1 flex items-center gap-4 ">
          {selectedOptionData?.features.map((feature, idx) => (
            <li key={idx} className="text-sm text-gray-600 flex items-center">
              <span className="text-blue-500 mr-2 text-base">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Collapsible content with all shipping options */}
      {isOpen && (
        <div className="p-4 bg-white space-y-4">
          {options.map((option, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4 last:border-b-0 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => onSelect(option.title.toLowerCase())}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <input
                    type="radio"
                    checked={selectedOption === option.title.toLowerCase()}
                    onChange={() => onSelect(option.title.toLowerCase())}
                    className="mr-3 w-5 h-5 accent-blue-500 cursor-pointer"
                  />
                  <h4 className="text-sm font-semibold text-gray-800">
                    {option.title}
                  </h4>
                </div>
                <span className="text-sm font-bold text-gray-900">
                  {option.price}
                </span>
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-600 mb-2">
                  {option.deliveryTime}
                </p>
                <ul className="space-y-1 flex items-center gap-4">
                  {option.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-600 flex items-center"
                    >
                      <span className="text-blue-500 mr-2 text-base">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CollapseStandard;
