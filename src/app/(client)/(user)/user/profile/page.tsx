"use client";
import React, { useState } from "react";

const Page = () => {
  const [isChangePassword, setIsChangePassword] = useState<boolean>(false);

  return (
    <div className="w-full mx-auto">
      <h1 className="text-xl font-bold mb-6 text-gray-800">Profile</h1>
      <div className="border-t border-gray-200">
        <dl>
          <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              nguyenvana@gmail.com
            </dd>
          </div>
          <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Avatar</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <div className="flex items-center">
                <input
                  type="file"
                  id="avatar"
                  name="avatar"
                  className="hidden"
                />
                <button
                  type="button"
                  className="text-sm bg-white border border-r-0 border-gray-300 rounded px-3 py-1 hover:bg-gray-50"
                >
                  Choose file...
                </button>
                <button
                  type="button"
                  className="text-sm bg-white border border-gray-300 rounded px-3 py-1 hover:bg-gray-50"
                >
                  Browse
                </button>
              </div>
            </dd>
          </div>
          <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Full name <span className="text-red-500">*</span>
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                className="border border-gray-300 p-1 outline-none"
              />
            </dd>
          </div>
          <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Gender</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <div className="flex space-x-4">
                <label className="flex items-center space-x-1">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="form-radio"
                  />
                  <span>Female</span>
                </label>
                <label className="flex items-center space-x-1">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    className="form-radio"
                  />
                  <span>Male</span>
                </label>
                <label className="flex items-center space-x-1">
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    className="form-radio"
                  />
                  <span>Rather not say</span>
                </label>
              </div>
            </dd>
          </div>
          <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500"></dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="changePassword"
                  className="mr-2 cursor-pointer"
                  checked={isChangePassword}
                  onChange={(e) => setIsChangePassword(e.target.checked)}
                />
                <label
                  htmlFor="changePassword"
                  className="text-gray-700 cursor-pointer"
                >
                  Change password
                </label>
              </div>
            </dd>
          </div>
          {isChangePassword && (
            <>
              <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Current password <span className="text-red-500">*</span>
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input
                    type="password"
                    className="border border-gray-300 p-1 outline-none"
                    placeholder="Current password"
                  />
                </dd>
              </div>
              <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  New password <span className="text-red-500">*</span>
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input
                    type="password"
                    className="border border-gray-300 p-1 outline-none"
                    placeholder="New password"
                  />
                </dd>
              </div>
              <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Confirm password <span className="text-red-500">*</span>
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input
                    type="password"
                    className="border border-gray-300 p-1 outline-none"
                    placeholder="Confirm password"
                  />
                </dd>
              </div>
            </>
          )}

          <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500"></dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <div className="flex items-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
                >
                  Update
                </button>
              </div>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Page;
