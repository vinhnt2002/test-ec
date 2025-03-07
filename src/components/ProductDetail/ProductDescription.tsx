"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ProductDescription = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const contentVariants = {
    collapsed: {
      height: 150,
      overflow: "hidden",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    expanded: {
      height: "auto",
      overflow: "visible",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const gradientVariants = {
    collapsed: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    expanded: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="pt-4 mb-2 relative bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
        Description
      </h3>

      <motion.div
        initial="collapsed"
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={contentVariants}
        className="relative"
      >
        {!isExpanded && (
          <motion.div
            variants={gradientVariants}
            className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"
          ></motion.div>
        )}

        <div className="space-y-2">
          <div className="border-b border-gray-200 pb-4 flex justify-between">
            <span className="text-gray-600">Categories</span>
            <span className="text-orange-500">Clothing</span>
          </div>

          <div className="border-b border-gray-200 pb-4 flex justify-between">
            <span className="text-gray-600">Type</span>
            <span className="text-orange-500">Unisex T-shirt Pajamas Sets</span>
          </div>

          <div className="pb-4 text-sm text-gray-700">
            <p>
              You are shopping for a stunning and trendy product Christmas Movie
              Pajamas Set, Christmas Movie Film Christmas Pajamas Set, Merry For
              Unisex belong theme T-shirt Pajamas Sets at Printerval.
            </p>
            <p className="mt-2">
              Shop for attractive Christmas Movie Pajamas Set, Christmas Movie
              Film Christmas Pajamas Set, Merry or see more T-shirt Pajamas Sets
              products on right now!
            </p>
          </div>
        </div>
      </motion.div>

      {/* Nút Show More */}
      {!isExpanded && (
        <div className="text-center mt-2">
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsExpanded(true)}
            className="text-gray-600 text-sm border border-gray-300 px-4 py-1 rounded-md transition-all hover:bg-gray-100"
          >
            Show More
          </motion.button>
        </div>
      )}

      {/* Nút Show Less */}
      {isExpanded && (
        <div className="text-center mt-2">
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsExpanded(false)}
            className="text-gray-600 text-sm border border-gray-300 px-4 py-1 rounded-3xl transition-all hover:bg-gray-100"
          >
            Show Less
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default ProductDescription;
