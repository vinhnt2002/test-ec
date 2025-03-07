"use client";

import Logo from "@/assets/svg/logo.svg";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavHeader from "./NavHeader";
import { SearchIcon } from "lucide-react";
import { FaRegUserCircle } from "react-icons/fa";
import { BsBag, BsBox, BsHeart } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";
import { IoIosMenu } from "react-icons/io";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { useAuthStore } from "@/stores/useAuthStore";
import { useToast } from "@/providers/ToastProvier";
import SearchInput from "./SearchInput";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);
  const [isUserDrawerOpen, setIsUserDrawerOpen] = useState(false);
  const pathname = usePathname();
  const toast = useToast();
  const { logOut, currentUser } = useAuthStore();
  const isHomepage = pathname === "/";

  const toggleMenuDrawer = () => setIsMenuDrawerOpen(!isMenuDrawerOpen);
  const toggleUserDrawer = () => setIsUserDrawerOpen(!isUserDrawerOpen);

  const handleLogout = async () => {
    const toastId = toast.loading("Đang đăng xuất...");

    try {
      await logOut();
      toast.success("Đăng xuất thành công!");
      toggleUserDrawer(); // Close drawer after logout
    } catch (err) {
      toast.error("Có lỗi xảy ra khi đăng xuất!");
    } finally {
      toast.dismiss(toastId);
    }
  };

  const CartIcon: React.FC = () => (
    <Link href="/cart">
      <div className="relative py-2 flex flex-col items-center">
        <div className="top-0 absolute left-3">
          <p className="flex h-1 w-1 items-center justify-center rounded-full bg-[#ff7300] text-xs p-3 text-white">
            4
          </p>
        </div>
        <BsBag className="text-black hover:text-[#ff7300] cursor-pointer w-6 h-6 duration-300" />
        <span className="text-[11px] text-black hidden lg:block">Cart</span>
      </div>
    </Link>
  );

  return (
    <header className="bg-white shadow-md top-0 z-50 py-3">
      <div className="container mx-auto px-4 md:px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Layout*/}
          <div className="flex items-center justify-between gap-4 w-full md:hidden">
            {!isHomepage && (
              <button
                onClick={toggleMenuDrawer}
                className="text-gray-700 hover:text-[#FF7302] focus:outline-none duration-300"
              >
                <IoIosMenu className="w-6 h-6 cursor-pointer" color="#19124f" />
              </button>
            )}

            <button className="hover:text-[#a397e1] cursor-pointer duration-300">
              <SearchIcon color="#19124f" />
            </button>

            <Link href="/" prefetch={false}>
              <Image src={Logo} alt="Printerval" width={120} height={30} />
            </Link>

            <button onClick={toggleUserDrawer}>
              <FaRegUserCircle className="text-black cursor-pointer w-6 h-6" />
            </button>

            <CartIcon />
          </div>

          {/* Tablet Layout*/}
          <div className="hidden md:flex md:items-center md:justify-between md:gap-1 md:w-full lg:hidden">
            {!isHomepage && (
              <button
                onClick={toggleMenuDrawer}
                className="text-gray-700 hover:text-[#FF7302] focus:outline-none duration-300"
              >
                <IoIosMenu className="w-6 h-6 cursor-pointer" color="#19124f" />
              </button>
            )}
            <Link href="/" prefetch={false}>
              <Image src={Logo} alt="Printerval" width={159} height={40} />
            </Link>
            <div className="flex-1 flex items-center justify-center px-2">
              <SearchInput />
            </div>
            <button onClick={toggleUserDrawer}>
              <FaRegUserCircle className="text-black cursor-pointer w-6 h-6" />
            </button>
            <CartIcon />
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex lg:items-center lg:justify-between lg:w-full">
            <Link href="/" prefetch={false} className="flex items-center">
              <Image src={Logo} alt="Printerval" width={159} height={40} />
            </Link>

            <div className="flex-1 flex items-center justify-center px-4">
              <SearchInput />
            </div>

            <div className="flex items-center ml-auto space-x-4">
              <div className="flex flex-col items-center">
                <Link href="#">
                  <BsBox className="text-black hover:text-[#ff7300] cursor-pointer w-6 h-6 duration-300" />
                </Link>
                <span className="text-[11px] text-black">Order Tracking</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="group">
                    <FaRegUserCircle className="text-black cursor-pointer w-6 h-6" />
                    <div className="absolute right-0 w-48 bg-white rounded-lg shadow-lg hidden group-hover:block z-10">
                      <ul>
                        {currentUser ? (
                          <>
                            <li>
                              <Link
                                href="/user/profile"
                                prefetch={false}
                                className="px-4 py-2 text-sm text-[#19124f] hover:text-[#ff7300] flex items-center gap-2 duration-300"
                              >
                                <BsBox className="w-5 h-5" />
                                <h2 className="text-md">Profile</h2>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/wishlist"
                                prefetch={false}
                                className="px-4 py-2 text-sm text-[#19124f] hover:text-[#ff7300] flex items-center gap-2 duration-300"
                              >
                                <BsHeart className="w-5 h-5" />
                                <h2 className="text-md">Wishlist</h2>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/user/my-order"
                                prefetch={false}
                                className="px-4 py-2 text-sm text-[#19124f] hover:text-[#ff7300] flex items-center gap-2 duration-300"
                              >
                                <BsBag className="w-5 h-5" />
                                <h2 className="text-md">Orders</h2>
                              </Link>
                            </li>
                            <li>
                              <button
                                onClick={handleLogout}
                                className="px-4 py-2 text-sm text-[#19124f] hover:text-[#ff7300] flex items-center gap-2 duration-300 w-full text-left"
                              >
                                <FaArrowRightFromBracket className="w-5 h-5" />
                                <h2 className="text-md">Logout</h2>
                              </button>
                            </li>
                          </>
                        ) : (
                          <>
                            <li>
                              <Link
                                href="/sign-in"
                                prefetch={false}
                                className="px-4 py-2 text-sm text-[#19124f] hover:text-[#ff7300] flex items-center gap-2 duration-300"
                              >
                                <FaArrowRightFromBracket className="w-5 h-5" />
                                <h2 className="text-md">Login</h2>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/wishlist"
                                prefetch={false}
                                className="px-4 py-2 text-sm text-[#19124f] hover:text-[#ff7300] flex items-center gap-2 duration-300"
                              >
                                <CiHeart className="w-6 h-6" />
                                <h2 className="text-md">Wishlist</h2>
                              </Link>
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
                <span className="text-[11px] text-black">Account</span>
              </div>

              <CartIcon />
            </div>
          </div>
        </div>

        {/* NavHeader for Desktop */}
        <div className="hidden lg:flex lg:items-center lg:justify-center">
          <NavHeader isDrawer={false} toggleMenuDrawer={toggleMenuDrawer} />
        </div>
      </div>

      {/* Drawer Menu (Mobile & Tablet) */}
      <div
        className={`fixed inset-0 bg-gray-100 z-50 transition-opacity duration-300 lg:hidden ${
          isMenuDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenuDrawer}
      >
        <div
          className={`fixed top-0 left-0 h-full w-4/5 max-w-xs bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMenuDrawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <Link href="/" prefetch={false}>
              <Image src={Logo} alt="Printerval" width={120} height={30} />
            </Link>
            <button
              onClick={toggleMenuDrawer}
              className="text-gray-500 hover:text-[#FF7302] duration-300"
            >
              <LiaTimesSolid className="w-6 h-6 cursor-pointer" color="black" />
            </button>
          </div>
          <div className="py-4 overflow-y-auto h-full">
            <NavHeader isDrawer={true} toggleMenuDrawer={toggleMenuDrawer} />
          </div>
        </div>
      </div>

      {/* Drawer User (Mobile & Tablet) */}
      <div
        className={`fixed inset-0 bg-gray-100 z-50 transition-opacity duration-300 lg:hidden ${
          isUserDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleUserDrawer}
      >
        <div
          className={`fixed bottom-0 left-0 w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isUserDrawerOpen ? "translate-y-0" : "translate-y-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <span className="text-lg font-semibold text-[#19124f]">
              User Menu
            </span>
            <button
              onClick={toggleUserDrawer}
              className="text-gray-500 hover:text-[#FF7302] duration-300"
            >
              <LiaTimesSolid className="w-6 h-6 cursor-pointer" color="black" />
            </button>
          </div>
          <div className="p-4">
            <ul>
              {currentUser ? (
                <>
                  <li>
                    <Link
                      href="/user/profile"
                      prefetch={false}
                      onClick={toggleUserDrawer}
                      className="px-4 py-2 text-sm text-[#19124f] hover:text-[#ff7300] flex items-center gap-2 duration-300"
                    >
                      <BsBox className="w-5 h-5" />
                      <h2 className="text-md">Profile</h2>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/wishlist"
                      prefetch={false}
                      onClick={toggleUserDrawer}
                      className="px-4 py-2 text-sm text-[#19124f] hover:text-[#ff7300] flex items-center gap-2 duration-300"
                    >
                      <BsHeart className="w-5 h-5" />
                      <h2 className="text-md">Wishlist</h2>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/user/my-order"
                      prefetch={false}
                      onClick={toggleUserDrawer}
                      className="px-4 py-2 text-sm text-[#19124f] hover:text-[#ff7300] flex items-center gap-2 duration-300"
                    >
                      <BsBag className="w-5 h-5" />
                      <h2 className="text-md">Orders</h2>
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="px-4 py-2 text-sm text-[#19124f] hover:text-[#ff7300] flex items-center gap-2 duration-300 w-full text-left"
                    >
                      <FaArrowRightFromBracket className="w-5 h-5" />
                      <h2 className="text-md">Logout</h2>
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      href="/sign-in"
                      prefetch={false}
                      onClick={toggleUserDrawer}
                      className="px-4 py-2 text-sm text-[#19124f] hover:text-[#ff7300] flex items-center gap-2 duration-300"
                    >
                      <FaArrowRightFromBracket className="w-5 h-5" />
                      <h2 className="text-md">Login</h2>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/wishlist"
                      prefetch={false}
                      onClick={toggleUserDrawer}
                      className="px-4 py-2 text-sm text-[#19124f] hover:text-[#ff7300] flex items-center gap-2 duration-300"
                    >
                      <CiHeart className="w-6 h-6" />
                      <h2 className="text-md">Wishlist</h2>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
