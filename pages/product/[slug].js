import React, { useContext} from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import data from "../../utils/data";
import Image from "next/image";
import { Favorite, Plus, Minus } from "../../public/icons";
import AccordionForm from "../../components/AccordionForm";
import { Store } from "../../utils/store";

const ProductScreen = () => {
  const {state,dispatch } = useContext(Store)
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((item) => item.slug === slug);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find(
      (item) => item.slug === product.slug
    );
    const quantity  = existItem ? existItem.quantity + 1 : 1;
    if(product.countInStock < quantity){
      alert ('Sorry . Product is out of stock');
      return;
    }
    dispatch({type:'CART_ADD_ITEM', payload:{...product, quantity}})
  }
  return (
    <Layout title={product.name}>
      {/* product header */}
      <div className="py-10 bg-red-50 ">
        <h2 className="text-center text-3xl font-medium text-gray-500">
          {product.name}
        </h2>
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
            <div className="flex my-1">
              {product.rating < 1 ? (
                <img
                  src="https://img.icons8.com/fluency-systems-regular/18/6b7280/star--v1.png"
                  alt="star"
                />
              ) : (
                <img src="https://img.icons8.com/fluency-systems-filled/18/6b7280/star.png" />
              )}
              {product.rating < 2 ? (
                <img
                  src="https://img.icons8.com/fluency-systems-regular/18/6b7280/star--v1.png"
                  alt="star"
                />
              ) : (
                <img src="https://img.icons8.com/fluency-systems-filled/18/6b7280/star.png" />
              )}
              {product.rating < 3 ? (
                <img
                  src="https://img.icons8.com/fluency-systems-regular/18/6b7280/star--v1.png"
                  alt="star"
                />
              ) : (
                <img src="https://img.icons8.com/fluency-systems-filled/18/6b7280/star.png" />
              )}
              {product.rating < 4 ? (
                <img
                  src="https://img.icons8.com/fluency-systems-regular/18/6b7280/star--v1.png"
                  alt="star"
                />
              ) : (
                <img src="https://img.icons8.com/fluency-systems-filled/18/6b7280/star.png" />
              )}
              {product.rating < 5 ? (
                <img
                  src="https://img.icons8.com/fluency-systems-regular/18/6b7280/star--v1.png"
                  alt="star"
                />
              ) : (
                <img src="https://img.icons8.com/fluency-systems-filled/18/6b7280/star.png" />
              )}
            </div>
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
            ) : "Unavailable"}
          </div>
          <div className=" flex items-center gap-6">
            <button onClick={addToCartHandler} className="px-10 py-4 bg-gray-500 text-white transition-all hover:bg-yellow-700">
              Add to cart
            </button>
            <Favorite className="text-2xl fill-gray-500 transition-all hover:fill-yellow-700" />
          </div>
              <AccordionForm description={product.description} category={product.category}/>
        </div>
      </div>
    </Layout>
  );
};

export default ProductScreen;
