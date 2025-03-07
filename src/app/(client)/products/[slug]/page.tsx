import { products } from "@/lib/example";
import ListProduct from "@/components/ProductDetail/ListProduct";
import ProductDescription from "@/components/ProductDetail/ProductDescription";
import ProductInfo from "@/components/ProductDetail/ProductInfo";
import ProductReviews from "@/components/ProductDetail/ProductReview";
import ProductThumbnail from "@/components/ProductDetail/ProductThumbnail";
import ShippingAndPolicies from "@/components/ProductDetail/ShippingAndPolicies";


// import { createMetadata } from "@/config/metadata";
// import { getCategoryProducts } from "@/lib/api"; // Hàm gọi API giả định

// type Props = {
//   params: { slug: string };
//   searchParams: { page?: string };
// };

// export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
//   const slug = params.slug;
//   const page = searchParams.page ? parseInt(searchParams.page) : 1;

//   // Gọi API để lấy dữ liệu danh mục
//   const categoryData = await getCategoryProducts(slug); // Giả định API trả về dữ liệu danh mục

//   return createMetadata({
//     category: {
//       name: categoryData.name,
//       slug: categoryData.slug,
//       description: categoryData.description,
//       totalProducts: categoryData.totalProducts,
//     },
//     page,
//   });
// }

export default function ProductDetail() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div
        className="grid grid-cols-1 
        md:grid-cols-3 
        gap-4 
        md:gap-8"
      >
        {/* Mobile Layout (stacked) */}
        <div className="md:hidden space-y-4">
          <ProductThumbnail />
          <ProductInfo />
          <ProductDescription />
          <ShippingAndPolicies />
          <ProductReviews />
          <ListProduct
            products={products.slice(0, 10)}
            title="Relative Products"
          />
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:col-span-2 gap-4">
          <ProductThumbnail />
          <ProductReviews />
          <ListProduct
            products={products.slice(0, 10)}
            title="Relative Products"
          />
        </div>
        <div className="hidden md:block md:col-span-1">
          <ProductInfo />
          <ProductDescription />
          <ShippingAndPolicies />
        </div>
      </div>
      <ListProduct products={products.slice(0, 5)} title="Recent viewed" />
    </div>
  );
}
