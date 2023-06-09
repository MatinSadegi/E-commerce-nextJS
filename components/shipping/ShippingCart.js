import React, { useState, useEffect, useContext } from "react";
import { Store } from "../../utils/store";
import Image from "next/image";

const ShippingCart = () => {
  const [cItems, setCItems] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const { state, dispatch, total } = useContext(Store);
  const { cart } = state;
  useEffect(() => {
    setCItems(cart.cartItems);
    setSubTotal(total.toFixed(2));
  }, [cart.cartItems]);

  return (
    <div className="w-1/2 flex justify-start pt-14 h-screen bg-gray-100 pl-14">
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
  );
};

export default ShippingCart;
