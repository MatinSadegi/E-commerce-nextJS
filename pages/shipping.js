import { useContext } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Store } from "../utils/Store";
import dynamic from "next/dynamic";
import ShippingCart from "../components/shipping/ShippingCart";
import CheckoutWizard from "../components/CheckoutWizard";
import Link from "next/link";

const Shipping = () => {
  const { data } = useSession();
  const router = useRouter();
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
            <div className="flex items-center border-t pt-4">
              <p className="text-gray-500">Ship to</p>
              <p className="ml-16">{shippingInfo.address}</p>
              <Link
                href="/information"
                className="text-blue-500 absolute right-4"
              >
                Change
              </Link>
            </div>
          </div>
          <h4 className="text-lg font-semibold mb-4">Shipping Method</h4>
          <div className="p-4 bg-sky-50 rounded-md flex justify-between border border-sky-600">
            <p>Standard</p>
            <p className=" font-medium">Free</p>
          </div>
          <div className="mt-6 flex justify-between items-center">
            <Link href="/information" className=" text-blue-500 text-sm">
              &#60; &#160;Return to information
            </Link>
            <button
              className="blue-btn"
              onClick={() => router.push("/payment")}
            >
              Continue to payment
            </button>
          </div>
        </div>
      </div>
      <ShippingCart />
    </div>
  );
};
Shipping.auth = true;
export default dynamic(() => Promise.resolve(Shipping), { ssr: false });
