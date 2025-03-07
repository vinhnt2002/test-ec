"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

interface DropdownItem {
  name: string;
  link: string;
}

interface MenuItem {
  name: string;
  link: string;
  hasDropdown: boolean;
  dropdownItems?: DropdownItem[];
}

interface NavHeaderProps {
  isDrawer: boolean;
  toggleMenuDrawer: () => void;
}

const NavHeader: React.FC<NavHeaderProps> = ({
  isDrawer,
  toggleMenuDrawer,
}) => {
  const [fullDrawerItem, setFullDrawerItem] = useState<MenuItem | null>(null);

  const pathName = usePathname();
  const openFullDrawer = (item: MenuItem) => {
    setFullDrawerItem(item);
  };

  const closeFullDrawer = () => {
    setFullDrawerItem(null);
  };

  const menuItems: MenuItem[] = [
    {
      name: "All Products",
      link: "/products",
      hasDropdown: false,
    },
    {
      name: "Shirt",
      link: "/products",
      hasDropdown: false,
    },
    {
      name: "T-Shirt",
      link: "/products",
      hasDropdown: false,
    },
    {
      name: "Shorts",
      link: "/products",
      hasDropdown: false,
    },
    {
      name: "Outerware",
      link: "/products",
      hasDropdown: false,
    },
    {
      name: "Pants",
      link: "/products",
      hasDropdown: false,
    },
  ];

  if (pathName === "/") {
    return null;
  }

  if (!isDrawer) {
    return (
      <nav>
        <ul className="flex items-center flex-row font-medium text-[16px]">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`px-2 ${
                item.hasDropdown ? "relative flex items-center group" : ""
              }`}
            >
              <Link href={item.link} prefetch={false}>
                <span className="text-[#19124f] hover:text-[#FF7302] duration-300">
                  {item.name}
                </span>
              </Link>

              {item.hasDropdown && (
                <>
                  <button className="shrink-0 p-1 group-hover:text-[#FF7302] transition-colors duration-300">
                    <svg
                      className="w-3 h-3 fill-slate-500 group-hover:fill-[#FF7302] transition-transform duration-300 transform group-hover:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                    >
                      <path d="M10 2.586 11.414 4 6 9.414.586 4 2 2.586l4 4z" />
                    </svg>
                  </button>

                  {/* Hover dropdown for desktop */}
                  <ul className="origin-top-right absolute top-full left-1/2 -translate-x-1/2 min-w-[240px] bg-white border border-slate-200 p-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300">
                    {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                      <li key={dropdownIndex}>
                        <Link
                          href={dropdownItem.link}
                          className="text-[#19124f] hover:text-[#FF7302] hover:underline flex items-center p-2 duration-300"
                          prefetch={false}
                        >
                          {dropdownItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <>
      <nav className="px-4 z-50">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index} className="border-b border-gray-100 pb-2">
              <div className="flex items-center justify-between">
                <Link
                  href={item.link}
                  className="block py-2 text-[#19124f] hover:text-[#FF7302] text-lg duration-300"
                  prefetch={false}
                  onClick={toggleMenuDrawer}
                >
                  {item.name}
                </Link>

                {item.hasDropdown && (
                  <button
                    onClick={() => openFullDrawer(item)}
                    className="p-2 text-gray-500 hover:text-[#FF7302] duration-300 cursor-pointer"
                  >
                    <IoIosArrowForward />
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </nav>

      {/* Full Screen Drawer */}
      {fullDrawerItem && (
        <div className="fixed min-w-screen inset-0 bg-white z-50 flex flex-col">
          <div className="flex items-center gap-2 p-4 border-b bg-[#c25259] ">
            <button
              onClick={closeFullDrawer}
              className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-[#FF7302] rounded-full bg-white duration-300 cursor-pointer"
            >
              <IoIosArrowBack />
            </button>
            <h2 className="text-xl font-bold text-white">
              {fullDrawerItem.name}
            </h2>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-4">
              {fullDrawerItem.dropdownItems?.map((dropdownItem, index) => (
                <li key={index}>
                  <Link
                    href={dropdownItem.link}
                    className="block py-2 text-[#19124f] hover:text-[#FF7302] text-lg duration-300"
                    onClick={closeFullDrawer}
                    prefetch={false}
                  >
                    {dropdownItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default NavHeader;
