import React, { useContext, useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import CheckoutWizard from "../components/CheckoutWizard";
import Image from "next/image";
import customer from "../public/icons/customer.png";
import { Store } from "../utils/store";
import ShippingForm from "../components/ShippingForm";

const Shipping = () => {
  const { data } = useSession();
  const { state, dispatch, total } = useContext(Store);
  const { cart } = state;

  const [cItems, setCItems] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  useEffect(() => {
    setCItems(cart.cartItems);
    setSubTotal(total.toFixed(2));
  }, [cart.cartItems]);
  return (
    <div className="w-full h-screen bg-red-100 flex">
      <div className="w-1/2 flex justify-end pt-8 h-screen bg-white pr-14 ">
        <div className=" max-w-[70%] ">
          <CheckoutWizard />
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
          <ShippingForm />
        </div>
      </div>
      <div className="w-1/2 flex justify-start pt-8 h-screen bg-gray-100 pl-14">
        <div className=" max-w-[70%]">
          {cItems.map((item) => (
            <div key={item.slug} className="flex items-center mb-4 w-full">
              <div className="relative">
                <Image
                  className="rounded"
                  src={item.image}
                  width={60}
                  height={90}
                  alt={item.name}
                />
                <span className="w-5 h-5 pb-0.5 flex justify-center items-center bg-black text-white text-xs rounded-full absolute -top-2 -right-2">
                  {item.quantity}
                </span>
              </div>
              <p className="pl-4 pr-14 text-sm">{item.name}</p>
              <p className=" text-sm">${item.price.toFixed(2)}</p>
            </div>
          ))}
          <div className="my-8 text-xs border-y py-4 border-black">
            <div className="flex justify-between items-center ">
              <p className="">Subtotal</p>
              <p>$112.00</p>
            </div>
            <div className="flex justify-between items-center mt-2 ">
              <p className="">Shipping</p>
              <p>Calculated at next step </p>
            </div>
          </div>
          <div className="flex justify-between items-center font-medium">
            <p>Total</p>
            <p>${subTotal}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Shipping.auth = true;
export default Shipping;
