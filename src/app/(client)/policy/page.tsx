"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

import image from "@/assets/images/policy/create-your-own.webp";
import image1 from "@/assets/images/policy/return.svg";
import Content from "@/components/Policy/Content";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-500">Ⓒ Apr 26, 2021 ⬩ Policies</p>
        <div className="flex space-x-4">
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <FaFacebookF />
          </a>
          <a href="#" className="text-orange-400 hover:text-orange-600">
            <FaTwitter />
          </a>
          <a href="#" className="text-pink-600 hover:text-pink-800">
            <FaInstagram />
          </a>
          <a href="#" className="text-red-600 hover:text-red-800">
            <FaPinterestP />
          </a>
        </div>
      </div>

      <div className="bg-orange-50 p-4 mb-6 rounded-lg flex justify-between">
        <h2 className="text-lg font-semibold mb-2">Table of Contents</h2>
        <button className="text-blue-600 hover:text-blue-800">+ Expand</button>
      </div>

      {/* Content */}
      <div className="flex flex-col-reverse md:grid md:grid-cols-3  space-x-8 ">
        <div className="col-span-2">
          <Content />
        </div>

        {/* Sidebar with Design Section */}
        <div className="bg-gray-100 h-[600px] w-full max-h-screen p-4 rounded-lg col-span-1 gap-0 ">
          <Image
            src={image}
            alt="Create Your Own Design"
            className="w-full h-[333px]  mb-4"
          />
          <p className="text-center mb-4">
            Got a design? Upload it to see it on our products
          </p>
          <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
            Browse your design
          </button>
          <div className="mt-6 grid grid-cols-4 gap-4 text-sm text-gray-600">
            <div className="flex flex-col text-center items-center ">
              <Image src={image1} alt="img" width={32} height={32} />
              <span>Sustainable Materials</span>
            </div>
            <div className="flex flex-col  text-center items-center ">
              <Image src={image1} alt="img" width={32} height={32} />
              <span>Secure Payment</span>
            </div>
            <div className="flex flex-col  text-center items-center ">
              <Image src={image1} alt="img" width={32} height={32} />
              <span>30 Days Free Returns</span>
            </div>
            <div className="flex flex-col  text-center items-center ">
              <Image src={image1} alt="img" width={32} height={32} />
              <span>Worldwide Shipping</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
