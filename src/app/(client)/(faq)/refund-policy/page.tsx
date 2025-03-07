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

const PaymentMethodsPage: React.FC = () => {
  return (
    <>
      <div>
        <div className="">
          <h1 className="text-3xl font-bold text-[#19124f]">Refund Policy</h1>
          <div className="flex justify-between items-center mb-4">
            <div>
              <div className="text-gray-600 text-sm flex items-center gap-2">
                <FaClock /> Sep, 29 2022 <FaFolder />
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
          <p>
            Printerval.com and most sellers on Printerval.com offer refunds for
            items within 30 days from the date of delivery. If there are any
            problems, please contact us here to submit your request.
          </p>
          <p>
            We always guarantee that you are satisfied with the orders that you
            have placed on the website Printerval.com. To guarantee your rights
            when placing the orders, please refer to our refund policy under the
            following conditions:
          </p>
          <p className="text-gray-900">
            1. The goods received are wrong/damaged/faulty
          </p>
          <p>
            We guarantee to assist with cases where customers receive the
            wrong/damaged/faulty items. Includes these cases:
          </p>
          <p>
            The product doesn’t match the description on the website: Wrong
            items, wrong material, wrong size.
          </p>
          <p>The product received is torn dirty, wet, hairy fabric.</p>
          <p>
            The product received has visible defects with the print, blurred, or
            out of place.
          </p>
          <p>
            Products are damaged, peeled prints after the first wash. Please
            contact the Customer Support Team to get further assistance within
            30 days of delivery. For orders over 30 days from the date of
            delivery, Printerval refuses to support claims regarding to these
            cases.
          </p>
          <p>Please provide us with the information below:</p>
          <p>Provide order information to confirm the order.</p>
          <p>Provide photos of the packaging label.</p>
          <p>Photos of the items and size tag/neck label in a frame.</p>
          <p>
            Photos of the items that clearly show the damaged/wrong/faulty part
            that is different from the description on the website.
          </p>
          <p>
            *NOTE: For order which has multiple items, please provide
            photos/videos of products that are put side by side lying on a flat
            surface.
          </p>
          <p>
            After we receive all the proofs above and confirm that the product
            are eligible for refund policy, you will receive a refund
            immediately to the account you used to make the payment for the
            order.
          </p>
          <p className="text-gray-900">
            2. The item is the wrong size from the one ordered
          </p>
          <p>
            We guarantee to assist with cases where customers receive the wrong
            size product. Specifically, these products have wrong measurements
            compared to the product’s size guide (A difference of over 1.5&quot;
            from standard product measurements).
          </p>
          <p>
            Please contact the Customer Support Team to get further assistance
            within 30 days since you receive the order. For orders over 30 days
            from the date of delivery, Printerval refuses to support claims
            regarding to these cases.
          </p>
          <p>Please provide us with the information below:</p>
          <p>Provide order information to confirm the order</p>
          <p>Photos of the items and size tag/neck label in a frame.</p>
          <p>
            Photos that clearly show the actual measurements of the items:
            width, length (Please use the measuring tape to do that).
          </p>
          <p>
            *NOTE: For order which has multiple items, please provide
            photos/videos of products that are put side by side lying on a flat
            surface.
          </p>
          <p>
            After we receive all the proofs above and confirm that the product
            measurements (unused) are different over 1.5&quot; from standard
            product measurements, You will receive a refund immediately to the
            account you used to make the payment for the order.
          </p>
          <p className="text-gray-900">3: Lost items</p>
          <p>
            We guarantee to assist with cases where your order is lost in the
            shipping process.
          </p>
          <p>
            As soon as the tracking reports are delivered, we will send you an
            email to confirm that you receive the correct items you ordered from
            our website.
          </p>
          <p>
            Please check mailbox, area security camera, ask your neighbors and
            contact the local post office to make sure that your order isn’t
            being held in somewhere you haven’t checked.
          </p>
          <p>
            Please contact our Customer Support Team immediately within 30 days
            of delivery if you haven’t received the package according to the
            email confirmation.
          </p>
          <p>Please provide us with the information below:</p>
          <p>Order’s information.</p>
          <p>Verified shipping address.</p>
          <p>
            Verified from your local post office that you haven’t received the
            package.
          </p>
          <p>
            After you send us all the necessary information, you will receive a
            refund immediately to the account you used to make the payment for
            the order.
          </p>
          <p>
            For orders over 30 days from the date of delivery, Printerval
            refuses to support claims regarding to these cases.
          </p>
          <p>NOTE: Order’s information includes:</p>
          <p>Order code:</p>
          <p>Shipping address</p>
          <p>
            Recipient’s information: Full name, Phone number, Email address.
          </p>
          <p className="text-gray-900">4: Cancellation</p>
          <p>
            After making your purchase, you have 4 hours to cancel the order.
            Please submit a cancellation request here, your order will be
            canceled and you will receive your money back to the card you used
            to make your payment. Once 4 hours have passed, Printerval refuses
            to support order cancellation or order modification requests.
          </p>
          <p>
            Above are all of our Refund policy, if you still have any questions
            regarding to refund policy, please contact Customer Support Team for
            shortly response and support.
          </p>
          <p>
            *Please kindly note, for all orders shipped outside the US, we will
            support all defective or unwanted orders within 60 days from the
            date of delivery.
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

export default PaymentMethodsPage;
