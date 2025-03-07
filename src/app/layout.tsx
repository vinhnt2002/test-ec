import type { Metadata } from "next";
import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/providers/ToastProvier";
import ModalProviders from "@/providers/ModalProviders";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/config/metadata";

export const metadata: Metadata = createMetadata();

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`, // Sử dụng url từ siteConfig
    description:
      "Printeval offers custom POD t-shirts and apparel with fast shipping and top quality. Design your unique clothing today!",
    sameAs: [
      "https://twitter.com/yourstorehandle",
      "https://facebook.com/yourstorepage",
    ],
  };

  const schemaWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <Head>
        {/* Thêm schema JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebSite) }}
        />
        {/* Thêm thẻ meta keywords nếu cần */}
        <meta
          name="keywords"
          content="custom POD t-shirts, print on demand apparel, personalized t-shirts, POD clothing store, design your own shirt, unique graphic tees"
        />
        {/* Thêm thẻ meta tags tùy chọn */}
        <meta
          name="tags"
          content="PODTShirts, CustomApparel, PrintOnDemand, GraphicTees, PersonalizedClothing, Printeval"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        <ToastProvider>
          <ModalProviders />
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
