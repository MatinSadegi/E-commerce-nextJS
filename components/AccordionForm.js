import React, { useState } from "react";
import Image from "next/image";
import clothSize from "../public/images/cloth.webp";
import { Plus, Minus, Facebook, Twitter, Pinterest } from "../public/icons";
import Link from "next/link";

const AccordionForm = ({ description, category }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [showSizeChart, setShowSizeChart] = useState(false);
  return (
    <>
      <div
        onClick={() => setShowDescription(!showDescription)}
        className="mt-10 border-b pb-4 group "
      >
        <div className="flex justify-between items-center">
          <h4 className="font-medium text-sm group-hover:text-yellow-c transition-all ">
            Description
          </h4>
          {showDescription ? <Minus /> : <Plus />}
        </div>
        <p
          className={`text-sm overflow-hidden transition-all duration-500  ${
            showDescription ? "h-5 mt-2" : "h-0 mt-0"
          }`}
        >
          {description}
        </p>
      </div>
      <div
        onClick={() => setShowCategory(!showCategory)}
        className="mt-4 border-b pb-4 group "
      >
        <div className="flex justify-between items-center">
          <h4 className="font-medium text-sm group-hover:text-yellow-c transition-all ">
            Category
          </h4>
          {showCategory ? <Minus /> : <Plus />}
        </div>
        <p
          className={`text-sm overflow-hidden transition-all duration-500  ${
            showCategory ? "h-5 mt-2" : "h-0 mt-0"
          }`}
        >
          {category}
        </p>
      </div>
      <div
        onClick={() => setShowSizeChart(!showSizeChart)}
        className="mt-4 border-b pb-4 group "
      >
        <div className="flex justify-between items-center overflow-hidden">
          <h4 className="font-medium text-sm group-hover:text-yellow-c transition-all ">
            Size Chart
          </h4>
          {showSizeChart ? <Minus /> : <Plus />}
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ${
            showSizeChart ? "h-48 mt-2" : "h-0 mt-0 "
          }`}
        >
          <Image src={clothSize} width={500} height={100} alt="cloth-size" />
        </div>
      </div>
      <div className="mt-4 text-xs font-normal flex gap-1">
        <p className="">Categories : </p>
        <Link
          href="/"
          className=" text-gray-500 transition-all hover:text-yellow-c"
        >
          Pants
        </Link>
      </div>
      <div className="mt-6">
        <p className=" text-gray-500 font-medium tracking-tight">Share with</p>
        <div className="flex items-center mt-2 gap-3">
          <Link href="/#">
            <Facebook className="text-xl transition-all hover:fill-yellow-c" />
          </Link>
          <Link href="/#">
            <Twitter className="text-sm transition-all hover:fill-yellow-c" />
          </Link>
          <Link href="/#">
            <Pinterest className=" transition-all hover:stroke-yellow-c" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default AccordionForm;
