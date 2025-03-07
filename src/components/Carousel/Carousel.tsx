"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IProduct } from "@/lib/example";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

interface CarouselProps {
  products: IProduct[];
}

const Carousel: React.FC<CarouselProps> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 9;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, products.length - itemsPerPage)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="relative w-full container mx-auto px-4">
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-4"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-32 flex flex-col items-center group cursor-pointer"
            >
              {/* Circular Image Container */}
              <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-100 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md flex items-center justify-center">
                <Image
                  src={product.image_url}
                  alt={product.name}
                  width={128}
                  height={128}
                  className="w-28 h-28 rounded-full flex items-center justify-center"
                />
              </div>
              {/* Product Name */}
              <div className="text-center mt-2">
                <h3 className="text-sm font-medium text-black line-clamp-1 transition-all duration-300 ease-in-out group relative overflow-hidden">
                  {product.name}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full" />
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        disabled={currentIndex === 0}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous slide"
      >
        <IoIosArrowBack className="w-6 h-6 cursor-pointer" color="black" />
      </button>
      <button
        onClick={nextSlide}
        disabled={
          currentIndex >= products.length - itemsPerPage ||
          products.length <= itemsPerPage
        }
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next slide"
      >
        <IoIosArrowForward className="w-6 h-6 cursor-pointer" color="black" />
      </button>
    </div>
  );
};

export default Carousel;
