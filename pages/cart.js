import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { Store } from "../utils/store";
import Image from "next/image";
import Layout from "../components/Layout";

const Cart = () => {
  const { status } = useSession();
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cItems, setCItems] = useState([]);
  useEffect(() => {
    setCItems(cart.cartItems);
  }, [cart.cartItems]);

  const subTotal = cart.cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  const removeItemHandler = (item) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };
  const updateCartHandler = (item, qty) => {
    const quantity = +qty;
    dispatch({ type: "CART_ADD_ITEM", payload: { ...item, quantity } });
  };
  return (
    <Layout title="Shopping Cart">
      <div className="max-w-[75%] mx-auto flex flex-col justify-center items-center">
        <h1
          className={`font-bold ${
            cart.cartItems.length === 0 ? "text-5xl" : "text-3xl"
          }`}
        >
          Your Cart
        </h1>
        {cItems.length === 0 ? (
          <div>
            <p className="text-sm text-gray-500 py-5">
              Your cart is currently empty.
            </p>
            <button className="text-white text-xs bg-black py-3 px-8 rounded-full transition-all hover:bg-yellow-c">
              CONTINUE SHOPPING
            </button>
          </div>
        ) : (
          <div className="w-full mt-10">
            <div className="flex justify-between border-b py-5">
              <p className="font-medium text-gray-600 ">Product</p>
              <div className="flex w-[30%] justify-between">
                <p className="font-medium text-gray-600">Price</p>
                <p className="font-medium text-gray-600">Quantity</p>
                <p className="font-medium text-gray-600">Total</p>
              </div>
            </div>
            {cItems.map((item) => (
              <div
                className="flex justify-between border-b py-4"
                key={item.slug}
              >
                <div className="flex items-center">
                  <Image
                    src={item.image}
                    width={90}
                    height={90}
                    alt={item.name}
                  />
                  <div className="ml-10">
                    <p className=" text-gray-600 font-medium mb-1 transition-all cursor-pointer hover:text-yellow-c">
                      {item.name}
                    </p>
                    <button
                      onClick={() => removeItemHandler(item)}
                      className="bg-gray-600 text-white text-[10px] font-medium py-1 px-3 transition-all hover:bg-yellow-c"
                    >
                      REMOVE
                    </button>
                  </div>
                </div>
                <div className="flex w-[30%] justify-between items-center text-gray-600">
                  <p>${item.price.toFixed(2)}</p>
                  <input
                    type="number"
                    placeholder={item.quantity}
                    className="outline-none border border-gray-600 p-2 w-14"
                    min="0"
                    max={item.countInStock}
                    onChange={(e) => updateCartHandler(item, e.target.value)}
                  />
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
            <div className="my-14 flex flex-col items-end">
              <div className="flex gap-20 text-gray-600 font-medium">
                <p>Subtotal</p>
                <p>${subTotal.toFixed(2)}</p>
              </div>
              <p className="text-gray-600 text-sm my-4">
                Shipping & taxes calculated at checkout
              </p>
              <div className="flex gap-4">
                <button className="bg-gray-600 text-white text-xs py-3 px-5 transition-all hover:bg-yellow-c">
                  Continue shopping
                </button>
                <button className="bg-gray-600 text-white text-xs py-3 px-5 transition-all hover:bg-yellow-c">
                  Update
                </button>
                <button
                  onClick={() => {
                    router.push(
                      `${status === "authenticated" ? "/shipping" : "/login"}`
                    );
                  }}
                  className="bg-gray-600 text-white text-xs py-3 px-5 transition-all hover:bg-yellow-c"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
