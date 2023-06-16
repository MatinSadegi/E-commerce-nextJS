import React, { useState } from "react";
import Image from "next/image";
import Rating from "./Rating";
import { useMotionValueEvent, useScroll } from "framer-motion";

const StickyFooter = ({ name, reviews, image, rating, addToCart }) => {
  const [showSticky, setShowSticky] = useState(false);
  const [val, setVal] = useState(1);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 500) {
      setShowSticky(true);
    } else {
      setShowSticky(false);
    }
  });
  return (
    <div
      className={`w-screen bg-[rgba(0,0,0,0.9)] text-white hidden justify-center items-center gap-5 py-5 fixed bottom-0 transition-all duration-500 md:flex ${
        showSticky ? " opacity-100" : "opacity-0"
      }`}
    >
      <div className="gap-3">
        <h3>{name}</h3>
        <div className="flex gap-1">
          <Rating rating={rating} />
          <p>{reviews} reviews</p>
        </div>
      </div>
      <Image src={image} alt={name} width={35} height={40} />
      <input
        type="text"
        className=" w-14 h-full text-center py-2.5 bg-transparent border outline-none"
        pattern="[0-9]*"
        value={val}
        onChange={(e) =>
          setVal(() => (e.target.validity.valid ? e.target.value : ""))
        }
      />
      <button className=" bg-gray-500 px-6 py-2.5 text-sm transition-colors hover:bg-yellow-c" onClick={()=>addToCart(Number(val))}>
        Add to cart
      </button>
    </div>
  );
};

export default StickyFooter;
