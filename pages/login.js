import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

async function createUser(form) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
  return data;
}

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const router = useRouter();
  const { data, status } = useSession();
  const submitHandler = async (e) => {
    e.preventDefault();
    if (isLogin) {
      try {
        const result = await signIn("credentials", {
          redirect: false,
          email: form.email,
          password: form.password,
        });
        if (!result.error) {
          router.replace("/profile");
        } else {
          toast.error(result.error, { theme: "dark", autoClose: 3000 });
        }
      } catch (error) {
        toast.error(error, { theme: "dark", autoClose: 3000 });
      }
    } else {
      try {
        const result = await createUser(form);
      } catch (error) {
        toast.error(error, { theme: "dark", autoClose: 3000 });
      }
    }
  };
  return (
    <Layout>
      <form className=" max-w-md mx-auto my-16" onSubmit={submitHandler}>
        <h1 className="text-center mb-6">
          {isLogin ? "Login" : "Create Account"}
        </h1>
        {isLogin ? (
          ""
        ) : (
          <div>
            <label
              htmlFor="firstName"
              className="text-left text-gray-600 font-medium text-sm"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="border w-full px-4 py-2 mb-6 text-sm text-gray-600 outline-none focus:border-black"
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            />
            <label
              htmlFor="lastName"
              className="text-left text-gray-600 font-medium text-sm"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="border w-full px-4 py-2 mb-6 text-sm text-gray-600 outline-none focus:border-black"
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            />
          </div>
        )}

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
          onChange={(e) => setForm({ ...form, email: e.target.value })}
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
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        {isLogin ? (
          <p className="text-gray-600 text-center text-sm mt-4 cursor-pointer transition-all hover:text-yellow-c">
            Forgot your password ?
          </p>
        ) : (
          ""
        )}

        <button
          className="black-button my-4 text-xs"
          onClick={() => {
            if (status === "authenticated") {
              router.replace("/profile");
            }
          }}
        >
          {isLogin ? "Login" : "Create Account"}
        </button>
        <p
          className="text-gray-600 text-center text-sm cursor-pointer transition-all hover:text-yellow-c"
          onClick={() => {
            setIsLogin((prevState) => !prevState);
          }}
        >
          {isLogin ? "Create new account" : "Login with existing account"}
        </p>
      </form>
      <ToastContainer position="bottom-left" />
    </Layout>
  );
};

export default Login;
