import React from "react";
import Link from "next/link";
import Head from "next/head";
import { Basket, Search, Favorite, Person } from "../public/icons";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? title + " - Amazoon" : "Amazoon"}</title>
        <meta name="description" content="E-commerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col justify-between ">
        <header>
          <nav className="h-20 max-w-[90%] mx-auto grid grid-cols-3 items-center  ">
            <div>
              <Link
                href="/"
                className="font-medium text-sm transition-all hover:text-yellow-700"
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
                <Search className=" absolute right-0  text-lg transition-all hover:fill-yellow-700" />
              </div>
              <Link href="/favorite" className="p-2">
                <Favorite className="text-xl transition-all hover:fill-yellow-700" />
              </Link>
              <Link href="/cart" className="p-2">
                <Basket className="text-xl transition-all hover:fill-yellow-700" />
              </Link>
              <Link href="/login" className="p-2">
                <Person className="text-xl transition-all hover:fill-yellow-700" />
              </Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="h-10 flex justify-center items-center shadow-inner">
          <p>Copyright 2023 Amazoon</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
