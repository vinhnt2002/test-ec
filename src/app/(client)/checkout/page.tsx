"use client";
import { products } from "@/lib/example";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaAngleDown,
  FaAngleUp,
  FaRegEdit,
  FaRegTrashAlt,
} from "react-icons/fa";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { FaCcPaypal } from "react-icons/fa";
import { LuTicket } from "react-icons/lu";
import CollapseStandard from "@/components/Checkout/CollapseStandard";
import { useAuthStore } from "@/stores/useAuthStore";
import { useRouter } from "next/navigation";

export interface ShippingOption {
  title: string;
  price: string;
  deliveryTime: string;
  features: string[];
}
export default function Checkout() {
  const [selectedOption, setSelectedOption] =
    useState<string>("standard shipping");
  const [isFillPromotionCode, SetIsFillPromotionCode] =
    useState<boolean>(false);
  const { currentUser } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) router.push("/sign-in");
  }, [currentUser]);

  const shippingOptions = [
    {
      title: "Standard shipping",
      price: "$6.99",
      deliveryTime: "5 - 17 business days with tracking",
      features: ["Delivery date guaranteed", "Tracking number"],
    },
    {
      title: "Premium shipping",
      price: "$19.99",
      deliveryTime: "5 - 12 business days with tracking",
      features: ["Delivery date not guaranteed", "Tracking number"],
    },
    {
      title: "Express shipping",
      price: "$28.99",
      deliveryTime: "3 - 9 business days with tracking",
      features: ["Delivery date not guaranteed", "Tracking number"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto p-4 sm:p-6">
        <nav className="flex gap-2 mb-6 text-sm sm:text-base">
          <Link href={"/cart"}>
            <li className="flex items-center text-[#FF7302]">
              <span className=" sm:inline-flex sm:ms-2 mx-2">Cart</span>
              <TfiLayoutLineSolid />
            </li>
          </Link>
          <li className="flex items-center text-[#FF7302]">
            <span className=" sm:inline-flex sm:ms-2 mx-2">Checkout</span>
            <TfiLayoutLineSolid />
          </li>
          <li className="flex items-center text-gray-400">Complete</li>
        </nav>

        {/* Responsive Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Left Column: Billing and Shipping */}
          <div className="col-span-3">
            {/* Billing Information */}
            <section className="mb-6">
              <h2 className=" text-lg sm:text-xl font-semibold mb-3 text-black">
                Billing Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="relative">
                  <input
                    type="text"
                    id="firtName"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-xs border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="firtName"
                    className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Firt name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="lastName"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-xs border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="lastName"
                    className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Last name
                  </label>
                </div>
              </div>
              <div className="w-full flex items-center my-3 gap-2">
                <select className="border-gray-300 text-gray-500 p-2 text-sm focus:outline-none focus:ring-0 focus:border-blue-500 px-2.5 pb-2.5 pt-4  rounded-xs border-2">
                  <option>+1</option>
                  <option>+44</option>
                </select>
                <div className="w-full relative">
                  <input
                    type="text"
                    id="phone"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-xs border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="phone"
                    className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Phone (required)
                  </label>
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="email"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-xs border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Email (required)
                </label>
              </div>
            </section>

            {/* Shipping Address */}
            <section className="mb-6">
              <h2 className="text-black text-lg sm:text-xl font-semibold mb-3">
                Shipping Address
              </h2>
              <label className="flex items-center mb-3">
                <input
                  type="checkbox"
                  className="mr-2 rounded border-gray-300 focus:ring-orange-500"
                />
                <span className="text-sm text-gray-700">
                  Send to your friend
                </span>
              </label>
              <select className="w-full text-gray-500 border-2 border-gray-300 rounded-xs p-2 text-sm focus:outline-none focus:ring-0 focus:border-blue-500">
                <option>United States</option>
                <option>Canada</option>
              </select>
              <div className="relative py-3">
                <input
                  type="text"
                  id="address"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-xs border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="address"
                  className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Address
                </label>
              </div>
              <div className="relative pb-3">
                <input
                  type="text"
                  id="apartment"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-xs border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="apartment"
                  className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Apartment, suite, etc. (optional)
                </label>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="relative">
                  <input
                    type="text"
                    id="city"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-xs border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="city"
                    className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    City
                  </label>
                </div>
                <input
                  type="text"
                  placeholder="State/Province"
                  className="border-2 text-gray-500 border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-0 focus:border-blue-500"
                />
              </div>
              <div className="relative py-3">
                <input
                  type="text"
                  id="zipCode"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-xs border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="zipCode"
                  className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  ZIP / Postal code
                </label>
              </div>
              <div className="relative">
                <textarea
                  id="textArea"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-xs border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="textArea"
                  className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Order notes (optional)
                </label>
              </div>

              {/* Billing Address */}
              <h2 className="text-black text-lg sm:text-xl font-semibold mt-3">
                Billing Address
              </h2>
              <label className="flex items-center">
                <span className="text-sm text-gray-800">
                  Billing address matches shipping address
                </span>
              </label>
              <Link
                prefetch={false}
                href="#"
                className="text-orange-500 text-sm block mt-1"
              >
                Change
              </Link>
            </section>
          </div>

          {/* Right Column: Order Review and Summary */}
          <div className="col-span-2">
            {/* Order Review */}
            <h2 className="text-black text-lg sm:text-xl font-semibold mb-3">
              Order Review
            </h2>
            <section className="mb-6 bg-gray-100 p-3 rounded-md">
              <div className="flex gap-4">
                <div className="relative w-20 h-24 flex-shrink-0">
                  <Link href={`/product/${products[0].slug}`} prefetch={false}>
                    <Image
                      src={products[0].image_url}
                      alt={products[0].name}
                      width={80}
                      height={96}
                      className="object-cover rounded-md"
                    />
                  </Link>
                </div>
                <div className="flex flex-col">
                  <Link href={`/product/${products[0].slug}`}>
                    <h3 className="font-medium text-sm text-[#19124f] hover:text-[#FF7302]">
                      {products[0].name}
                    </h3>
                  </Link>
                  <p className="text-xs text-gray-600">
                    Size: 3XL, Black, Base
                  </p>
                  <p className="text-xs text-gray-600">Print Location: Front</p>
                  <div className="flex items-center gap-2 text-sm">
                    <button className="text-blue-500 flex items-center gap-1 cursor-pointer">
                      <FaRegEdit />
                      <span>Edit</span>
                    </button>
                    <span className="text-gray-300">|</span>
                    <button className="text-gray-500 flex items-center gap-1 cursor-pointer">
                      <FaRegTrashAlt />
                      <span>Remove</span>
                    </button>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[#19124f] text-xs">
                      ${products[0].price}
                    </span>
                    <span className="text-[#19124f] text-xs">
                      x{products[0].sold}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <CollapseStandard
                  key={selectedOption}
                  options={shippingOptions}
                  selectedOption={selectedOption}
                  onSelect={(option: string) => setSelectedOption(option)}
                />
              </div>
            </section>

            {/* Order Summary */}
            <h2 className="text-black text-lg sm:text-xl font-semibold mb-3">
              Order Summary
            </h2>
            <section className="mb-6 bg-gray-100 p-3 rounded-md">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => SetIsFillPromotionCode(!isFillPromotionCode)}
              >
                <div className="flex items-center gap-1">
                  <LuTicket color="#FF7302" />
                  <span>Use promotion code</span>
                </div>
                <div>
                  {isFillPromotionCode ? <FaAngleUp /> : <FaAngleDown />}
                </div>
              </div>
              {isFillPromotionCode && (
                <>
                  <div className="w-full flex items-center gap-2 py-2">
                    <div className="w-full relative">
                      <input
                        type="text"
                        id="promotion"
                        className="block p-2 w-full text-sm text-gray-900 bg-transparent rounded-xs border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="promotion"
                        className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                      >
                        Promotion code
                      </label>
                    </div>
                    <button className="text-white py-2 px-2 rounded-xs cursor-pointer bg-[#2792ce] hover:bg-[#04497d]">
                      APPLY
                    </button>
                  </div>
                </>
              )}
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700 font-normal">Subtotal:</span>
                <span className="text-[#19124f]">$39.95</span>
              </div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">Shipping fee:</span>
                <span className="text-[#19124f]">+$19.99</span>
              </div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">
                  Handling fee{" "}
                  <span className="text-gray-500 cursor-pointer">ⓘ</span>
                </span>
                <span className="text-[#19124f]">+$4.20</span>
              </div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">Tips:</span>
                <span className="text-[#19124f]">$0.00</span>
              </div>
              <div className="flex justify-between text-sm font-semibold mt-2">
                <span className="text-gray-700">Total:</span>
                <span className="text-[#c52c29] text-lg">$64.14</span>
              </div>
            </section>

            {/* Payment Methods */}
            <h2 className="text-black text-lg sm:text-xl font-semibold mb-3">
              Payment Methods
            </h2>
            <section className="bg-gray-100 rounded-md">
              <div className="flex gap-3 mb-4">
                <button className="cursor-pointer flex-1 border border-gray-300 rounded-md p-2 text-sm flex items-center justify-center">
                  <span className="mr-2">
                    <FaCcPaypal size={48} color="blue" />
                  </span>
                </button>
              </div>
              {/* <button className="w-full bg-red-500 text-white py-3 rounded-md flex items-center justify-center cursor-pointer">
                <span className="mr-2">
                  <GoShieldCheck />
                </span>{" "}
                Place Order Now
              </button> */}
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
