import Image, { StaticImageData } from "next/image";
import React from "react";
interface RewardBadgeProps {
  icon: StaticImageData;
  title: string;
  subtitle: string;
  isOrange?: boolean;
}
const RewardBadge = ({ icon, title, subtitle, isOrange }: RewardBadgeProps) => {
  return (
    <div className="flex items-center space-x-3 sm:space-x-4 bg-orange-50 rounded-full p-2 w-full sm:w-auto">
      <div className="bg-orange-50 rounded-full p-2">
        <Image
          src={icon}
          alt={title}
          width={44}
          height={44}
          priority
          quality={80}
          placeholder="blur"
        />
      </div>
      <div className="flex items-start flex-col">
        <h2 className="font-medium">{title}</h2>
        <span
          className={`text-sm ${
            isOrange ? "text-orange-500" : "text-gray-500"
          }`}
        >
          {subtitle}
        </span>
      </div>
    </div>
  );
};

export default RewardBadge;
