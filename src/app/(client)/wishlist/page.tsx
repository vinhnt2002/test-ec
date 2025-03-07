import ProductCard from "@/components/ProductListingPage/ProductListingCard";
import { products } from "@/lib/example";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const page = () => {
  return (
    <main className="min-h-screen bg-white">
      <section className="p-4">
        <div className="w-full container mx-auto px-4">
          <div className="w-full flex items-center justify-between">
            <h1 className="text-[#19124f] text-3xl font-bold">Wishlist</h1>
            <button className="flex items-center gap-2 bg-[#ff5965] border border-[#ff5965] px-3 py-4 outline-none rounded-4xl text-white hover:bg-[#cd2e39] hover:border-[#cd2e39] cursor-pointer">
              <span>
                {" "}
                <FaCartShopping />
              </span>
              <span>Add All To Cart</span>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.map((product) => (
              <div className="flex flex-col" key={product.id}>
                <ProductCard {...product} type="wishlist" />
                <button className="flex items-center justify-center gap-2 bg-[#ff5965] border border-[#ff5965] p-3 outline-none rounded-4xl text-white hover:bg-[#cd2e39] hover:border-[#cd2e39] cursor-pointer">
                  <span>
                    {" "}
                    <FaCartShopping />
                  </span>
                  <span>Add To Cart</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
