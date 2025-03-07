'use client'

import bannerImage from "@/assets/images/home/about-sell-banner-2.png";
import React from "react";
import Image from "next/image";

const PrintervalBanner = () => {
  return (
    <div className="w-full py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -left-16 -bottom-32 w-96 h-96 rounded-full bg-pink-100 opacity-60"></div>
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-blue-100 opacity-60 hidden lg:block"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <Image
              src={bannerImage}
              alt="Printerval Products"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>

          <div className="w-full lg:w-1/2 lg:pl-12">
            <div className="flex items-center mb-2">
              <h1 className="text-4xl md:text-5xl font-bold text-orange-500">
                Printerval
              </h1>
              <div className="w-8 h-8 bg-blue-300 rounded-full ml-4"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
              Spice up your life
            </h2>
            <p className="text-gray-700 mb-8">
              Printerval.com is an online marketplace, where people come
              together to make, sell, buy, and collect unique items.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-teal-100 p-1 rounded-full mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-teal-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-800 font-medium">
                  A community doing good
                </span>
              </div>

              <div className="flex items-center">
                <div className="bg-teal-100 p-1 rounded-full mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-teal-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-800 font-medium">
                  Support independent creators
                </span>
              </div>

              <div className="flex items-center">
                <div className="bg-teal-100 p-1 rounded-full mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-teal-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-800 font-medium">Peace of mind</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintervalBanner;
