import React, { useState, useEffect, useContext } from "react";
import { Store } from "../../utils/store";
import Image from "next/image";
import { motion } from "framer-motion";
import { Basket2, UpArrow, DownArrow } from "../../public/icons";
import { summary } from "../../utils/variants";

const ShippingCart = () => {
  const [cItems, setCItems] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const { state,total } = useContext(Store);
  const { cart } = state;
  useEffect(() => {
    setCItems(cart.cartItems);
    setSubTotal(total.toFixed(2));
  }, [cart.cartItems , total]);

  return (
    <div className="order-first bg-gray-50 flex flex-col items-center justify-center  lg:w-1/2  lg:order-last lg:pb-0 lg:items-start lg:justify-start lg:pt-14">
      <div
        onClick={() => setShowSummary(!showSummary)}
        className=" bg-gray-100 z-10 flex justify-center w-full py-6 lg:hidden"
      >
        <div className="w-[600px] px-6 flex justify-between items-center lg:w-[70%]">
          <div className="flex items-center gap-2">
            <Basket2 className="text-2xl" />
            <p className=" text-blue-600 text-sm">
              {showSummary ? "Hide" : "Show"} order summary
            </p>
            {showSummary ? <UpArrow className="text-xs" /> : <DownArrow />}
          </div>
          <p>${subTotal}</p>
        </div>
      </div>

      <motion.div
        initial="show"
        animate={showSummary ? "show" : "hide"}
        variants={summary}
        className=" w-full overflow-hidden lg:h-full lg:py-0 lg:overflow-visible"
      >
        <div className="max-w-[600px] lg:w-[70%] mx-auto px-6 py-8 lg:px-14 lg:py-0 lg:m-0 ">
          {cItems.map((item) => (
            <div
              key={item.slug}
              className=" w-full flex items-center justify-between mb-4 lg:justify-between"
            >
              <div className="flex items-center">
                <div className="relative">
                  <Image
                    className="rounded"
                    src={item.image}
                    width={60}
                    height={90}
                    alt={item.name}
                  />
                  <span className="w-5 h-5 pb-0.5 flex justify-center items-center bg-black text-white text-xs rounded-full absolute -top-2 -right-2 ">
                    {item.quantity}
                  </span>
                </div>
                <p className="pl-8 font-medium  text-sm">{item.name}</p>
              </div>
              <p className=" text-sm">${item.price.toFixed(2)}</p>
            </div>
          ))}
          <div className="my-8 text-xs border-y  py-4 border-black">
            <div className="flex justify-between items-center ">
              <p>Subtotal</p>
              <p className="font-medium">${subTotal}</p>
            </div>
            <div className="flex justify-between items-center mt-2 ">
              <p>Shipping</p>
              <p>Calculated at next step </p>
            </div>
          </div>
          <div className="flex justify-between items-center font-medium">
            <p className="text-lg">Total</p>
            <p>${subTotal}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ShippingCart;
