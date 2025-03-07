import Image from "next/image";
import React from "react";
import ContactUs from "@/assets/svg/contact-us.svg";
import Link from "next/link";
import {
  MdOutlineArrowRightAlt,
  MdOutlineGpsFixed,
  MdOutlineMailOutline,
  MdOutlineMessage,
  MdOutlinePhone,
  MdOutlineWhatsapp,
} from "react-icons/md";

const Page = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 items-center p-6 md:p-12 bg-white gap-6">
      {/* Hình ảnh minh họa */}
      <div className="flex justify-center">
        <Image
          src={ContactUs}
          alt="Contact Illustration"
          className="max-w-full md:max-w-96"
        />
      </div>

      {/* Nội dung thông tin liên hệ */}
      <div className="text-gray-800 w-full">
        <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
          Contact Us
        </h2>

        <p className="mb-2 flex items-center gap-1">
          <MdOutlineMailOutline className="text-[#19124f] mr-2" />
          Email:{" "}
          <Link
            prefetch={false}
            href="mailto:support@printerval.com"
            className="text-orange-500"
          >
            support@printerval.com
          </Link>
        </p>

        <p className="mb-2 flex items-center gap-1">
          <MdOutlinePhone className="text-[#19124f] mr-2" />
          Call us:{" "}
          <Link href="tel:+13396661686" className="text-orange-500">
            +1 339 666 1686
          </Link>
          ,{" "}
          <Link href="tel:+14786661686" className="text-orange-500">
            +1 478 666 1686
          </Link>
          ,{" "}
          <Link href="tel:+84903446430" className="text-orange-500">
            +84 903 446 430
          </Link>
        </p>

        <p className="mb-2 flex items-center gap-1">
          <MdOutlineMessage className="text-[#19124f] mr-2" />
          iMessage: +1 339 666 1686, +1 478 666 1686
        </p>

        <p className="mb-2 flex items-center gap-1">
          <MdOutlineWhatsapp className="text-[#19124f] mr-2" />
          WhatsApp:{" "}
          <Link href="https://wa.me/84986750611" className="text-orange-500">
            (+84) 986750611
          </Link>
        </p>

        <p className="mb-2 flex items-start gap-1">
          <MdOutlineGpsFixed className="text-[#19124f] mr-2 w-6 h-6" />
          Office Address: 3rd Floor, 24T3 Thanh Xuan Complex Building, 6 Le Van
          Thiem Street, Thanh Xuan Trung Ward, Thanh Xuan District, Hanoi,
          Vietnam.{" "}
          <Link href="#" className="text-orange-500">
            (Directions)
          </Link>
        </p>

        <p className="mb-2 flex items-start gap-1">
          <MdOutlineArrowRightAlt className="text-[#19124f] mr-2 w-8 h-8" />
          The website is jointly operated by Printerval LLC registered address
          at 8 the green Dover, DE 19901 and BLUE STAR TRADING LIMITED
          registered at RM C, 6/F, WORLD TRUST TOWER 50 STANLEY STREET CENTRAL
          HK.
        </p>

        {/* Nút liên hệ */}
        <div className="mt-6 flex flex-col md:flex-row gap-4 w-full">
          <button className="bg-purple-700 text-white px-6 py-2 rounded-lg w-full md:w-auto">
            Contact as a customer
          </button>
          <button className="border border-purple-700 text-purple-700 px-6 py-2 rounded-lg w-full md:w-auto">
            Contact as a seller
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
