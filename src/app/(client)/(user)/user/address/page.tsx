"use client";
import React, { useState } from "react";

const Page = () => {
  const [isAddNewAddress, setIsAddNewAddress] = useState<boolean>(false);

  return (
    <div className="w-full mx-auto">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-xl font-bold mb-6 text-gray-800">Address</h1>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
          onClick={() => setIsAddNewAddress(true)}
        >
          Add New
        </button>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          {isAddNewAddress && (
            <>
              <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full Name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    id="firtName"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-xs border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                    placeholder="Full Name"
                  />
                </dd>
              </div>
              <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Phone Number
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    id="firtName"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-xs border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                    placeholder="Phone Number"
                  />
                </dd>
              </div>
              <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Country/Region
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    id="firtName"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-xs border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                    placeholder="Country"
                  />
                </dd>
              </div>
              <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Shipping Address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    id="address"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-xs border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                    placeholder="Address"
                  />
                </dd>
              </div>
              <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500"></dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    id="apartment"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-xs border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                    placeholder="Apartment"
                  />
                </dd>
              </div>
              <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500"></dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    id="city"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-xs border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                    placeholder="City"
                  />
                </dd>
              </div>
              <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500"></dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    id="zipCode"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-xs border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                    placeholder="ZIP / Postal code"
                  />
                </dd>
              </div>
              <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500"></dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <div className="flex items-center gap-4">
                    <button
                      className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 cursor-pointer"
                      onClick={() => setIsAddNewAddress(false)}
                    >
                      Cancel
                    </button>

                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer">
                      Update
                    </button>
                  </div>
                </dd>
              </div>
            </>
          )}
        </dl>
      </div>
    </div>
  );
};

export default Page;
