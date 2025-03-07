import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
  FaClock,
  FaFolder,
} from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";

const FAQPage: React.FC = () => {
  return (
    <>
      <div>
        <div className="">
          <h1 className="text-3xl font-bold text-[#19124f]">FAQs</h1>
          <div className="flex justify-between items-center mb-4">
            <div>
              <div className="text-gray-600 text-sm flex items-center gap-2">
                <FaClock /> Apr, 26 2021 <FaFolder />
                <span className="text-blue-900">Printalk</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <FaFacebook className="w-6 h-6 text-blue-600" />
              <FaInstagram className="w-6 h-6 text-orange-500" />
              <FaTwitter className="w-6 h-6 text-blue-400" />
              <FaLinkedin className="w-6 h-6 text-blue-700" />
              <FaPinterest className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>
        <span className="text-gray-600">Frequently Asked Questions</span>
        <div className="bg-orange-50 rounded-lg p-2 mb-4">
          <span className="text-gray-700">Tab Contents</span>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-bold text-gray-900">
            1. How do I place an order?
          </h2>
          <p>You can carry out the following steps to complete your order:</p>
          <ul className="list-decimal ml-4 text-black">
            <li>Step 1: Choose your style on the product page</li>
            <li>Step 2: Adjust the quantity of product</li>
            <li>Step 3: Click the “Add To Cart” button</li>
            <li>
              Step 4: Process payment and apply a discount code (if you have) to
              complete purchasing
            </li>
            <li>
              Step 5: Receive your confirmation email/message when your order is
              successful
            </li>
          </ul>
          <p className="text-black mt-2">
            If you need any further assistance, please contact us via email:
            support@printerval.com
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-bold text-gray-900">
            2. Where does your order ship from?
          </h2>
          <p className="text-black">
            Orders are shipped with USPS, FedEx, or Canada Post. Most orders
            placed within the US will be shipped from the facilities in the US*.
            For international orders, in Canada, Australia, Europe, and more to
            ensure you can get your order shipped from the facilities within
            your country (or the nearest facilities) Fulfillers strive to ensure
            you get your order as soon as possible in the highest quality.
          </p>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-bold text-gray-900">
            3. What is the shipping cost?
          </h2>
          <p className="text-black">
            Shipping times and costs can be varied based on the items you put on
            your virtual shopping bag. You can check the detail here. Or see the
            estimated shipping fees and times at the checkout.
          </p>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-bold text-gray-900">
            4. How long will it take to ship my order?
          </h2>
          <p className="text-black">
            Please check shipping times and cost here.
          </p>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-bold text-gray-900">
            5. What is the status of my order?
          </h2>
          <p className="text-black">You can keep track of your order here.</p>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-bold text-gray-900">
            6. My orders are past the estimated delivery time.
          </h2>
          <p className="text-black">
            Orders typically ship within 1-5 days once you have submitted your
            order. Once your order has been shipped you can expect it to arrive
            within 2-15 days. International orders may take an additional 1-2
            weeks. If your order has not arrived within the times stated above,
            please contact customer service here. You can keep track of your
            order at any time here.
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-bold text-gray-900">
            7. Why is my tracking information not working?
          </h2>
          <p className="text-black">
            Please note that tracking information updates once the order ships
            and has been picked up and scanned by the postal courier. If you
            placed your order over 21 days ago and your tracking information is
            still not available please contact customer support here.
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-bold text-gray-900">
            8. Changes to order.
          </h2>
          <p className="text-black">
            Order changes have to be made within 4 hours of first placing the
            order. If your order is eligible you can request changes here.
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-bold text-gray-900">
            9. Order cancellation.
          </h2>
          <p className="text-black">
            Order cancellations must be made within 4 hours after the order has
            been placed. If your order qualifies you can request cancellation
            here.
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-bold text-gray-900">
            10. Refund or Exchange.
          </h2>
          <p className="text-black">
            If your item is missing, materially defective, or incorrect please
            contact us here.
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-bold text-gray-900">
            11. Didn&apos;t Receive Confirmation Email.
          </h2>
          <p className="text-black">
            When an order is placed email is sent to you with your receipt. This
            email (the confirmation email) also contains your order details. If
            you did not receive your confirmation email please follow these
            steps: Check your spam folder and other email accounts, especially
            if you checked out with PayPal. If these don&apos;t work, please
            here and contact us.
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-bold text-gray-900">12. Size Guide</h2>
          <p className="text-black">
            Please check the sizing guide for all of the sizing information on
            different brands and products here.
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-bold text-gray-900">
            13. Will I be charged VAT taxes?
          </h2>
          <p className="text-black">
            Items shipping internationally from the US are shipped DDU
            (Delivered Duty Unpaid) and we do not collect VAT (Value Added
            Taxes). All taxes, duties, and customs fees are the responsibility
            of the recipient of the package. Depending on the receiving country,
            your package may incur local customs or VAT charges. We recommend
            contacting your local customs office for more information regarding
            your country&apos;s customs policies. Besides, we do not charge any
            other taxes on the orders.
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-bold text-gray-900">
            14. How secure is my personal information?.
          </h2>
          <p className="text-black">
            Printerval Store adheres to the highest industry standards to
            protect your personal information when you checkout and purchase
            from our online store. Your credit card information is encrypted
            during transmission using secure socket layer (SSL) technology,
            which is widely used on the Internet for processing payments. Your
            credit card information is only used to complete the requested
            transaction and is not subsequently stored. If you need any further
            assistance, please contact us via email: support@printerval.com
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-bold text-gray-900">
            15. How do I contact customer support?
          </h2>
          <p className="text-black">
            We are glad to answer any questions that you may have, please
            contact customer support here.{" "}
          </p>
        </div>
      </div>

      <div className="border border-gray-300 p-4 mt-4">
        <div className="flex items-center justify-between pb-4">
          <p>Share userfil infomation</p>
          <p>Like and interested in Printerval</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <FaFacebook className="w-6 h-6 text-blue-600" />
            <FaInstagram className="w-6 h-6 text-orange-500" />
            <FaTwitter className="w-6 h-6 text-blue-400" />
            <FaLinkedin className="w-6 h-6 text-blue-700" />
            <FaPinterest className="w-6 h-6 text-red-600" />
          </div>
          <div className="flex items-center gap-2">
            <ImYoutube2 className="w-8 h-8 text-red-600" />
            <FaFacebook className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQPage;
