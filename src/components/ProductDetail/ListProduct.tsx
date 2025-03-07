"use client";
import { IProduct } from "@/lib/example";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

interface ListProductProps {
  products: IProduct[];
  title?: string;
}

const ListProduct = ({ products, title }: ListProductProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const productGridRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const itemsPerPage = 5;
  const mobileVisibleItems = 2;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  useEffect(() => {
    setTimeout(() => setIsReady(true), 300);

    const checkIfMobile = () => setIsMobile(window.innerWidth < 640);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const animatePageTransition = (direction: "next" | "prev") => {
    if (isAnimating || !productGridRef.current) return;

    setIsAnimating(true);
    const grid = productGridRef.current;

    grid.style.transition = "transform 0.3s ease-in-out, opacity 0.3s ease-in-out";
    grid.style.transform = direction === "next" ? "translateX(-30px)" : "translateX(30px)";
    grid.style.opacity = "0";

    setTimeout(() => {
      setCurrentPage((prev) =>
        direction === "next"
          ? prev === totalPages - 1 ? 0 : prev + 1
          : prev === 0 ? totalPages - 1 : prev - 1
      );

      grid.style.transition = "none";
      grid.style.transform = direction === "next" ? "translateX(30px)" : "translateX(-30px)";
      grid.style.opacity = "0";

      setTimeout(() => {
        grid.style.transition = "transform 0.3s ease-out, opacity 0.3s ease-out";
        grid.style.transform = "translateX(0)";
        grid.style.opacity = "1";

        setTimeout(() => setIsAnimating(false), 300);
      }, 20);
    }, 300);
  };

  const handlePrev = () => {
    if (isMobile && scrollContainerRef.current) {
      const newPosition = Math.max(0, scrollPosition - 180);
      scrollContainerRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
      setScrollPosition(newPosition);
    } else {
      animatePageTransition("prev");
    }
  };

  const handleNext = () => {
    if (isMobile && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const newPosition = Math.min(
        container.scrollWidth - container.clientWidth,
        scrollPosition + 180
      );
      container.scrollTo({ left: newPosition, behavior: "smooth" });
      setScrollPosition(newPosition);
    } else {
      animatePageTransition("next");
    }
  };

  if (!isReady) {
    return (
      <div className="w-full py-4 animate-pulse">
        <div className="h-8 w-64 bg-gray-300 rounded mb-8 mx-auto"></div>
        <div
          className={`${
            isMobile ? "flex space-x-4 overflow-x-hidden" : "grid grid-cols-5 gap-4"
          }`}
        >
          {Array.from({ length: isMobile ? mobileVisibleItems : itemsPerPage }).map((_, idx) => (
            <div key={idx} className={isMobile ? "w-40 flex-shrink-0" : "space-y-2"}>
              <div className="h-40 flex items-start bg-gray-300 rounded-lg aspect-square"></div>
              <div className="mt-2 space-y-2">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const startIdx = currentPage * itemsPerPage;
  const displayedProducts = isMobile
    ? products
    : products.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className="w-full py-4">
      <h2 className="text-xl font-bold mb-8">{title}</h2>

      <div className="relative">
        {isMobile ? (
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto hide-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex space-x-4 min-w-max pb-4">
              {products.map((product, idx) => (
                <div key={`${product.id}-${idx}`} className="group w-40 flex-shrink-0">
                  <Link href={`/products/${product.slug}`} className="block">
                    <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square w-40 h-40">
                      <Image
                        src={product.image_url}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-2">
                      <h3 className="text-sm text-gray-800 line-clamp-2 group-hover:text-indigo-600">
                        {product.name}
                      </h3>
                      <div className="flex items-center mt-1 space-x-2">
                        <span className="text-red-600 font-medium">${product.price}</span>
                        {product.display_high_price && (
                          <span className="text-gray-500 line-through text-xs">
                            ${product.display_high_price}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div
            ref={productGridRef}
            className="grid grid-cols-5 gap-4"
          >
            {displayedProducts.map((product, idx) => (
              <div key={`${product.id}-${idx}`} className="group">
                <Link href={`/products/${product.slug}`} className="block">
                  <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square">
                    <Image
                      src={product.image_url}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-2">
                    <h3 className="text-sm text-gray-800 line-clamp-2 group-hover:text-indigo-600">
                      {product.name}
                    </h3>
                    <div className="flex items-center mt-1 space-x-2">
                      <span className="text-red-600 font-medium">${product.price}</span>
                      {product.display_high_price && (
                        <span className="text-gray-500 line-through text-xs">
                          ${product.display_high_price}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={handlePrev}
          disabled={isAnimating}
          className={`absolute -left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none z-10 transition-opacity ${
            isAnimating ? "opacity-50 cursor-not-allowed" : "opacity-100"
          }`}
          aria-label="Previous items"
        >
          <IoChevronBackOutline className="h-5 w-5 text-gray-700" />
        </button>

        <button
          onClick={handleNext}
          disabled={isAnimating}
          className={`absolute -right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none z-10 transition-opacity ${
            isAnimating ? "opacity-50 cursor-not-allowed" : "opacity-100"
          }`}
          aria-label="Next items"
        >
          <IoChevronForwardOutline className="h-5 w-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default ListProduct;