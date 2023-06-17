import React from 'react';
import { Splide, SplideSlide} from "@splidejs/react-splide";
import Image from 'next/image';
import "@splidejs/react-splide/css";
import { motion } from "framer-motion";
import header1 from "../public/images/header/header1.jpg";
import header2 from "../public/images/header/header2.jpg";
import header3 from "../public/images/header/header4.jpg";
const Banner = () => {
  return (
    <div className=" ">
      <div className="w-full h-screen -z-10 relative">
        <motion.div className=" absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 text-center sm:left-16 sm:translate-x-0 z-10">
          <motion.p
            initial={{ opacity: 0, x: "-50vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-2xl font-playFair"
          >
            summer is comming
          </motion.p>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-white font-normal text-6xl my-4"
          >
            A Time For Dress
          </motion.h1>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className=" py-3 px-6 text-white text-xs font-medium bg-rose-500 transition-all hover:bg-white hover:text-black"
          >
            SHOP NOW
          </motion.button>
        </motion.div>
        <Splide
          aria-label="My Favorite Images"
          options={{
            perPage: 1,
            type: "loop",
            autoplay: true,
            speed: 700,
            height: "100vh",
            arrows: false,
            pauseOnHover: false,
            pauseOnFocus: false,
          }}
        >
          <SplideSlide>
            <Image
              src={header1}
              alt="banner"
              className="object-cover object-top h-screen"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src={header2}
              alt="banner"
              className="object-cover object-top h-screen"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src={header3}
              alt="banner"
              className="object-cover object-top h-screen"
            />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default Banner