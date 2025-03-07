"use client";

import Logo from "@/assets/svg/logo.svg";
import Link from "next/link";
import React from "react";
import { footerSections, paymentMethods, socialLinks } from "./FooterData";
import Image from "next/image";
import security from "@/assets/svg/FeatureBanner/security-3.svg";

const Footer = () => {
  const getSocialLinkColor = (index: number) => {
    const colors = [
      "#1877f2", // Facebook
      "#ff0000", // YouTube
      "#6b7280", // Email (gray)
      "#16a34a", // Copy (green)
    ];

    return index < colors.length ? colors[index] : "";
  };

  return (
    <footer className="mt-16 bg-[#2e466c] dark:bg-[#2e466c] border-t border-gray-500">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-8 border-t border-gray-500 text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center mb-4" prefetch={false}>
              <Image src={Logo} alt="Printerval" width={160} height={40} />
            </Link>

            <p className=" text-sm mb-6 max-w-lg ">
              Printerval.com is an global online marketplace, where people come
              together to make, sell, buy, and collect unique items. Theres no
              Printerval warehouse – just independent sellers selling the things
              they love. We make the whole process easy, helping you connect
              directly with makers to find something extraordinary..
            </p>

            <p className=" text-sm mb-4">
              The website is jointly operated by Printerval LLC with the
              warehouse based at 8 the green Dover, DE 19901 and and BLUE STAR
              TRADING LIMITED registered at RM C，6/F，WORLD TRUST TOWER 50
              STANLEY STREET CENTRAL HK
            </p>

            <div className="py-4">
              <div className="container mx-auto">
                <span className="text-white font-medium mr-2 hidden md:flex">
                  Follow us:
                </span>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                  {socialLinks.map((socialLink, index) => (
                    <Link
                      key={index}
                      prefetch={false}
                      href={socialLink.href}
                      className="w-10 h-10 py-2 rounded-full flex items-center justify-center transition-all duration-200"
                      style={{
                        backgroundColor: getSocialLinkColor(index),
                      }}
                    >
                      {socialLink.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Link Columns TO DO */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, index) => (
                  <div key={index}>
                    <Link
                      prefetch={false}
                      href={link.href}
                      className=" hover:text-red-500 dark:hover:text-red-400 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="container mx-auto px-4 py-2  text-white  text-sm mb-4 md:mb-0">
        © Printerval. All Rights Reserved
      </p>
      {/* Copyright and Social */}
      <div className="container mx-auto px-4 py-6 border-t border-gray-500 text-white ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-start space-x-3">
            <Image
              src={security}
              alt="security"
              width={64}
              height={64}
              className="w-16 h-16 object-contain"
            />
            <div className="flex flex-col">
              <h3 className="font-medium text-white text-[16px]">
                Secure Payments
              </h3>
              <p className="text-white text-sm mb-1">
                100% Secure payment with 256-bit SSL Encryption
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex flex-wrap gap-2 items-center">
              {paymentMethods.map((method, index) => (
                <div key={index} className="h-8 bg-white rounded p-1">
                  {method.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
