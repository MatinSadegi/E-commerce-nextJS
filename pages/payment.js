import React, { useContext } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Store } from "../utils/store";
import dynamic from "next/dynamic";
import CheckoutWizard from "../components/CheckoutWizard";
import ShippingCart from "../components/shipping/ShippingCart";

const payment = () => {
    const { data } = useSession();
    const { state } = useContext(Store);
    const { shippingInfo } = state.cart;
  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 flex justify-end pt-14 h-screen bg-white pr-14 ">
        <div className=" w-2/3 ">
          <CheckoutWizard currentStep={3} />
          <div className="border rounded-md w-full p-4 my-10 text-sm relative">
            <div className="flex items-center pb-4">
              <p className="text-gray-500">Contact</p>
              <p className="ml-16">{data?.user.email}</p>
              <Link
                href="/information"
                className="text-blue-500 absolute right-4"
              >
                Change
              </Link>
            </div>
            <div className="flex items-center border-y py-4">
              <p className="text-gray-500">Ship to</p>
              <p className="ml-16">{shippingInfo.address}</p>
              <Link
                href="/information"
                className="text-blue-500 absolute right-4"
              >
                Change
              </Link>
            </div>

            <div className="flex items-center  pt-4">
              <p className="text-gray-500">Method</p>
              <p className="ml-16">
                Standard.<span className="font-medium">Free</span>
              </p>
            </div>
          </div>
          <h4 className="text-lg font-semibold mb-1">Payment</h4>
          <p className="text-gray-500 text-sm">
            All transactions are secure and encrypted.
          </p>
          <div className="my-5 border  rounded-md flex flex-col items-center pt-8 pb-5">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/9ca3af/cash-in-hand.png"
              alt="cash-in-hand"
            />
            <p className="pt-3 text-sm">
              This store can’t accept payments right now.
            </p>
          </div>
          <div className="w-full text-right">
            <Link href="/shipping" className=" text-blue-500 text-sm">
              &#60; &#160;Return to shipping
            </Link>
          </div>
        </div>
      </div>
      <ShippingCart />
    </div>
  );
};
payment.auth =true;
export default dynamic(() => Promise.resolve(payment), { ssr: false });
