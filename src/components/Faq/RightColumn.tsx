import React from "react";
import Image from "next/image";
import ImageRightCol from "@/assets/images/policy/create-your-own.webp";
import image1 from "@/assets/images/policy/return.svg";

const RightColumn: React.FC = () => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <Image
        src={ImageRightCol}
        alt="Create Your Own"
        width={300}
        height={200}
        className="w-full"
      />
      <p className="text-black text-center mt-2">
        Got a design? Upload it to see it on our products
      </p>
      <button className="bg-orange-500 text-white px-4 py-2 rounded-lg mt-2 w-full">
        Browse Your Design
      </button>
      <div className="flex items-center justify-between pt-4">
        <div className="flex flex-col text-center items-center ">
          <Image src={image1} alt="img" width={32} height={32} />
          <span className="text-xs line-clamp-1 lg:text-base">
            Sustainable Materials
          </span>
        </div>
        <div className="flex flex-col  text-center items-center ">
          <Image src={image1} alt="img" width={32} height={32} />
          <span className="text-xs line-clamp-1 lg:text-base">
            Secure Payment
          </span>
        </div>
        <div className="flex flex-col  text-center items-center ">
          <Image src={image1} alt="img" width={32} height={32} />
          <span className="text-xs line-clamp-1 lg:text-base">
            30 Days Free Returns
          </span>
        </div>
        <div className="flex flex-col  text-center items-center ">
          <Image src={image1} alt="img" width={32} height={32} />
          <span className="text-xs line-clamp-1 lg:text-base">
            Worldwide Shipping
          </span>
        </div>
      </div>
    </div>
  );
};

export default RightColumn;
