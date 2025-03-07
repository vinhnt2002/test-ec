"use client";
import { IProduct } from "@/lib/example";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

interface CategoryProductProps {
  products: IProduct[];
  title?: string;
}

const CategoryProduct = ({ products, title }: CategoryProductProps) => {
  // Configuration constants
  const CONFIG = {
    ITEMS_PER_PAGE: 10,
    MOBILE_THRESHOLD: 640,
    ANIMATION_DELAY: 800,
    SCROLL_AMOUNT: 180,
  };

  // State management
  const [currentPage, setCurrentPage] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Refs
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const productGridRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(products.length / CONFIG.ITEMS_PER_PAGE);

  // Check device size and set ready state
  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), CONFIG.ANIMATION_DELAY);

    const handleResize = () => {
      setIsMobile(window.innerWidth < CONFIG.MOBILE_THRESHOLD);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [CONFIG.ANIMATION_DELAY, CONFIG.MOBILE_THRESHOLD]);

  // Animation configurations
  const animations = {
    next: {
      start: { transform: "translateX(0)", opacity: "1" },
      mid: { transform: "translateX(-30px)", opacity: "0" },
      before: { transform: "translateX(30px)", opacity: "0" },
      end: { transform: "translateX(0)", opacity: "1" },
    },
    prev: {
      start: { transform: "translateX(0)", opacity: "1" },
      mid: { transform: "translateX(30px)", opacity: "0" },
      before: { transform: "translateX(-30px)", opacity: "0" },
      end: { transform: "translateX(0)", opacity: "1" },
    },
  };

  // Page transition animation
  const animatePageTransition = useCallback(
    (direction: "next" | "prev") => {
      if (isAnimating || !productGridRef.current) return;

      setIsAnimating(true);
      const grid = productGridRef.current;
      const currentAnim = animations[direction];

      // Apply initial styles
      Object.assign(grid.style, {
        transform: currentAnim.start.transform,
        opacity: currentAnim.start.opacity,
        transition: "transform 0.2s ease-in-out, opacity 0.2s ease-in-out",
      });

      // Animation sequence
      const sequence = async () => {
        await new Promise((resolve) => setTimeout(resolve, 10));

        // Fade out
        Object.assign(grid.style, {
          transform: currentAnim.mid.transform,
        });

        await new Promise((resolve) => setTimeout(resolve, 200));

        // Update page
        setCurrentPage((prev) => {
          if (direction === "next") {
            return prev === totalPages - 1 ? 0 : prev + 1;
          } else {
            return prev === 0 ? totalPages - 1 : prev - 1;
          }
        });

        // Set up for fade in
        Object.assign(grid.style, {
          transform: currentAnim.before.transform,
          transition: "none",
        });

        await new Promise((resolve) => setTimeout(resolve, 20));

        // Fade in
        Object.assign(grid.style, {
          transform: currentAnim.end.transform,
          opacity: currentAnim.end.opacity,
          transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
        });

        await new Promise((resolve) => setTimeout(resolve, 300));
        setIsAnimating(false);
      };

      sequence();
    },
    [isAnimating, totalPages]
  );

  // Navigation handlers
  const handleScroll = useCallback(
    (direction: "prev" | "next") => {
      if (!scrollContainerRef.current) return;

      const container = scrollContainerRef.current;
      const containerWidth = container.clientWidth;
      const scrollMax = container.scrollWidth - containerWidth;

      const newPosition =
        direction === "prev"
          ? Math.max(0, scrollPosition - CONFIG.SCROLL_AMOUNT)
          : Math.min(scrollMax, scrollPosition + CONFIG.SCROLL_AMOUNT);

      container.scrollTo({ left: newPosition, behavior: "smooth" });
      setScrollPosition(newPosition);
    },
    [scrollPosition, CONFIG.SCROLL_AMOUNT]
  );

  const handleNavigation = useCallback(
    (direction: "prev" | "next") => {
      if (isMobile) {
        handleScroll(direction);
      } else {
        animatePageTransition(direction);
      }
    },
    [isMobile, handleScroll, animatePageTransition]
  );

  // Render loading state
  if (!isReady) {
    return <LoadingSkeleton isMobile={isMobile} />;
  }

  // Prepare products to display
  const startIdx = currentPage * CONFIG.ITEMS_PER_PAGE;
  const displayedProducts = isMobile
    ? products
    : products.slice(startIdx, startIdx + CONFIG.ITEMS_PER_PAGE);

  return (
    <div className="w-full py-4">
      {title && (
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-8">
          {title}
        </h2>
      )}

      <div className="relative">
        {isMobile ? (
          <MobileProductList
            products={products}
            scrollContainerRef={scrollContainerRef}
          />
        ) : (
          <DesktopProductGrid
            products={displayedProducts}
            productGridRef={productGridRef}
          />
        )}

        <NavigationButtons
          onPrev={() => handleNavigation("prev")}
          onNext={() => handleNavigation("next")}
          isDisabled={isAnimating}
        />
      </div>
    </div>
  );
};

// Component extraction for better organization
const LoadingSkeleton = ({ isMobile }: { isMobile: boolean }) => {
  const skeletonCount = isMobile ? 4 : 10;

  return (
    <div className="animate-pulse">
      <div className="h-8 w-64 bg-gray-300 rounded mb-6 mx-auto"></div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {Array.from({ length: skeletonCount }).map((_, idx) => (
          <div key={idx} className="space-y-2">
            <div className="h-48 md:h-64 bg-gray-300 rounded-lg"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MobileProductList = ({
  products,
  scrollContainerRef,
}: {
  products: IProduct[];
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
}) => (
  <div
    ref={scrollContainerRef}
    className="overflow-x-auto hide-scrollbar"
    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
  >
    <div className="flex space-x-4 min-w-max pb-4">
      {products.map((product, idx) => (
        <ProductCard
          key={`${product.id}-${idx}`}
          product={product}
          isMobile={true}
        />
      ))}
    </div>
  </div>
);

const DesktopProductGrid = ({
  products,
  productGridRef,
}: {
  products: IProduct[];
  productGridRef: React.RefObject<HTMLDivElement | null>;
}) => (
  <div
    ref={productGridRef}
    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 transition-all duration-300 ease-in-out"
  >
    {products.map((product, idx) => (
      <ProductCard
        key={`${product.id}-${idx}`}
        product={product}
        isMobile={false}
      />
    ))}
  </div>
);

const ProductCard = ({
  product,
  isMobile,
}: {
  product: IProduct;
  isMobile: boolean;
}) => (
  <div
    className={`group transition-all duration-300 ${isMobile ? "w-30" : ""}`}
  >
    <Link
      href={`/products`}
      className="flex flex-col items-center justify-center"
    >
      <div
        className={`relative overflow-hidden rounded-lg text-center bg-gray-100 aspect-square ${
          isMobile ? "w-30 h-30" : "w-40 h-40"
        }`}
      >
        <Image
          src={product.image_url}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className={`mt-2 ${isMobile ? "w-30" : ""}`}>
        <h3 className="text-sm text-gray-800 line-clamp-1 group-hover:text-indigo-600">
          {product.name}
        </h3>
      </div>
    </Link>
  </div>
);

const NavigationButtons = ({
  onPrev,
  onNext,
  isDisabled,
}: {
  onPrev: () => void;
  onNext: () => void;
  isDisabled: boolean;
}) => (
  <>
    <button
      onClick={onPrev}
      disabled={isDisabled}
      className={`absolute -left-4 top-1/2 -translate-y-1/2 transform bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none z-10 transition-opacity ${
        isDisabled ? "opacity-50 cursor-not-allowed" : "opacity-100"
      }`}
      aria-label="Previous items"
    >
      <IoChevronBackOutline className="h-5 w-5 text-gray-700" />
    </button>

    <button
      onClick={onNext}
      disabled={isDisabled}
      className={`absolute -right-4 top-1/2 -translate-y-1/2 transform bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none z-10 transition-opacity ${
        isDisabled ? "opacity-50 cursor-not-allowed" : "opacity-100"
      }`}
      aria-label="Next items"
    >
      <IoChevronForwardOutline className="h-5 w-5 text-gray-700" />
    </button>
  </>
);

export default CategoryProduct;
