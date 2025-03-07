"use client";

import { useEffect, ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useAuthStore } from "@/stores/useAuthStore";

const privatePaths = [
  "/user/profile",
  "/user/address",
  "/user/my-order",
  "/wishlist",
];

interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const { currentUser, loading, initialize } = useAuthStore();
  const pathname = usePathname();
  const router = useRouter();

  // Khởi tạo auth listener
  useEffect(() => {
    const unsubscribe = initialize();

    return () => {
      if (typeof unsubscribe === "function") {
        unsubscribe();
      }
    };
  }, [initialize]);

  // Đồng bộ token với cookie
  useEffect(() => {
    if (!loading) {
      if (currentUser) {
        // Lưu token vào cookie
        currentUser.getIdToken().then((token) => {
          Cookies.set("auth-token", token, {
            expires: 7, // 7 ngày
            secure: process.env.NODE_ENV === "production",
            sameSite: "Lax",
          });

          // Đặt token vào header cho các request tiếp theo
          localStorage.setItem("auth-token", token);
        });
      } else {
        // Xóa cookie khi đăng xuất
        Cookies.remove("auth-token");
        localStorage.removeItem("auth-token");

        // Kiểm tra nếu đường dẫn hiện tại cần xác thực
        const isPrivatePath = privatePaths.some(
          (privatePath) =>
            pathname === privatePath || pathname?.startsWith(`${privatePath}/`)
        );

        if (isPrivatePath) {
          router.push("/sign-in");
        }
      }
    }
  }, [currentUser, loading, pathname, router]);

  return <>{children}</>;
}
