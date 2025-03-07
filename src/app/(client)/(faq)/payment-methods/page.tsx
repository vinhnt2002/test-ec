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
          <h1 className="text-3xl font-bold text-[#19124f]">Payment Methods</h1>
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
          <p className="text-xl font-semibold text-gray-900">
            1. Payment Methods
          </p>
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Payment methods
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Country
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Visa, Mastercard and American Express (credit/debit cards and
                  prepaid cards - via Stripe)
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <a href="#" className="text-orange-500">
                    Worldwide See the list here
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Buy now, pay later: Afterpay/Affirm/Klarna (via Stripe)
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  United States*
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-orange-500">
                  PayPal
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <a href="#" className="text-orange-500">
                    See the list here
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Apple Pay, Google Pay (via Stripe)
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <a href="#" className="text-orange-500">
                    See the list here
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="italic">Notes:</p>
          <p>
            All of your online transactions must be associated with a billing
            address. Make sure that the billing address mentioned during your
            purchases corresponds to that of your credit card (as registered
            with your bank or other credit card issuer) or that associated with
            your prepaid card.
          </p>
          <p>
            *Currently, Buy Now Pay Later transaction is only available in the
            US. European customers will soon be able to use this form of
            payment. Please check further information about the Buy Now Pay
            Later transaction here.{" "}
          </p>
          <p>
            Payment options through Affirm are subject to eligibility, may not
            be available in all states, and are provided by these lending
            partners: affirm.com/lenders. CA residents: Loans by Affirm Loan
            Services, LLC are made or arranged pursuant to a California Finance
            Lenders Law license.
          </p>
          <p className="text-xl font-semibold text-gray-900">
            2. Secure Payment Guarantee
          </p>
          <p>
            a) If you want to order something in our online shop, it is
            necessary for the conclusion of the contract that you give us the
            personal data we need to process the order. The mandatory data
            required to process the contract is marked as such; all other data
            you provide is voluntary. You can either enter your data only once
            for the order or use your email address to set up a
            password-protected user account with us, in which your data can be
            stored for later purchases until you revoke your consent. You can
            deactivate or delete the data and the user account at any time via
            the account.
          </p>
          <p>
            To prevent unauthorised access to your personal data by third
            parties, the order process is encrypted using TLS technology.
          </p>
          <p>
            When we process the data provided by you to process your order, this
            includes, for example, individual customer service. In the course of
            order processing, we pass on personal data to one of our third-party
            production companies within the group, to a shipping company
            commissioned by the production companies.
          </p>
          <p>
            Payment via PayPal is processed by PayPal (Europe) S.à r.l. et Cie,
            S.C.A., 22-24 Boulevard Royal, L-2449 Luxembourg (“PayPal”). For
            information about data protection at PayPal, please refer to
            PayPal’s privacy policy Here.{" "}
          </p>
          <p>
            Payment via Stripe is processed by Stripe, 354 Oyster Point Blvd
            South San Francisco, CA 94080 United States (“Stripe”). For
            information about data protection at Stripe, please refer to
            Stripe’s privacy policy: https://stripe.com/fr-us/privacy.
          </p>
          <p>
            In the case of trackable parcels, we also pass on your order and
            address data to Printify Inc, 108 West 13th Street, Wilmington,
            Delaware, 19801, to make it possible to track your parcel and to
            inform you about delivery deviations or delays, for example.
          </p>
          <p>
            The legal bases for the processing of personal data as part of order
            processing are Art. 6(1) Sentences 1(b) and (f) GDPR. Due to
            commercial and tax regulations, we are obliged to store your order,
            address and payment data for a period of ten years.
          </p>
          <p>
            b) During the order process we also conduct a fraud prevention check
            via our payment gateway Stripe, which involves using your IP address
            to carry out a geolocalisation and compare your data with previous
            experience. This may mean that an order cannot be placed with the
            selected payment method. Our aim in this regard is to prevent any
            abuse of your chosen payment method by third parties and to protect
            ourselves from payment defaults. The legal basis for the processing
            is Art. 6(1) Sentence 1(f) GDPR.
          </p>
          <p>
            Since this involves automated decision-making, you have the right to
            challenge the decision (in this case the refusal of a certain
            payment method) and have the decision reviewed by a person. In such
            cases we ask that you contact us using the contact details mentioned
            in Section 1. Please note that the payment method may have been
            rejected due to a typing error and you should, therefore, check what
            you have entered again during the order process if necessary.
          </p>
          <p>
            c) During the ordering process we use Google Maps Autocomplete, a
            service of Google LLC (“Google”). This allows an address you start
            typing to be completed automatically, avoiding delivery errors.
            Google sometimes conducts a geolocalisation using your IP address
            and receives the information that you have retrieved the
            corresponding subpage of our website. In addition, the data referred
            to in Section 2.1 is transmitted. This is regardless of whether you
            have a Google account and are logged in. Once you are logged in to
            your Google Account, the information will be directly associated
            with your account. If you do not want this assignment to occur, you
            must log out before entering your address. Google stores your data
            as user profiles and uses it (even in the case of users who are not
            logged in) for the purposes of advertising, market research and/or
            the needs-oriented design of its own website. Google also processes
            your personal data in the USA and has subjected itself to the EU-US
            Privacy Shield (https://www.privacyshield.gov/EU-US-Framework). You
            can object to Google creating such user profiles. For more
            information about the purpose and scope of data processing by Google
            and about protecting your privacy, please refer to Google’s Privacy
            Policy: https://policies.google.com/privacy?hl=en. The binding terms
            of use for Google Maps/Google Earth can be found here:
            https://www.google.com/intl/en_US/help/terms_maps.html. Third-party
            provider information: Google LLC, 1600 Amphitheatre Parkway,
            Mountain View, CA 94043, USA.
          </p>
          <p>
            The legal basis for the processing is Art. 6(1) Sentence 1(f) GDPR.
          </p>
          <p>
            d) After you place an order, we will process your order and address
            data to send you a personalised email asking you to rate our
            products. By obtaining ratings, our aim is to improve our services
            and adapt them to our customers’ wishes. We use the feedback
            software of Trustpilot Ltd, 5th Floor, The Minster Building, 21
            Mincing Ln., London EC3R 7AG, United Kingdom (“Trustpilot”). For the
            purpose of sending the feedback email (and in the event that a
            moderation or conciliation procedure is conducted via Trustpilot
            following negative feedback), we pass on your email address, name,
            order number, product types and a unique ID to Trustpilot for
            identification purposes and in order to generate a feedback link.
          </p>
          <p>
            The legal basis for the processing is Art. 6(1) Sentence 1(f) GDPR.
            If you no longer want your data to be used for this purpose, you can
            object to this at any time. Just click on the unsubscribe link
            included with each email or send a message using the contact details
            provided under Section 1.
          </p>
          <p>
            e) We also use Google Customer Reviews, a service of Google Ireland
            Ltd. (“Google”), through which we receive feedback about us as a
            seller and about our products. This allows us to improve our
            services and adapt them to our customers’ wishes. The legal basis is
            Art. 6(1) Sentence 1(f) GDPR. After placing an order, you can give
            Google permission to use your email address to request a review. In
            the event that data is also transferred to a Google server in the
            USA, Google LLC has subjected itself to the EU-US Privacy Shield
            (https://www.privacyshield.gov/EU-US-Framework/). You can revoke
            your consent to the use of your data at any time by clicking on the
            unsubscribe link contained in the emails from Google. For more
            detailed information about the purpose and scope of data processing
            by Google and about protecting your privacy, please refer to
            Google’s Privacy Policy: https://policies.google.com/privacy?hl=en.
            Third-party provider information: Google Dublin, Google Ireland
            Ltd., Gordon House, Barrow Street, Dublin 4, Ireland, fax: + 353 (1)
            436 1001.
          </p>
          <p>
            By making a transaction you agree to our Privacy Policy and Terms of
            Service.
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
