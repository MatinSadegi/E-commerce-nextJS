import React, { useContext } from "react";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import { Store } from "../../utils/Store";
import Link from "next/link";

const ShippingAddress = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { dispatch } = useContext(Store);
  const submitHandler = async (data) => {
    console.log(data)
    await dispatch({ type: "SAVE_SHIPPING_INFO", payload: data });
    router.push('/shipping')
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <h4 className=" font-medium mb-4">Shipping Address</h4>
        {/* country */}
        <div className="mb-1">
          <label
            htmlFor="country"
            className="text-left text-gray-600 font-medium text-xs"
          >
            Country
          </label>
          <input
            className="border rounded w-full px-4 py-3 text-sm text-gray-600 outline-none focus:border-black"
            type="text"
            id="country"
            {...register("country", { required: "country is required" })}
          />
          <p className="text-red-500 text-xs"> {errors?.country?.message}</p>
        </div>
        {/* name */}
        <div className="flex justify-between items-center mb-1 gap-3">
          <div className="w-1/2">
            <label
              htmlFor="firstName"
              className="text-left text-gray-600 font-medium text-xs"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              {...register("firstName", { required: "firstName is required" })}
              className="border rounded w-full px-4 py-3 text-sm text-gray-600 outline-none focus:border-black"
            />
            <p className="text-red-500 text-xs">
              {" "}
              {errors?.firstName?.message}
            </p>
          </div>
          <div className="w-1/2 ">
            <label
              htmlFor="lastName"
              className="text-left text-gray-600 font-medium text-xs"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              {...register("lastName", { required: "lastName is required" })}
              className="border rounded w-full px-4 py-3  text-sm text-gray-600 outline-none focus:border-black"
            />
            <p className="text-red-500 text-xs"> {errors?.lastName?.message}</p>
          </div>
        </div>
        {/* address */}
        <div className="mb-1">
          <label
            htmlFor="address"
            className="text-left text-gray-600 font-medium text-xs"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            {...register("address", { required: "address is required" })}
            className="border rounded w-full px-4 py-3 text-sm text-gray-600 outline-none focus:border-black"
          />
          <p className="text-red-500 text-xs"> {errors?.address?.message}</p>
        </div>
        {/* postal code & city */}
        <div className="flex justify-between items-center gap-3">
          <div className="w-1/2">
            <label
              htmlFor="postalCode"
              className="text-left text-gray-600 font-medium text-xs"
            >
              Postal Code
            </label>
            <input
              type="text"
              id="postalCode"
              {...register("postalCode", {
                required: "postalCode is required",
              })}
              className="border rounded w-full px-4 py-3 text-sm text-gray-600 outline-none focus:border-black"
            />
            <p className="text-red-500 text-xs">
              {" "}
              {errors?.postalCode?.message}
            </p>
          </div>
          <div className="w-1/2">
            <label
              htmlFor="city"
              className="text-left text-gray-600 font-medium text-xs"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              {...register("city", { required: "city is required" })}
              className="border rounded w-full px-4 py-3 text-sm text-gray-600 outline-none focus:border-black"
            />
            <p className="text-red-500 text-xs"> {errors?.city?.message}</p>
          </div>
        </div>
        <div className="mt-6 flex justify-between items-center">
          <Link href="/cart" className="text-sm text-blue-500  cursor-pointer">
            {" "}
            &#60; Return To Cart{" "}
          </Link>
          <button
            type="submit"
            className="blue-btn"
          >
            Continue To Shipping
          </button>
        </div>
      </form>
    </>
  );
};

export default ShippingAddress;
