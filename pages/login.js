import React from "react";
import Layout from "../components/Layout";

const login = () => {
  return (
    <Layout>
      <form className=" max-w-md mx-auto">
        <h1 className="text-center mb-6">Login</h1>
        <label
          htmlFor="email"
          className="text-left text-gray-600 font-medium text-sm"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="border w-full px-4 py-2 mb-6 text-sm text-gray-600 outline-none focus:border-black"
        />
        <label
          htmlFor="password"
          className="text-left text-gray-600 font-medium text-sm"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="border w-full px-4 py-2 text-sm text-gray-600 outline-none focus:border-black"
        />
        <p className="text-gray-600 text-center text-sm my-4 transition-all hover:text-yellow-c">
          Forgot your password ?
        </p>
        <button className="black-button text-xs">SIGN IN</button>
        <p className="text-gray-600 text-center text-sm mt-4 transition-all hover:text-yellow-c">
          Create account
        </p>
      </form>
    </Layout>
  );
};

export default login;
