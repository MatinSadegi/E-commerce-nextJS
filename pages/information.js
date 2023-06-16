import React from "react";
import { useSession, signOut } from "next-auth/react";
import CheckoutWizard from "../components/CheckoutWizard";
import Image from "next/image";
import customer from "../public/icons/customer.png";
import ShippingAddress from "../components/shipping/ShippingAddress.js";
import ShippingCart from "../components/shipping/ShippingCart.js";

const Information = () => {
  const { data } = useSession();
  return (
    <div className="w-full h-screen flex flex-col lg:flex-row">
      <div className="w-full flex justify-center h-screen pt-8 pb-14 bg-white lg:w-1/2 lg:pr-14 lg:pt-14 lg:pb-0 lg:justify-end ">
        <div className=" w-[600px] px-6 lg:w-[70%] ">
          <CheckoutWizard currentStep={2} />
          <div className="my-8">
            <h4 className="font-medium">Contact Information</h4>
            <div className="mt-4 flex items-center">
              <Image className="w-12" src={customer} alt="profile" />
              <div>
                <p className=" text-sm">{data?.user.name.email}</p>
                <p
                  onClick={() => signOut()}
                  className="text-sky-500 text-sm cursor-pointer"
                >
                  Log out
                </p>
              </div>
            </div>
          </div>
          <ShippingAddress />
        </div>
      </div>
      <ShippingCart />
    </div>
  );
};

Information.auth = true;
export default Information;
