import React, { useContext } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { sideCart, SideCartParent } from "../../utils/variants";
import { Store } from "../../utils/store";
import Image from "next/image";
import { Multiply } from "../../public/icons";
import SideCartItem from "./SideCartItem";

const SideCart = ({ showSideCart, setShowSideCart }) => {
  const router = useRouter();
  const { state,total } = useContext(Store);
  const { cart } = state;
  const subTotal = cart.cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  return (
    <motion.div
      initial="hidden"
      animate={showSideCart ? "visible" : "hidden"}
      variants={SideCartParent}
      className={`fixed z-20 justify-end right-0 top-0 w-screen h-screen bg-shadow flex`}
    >
      <motion.div
        variants={sideCart}
        className="w-[30%] relative z-30 h-screen bg-white py-8 px-12"
      >
        <div className="flex justify-end">
          <div
            onClick={() => setShowSideCart(false)}
            className="w-fit  cursor-pointer"
          >
            <Multiply className=" text-3xl text-gray-300 hover:fill-yellow-c" />
          </div>
        </div>
        <h4 className="my-5 font-bold text-gray-600">Shopping Cart</h4>
        <div className=" h-[50%] overflow-auto scrollbar-hide">
          {cart.cartItems.map((item) => (
            <SideCartItem
              item={item}
              image={item.image}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              key={item.slug}
            />
          ))}
        </div>
        <div className="flex justify-between my-6 text-gray-600 ">
          <p>Subtotal</p>
          <p>${total.toFixed(2)}</p>
        </div>
        <button onClick={() => router.push("/cart")} className=" black-button">
          VIEW CART
        </button>
        <br />
        <button
          onClick={() => router.push("/shipping")}
          className=" black-button mt-2"
        >
          CHECK OUT
        </button>
      </motion.div>
    </motion.div>
  );
};

// export default SideCart;
export default dynamic(() => Promise.resolve(SideCart), { ssr: false });
