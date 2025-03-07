import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

// Định nghĩa kiểu cho title
type TitleConfig = string | { default: string; template: string };

// Định nghĩa kiểu cho dữ liệu API (giả định)
type CategoryData = {
  name: string;
  slug: string;
  description: string;
  totalProducts: number;
};

// Metadata cơ bản
export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  keywords: [
    "custom POD t-shirts",
    "print on demand apparel",
    "personalized t-shirts",
    "POD clothing store",
    "design your own shirt",
    "unique graphic tees",
    "printeval",
    "ecommerce",
  ],
  authors: [
    {
      name: "vinhnt2002",
      url: "https://portfolio-vinhnt2002.vercel.app",
    },
  ],
  creator: "vinhnt2002",
  icons: {
    icon: "/images/icons_favicon/icon.png",
    shortcut: "/images/icons_favicon/shortcut-icon.png",
    apple: "/images/icons_favicon/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    title: `${siteConfig.name} - Personalized Print-on-Demand Clothing Store`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Printeval Custom T-Shirt Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@vinhnt2002",
    title: `${siteConfig.name} - Personalized Print-on-Demand Clothing Store`,
    description: siteConfig.description,
    images: ["/images/twitter-image.jpg"],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

// Hàm tạo metadata với dữ liệu động từ API
export const createMetadata = (
  overrides: Partial<Metadata> & {
    category?: CategoryData; // Dữ liệu danh mục từ API
    page?: number; // Số trang nếu có phân trang
  } = {}
): Metadata => {
  const { category, page } = overrides;

  // Xử lý title động dựa trên danh mục và phân trang
  const titleOverride = overrides.title;
  const categoryName = category?.name || "Shop";
  const pageSuffix = page && page > 1 ? ` - Page ${page}` : "";
  const title =
    titleOverride == null
      ? {
          default: `${categoryName} | ${siteConfig.name}${pageSuffix}`,
          template: `%s | ${siteConfig.name}`,
        }
      : typeof titleOverride === "string"
      ? {
          default: `${titleOverride}${pageSuffix}`,
          template: `%s | ${siteConfig.name}`,
        }
      : {
          default:
            (titleOverride as TitleConfig & { default: string }).default ||
            `${categoryName} | ${siteConfig.name}${pageSuffix}`,
          template:
            (titleOverride as TitleConfig & { template: string }).template ||
            `%s | ${siteConfig.name}`,
        };

  // Xử lý description động
  const defaultDescription = category?.description || siteConfig.description;
  const description = overrides.description || defaultDescription;

  // Xử lý URL động cho canonical và OpenGraph
  const canonicalUrl = category
    ? `${siteConfig.url}/shop/${category.slug}${page && page > 1 ? `?page=${page}` : ""}`
    : siteConfig.url;

  return {
    ...baseMetadata,
    title,
    description,
    ...overrides,
    keywords: category
      ? [...baseMetadata.keywords!, `${category.name.toLowerCase()} printeval`, `custom ${category.name.toLowerCase()}`]
      : baseMetadata.keywords,
    alternates: {
      ...baseMetadata.alternates,
      canonical: canonicalUrl,
    },
    openGraph: {
      ...baseMetadata.openGraph,
      url: canonicalUrl,
      title: `${categoryName} | ${siteConfig.name}${pageSuffix}`,
      description,
      images: overrides.openGraph?.images || baseMetadata.openGraph!.images,
      ...overrides.openGraph,
    },
    twitter: {
      ...baseMetadata.twitter,
      title: `${categoryName} | ${siteConfig.name}${pageSuffix}`,
      description,
      images: overrides.twitter?.images || baseMetadata.twitter!.images,
      ...overrides.twitter,
    },
  };
};

export default createMetadata;