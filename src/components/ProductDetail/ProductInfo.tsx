"use client";

import { useState } from "react";
import { FaHeart, FaShoppingCart, FaAngleDown } from "react-icons/fa";
import { BiSolidShareAlt } from "react-icons/bi";
import Image from "next/image";
import printerImg from "@/assets/images/product-detail/3d-printer.svg";
import { useModal } from "@/hooks/useModal";
import ColorSection from "./ProductInfoSection/ColorSection";
import TypeSection from "./ProductInfoSection/TypeSection";
import SizeSection from "./ProductInfoSection/SizeSection";

const ProductInfo = () => {
  const { onOpen } = useModal();

  const product = {
    name: "Christmas Movie Pajamas Set, Christmas Movie Film Christmas Pajamas Set, Merry",
    price: 31.95,
    originalPrice: 39.94,
    discount: "20% OFF - International Women's Day ends March 10",
    rating: 5.0,
    sku: "P649097802-KID_A-23T-5w105f38",
    category: "Clothing / Sleepwear & Loungewear / T-shirt Pajamas Sets",
    type: "Kid's T-shirt Pajamas Sets",
    inStock: true,
  };

  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div>
      <div className="flex flex-col gap-2">
        <h1 className="text-md font-semibold text-red-700 leading-1">
          In 1 cart
        </h1>
        <div className="flex justify-between items-center space-y-1">
          <h1 className="text-xl font-bold text-indigo-900 mb-2">
            {product.name}
          </h1>
          <button onClick={() => onOpen("socialProductCopyModal", {})}>
            <BiSolidShareAlt className="text-black w-10 h-10" />
          </button>
        </div>
      </div>

      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-2 text-sm text-gray-600 cursor-pointer hover:underline hover:text-orange-400">
          Rating: {product.rating}
        </span>
      </div>

      {/* Price Section - matching the screenshot exactly */}
      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>
          <span className="ml-2 text-sm text-gray-500 line-through">
            ${product.originalPrice}
          </span>
        </div>
        <div className="text-sm text-green-600">{product.discount}</div>
        <div className="text-sm text-green-600 flex items-center mt-1">
          <span>FREE Returns</span>
          <FaAngleDown className="ml-1 text-green-600" />
        </div>
      </div>

      <ColorSection />
      <TypeSection />
      <SizeSection />

      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-gray-700">Quantity</span>
          <span className="text-sm text-orange-500 ml-2 hover:underline hover:text-orange-400">
            Buying In Bulk?
          </span>
        </div>
        <div className="flex items-center rounded-full">
          <button
            onClick={decrementQuantity}
            className="border border-gray-300 px-4 py-2 rounded-l-md"
          >
            −
          </button>
          <input
            type="text"
            value={quantity}
            className="border-t border-b border-gray-300 text-center w-12 py-2"
            readOnly
          />
          <button
            onClick={incrementQuantity}
            className="border border-gray-300 px-4 py-2 rounded-r-md"
          >
            +
          </button>
        </div>
      </div>

      <div className="mb-4 flex items-center justify-between">
        {" "}
        <div className="flex items-center text-green-600">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span>In Stock</span>
        </div>
        {/* Size guide link - as per screenshot */}
        <div className="mt-2 flex space-x-2 items-center text-blue-500">
          <Image src={printerImg} alt="img" width={25} height={25} />
          <button
            className="cursor-pointer"
            onClick={() => onOpen("sizeGuideModal", {})}
          >
            View size guide
          </button>
        </div>
      </div>

      {/* Add to Cart Button - matching screenshot */}
      <div className="flex items-center mb-8">
        <button className="bg-red-500 hover:bg-red-600 rounded-4xl text-white py-4 px-6  flex items-center justify-center w-full mr-4">
          <FaShoppingCart className="mr-2 font-bold text-3xl" />
          Add to cart
        </button>
        <button className="p-3 border border-gray-300 rounded-md">
          <FaHeart className="text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
