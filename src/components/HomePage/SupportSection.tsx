'use client'

import React from "react";
import img1 from "@/assets/images/home/design-seller00.webp";
import img2 from "@/assets/images/home/design-seller01.webp";
import img3 from "@/assets/images/home/design-seller02.webp";
import img4 from "@/assets/images/home/design-seller03.webp";
import img5 from "@/assets/images/home/design-seller04.webp";
import Image from "next/image";

const SupportArtistsSection = () => {
  return (
    <div className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-center">
          <div className="pr-0 md:pr-8 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800">
              Support independent{" "}
              <span className="text-purple-600">Artists</span>
            </h2>
            <h2 className="text-3xl font-bold text-gray-800 mt-1">
              and <span className="text-purple-600">Crafters</span>
            </h2>
            <p className="mt-6 text-gray-700 text-lg">
              Theres no Printerval warehouse – all products belong to creative
              artists and crafters. We are just a bridge to connect you with
              dedicated makers and get eye-catching pieces.
            </p>
            <button className="mt-8 bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-md transition duration-300">
              Start selling
            </button>
          </div>

          <div className="flex justify-center md:justify-end relative w-full max-w-md">
            <Image
              src={img1}
              alt="Art 1"
              className="absolute transform -rotate-15 -translate-x-24 z-10 w-40 h-60 rounded-lg shadow-md object-cover"
            />
            <Image
              src={img2}
              alt="Art 2"
              className="absolute transform -rotate-7 -translate-x-12 z-20 w-40 h-60 rounded-lg shadow-md object-cover"
            />
            <Image
              src={img3}
              alt="Main Art"
              className="z-30 w-40 h-60 rounded-lg shadow-lg object-cover"
            />
            <Image
              src={img4}
              alt="Art 4"
              className="absolute transform rotate-7 translate-x-12 z-20 w-40 h-60 rounded-lg shadow-md object-cover"
            />
            <Image
              src={img5}
              alt="Art 5"
              className="absolute transform rotate-15 translate-x-24 z-10 w-40 h-60 rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportArtistsSection;
