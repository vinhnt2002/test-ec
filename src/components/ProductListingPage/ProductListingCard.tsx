"use client";
import { IProduct } from "@/lib/example";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart, FaTimes } from "react-icons/fa";

export interface ProductCardProps {
  image_url: IProduct["image_url"];
  name: IProduct["name"];
  price: IProduct["price"];
  high_price: IProduct["high_price"];
  sold: IProduct["sold"];
  flashSaleText: IProduct["flashSaleText"];
  is_flash_sale: IProduct["is_flash_sale"];
  url: IProduct["url"];
  type: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image_url,
  name,
  price,
  high_price,
  sold,
  flashSaleText,
  is_flash_sale,
  url,
  type = "list",
}) => {
  const discount = Math.round(((high_price - +price) / high_price) * 100);

  return (
    <div className="relative rounded-lg p-4 cursor-pointer group">
      <div className="absolute top-6 right-6 z-30">
        <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
          {type === "list" ? (
            <FaRegHeart
              className="w-6 h-6 text-[#FF7302]"
              onClick={() => console.log("first")}
            />
          ) : (
            <FaTimes className="w-6 h-6" onClick={() => console.log("first")} />
          )}
        </span>
      </div>

      <Link href={`products/${url}`}>
        <div>
          <div className="relative w-full h-52">
            <div className="overflow-hidden">
              <Image
                src={image_url}
                alt={name}
                layout="fill"
                objectFit="contain"
                className="rounded-lg transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="mt-2">
            <h3 className="text-sm font-medium text-gray-800 transition-colors duration-300 group-hover:text-[#FF7302] line-clamp-1">
              {name}
            </h3>
            <div className="flex items-center">
              <span className="text-yellow-400">★★★★★</span>
              <span className="ml-1 text-gray-600 text-sm">({sold})</span>
            </div>
            <div>
              <span className="text-gray-400 hover:text-[#FF7302] text-xs">
                By Widespread Housemother
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-lg font-bold text-[#258635]">${price}</span>
              <span className="ml-2 text-sm text-[#258635] line-through">
                ${high_price}
              </span>
              <span className="ml-2 text-sm text-[#258635]">
                ({discount}% off)
              </span>
            </div>
            {is_flash_sale === 1 && (
              <p className="text-xs text-[#258635]">{flashSaleText}</p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
