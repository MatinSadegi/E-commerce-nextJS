import React, { useContext } from "react";
import Image from "next/image";
import Product from "../../models/Product";
import db from "../../utils/db";
import { Store } from "../../utils/store";
import Layout from "../../components/Layout";
import AccordionForm from "../../components/AccordionForm";
import SideCart from "../../components/sideCart/SideCart";
import { Favorite } from "../../public/icons";
import StickyFooter from "../../components/StickyFooter";
import Rating from "../../components/Rating";

const ProductScreen = ({ product }) => {
  const { state, dispatch, showSideCart, setShowSideCart } = useContext(Store);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  const addToCartHandler = (val) => {
    const existItem = state.cart.cartItems.find(
      (item) => item.slug === product.slug
    );
    const quantity = existItem ? existItem.quantity + val : val;
    if (product.countInStock < quantity) {
      alert("Sorry . Product is out of stock");
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    setShowSideCart(true);
  };

  return (
    <Layout title={product.name}>
      {/* product header */}
      <div className="py-10 bg-red-50 ">
        <h2 className="text-center text-3xl  text-gray-500">{product.name}</h2>
        <p className="text-center mt-2">
          Home / {product.category} /{" "}
          <span className="text-gray-500">{product.name}</span>
        </p>
      </div>
      {/* product main */}
      <div className=" mt-10 mx-auto max-w-[90%] grid md:grid-cols-[2fr_1fr] md:gap-20  ">
        <div className="">
          <Image
            src={product.image}
            alt={product.name}
            width={900}
            height={500}
          />
        </div>
        {/* product main right side */}
        <div>
          <h3 className=" text-2xl">{product.name}</h3>
          <div className="flex gap-2">
          <Rating rating={product.rating}/>
            <p className="text-gray-500">
              {product.numReviews > 0
                ? `${product.numReviews} reviews`
                : "No reviews"}
            </p>
          </div>
          <div className="my-6 flex justify-between">
            <p className="text-gray-500">${product.price}.00</p>
            {product.countInStock > 0 ? (
              <div className="flex items-center">
                <img
                  src="https://img.icons8.com/material-outlined/16/null/ok--v1.png"
                  alt="available"
                />
                <p>In stock</p>
              </div>
            ) : (
              "Unavailable"
            )}
          </div>
          <div className=" flex items-center gap-6">
            <button
              onClick={()=>addToCartHandler(1)}
              className="px-14 py-4 bg-gray-500 text-white transition-all hover:bg-yellow-c"
            >
              Add to cart
            </button>
            <Favorite className="text-2xl fill-gray-500 transition-all hover:fill-yellow-c" />
          </div>
          <AccordionForm
            description={product.description}
            category={product.category}
          />
        </div>
      </div>
      <SideCart showSideCart={showSideCart} setShowSideCart={setShowSideCart} />
      <StickyFooter
        name={product.name}
        reviews={product.numReviews}
        image={product.image}
        rating = {product.rating}
        addToCart = {addToCartHandler}
      />
    </Layout>
  );
};

export default ProductScreen;
export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;
  await db.connect();
  const product = await Product.findOne({ slug });
  await db.disconnect();
  return {
    props: { product: product ? JSON.parse(JSON.stringify(product)) : null },
  };
}
