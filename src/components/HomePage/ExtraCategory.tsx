"use client";
import { useIsMobile } from "@/hooks/useMobile";
import { IProduct } from "@/lib/example";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface ExtraCategoryProps {
  products: IProduct[];
}

const SkeletonLoader = ({ isMobile }: { isMobile: boolean }) => {
  const columnCount = isMobile ? 2 : 3; 
  const rowCount = 2;
  const skeletonCount = columnCount * rowCount; 

  return (
    <div className={`grid grid-cols-${columnCount} gap-4`}>
      {Array.from({ length: skeletonCount }).map((_, index) => (
        <div key={index} className="w-full animate-pulse">
          <div className="relative w-full h-40 sm:h-48 bg-gray-300 rounded-lg shadow-md"></div>
          <div className="mt-2 h-4 bg-gray-300 rounded"></div>
          <div className="mt-1 h-4 w-1/2 bg-gray-300 rounded"></div>
        </div>
      ))}
    </div>
  );
};

const ExtraCategory = ({ products }: ExtraCategoryProps) => {
  const [isReady, setIsReady] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setTimeout(() => setIsReady(true), 1000); // Giả lập thời gian tải
  }, []);

  if (!isReady) return <SkeletonLoader isMobile={isMobile} />;

  return (
    <div className="w-full">
      {isMobile ? (
        <div className="overflow-x-auto w-full">
          <div className="grid grid-cols-2 gap-2 min-w-[320px]">
            {products.slice(0, 6).map((product) => (
              <div key={product.id} className="w-full">
                <Link href={`/products/${product.slug}`} className="block group">
                  <div className="relative w-full h-40 sm:h-48 overflow-hidden rounded-lg shadow-md bg-gray-100 transition-transform transform group-hover:scale-105">
                    <Image
                      src={product.image_url}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-opacity duration-300 group-hover:opacity-80"
                      priority
                    />
                    <div className="absolute inset-0 flex flex-col items-start justify-end p-2 bg-gradient-to-t from-black/60 to-transparent text-white">
                      <h3 className="text-sm font-semibold line-clamp-2">
                        {product.flashSaleText}
                      </h3>
                      <div className="flex items-center mt-1 space-x-2">
                        <span className="text-green-300 font-bold">
                          ${product.price}
                        </span>
                        <span className="text-gray-200 line-through text-xs">
                          ${product.display_high_price}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {products.slice(0, 6).map((product) => (
            <div key={product.id} className="w-full">
              <Link href={`/products/${product.slug}`} className="block group">
                <div className="relative w-full h-80 overflow-hidden rounded-lg shadow-md bg-gray-100 transition-transform transform group-hover:scale-105">
                  <Image
                    src={product.image_url}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-opacity duration-300 group-hover:opacity-80"
                    priority
                  />
                  <div className="absolute inset-0 flex flex-col items-start justify-end p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                    <h3 className="text-lg font-semibold line-clamp-2 text-center">
                      {product.flashSaleText}
                    </h3>
                    <div className="flex items-center mt-2 space-x-2">
                      <span className="text-green-300 font-bold">
                        ${product.price}
                      </span>
                      <span className="text-gray-200 line-through text-sm">
                        ${product.display_high_price}
                      </span>
                    </div>
                  </div>
                  {/* Arrow button */}
                  <div className="absolute bottom-4 right-4 transition-transform duration-300 transform group-hover:translate-x-2">
                    <svg
                      className="w-9 h-9 text-white opacity-75 group-hover:opacity-100"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M15 16l4-4"></path>
                      <path d="M15 8l4 4"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExtraCategory;
