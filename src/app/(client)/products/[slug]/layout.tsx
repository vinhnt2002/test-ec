

//pre setup
// export async function generateMetadata({
//   params,
// }: {
//   params: { id: string };
// }): Promise<Metadata> {
//   // Giả sử fetch dữ liệu sản phẩm
//   const product = await fetch(
//     `http://localhost:3377/api/products/${params.id}`
//   ).then((res) => res.json());

//   return createMetadata({
//     title: `${product.name}`,
//     description: `Buy ${product.name} at Store - ${product.description}`,
//     openGraph: {
//       title: `${product.name} | Store`,
//       description: `Buy ${product.name} at Store - ${product.description}`,
//       images: [
//         {
//           url: product.imageUrl || "/images/default-product-og.jpg",
//           width: 1200,
//           height: 630,
//           alt: `${product.name} Preview`,
//         },
//       ],
//     },
//     twitter: {
//       title: `${product.name} | Store`,
//       description: `Buy ${product.name} at Store - ${product.description}`,
//       images: [product.imageUrl || "/images/default-product-twitter.jpg"],
//     },
//     alternates: {
//       canonical: `${siteConfig.url}/products/${params.id}`,
//     },
//   });
// }

 const ProductDetailLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <>{children}</>;
};

export default ProductDetailLayout;
