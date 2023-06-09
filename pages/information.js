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
    <div className="w-full h-screen bg-red-100 flex">
      <div className="w-1/2 flex justify-end pt-14 h-screen bg-white pr-14 ">
        <div className=" max-w-[70%] ">
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
