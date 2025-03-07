"use client";

import Image from "next/image";
import gif from "@/assets/images/gif/dribbble_1.gif";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-50 to-purple-50 p-4 md:p-8">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-8">
          <div className="text-center">
            <div className="relative">
              <h1 className="text-8xl font-montserrat font-black bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2 animate-pulse">
                Oops!! 404
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="px-8 pb-8 text-center">
          <div className="mb-8 space-y-6">
            <div className="relative h-72 w-full rounded-xl overflow-hidden shadow-md">
              <Image
                src={gif}
                alt="Hình minh họa lỗi"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div>
              <h3 className="text-3xl font-black uppercase tracking-tight md:text-4xl text-gray-800 mb-2">
                The page does not exist
              </h3>
              <p className="text-gray-500 text-lg max-w-md mx-auto">
                Sorry, we couldn&apos;t find the page you were looking for. It might have been moved or deleted.
              </p>
            </div>
          </div>
          <button
            onClick={() => router.push("/")}
            className="min-w-[220px] px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Back to home page
          </button>
        </div>
      </div>
    </div>
  );
}