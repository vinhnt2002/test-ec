import { products } from "@/lib/example";
import ExtraCategory from "@/components/HomePage/ExtraCategory";
import Carousel from "@/components/HomePage/CategoryCarousel";
import ListTopicProduct from "@/components/HomePage/ListTopicProduct";
import PrintervalBanner from "@/components/HomePage/PrintervalBanner";
// import SupportArtistsSection from "@/components/HomePage/SupportSection";
import FitGuarantee from "@/components/HomePage/FitGuarantee";
import CategoryProduct from "@/components/HomePage/CategoriesProduct";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 space-y-10">
      <Carousel products={products} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2 md:space-y-8">
        <section>
          <CategoryProduct products={products} title="Categories" />
        </section>

        <ExtraCategory products={products} />

        <ListTopicProduct
          products={products}
          title="Special Recommendation"
        />
        {/* <ListTopicProduct
          products={products}
          title="Discover Just for You"
        /> */}

        <PrintervalBanner />

        {/* <SupportArtistsSection /> */}
        <ListTopicProduct
          products={products}
          title="Recently viewed"
          rows={1}
        />
      </main>
      <FitGuarantee />
    </div>
  );
}
