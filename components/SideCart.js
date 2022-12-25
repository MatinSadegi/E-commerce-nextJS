import React, { useContext } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { sideCart, SideCartParent } from "../utils/variants";
import { Store } from "../utils/store";
import Image from "next/image";
import { Multiply } from "../public/icons";

const SideCart = ({ showSideCart, setShowSideCart }) => {
  const router = useRouter();
  const { state } = useContext(Store);
  const { cart } = state;
  const subTotal = cart.cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  return (
    <motion.div
      initial="hidden"
      animate={showSideCart ? "visible" : "hidden"}
      variants={SideCartParent}
      className={`fixed justify-end right-0 top-0 w-screen h-screen bg-shadow flex`}
    >
      <motion.div
        variants={sideCart}
        className="w-[25%] relative z-30 h-screen bg-white p-10"
      >
        <div className="flex justify-end">
          <div
            onClick={() => setShowSideCart(false)}
            className="w-fit cursor-pointer"
          >
            <Multiply className=" text-3xl text-gray-300 hover:fill-yellow-c" />
          </div>
        </div>
        <h4 className="my-6 font-bold text-gray-600">Shopping Cart</h4>
        {cart.cartItems.map((item) => (
          <div className="flex " key={item.slug}>
            <Image src={item.image} width={70} height={90} alt="product" />
            <div className="ml-6">
              <p className=" text-gray-600  mb-1 transition-all cursor-pointer hover:text-yellow-c">
                {item.name}
              </p>
              <p>
                {item.quantity} <span>&#215;</span> ${item.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
        <div className="flex justify-between my-6 text-gray-600">
          <p>Subtotal</p>
          <p>${subTotal.toFixed(2)}</p>
        </div>
        <button
          onClick={() => router.push("/cart")}
          className="w-full bg-black text-white font-medium text-sm py-3 mb-2 transition-all hover:bg-yellow-c"
        >
          VIEW CART
        </button>
        <br />
        <button
          onClick={() => router.push("/shipping")}
          className="w-full bg-black text-white font-medium text-sm py-3 transition-all hover:bg-yellow-c"
        >
          CHECK OUT
        </button>
      </motion.div>
    </motion.div>
  );
};

export default SideCart;
