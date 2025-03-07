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

const ShippingPage: React.FC = () => {
  return (
    <>
      <div>
        <div className="">
          <h1 className="text-3xl font-bold text-[#19124f]">Payment Methods</h1>
          <div className="flex justify-between items-center mb-4">
            <div>
              <div className="text-gray-600 text-sm flex items-center gap-2">
                <FaClock /> Mar, 18 2021 <FaFolder />
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

        <div className="mt-4 flex flex-col gap-3">
          <p>Explaining the time of shipping and delivery time for customers</p>
          <p className="text-xl font-semibold text-gray-900">
            How long will it take for the buyer to receive their order?
          </p>
          <p>
            Your product will go into the handling process shortly after your
            order has been submitted.
          </p>
          <p>
            To estimate when you can expect your order, kindly consider these
            factors when calculating the Estimated Delivery Date applied in
            Regular seasons:
          </p>
          <p>– Handling time:</p>
          <p>
            + After your payment is authorized and verified, your order will go
            into the handling process and this process often takes 1 – 7 days
            depending on which product you purchase.
          </p>
          <p>– Transit Time:</p>
          <p>
            + After the handling process is completed, your order will be
            shipped out and it will take a few more days to arrive at your
            address. The estimated shipping time is listed below for each
            shipping method.
          </p>
          {/* Table 1 */}
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2" rowSpan={2}>
                  Product
                </th>
                <th className="border border-gray-300 px-4 py-2" colSpan={2}>
                  Standard Shipping (business days)
                </th>
                <th className="border border-gray-300 px-4 py-2" colSpan={2}>
                  Premium Delivery (business days)
                </th>
                <th className="border border-gray-300 px-4 py-2" colSpan={2}>
                  Express Delivery (business days)
                </th>
              </tr>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">
                  Handling Time
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Transit time
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Handling Time
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Transit time
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Handling Time
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Transit time
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "2D Apparel",
                  "1 - 5",
                  "2 - 7",
                  "1 - 5",
                  "2 - 5",
                  "1 - 4",
                  "2 - 3",
                ],
                ["Mugs", "1 - 5", "2 - 9", "1 - 5", "2 - 7", "1 - 4", "2 - 5"],
                [
                  "3D Hoodies",
                  "1 - 5",
                  "4 - 12",
                  "1 - 5",
                  "4 - 7",
                  "1 - 4",
                  "2 - 5",
                ],
                ["Hats", "1 - 5", "4 - 12", "1 - 5", "4 - 7", "1 - 4", "2 - 5"],
                [
                  "Fleece Blankets",
                  "1 - 5",
                  "4 - 12",
                  "1 - 5",
                  "4 - 7",
                  "1 - 4",
                  "2 - 5",
                ],
                [
                  "Wooden",
                  "1 - 5",
                  "4 - 12",
                  "not available",
                  "not available",
                  "not available",
                  "not available",
                ],
                [
                  "Pillows",
                  "1 - 5",
                  "4 - 12",
                  "1 - 5",
                  "4 - 7",
                  "1 - 4",
                  "2 - 5",
                ],
              ].map((row, index) => (
                <tr key={index} className="border border-gray-300">
                  {row.map((cell, idx) => (
                    <td
                      key={idx}
                      className="border border-gray-300 px-4 py-2 text-center"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p>*Please note:</p>
          <p>
            Holiday and peak seasons: Due to certain US and International
            Holidays, especially in peak seasons, it may take additional 7 days
            for both domestic and international delivery.
          </p>
          <p>
            3D items, flags, and some facemasks will take up to 45 days to
            deliver.
          </p>
          <p className="text-xl font-semibold text-gray-900">
            How Can I Track My Order?
          </p>
          <p>
            You will receive a confirmation email with a tracking link so that
            you can follow your order all the way home! Please allow 5 – 7 days
            for the carrier to scan your package into their system.
          </p>
          <p>
            If you attempt to track your package and there is no information
            available that just means the carrier has not processed your parcel
            yet. When the parcel is scanned into the system, tracking events
            will populate on the tracking page.
          </p>
          <p>
            If it is over your estimated arrival date, and your order falls into
            one of these cases, please contact our support team for further
            assistance:
          </p>
          <p>
            – Your US domestic order with Standard shipping is still in transit
            after 10 business days from the shipped date.
          </p>
          <p>
            – Your US domestic order with Express shipping is still in transit
            after 06 business days from the shipped date or tracking does not
            update after 06 business days.
          </p>
          <p>
            – Your International order is still in transit after 4 weeks from
            the shipped date.
          </p>
          <p>For International Orders</p>
          <p>
            It depends on the destination country that the receiver would
            receive an announcement via letter, email, call from Customs or
            courier services. The payment value depends on the total value of
            the package and varies by country.
          </p>
          <p className="text-xl font-semibold text-gray-900">Order in queue</p>
          <p>
            After your payment has posted, your order will go into a waiting
            queue for 4 hours before being sent to a fulfiller. During these 4
            hours, you can change the order detail (change size, color,
            quantity) or cancel the order.
          </p>
          <p className="text-xl font-semibold text-gray-900">
            Shipping times and costs
          </p>
          <p>Orders shipping within the USA</p>
          <p>Shipping costs & times</p>
          <table className="min-w-full border-collapse table-auto">
            <thead>
              <tr>
                <th className="border p-2 text-left">Merch</th>
                <th className="border p-2 text-left">Amt</th>
                <th className="border p-2 text-left">
                  Standard (3-12 business days)
                </th>
                <th className="border p-2 text-left">
                  Premium (3-10 business days)
                </th>
                <th className="border p-2 text-left">
                  Express (3-7 business days)
                </th>
              </tr>
            </thead>
            <tbody>
              {/* T shirts */}
              <tr>
                <td className="border p-2">T shirts</td>
                <td className="border p-2">1st</td>
                <td className="border p-2">$4.9</td>
                <td className="border p-2">$12.99</td>
                <td className="border p-2">$28.99</td>
              </tr>
              <tr>
                <td className="border p-2" />
                <td className="border p-2">adding item</td>
                <td className="border p-2">$1</td>
                <td className="border p-2">$2</td>
                <td className="border p-2">$2</td>
              </tr>
              {/* Tank tops */}
              <tr>
                <td className="border p-2">Tank tops</td>
                <td className="border p-2">1st</td>
                <td className="border p-2">$5.99</td>
                <td className="border p-2">$12.99</td>
                <td className="border p-2">$28.99</td>
              </tr>
              <tr>
                <td className="border p-2" />
                <td className="border p-2">adding item</td>
                <td className="border p-2">$1</td>
                <td className="border p-2">$2</td>
                <td className="border p-2">$2</td>
              </tr>
              {/* Long sleeves */}
              <tr>
                <td className="border p-2">Long sleeves</td>
                <td className="border p-2">1st</td>
                <td className="border p-2">$6.99</td>
                <td className="border p-2">$13.99</td>
                <td className="border p-2">$28.99</td>
              </tr>
              <tr>
                <td className="border p-2" />
                <td className="border p-2">adding item</td>
                <td className="border p-2">$1</td>
                <td className="border p-2">$2</td>
                <td className="border p-2">$2</td>
              </tr>
              {/* Hoodies */}
              <tr>
                <td className="border p-2">Hoodies</td>
                <td className="border p-2">1st</td>
                <td className="border p-2">$9.99</td>
                <td className="border p-2">$13.99</td>
                <td className="border p-2">$28.99</td>
              </tr>
              <tr>
                <td className="border p-2" />
                <td className="border p-2">adding item</td>
                <td className="border p-2">$1</td>
                <td className="border p-2">$2</td>
                <td className="border p-2">$2</td>
              </tr>
              {/* Mugs */}
              <tr>
                <td className="border p-2">Mugs</td>
                <td className="border p-2">1st</td>
                <td className="border p-2">$6.99</td>
                <td className="border p-2">$10.99</td>
                <td className="border p-2">-</td>
              </tr>
              <tr>
                <td className="border p-2" />
                <td className="border p-2">adding item</td>
                <td className="border p-2">$1</td>
                <td className="border p-2">$3</td>
                <td className="border p-2">-</td>
              </tr>
              {/* Hats */}
              <tr>
                <td className="border p-2">Hats</td>
                <td className="border p-2">1st</td>
                <td className="border p-2">$6.99</td>
                <td className="border p-2">$10.99</td>
                <td className="border p-2">-</td>
              </tr>
              <tr>
                <td className="border p-2" />
                <td className="border p-2">adding item</td>
                <td className="border p-2">$1</td>
                <td className="border p-2">$2</td>
                <td className="border p-2">-</td>
              </tr>
              {/* Stickers */}
              <tr>
                <td className="border p-2">Stickers</td>
                <td className="border p-2">1st</td>
                <td className="border p-2">$5.99</td>
                <td className="border p-2">$8.99</td>
                <td className="border p-2">$28.99</td>
              </tr>
              <tr>
                <td className="border p-2" />
                <td className="border p-2">adding item</td>
                <td className="border p-2">$0</td>
                <td className="border p-2">$1</td>
                <td className="border p-2">$2</td>
              </tr>
            </tbody>
          </table>
          <p>
            *Shipping to Alaska, Hawaii, Puerto Rico, and unincorporated
            territories of the United States can take an additional 7 – 12
            business days.
          </p>
          <p>
            *Shipping fee may be different depending on the location you choose
            for the parcel.
          </p>
          <p>*Note</p>
          <p>
            Shipping costs for international orders shipped to countries outside
            the US will vary depending on the customer&apos;s delivery address.
          </p>
          <p>All shipping estimates include handling and transit time.</p>
          <p>
            To get an accurate price quote for shipping, please add the items
            you want to your cart and proceed to checkout, then select your
            shipping destination country from the checkout&apos;s drop-down
            menu.
          </p>
          <p>
            All shipments are provided with a tracking link. Please feel free to
            follow the tracking link to check your delivery status.
          </p>
          <p className="text-xl font-semibold text-gray-900">
            What is the handling fee?
          </p>
          <p>Handling fee: 7%</p>
          <p>
            Handling fee is the fulfillment fee. This is the fee you pay to
            process an order.
          </p>
          <p className="text-xl font-semibold text-gray-900">
            Can I ship the order to multiple addresses?
          </p>
          <p>
            Fulfillers ship only to single destination shipping. If you wish to
            ship to multiple locations, please order separately with separate
            addresses.
          </p>
          <p className="text-xl font-semibold text-gray-900">
            Can I ship to a PO box or Military APO/ FPO?
          </p>
          <p>
            You can have your order shipped to PO boxes and military APO/ FPO.
          </p>
          <p>
            Shipment to APOs can take up to 40-45 days to be delivered. Please
            note that once your parcel has entered the army area, we will not be
            able to update the status of shipping for security reasons.
          </p>
          <p>*Only available for POX box or Military APO/FPO within US.</p>
          <p className="text-xl font-semibold text-gray-900">
            VAT taxes will be charged?
          </p>
          <p>
            We do not collect any tax for international shipping. All taxes and
            duties fees are the responsibility of the receiver.
          </p>
          <p>
            The VAT charges may be vary according to the country. We recommend
            contacting your local custom officer for more information.
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

export default ShippingPage;
