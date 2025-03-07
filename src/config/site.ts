export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  // Thông tin cơ bản của website
  name: "Printeval",
  description:
    "Printeval offers custom POD t-shirts and apparel with fast shipping and top quality. Design your unique clothing today!",
  url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://printeval.com", // Thay bằng domain thật 

  // Liên kết mạng xã hội và repository
  links: {
    github: "https://github.com/vinhnt2002/movemate-dashboard", // Có thể thay bằng repo của Printeval
    twitter: "https://twitter.com/printeval", // Thêm nếu có
    facebook: "https://facebook.com/printeval", // Thêm nếu có
    instagram: "https://instagram.com/printeval", // Thêm nếu có
  },

  // Thông tin công ty hoặc thương hiệu (nếu cần)
  company: {
    name: "Printeval Inc.", // Tên công ty (nếu có)
    email: "support@printeval.com",
    phone: "+1-800-PRINTEVAL", // Số điện thoại giả định
    address: "123 Print Street, Design City, USA", // Địa chỉ giả định
  },

  // Cấu hình SEO bổ sung
  defaultTitle: "Printeval - Custom POD T-Shirts & Apparel",
  slogan: "Design Your Style, Delivered Fast",

  // Cấu hình ngôn ngữ và khu vực
  locale: "en_US",
  timezone: "America/New_York", // Thay đổi theo vị trí thực tế của bạn

  // Cấu hình các đường dẫn tĩnh (static paths)
  paths: {
    home: "/",
    shop: "/shop",
    design: "/design",
    about: "/about",
    "about-us": "/about-us",
    contact: "/contact",
    faq: "/faq",
    terms: "/terms",
    privacy: "/privacy",
    "contact-us": "/contact-us",
    "refund-policy": "/refund-policy",
    shipping: "/shipping",
    wishlist: "/wishlist",
    "terms-of-service": "/terms-of-service",
  },

  // Cấu hình phân trang (nếu website có danh sách sản phẩm)
  pagination: {
    productsPerPage: 20,
  },

  // Cấu hình các tính năng đặc biệt của Printeval
  features: {
    fastShipping: true,
    customDesign: true,
    highQualityPrint: true,
    ecoFriendlyOptions: false, // Thêm nếu áp dụng
  },

  // Cấu hình các danh mục sản phẩm chính
  categories: [
    { id: "tshirts", name: "T-Shirts", slug: "t-shirts" },
    { id: "hoodies", name: "Hoodies", slug: "hoodies" },
    { id: "tanktops", name: "Tank Tops", slug: "tank-tops" },
    { id: "accessories", name: "Accessories", slug: "accessories" },
  ],
};

// Export type để sử dụng trong TypeScript
export default siteConfig;
