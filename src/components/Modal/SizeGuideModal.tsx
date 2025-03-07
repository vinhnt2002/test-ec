import { useModal } from "@/hooks/useModal";
import React, { useState } from "react";

type GenderTab = "Male" | "Female";
type Unit = "cm" | "inches";
type MeasurementTab = "width" | "sleeveLength" | "length";
type Size = "S" | "M" | "L" | "XL" | "2XL" | "3XL" | "4XL" | "5XL";

type SizeTable = {
  [key in Size]: string;
};

type SizeData = {
  width: SizeTable;
  sleeveLength: SizeTable;
  length: SizeTable;
};

const SizeGuideModal: React.FC = () => {
  const { isOpen, type, onClose } = useModal();
  const [activeGender, setActiveGender] = useState<GenderTab>("Male");
  const [unit, setUnit] = useState<Unit>("inches");
  const [activeMeasurement, setActiveMeasurement] =
    useState<MeasurementTab>("width");

  if (!isOpen || type !== "sizeGuideModal") {
    return null;
  }

  // Size data - in a real app, you might want to fetch this from an API or CMS
  const sizeData: SizeData = {
    width: {
      S: "17.99",
      M: "20.00",
      L: "21.97",
      XL: "23.98",
      "2XL": "25.98",
      "3XL": "27.99",
      "4XL": "30.04",
      "5XL": "31.97",
    },
    sleeveLength: {
      S: "7.24",
      M: "7.76",
      L: "8.23",
      XL: "8.74",
      "2XL": "9.25",
      "3XL": "9.78",
      "4XL": "10.24",
      "5XL": "10.75",
    },
    length: {
      S: "28.50",
      M: "29.49",
      L: "30.51",
      XL: "31.50",
      "2XL": "32.52",
      "3XL": "33.50",
      "4XL": "34.49",
      "5XL": "35.51",
    },
  };

  const genderTabs: GenderTab[] = ["Male", "Female"];
  const sizes: Size[] = ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"];
  const measurementLabels = {
    width: "WIDTH",
    sleeveLength: "SLEEVE LENGTH",
    length: "LENGTH",
  };

  const measurementInstructions = {
    width:
      "Measure across the chest one inch below the arm holes when laid flat.",
    sleeveLength:
      "Start at center of neck and measure to shoulder seam, then down to hem of sleeve.",
    length: "Measure from highest point of the shoulder to the bottom hem.",
  };

  // Convert inches to cm if needed
  const convertValue = (value: string) => {
    if (unit === "cm") {
      return (parseFloat(value) * 2.54).toFixed(2);
    }
    return value;
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto animate-fadeIn">
        <div className="flex items-center justify-between p-4 border-b relative">
          <h2 className="text-xl font-semibold text-center w-full text-gray-800">
            Size & Fit Info
          </h2>
          <button
            onClick={onClose}
            className="absolute right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-600"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="p-4">
          {/* Top Controls Row */}
          <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
            {/* Gender tabs */}
            <div className="flex gap-2">
              {genderTabs.map((gender) => (
                <button
                  key={gender}
                  onClick={() => setActiveGender(gender)}
                  className={`py-1.5 px-4 rounded-md transition-all text-sm ${
                    activeGender === gender
                      ? "bg-indigo-900 text-white shadow-sm"
                      : "bg-white text-gray-700 hover:bg-gray-100 border"
                  }`}
                >
                  {gender}
                </button>
              ))}
            </div>

            <div className="flex rounded-md overflow-hidden border shadow-sm">
              <button
                className={`px-3 py-1.5 text-sm transition-colors ${
                  unit === "cm"
                    ? "bg-white font-medium"
                    : "bg-indigo-900 text-white hover:bg-indigo-800"
                }`}
                onClick={() => setUnit("inches")}
              >
                inches
              </button>
              <button
                className={`px-3 py-1.5 text-sm transition-colors ${
                  unit === "inches"
                    ? "bg-white font-medium"
                    : "bg-indigo-900 text-white hover:bg-indigo-800"
                }`}
                onClick={() => setUnit("cm")}
              >
                cm
              </button>
            </div>
          </div>

          {/* Main content area */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Left side: Measurement illustration */}
            <div className="md:w-1/3 bg-gray-50 p-4 rounded-lg">
              <h3 className="text-md font-bold text-gray-700 mb-3">
                HOW TO MEASURE
              </h3>

              {/* Measurement tabs */}
              <div className="flex flex-col space-y-2 mb-4">
                {Object.entries(measurementLabels).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setActiveMeasurement(key as MeasurementTab)}
                    className={`py-2 px-3 text-left rounded-md transition-all text-sm ${
                      activeMeasurement === key
                        ? "bg-blue-100 text-blue-600 font-medium border-l-4 border-blue-600"
                        : "bg-white text-gray-700 hover:bg-gray-100 border"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Measurement diagram placeholder */}
              <div className="bg-white border rounded-lg p-4 mb-4 flex items-center justify-center h-48">
                <div className="text-center">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-24 h-24 mx-auto mb-2 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    {activeMeasurement === "width" && (
                      <>
                        <rect x="20" y="30" width="60" height="40" rx="2" />
                        <line
                          x1="20"
                          y1="50"
                          x2="80"
                          y2="50"
                          strokeDasharray="4 2"
                        />
                        <line x1="25" y1="45" x2="25" y2="55" />
                        <line x1="75" y1="45" x2="75" y2="55" />
                      </>
                    )}
                    {activeMeasurement === "sleeveLength" && (
                      <>
                        <path d="M50,30 L30,40 L20,60" />
                        <path d="M50,30 L70,40 L80,60" />
                        <circle cx="50" cy="30" r="5" />
                        <line
                          x1="50"
                          y1="30"
                          x2="20"
                          y2="60"
                          strokeDasharray="4 2"
                        />
                      </>
                    )}
                    {activeMeasurement === "length" && (
                      <>
                        <rect x="30" y="30" width="40" height="50" rx="2" />
                        <line
                          x1="50"
                          y1="20"
                          x2="50"
                          y2="80"
                          strokeDasharray="4 2"
                        />
                        <line x1="45" y1="20" x2="55" y2="20" />
                        <line x1="45" y1="80" x2="55" y2="80" />
                      </>
                    )}
                  </svg>
                  <p className="text-gray-700 text-sm">
                    {measurementInstructions[activeMeasurement]}
                  </p>
                </div>
              </div>
            </div>

            {/* Right side: Size chart */}
            <div className="md:w-2/3">
              <h3 className="text-md font-bold text-gray-700 mb-3">
                SIZE CHART
              </h3>

              <div className="overflow-x-auto">
                <div className="border rounded-lg overflow-hidden shadow-sm">
                  <table className="w-full text-left min-w-max">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="p-3 font-semibold text-gray-700 text-sm">
                          Size
                        </th>
                        {sizes.map((size) => (
                          <th
                            key={size}
                            className="p-3 font-semibold text-gray-700 text-center text-sm"
                          >
                            {size}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t hover:bg-gray-50 transition-colors">
                        <td className="p-3 font-medium text-blue-600 text-sm">
                          WIDTH
                        </td>
                        {sizes.map((size) => (
                          <td
                            key={size}
                            className="p-3 text-blue-600 text-center text-sm"
                          >
                            {convertValue(sizeData.width[size])}
                          </td>
                        ))}
                      </tr>
                      <tr className="border-t hover:bg-gray-50 transition-colors">
                        <td className="p-3 font-medium text-blue-600 text-sm">
                          SLEEVE LENGTH
                        </td>
                        {sizes.map((size) => (
                          <td
                            key={size}
                            className="p-3 text-blue-600 text-center text-sm"
                          >
                            {convertValue(sizeData.sleeveLength[size])}
                          </td>
                        ))}
                      </tr>
                      <tr className="border-t hover:bg-gray-50 transition-colors">
                        <td className="p-3 font-medium text-blue-600 text-sm">
                          LENGTH
                        </td>
                        {sizes.map((size) => (
                          <td
                            key={size}
                            className="p-3 text-blue-600 text-center text-sm"
                          >
                            {convertValue(sizeData.length[size])}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Size recommendation guide */}
              <div className="mt-4 bg-blue-50 p-3 rounded-lg border border-blue-100">
                <h4 className="font-semibold text-blue-700 text-sm mb-2">
                  Size Recommendation
                </h4>
                <p className="text-blue-600 text-sm">
                  For a more comfortable fit, we recommend selecting one size up
                  if you are between sizes. Our garments are designed to have a
                  standard fit thats true to size.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeGuideModal;
