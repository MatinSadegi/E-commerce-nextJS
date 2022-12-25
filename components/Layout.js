import React, { useContext } from "react";
import Link from "next/link";
import Head from "next/head";
import { Basket, Search, Favorite, Person } from "../public/icons";
import { Store } from "../utils/store";

const Layout = ({ children, title }) => {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <>
      <Head>
        <title>{title ? title + " - Amazoon" : "Amazoon"}</title>
        <meta name="description" content="E-commerce" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"/> 
      </Head>
      <div className="min-h-screen flex flex-col justify-between ">
        <header className="mb-4">
          <nav className="h-20 max-w-[90%] mx-auto grid grid-cols-3 items-center  ">
            <div>
              <Link
                href="/"
                className="font-medium text-sm transition-all hover:text-yellow-c"
              >
                Home
              </Link>
            </div>

            <h1 className="text-2xl font-bold flex justify-center ">Amazoon</h1>
            <div className="flex items-center justify-end">
              <div className="flex items-center  relative m-2">
                <input
                  type="text"
                  className="py-2 border-b outline-none text-sm placeholder:text-xs"
                  placeholder="Search Products"
                />
                <Search className=" absolute right-0  text-lg transition-all hover:fill-yellow-c" />
              </div>
              <Link href="/favorite" className="p-2">
                <Favorite className="text-xl transition-all hover:fill-yellow-c" />
              </Link>
              <div className="relative">
                {cart.cartItems.length > 0 && (
                  <span className=" w-[18px] h-[18px] text-[11px] text-center bg-yellow-c text-white flex justify-center items-center absolute left-1.5 top-1.5 rounded-[50%]">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </span>
                )}

                <Link href="/cart" className="p-2">
                  <Basket className="text-xl transition-all hover:fill-yellow-c" />
                </Link>
              </div>
              <Link href="/login" className="p-2">
                <Person className="text-xl transition-all hover:fill-yellow-c" />
              </Link>
            </div>
          </nav>
        </header>
        <main className=" font-Roboto">{children}</main>
        <footer className="h-10 flex justify-center items-center shadow-inner">
          <p>Copyright 2023 Amazoon</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
