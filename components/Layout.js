import React, { useContext, useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import { hamburgerMenu } from "../utils/variants";
import {
  Basket,
  Search,
  Favorite,
  Person,
  Logout,
  Burger,
} from "../public/icons";
import { Store } from "../utils/store";
const Layout = ({ children, title }) => {
  const { status } = useSession();
  const { state } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const widthSize = useMediaQuery({
    query: "(min-width:1024px)",
  });
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);
  useEffect(() => {
    if (widthSize) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [widthSize]);

  return (
    <>
      <Head>
        <title>{title ? title + " - Amazoon" : "Amazoon"}</title>
        <meta name="description" content="E-commerce" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="min-h-screen flex flex-col justify-between ">
        <header className="py-3">
          <nav className="px-8 flex flex-col items-center relative w-full md:px-24 lg:flex-row ">
            <motion.div
              initial="open"
              animate={isOpen ? "open" : "close"}
              variants={hamburgerMenu}
              className=" bg-white w-full py-4 px-6 flex flex-col absolute  -bottom-[65px] border-y lg:w-[45%] lg:p-0 lg:static lg:border-none   "
            >
              <Link
                href="/"
                className="w-full uppercase font-normal transition-all hover:text-yellow-c lg:font-medium lg:text-md lg:normal-case"
              >
                Home
              </Link>
            </motion.div>
            <div className="flex  justify-between items-center w-full lg:w-[55%]">
              <h1 className="text-4xl font-bold flex lg:justify-center ">
                Amazoon
              </h1>
              <div className="flex items-center justify-end">
                <div className="flex items-center  relative lg:m-2">
                  <input
                    type="text"
                    className="py-2 border-b hidden lg:block outline-none text-sm placeholder:text-xs"
                    placeholder="Search Products"
                  />
                  <Search className=" absolute right-0 text-lg transition-all hover:fill-yellow-c" />
                </div>
                <Link href="/favorite" className="p-2">
                  <Favorite className="text-2xl transition-all hover:fill-yellow-c" />
                </Link>
                <div className="relative">
                  {cartItemsCount > 0 && (
                    <span className="w-[18px] h-[18px] text-[11px] text-center bg-yellow-c text-white absolute left-1.5 top-1.5 rounded-[50%]">
                      {cartItemsCount}
                    </span>
                  )}
                  <Link
                    href={`${status === "authenticated" ? "/cart" : "/login"}`}
                    className="p-2"
                  >
                    <Basket className="text-2xl transition-all hover:fill-yellow-c" />
                  </Link>
                </div>
                <Link
                  href={`${status === "authenticated" ? "/profile" : "/login"}`}
                  className="p-2"
                >
                  <Person className="text-2xl transition-all hover:fill-yellow-c" />
                </Link>
                {status === "authenticated" && (
                  <Logout
                    onClick={() => signOut()}
                    className=" text-2xl transition-all cursor-pointer hidden lg:block hover:fill-yellow-c"
                  />
                )}
                <Burger
                  onClick={() => setIsOpen(!isOpen)}
                  className=" text-2xl transition-all cursor-pointer  lg:hidden  hover:fill-yellow-c"
                />
              </div>
            </div>
          </nav>
        </header>
        <main className=" font-Roboto overflow-hidden">{children}</main>
        <footer className="px-24 mt-10">
          <div className="flex flex-col text-center md:text-left gap-10 lg:gap-0 lg:flex-row justify-between text-sm py-10">
            <div>
              <h2>Amazoon</h2>
              <p className="text-gray-500 mt-2">
                Ullamco aliquip aliquip cillum incididunt laborum <br /> nulla
                anim sint excepteur proident commodo.
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <p className=" font-medium mb-2">COMPANY</p>
              <p className="hover:text-yellow-c transition-all cursor-pointer">
                About Us
              </p>
              <p className="hover:text-yellow-c transition-all cursor-pointer">
                Our Studio
              </p>
              <p className="hover:text-yellow-c transition-all cursor-pointer">
                Contact
              </p>
              <p className="hover:text-yellow-c transition-all cursor-pointer">
                Work with Us
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className=" font-medium mb-2">USEFUL</p>
              <p className="hover:text-yellow-c transition-all cursor-pointer">
                Help Center
              </p>
              <p className="hover:text-yellow-c transition-all cursor-pointer">
                Affiliate Programs
              </p>
              <p className="hover:text-yellow-c transition-all cursor-pointer">
                Services
              </p>
              <p className="hover:text-yellow-c transition-all cursor-pointer">
                Terms & Conditions
              </p>
            </div>
            <div>
              <p className="mb-4 font-medium">
                SIGNUP FOR THE LATEST NEWS & DEAL
              </p>
              <div className="flex w-full">
                <input
                  type="text"
                  placeholder="Your email address.."
                  className=" w-full border border-gray-400 py-3 px-4 placeholder:font-thin "
                />
                <button className="text-white bg-black border-y border-black p-3 transition-all hover:bg-yellow-c hover:border-yellow-c">
                  SUBSCRIBE
                </button>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <img
                  width="22"
                  height="22"
                  src="https://img.icons8.com/ios-glyphs/30/facebook-f.png"
                  alt="facebook-f"
                />
                <img
                  width="22"
                  height="22"
                  src="https://img.icons8.com/ios-glyphs/30/twitter--v1.png"
                  alt="twitter--v1"
                />
                <img
                  width="22"
                  height="22"
                  src="https://img.icons8.com/windows/32/pinterest-p.png"
                  alt="pinterest-p"
                />
                <img
                  width="22"
                  height="22"
                  src="https://img.icons8.com/ios/50/instagram-new--v1.png"
                  alt="instagram-new--v1"
                />
              </div>
            </div>
          </div>
          <div className="h-10 flex justify-center items-center text-sm border-t">
            <p>Copyright 2023 Amazoon</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
