"use client";
import { useToast } from "@/providers/ToastProvier";
import { useAuthStore } from "@/stores/useAuthStore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  FaRegUserCircle,
  FaAddressBook,
  FaClipboardList,
  FaCircleNotch,
} from "react-icons/fa";

const SidebarProfile = () => {
  const router = usePathname();
  const { logOut } = useAuthStore();
  const toast = useToast();

  const menuItems = [
    { href: "/user/profile", icon: <FaRegUserCircle />, label: "User profile" },
    { href: "/user/address", icon: <FaAddressBook />, label: "Address book" },
    { href: "/user/my-order", icon: <FaClipboardList />, label: "My order" },
  ];

  const handleLogout = async () => {
    const toastId = toast.loading("Đang đăng xuất...");

    try {
      await logOut();
      toast.success("Đăng xuất thành công!");
    } catch (err) {
      toast.error("Có lỗi xảy ra khi đăng xuất!");
    } finally {
      toast.dismiss(toastId);
    }
  };

  return (
    <nav>
      <ul className="space-y-2">
        {menuItems.map((item) => {
          const isActive = router === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              prefetch={false}
              className="cursor-pointer"
            >
              <li
                className={`rounded-md flex items-center gap-2 p-2 duration-300 ${
                  isActive
                    ? "text-[#0973ba] bg-blue-50"
                    : "text-[#19124f] hover:text-[#ff7300]"
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </li>
            </Link>
          );
        })}

        <li
          className="text-[#19124f] hover:text-[#ff7300] duration-300 cursor-pointer rounded-md flex items-center gap-2 p-2 "
          onClick={handleLogout}
        >
          <span>
            <FaCircleNotch />
          </span>
          <span>Logout</span>
        </li>
      </ul>
    </nav>
  );
};

export default SidebarProfile;
