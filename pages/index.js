
import { Splide, SplideSlide, SplideTrack} from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";

import { motion } from "framer-motion";
import db from "../utils/db";
import Product from "../models/Product";
import header1 from "../public/images/header/header1.jpg";
import header2 from "../public/images/header/header2.jpg";
import header3 from "../public/images/header/header4.jpg";
import header8 from "../public/images/header/header8.png";

export default function Home({ products }) {

  return (
    <Layout title="Home Page">
      <div className="w-full h-screen relative">
        <motion.div className=" absolute top-1/3 -translate-x-1/2 left-1/2 text-center sm:left-16 sm:translate-x-0  z-30">
          <motion.p
            initial={{ opacity: 0, x: "-50vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-xl font-playFair"
          >
            summer is comming
          </motion.p>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-white font-normal text-4xl md:text-6xl my-4"
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
              className="object-cover object-top"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src={header2}
              alt="banner"
              className="object-cover object-top"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src={header3}
              alt="banner"
              className="object-cover object-top"
            />
          </SplideSlide>
        </Splide>
      </div>
      <div className="my-20 w-1/2 text-center mx-auto ">
        <h2>HAPPY SHOPPING</h2>
        <span className="border-l-2 border-gray-300 block mx-auto w-1 h-5 my-3"></span>
        <p className="text-sm text-gray-500 ">
          Etiam imperdiet mauris lacus, id bibendum massa tincidunt nec.
          Praesent efficitur sagittis ullamcorper. Maecenas tempor porttitor
          euismod. Nullam at ornare nisl, vitae interdum magna. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        </p>
      </div>
      <div className="grid px-10 mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {products.map((product) => (
          <ProductItem product={product} key={product.slug} />
        ))}
      </div>
      <h4 className="text-center text-2xl font-medium mt-14 mb-48">
        FOLLOW SKUD ON INSTAGRAM
      </h4>
      <div className="flex justify-between mx-auto rounded-r-full px-10 mt-5 relative">
        <div className=" py-2 px-4 sm:py-6 sm:px-12 md:py-10 md:pl-40 bg-gray-100 w-[70%] relative ">
          <p className="text-sm md:text-lg">Mega Sale Summer Collections</p>
          <p className=" text-2xl md:text-6xl font-normal py-1 lg:py-3">
            up to 40%
          </p>
          <p className=" font-playFair text-lg ">Don’t miss this chance</p>
          <button className="border border-black py-2 px-6 md:px-10 md:py-4 text-xs md:text-sm font-medium mt-4 lg:mt-8 transition-all hover:bg-black hover:text-white">
            SHOP NOW
          </button>
        </div>
        <div className="w-[30%] bg-yellow-100 rounded-r-full relative  ">
          <Image
            src={header8}
            className=" max-w-xs -right-8 sm:max-w-md sm:-right-16 md:max-w-2xl md:-right-14 lg:-right-10 xl:max-w-3xl xl:right-4 absolute  bottom-0 z-10"
            alt="header"
          />
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find();

  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
}
