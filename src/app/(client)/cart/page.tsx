"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCcPaypal, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { IoBagCheckSharp } from "react-icons/io5";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import CartEmpty from "@/assets/images/gif/cart-empty.gif";
import { useAuthStore } from "@/stores/useAuthStore";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  slug: string;
  name: string;
  price: number;
  original_price: number;
  size: string;
  color: string;
  type: string;
  print_location: string;
  image_url: string;
  shipping_fee: number;
}

const product: Product[] = [
  {
    id: 115301085,
    slug: "keep-on-truckin-1968-vintage-t-shirt",
    name: "I am enough sweatshirt, you are enough Tie-Dye Sweatshirt",
    price: 39.95,
    original_price: 49.94,
    size: "3XL",
    color: "Cotton Candy Tie-Dye",
    type: "Unisex",
    print_location: "Front",
    image_url:
      "https://assets.printerval.com/2024/01/12/65a0e9e4d6bba1.61657061.png",
    shipping_fee: 6.99,
  },
  {
    id: 115301082,
    slug: "keep-on-truckin-1968-vintage-t-shirt",
    name: "I am enough sweatshirt, you are enough Tie-Dye Sweatshirt",
    price: 39.95,
    original_price: 49.94,
    size: "3XL",
    color: "Cotton Candy Tie-Dye",
    type: "Unisex",
    print_location: "Front",
    image_url:
      "https://assets.printerval.com/2024/01/12/65a0e9e4d6bba1.61657061.png",
    shipping_fee: 6.99,
  },
];

const Cart = () => {
  const [quantities, setQuantities] = useState<Record<number, number>>(
    product.reduce((acc, p) => ({ ...acc, [p.id]: 1 }), {})
  );
  const [showModal, setShowModal] = useState(false);
  const { currentUser } = useAuthStore();
  const router = useRouter();

  const handleClickCheckout = () => {
    if (!currentUser) {
      setShowModal(true);
      return;
    }
    router.push("/checkout");
  };

  const decreaseQuantity = (id: number) => {
    console.log(id);
    if (quantities[id] > 1) {
      setQuantities({ ...quantities, [id]: quantities[id] - 1 });
    }
  };

  const increaseQuantity = (id: number) => {
    setQuantities({ ...quantities, [id]: quantities[id] + 1 });
  };

  const cartSubtotal: number = product.reduce(
    (sum, p) => sum + p.price * quantities[p.id],
    0
  );
  const shipping_fee: number = 6.99;
  const total: number = cartSubtotal + shipping_fee;

  if (product.length === 0) {
    return (
      <div className="container mx-auto px-4 py-6 bg-white text-center">
        <h2 className="text-2xl font-semibold text-gray-700">Shopping Cart</h2>
        <p className="text-gray-700 text-xl py-2">
          Your Cart is currently empty!
        </p>
        <p className="flex items-center justify-center py-2">
          <Image src={CartEmpty} alt="Empty Cart" />
        </p>
        <p className="text-gray-500">
          Before proceed to checkout you must add some products to your shopping
          cart. <br />
          You will find a lot of interesting products on our &quot;shop&quot;
          page
        </p>
        <Link href="/" prefetch={false}>
          <button className="mt-4 bg-[#0072bb] text-white px-4 py-2 rounded-3xl cursor-pointer">
            Continue Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6 bg-white">
      <nav className="flex gap-2 mb-6 text-sm sm:text-base">
        <li className="flex items-center text-[#FF7302]">
          <span className="sm:inline-flex sm:ms-2 mx-2">Cart</span>
          <TfiLayoutLineSolid />
        </li>
        <li className="flex items-center">
          <span className="sm:inline-flex sm:ms-2 mx-2 text-gray-400">
            Checkout
          </span>
          <TfiLayoutLineSolid color="gray" />
        </li>
        <li className="flex items-center text-gray-400">Complete</li>
      </nav>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left side - Cart Item */}
        <div className="w-full lg:w-3/4">
          {/* Desktop Table View */}
          <div className="hidden lg:block bg-white rounded-lg shadow-sm overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr className="text-left text-sm">
                  <th className="py-3 px-4 font-medium text-black">Item</th>
                  <th className="py-3 px-4 font-medium text-black">Price</th>
                  <th className="py-3 px-4 font-medium text-black">Quantity</th>
                  <th className="py-3 px-4 font-medium text-black">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {product.map((product) => (
                  <tr className="border-t" key={product.id}>
                    <td className="py-4 px-4">
                      <div className="flex gap-4">
                        <div className="relative w-20 h-24 flex-shrink-0">
                          <Link
                            href={`/product/${product.slug}`}
                            prefetch={false}
                          >
                            <Image
                              src={product.image_url}
                              alt={product.name}
                              width={80}
                              height={96}
                              className="object-cover rounded-md"
                            />
                          </Link>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Link
                            href={`/product/${product.slug}`}
                            prefetch={false}
                          >
                            <h3 className="font-medium text-sm text-[#19124f] hover:text-[#FF7302]">
                              {product.name}
                            </h3>
                          </Link>
                          <p className="text-xs text-gray-600">
                            Size: {product.size}, {product.color},{" "}
                            {product.type}
                          </p>
                          <p className="text-xs text-gray-600">
                            Print Location: {product.print_location}
                          </p>
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
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 align-top">
                      <div className="flex flex-col">
                        <span className="font-medium text-[#19124f]">
                          ${product.price}
                        </span>
                        <span className="text-[#19124f] line-through text-sm">
                          ${product.original_price}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4 align-top">
                      <div className="flex items-center border border-gray-300 rounded w-24">
                        <button
                          onClick={() => decreaseQuantity(product.id)}
                          className="px-2 py-1 text-gray-500 font-bold cursor-pointer"
                        >
                          −
                        </button>
                        <span className="px-2 py-1 flex-1 text-center text-[#19124f]">
                          {quantities[product.id]}
                        </span>
                        <button
                          onClick={() => increaseQuantity(product.id)}
                          className="px-2 py-1 text-gray-500 font-bold cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-4 px-4 align-top">
                      <span className="text-[#c52c29] font-medium">
                        ${(product.price * quantities[product.id]).toFixed(2)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="block lg:hidden space-y-4">
            {product.map((product) => (
              <div
                className="bg-white rounded-lg shadow-sm p-4"
                key={product.id}
              >
                <div className="flex gap-4">
                  <div className="relative w-20 h-24 flex-shrink-0">
                    <Link href={`/${product.slug}`} prefetch={false}>
                      <Image
                        src={product.image_url}
                        alt={product.name}
                        width={80}
                        height={96}
                        className="object-cover rounded-md"
                      />
                    </Link>
                  </div>
                  <div className="flex flex-col flex-1 gap-1">
                    <Link href={`/${product.slug}`} prefetch={false}>
                      <h3 className="font-medium text-sm text-[#19124f] hover:text-[#FF7302]">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-xs text-gray-600">
                      Size: {product.size}, {product.color}, {product.type}
                    </p>
                    <p className="text-xs text-gray-600">
                      Print Location: {product.print_location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-3 text-sm">
                  <button className="text-blue-500 flex items-center gap-1 cursor-pointer">
                    <FaRegEdit />
                    <span>Edit</span>
                  </button>
                  <button className="text-gray-500 flex items-center gap-1 cursor-pointer">
                    <FaRegTrashAlt />
                    <span>Remove</span>
                  </button>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex flex-col">
                    <span className="font-medium text-[#19124f]">
                      ${product.price}
                    </span>
                    <span className="text-[#19124f] line-through text-sm">
                      ${product.original_price}
                    </span>
                  </div>
                  <div className="flex items-center border border-gray-300 rounded w-24">
                    <button
                      onClick={() => decreaseQuantity(product.id)}
                      className="px-2 py-1 text-gray-500 font-bold cursor-pointer"
                    >
                      −
                    </button>
                    <span className="px-2 py-1 flex-1 text-center text-[#19124f]">
                      {quantities[product.id]}
                    </span>
                    <button
                      onClick={() => increaseQuantity(product.id)}
                      className="px-2 py-1 text-gray-500 font-bold cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-[#c52c29] font-medium">
                    ${(product.price * quantities[product.id]).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Order Summary */}
        <div className="w-full lg:w-1/3">
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm sticky top-4">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium text-[#19124f]">Subtotal</span>
                <span className="font-bold text-[#19124f]">
                  ${cartSubtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-[#19124f]">Shipping fee</span>
                <span className="font-bold text-[#19124f]">
                  ${shipping_fee.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-gray-300">
                <span className="font-bold text-lg text-[#19124f]">Total</span>
                <span className="font-bold text-xl text-[#c52c29]">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="mt-4 text-right">
              <span className="text-gray-600 flex items-center justify-end text-xs italic gap-1">
                Rewards <HiOutlineQuestionMarkCircle /> Earn 100CP
              </span>
            </div>

            <div className="mt-4">
              <div className="flex justify-between items-center mb-2 text-sm">
                <span className="text-gray-500">Deliver to United States</span>
                <button className="text-[#FF7302] font-medium">Change</button>
              </div>
            </div>

            <button
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-md font-medium flex items-center justify-center gap-2 mt-4 cursor-pointer"
              onClick={handleClickCheckout}
            >
              <IoBagCheckSharp className="h-6 w-6" />
              CHECKOUT
            </button>

            {showModal && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
                  <h2 className="text-xl font-semibold mb-4">Thông báo</h2>
                  <p className="text-red-500 mb-6">
                    Vui lòng đăng nhập để tiếp tục truy cập trang này.
                  </p>
                  <div className="flex justify-center gap-4">
                    <button
                      className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                      onClick={() => router.push("/sign-in")}
                    >
                      Đăng nhập
                    </button>
                    <button
                      className="cursor-pointer bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
                      onClick={() => setShowModal(false)}
                    >
                      Đóng
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center justify-center gap-4 pt-4 border-t border-gray-300">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                <Image
                  src="https://printerval.com/modules/cart/images/guarantee.png"
                  alt="Guarantee"
                  width={32}
                  height={32}
                />
              </div>
              <div className="text-sm">
                <p className="font-medium text-black">
                  Don&apos;t love it? We&apos;ll fix it. For free.
                </p>
                <Link
                  href="#"
                  prefetch={false}
                  className="text-[#FF7302] font-medium"
                >
                  Printerval Guarantee »
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
