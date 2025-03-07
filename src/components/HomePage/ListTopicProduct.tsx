"use client";
import { IProduct } from "@/lib/example";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

/**
 * @component
 * @example
 * ```tsx
 * <ListTopicProduct
 *    products={products}
 *    title="Sản phẩm nổi bật"
 *    columnsXs={2}     // 2 cột trên điện thoại (optional)
 *    columnsSm={3}     // 3 cột trên tablet nhỏ (optional)
 *    columnsMd={4}     // 4 cột trên tablet lớn (optional)
 *    columnsLg={6}     // 6 cột trên màn hình desktop (optional)
 *    rows={3}          // 3 hàng trên mỗi trang (optional)
 * />
 * ```
 * @returns {JSX.Element} - Component danh sách sản phẩm.
 */
interface ListTopicProductProps {
  products: IProduct[];
  title?: string;
  columnsXs?: number;
  columnsSm?: number;
  columnsMd?: number;
  columnsLg?: number;
  rows?: number;
}

const ListTopicProduct = ({
  products,
  title,
  columnsXs = 2,
  columnsSm = 3,
  columnsMd = 5,
  columnsLg = 5,
  rows = 2,
}: ListTopicProductProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const productGridRef = useRef<HTMLDivElement>(null);

  // Calculate and track active columns based on screen size
  const [activeColumns, setActiveColumns] = useState(columnsXs);

  // Dynamic itemsPerPage based on current screen size and desired rows
  const itemsPerPage = useMemo(() => {
    return activeColumns * rows;
  }, [activeColumns, rows]);

  const totalPages = useMemo(
    () => Math.ceil(products.length / itemsPerPage),
    [products.length, itemsPerPage]
  );

  useEffect(() => {
    // Set small delay for loading state
    setTimeout(() => setIsReady(true), 100);

    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);

      // Update active columns based on screen width
      if (width >= 1024) {
        setActiveColumns(columnsLg);
      } else if (width >= 768) {
        setActiveColumns(columnsMd);
      } else if (width >= 640) {
        setActiveColumns(columnsSm);
      } else {
        setActiveColumns(columnsXs);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, [columnsXs, columnsSm, columnsMd, columnsLg]);

  const animatePageTransition = useCallback(
    (direction: "next" | "prev") => {
      if (isAnimating || !productGridRef.current) return;

      setIsAnimating(true);

      const grid = productGridRef.current;
      const startAnimation =
        direction === "next" ? "translateX(0)" : "translateX(0)";
      const endAnimation =
        direction === "next" ? "translateX(-10px)" : "translateX(10px)";
      const midAnimation =
        direction === "next" ? "translateX(-30px)" : "translateX(30px)";

      grid.style.transform = startAnimation;
      grid.style.opacity = "1";
      grid.style.transition =
        "transform 0.2s ease-in-out, opacity 0.2s ease-in-out";

      setTimeout(() => {
        grid.style.transform = midAnimation;
        grid.style.opacity = "0";

        setTimeout(() => {
          if (direction === "next") {
            setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
          } else {
            setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
          }

          grid.style.transform =
            direction === "next" ? "translateX(30px)" : "translateX(-30px)";
          grid.style.transition = "none";

          setTimeout(() => {
            grid.style.transform = endAnimation;
            grid.style.opacity = "0.7";
            grid.style.transition =
              "transform 0.3s ease-out, opacity 0.3s ease-out";

            setTimeout(() => {
              grid.style.transform = "translateX(0)";
              grid.style.opacity = "1";

              setTimeout(() => {
                setIsAnimating(false);
              }, 100);
            }, 150);
          }, 20);
        }, 200);
      }, 10);
    },
    [isAnimating, totalPages]
  );

  const handlePrev = useCallback(() => {
    if (isMobile && scrollContainerRef.current) {
      const newPosition = Math.max(0, scrollPosition - 180);
      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
      setScrollPosition(newPosition);
    } else {
      animatePageTransition("prev");
    }
  }, [isMobile, scrollPosition, animatePageTransition]);

  const handleNext = useCallback(() => {
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
  }, [isMobile, scrollPosition, animatePageTransition]);

  // Helper function to get class string for grid columns based on breakpoint props
  const getGridColumnClasses = () => {
    return `${
      columnsXs === 1
        ? "grid-cols-1"
        : columnsXs === 2
        ? "grid-cols-2"
        : columnsXs === 3
        ? "grid-cols-3"
        : columnsXs === 4
        ? "grid-cols-4"
        : "grid-cols-5"
    } ${
      columnsSm === 1
        ? "sm:grid-cols-1"
        : columnsSm === 2
        ? "sm:grid-cols-2"
        : columnsSm === 3
        ? "sm:grid-cols-3"
        : columnsSm === 4
        ? "sm:grid-cols-4"
        : "sm:grid-cols-5"
    } ${
      columnsMd === 1
        ? "md:grid-cols-1"
        : columnsMd === 2
        ? "md:grid-cols-2"
        : columnsMd === 3
        ? "md:grid-cols-3"
        : columnsMd === 4
        ? "md:grid-cols-4"
        : columnsMd === 5
        ? "md:grid-cols-5"
        : columnsMd === 6
        ? "md:grid-cols-6"
        : "md:grid-cols-5"
    } ${
      columnsLg === 1
        ? "lg:grid-cols-1"
        : columnsLg === 2
        ? "lg:grid-cols-2"
        : columnsLg === 3
        ? "lg:grid-cols-3"
        : columnsLg === 4
        ? "lg:grid-cols-4"
        : columnsLg === 5
        ? "lg:grid-cols-5"
        : columnsLg === 6
        ? "lg:grid-cols-6"
        : "lg:grid-cols-5"
    }`;
  };

  // Loading skeleton that matches the grid layout
  if (!isReady) {
    // Calculate skeleton items based on rows and columns
    const skeletonItems = isMobile ? 4 : activeColumns * rows;

    return (
      <div className="animate-pulse">
        {title && (
          <div className="h-8 w-64 bg-gray-300 rounded mb-6 mx-auto"></div>
        )}

        {isMobile ? (
          <div className="flex space-x-4 overflow-x-hidden pb-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className="w-40 flex-shrink-0 space-y-2">
                <div className="h-40 w-40 bg-gray-300 rounded-lg"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className={`grid gap-4 ${getGridColumnClasses()}`}>
            {Array.from({ length: skeletonItems }).map((_, idx) => (
              <div key={idx} className="space-y-2">
                <div className="aspect-square bg-gray-300 rounded-lg"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  const startIdx = currentPage * itemsPerPage;
  const displayedProducts = isMobile
    ? products
    : products.slice(startIdx, startIdx + itemsPerPage);

  const ProductCard = ({
    product,
    idx,
  }: {
    product: IProduct;
    idx: number;
  }) => (
    <div
      key={`${product.id}-${idx}`}
      className={`group ${isMobile ? "w-40" : "transition-all duration-300"}`}
    >
      <Link href={`/products/${product.slug}`} className="block">
        <div
          className={`relative overflow-hidden rounded-lg bg-gray-100 ${
            isMobile ? "w-40 h-40" : "aspect-square"
          }`}
        >
          <Image
            src={product.image_url}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className={`mt-2 ${isMobile ? "w-40" : ""}`}>
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
  );

  return (
    <div className="w-full py-4">
      {title && (
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-8">
          {title}
        </h2>
      )}

      <div className="relative">
        {isMobile ? (
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto hide-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex space-x-4 min-w-max pb-4">
              {products.map((product, idx) => (
                <ProductCard key={product.id} product={product} idx={idx} />
              ))}
            </div>
          </div>
        ) : (
          <div
            ref={productGridRef}
            className={`grid gap-4 transition-all duration-300 ease-in-out ${getGridColumnClasses()}`}
          >
            {displayedProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} idx={idx} />
            ))}
          </div>
        )}

        {products.length > (isMobile ? 4 : itemsPerPage) && (
          <>
            <button
              onClick={handlePrev}
              disabled={isAnimating}
              className={`absolute -left-4 top-1/2 -translate-y-1/2 transform bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none z-10 transition-opacity ${
                isAnimating ? "opacity-50 cursor-not-allowed" : "opacity-100"
              }`}
              aria-label="Previous items"
            >
              <IoChevronBackOutline className="h-5 w-5 text-gray-700" />
            </button>

            <button
              onClick={handleNext}
              disabled={isAnimating}
              className={`absolute -right-4 top-1/2 -translate-y-1/2 transform bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none z-10 transition-opacity ${
                isAnimating ? "opacity-50 cursor-not-allowed" : "opacity-100"
              }`}
              aria-label="Next items"
            >
              <IoChevronForwardOutline className="h-5 w-5 text-gray-700" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ListTopicProduct;
