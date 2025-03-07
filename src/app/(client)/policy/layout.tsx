import { createMetadata } from "@/config/metadata";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: "Learn how we protect your personal information at Store.",
  openGraph: {
    title: "Privacy Policy | Store",
    description: "Learn how we protect your personal information at Store.",
    images: [
      {
        url: "/images/privacy-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Privacy Policy Preview",
      },
    ],
  },
  twitter: {
    title: "Privacy Policy | Store",
    description: "Learn how we protect your personal information at Store.",
    images: ["/images/privacy-twitter-image.jpg"],
  },
  alternates: {
    canonical: `${siteConfig.url}/policy`,
  },
});

export const PolicyLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default PolicyLayout;
