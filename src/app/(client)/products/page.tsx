import ProductCard from "@/components/ProductListingPage/ProductListingCard";
import { products } from "@/lib/example";
import Link from "next/link";

const ITEMS_PER_PAGE = 5;

export default async function ProductListingPage({}) {
  const params = { page: "1" };

  const currentPage = params?.page
    ? Math.max(
        1,
        Math.min(
          parseInt(params.page),
          Math.ceil(products.length / ITEMS_PER_PAGE)
        )
      )
    : 1;

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const paginatedProducts = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const getPagination = () => {
    const pages = [];
    const maxPagesToShow = 5;
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (startPage > 1) {
      pages.push({ type: "page", value: 1 });
      if (startPage > 2) {
        pages.push({ type: "ellipsis", direction: "prev" });
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push({ type: "page", value: i });
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push({ type: "ellipsis", direction: "next" });
      }
      pages.push({ type: "page", value: totalPages });
    }

    return pages;
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-white p-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="mb-2 px-3 md:mb-0">
            <p className="text-lg text-gray-700">
              All Product <span>({products.length} Results)</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-4">
            <select className="border border-gray-500 text-black rounded-2xl px-3 py-1 text-sm">
              <option>Size</option>
            </select>
            <select className="border border-gray-500 text-black rounded-2xl px-3 py-1 text-sm">
              <option>Type</option>
            </select>
            <select className="border border-gray-500 text-black rounded-2xl px-3 py-1 text-sm">
              <option>Color</option>
            </select>
            <select className="border border-gray-500 text-black rounded-2xl px-3 py-1 text-sm">
              <option>Price</option>
            </select>
            <select className="border border-gray-500 text-black rounded-2xl px-3 py-1 text-sm">
              <option>Most Relevant</option>
            </select>
            <select className="border border-gray-500 text-black rounded-2xl px-3 py-1 text-sm">
              <option>Item per page</option>
            </select>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} {...product} type="list" />
          ))}
        </div>
      </section>

      {/* Pagination */}
      <section className="flex justify-center py-4">
        <Link
          prefetch={false}
          href={`?page=${Math.max(currentPage - 1, 1)}`}
          className={`mx-1 px-3 py-1 border rounded-2xl text-gray-600 ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-200"
          }`}
          aria-disabled={currentPage === 1}
        >
          Prev
        </Link>
        {getPagination().map((item, index) => {
          if (item.type === "page") {
            return (
              <Link
                prefetch={false}
                key={index}
                href={`?page=${item.value}`}
                className={`mx-1 px-3 py-1 border rounded-2xl text-gray-600 ${
                  currentPage === item.value
                    ? "bg-gray-800 text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                {item.value}
              </Link>
            );
          } else if (item.type === "ellipsis") {
            return (
              <Link
                prefetch={false}
                key={index}
                href={`?page=${
                  item.direction === "prev"
                    ? Math.max(currentPage - 3, 1)
                    : Math.min(currentPage + 3, totalPages)
                }`}
                className="mx-1 px-3 py-1 border rounded-2xl text-gray-600 hover:bg-gray-200"
              >
                ...
              </Link>
            );
          }
          return null;
        })}
        <Link
          prefetch={false}
          href={`?page=${Math.min(currentPage + 1, totalPages)}`}
          className={`mx-1 px-3 py-1 border rounded-2xl text-gray-600 ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-200"
          }`}
          aria-disabled={currentPage === totalPages}
        >
          Next
        </Link>
      </section>
    </main>
  );
}
