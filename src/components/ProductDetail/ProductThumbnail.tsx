"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ProductThumbnail = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(0);

  const images = [
    "https://assets.printerval.com/2024/09/08/66dd681334b7c7.30906742.jpg",
    "https://assets.printerval.com/2025/02/27/dj1935342-custom-name-wu-tang-clan-hiphop-band-black-button-3d-print-baseball-jersey-val022725-da32a0922ad88eb5cd1ddb32e1f48ff5.jpg",
    "https://asset.prtvstatic.com/2024/07/06/6688be04005313.19895535.jpg",
  ];

  const nextImage = () => {
    setDirection(1);
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">
      {/* Thumbnail sidebar for desktop */}
      <div className="hidden md:flex flex-col space-y-4 w-1/4 max-w-[200px]">
        {images.map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative aspect-square w-full shadow-md rounded border border-gray-200 overflow-hidden cursor-pointer 
              ${currentImage === index ? "ring-2 ring-blue-500" : ""}`}
            onClick={() => {
              setDirection(index > currentImage ? 1 : -1);
              setCurrentImage(index);
            }}
          >
            <Image
              src={img}
              alt={`Thumbnail ${index}`}
              fill
              sizes="(max-width: 768px) 100px, 200px"
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Main image container */}
      <div className="relative w-full md:w-3/4 aspect-square md:aspect-video max-h-[650px] shadow-lg border-gray-200 rounded overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentImage}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                nextImage();
              } else if (swipe > swipeConfidenceThreshold) {
                prevImage();
              }
            }}
            className="absolute w-full h-full"
          >
            <Image
              src={images[currentImage]}
              alt="Product Image"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 shadow-md z-10"
          onClick={prevImage}
        >
          <FaChevronLeft className="text-gray-700" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 shadow-md z-10"
          onClick={nextImage}
        >
          <FaChevronRight className="text-gray-700" />
        </motion.button>

        {/* Mobile dot indicators INSIDE the image */}
        <div className="md:hidden absolute bottom-4 left-0 right-0 flex justify-center items-center space-x-2 z-10">
          {images.map((_, index) => (
            <motion.div
              key={index}
              whileTap={{ scale: 0.8 }}
              className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-300 
                ${currentImage === index ? "bg-blue-500" : "bg-white/50"}`}
              onClick={() => {
                setDirection(index > currentImage ? 1 : -1);
                setCurrentImage(index);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductThumbnail;
