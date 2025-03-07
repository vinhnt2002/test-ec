import React from "react";
import { HelpCircle, AlertTriangle } from "lucide-react";
import shipped from "@/assets/images/product-detail/shipped.svg";
import refresh from "@/assets/images/product-detail/refresh.svg";
import Image from "next/image";

const ShippingAndPolicies = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
        Shipping and Return Policies
      </h3>

      <div className="space-y-4">
        <div className="flex items-start space-x-4 p-3 bg-gray-50 rounded-md">
          <Image
            src={shipped}
            alt="shipped"
            width={40}
            height={40}
            className="mt-1"
          />
          <div>
            <h4 className="font-medium text-gray-900">Deliver to Viet Nam</h4>
            <p className="text-gray-600 text-sm">
              Standard Delivery: Mar. 20 - Apr. 16
            </p>
            <p className="text-gray-600 text-sm">
              Ready To Ship: 1 business day
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4 p-3 bg-gray-50 rounded-md">
          <Image
            src={refresh}
            alt="refresh"
            width={40}
            height={40}
            className="mt-1"
          />
          <div>
            <h4 className="font-medium text-gray-900">  Good quality</h4>
            <p className="text-gray-600 text-sm">
              Our products are crafted with high-quality materials, ensuring
              durability and customer satisfaction.
            </p>
          </div>
        </div>

        {/* <div className="flex items-center bg-blue-50 p-3 rounded-md">
          <HelpCircle className="mr-3 text-blue-600 flex-shrink-0" size={24} />
          <p className="text-sm text-gray-700">
            Having trouble?{" "}
            <a href="#" className="text-blue-700 font-medium hover:underline">
              Submit a ticket
            </a>{" "}
            and we will get back to you!
          </p>
        </div> */}

        <div className="flex items-center bg-red-50 p-3 rounded-md">
          <AlertTriangle
            className="mr-3 text-red-600 flex-shrink-0"
            size={24}
          />
          <p className="text-sm text-gray-700">
            Want to report this product?{" "}
            <a href="#" className="text-red-700 font-medium hover:underline">
              Click here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingAndPolicies;
