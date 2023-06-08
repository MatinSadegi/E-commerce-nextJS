import Link from "next/link";
import Image from "next/image";
import { Basket, Favorite } from "../public/icons";
import SideCart from "./sideCart/SideCart";
import { useContext } from "react";
import { Store } from "../utils/store";

const ProductItem = ({ product }) => {
  const { state, dispatch, showSideCart, setShowSideCart } = useContext(Store);

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find(
      (item) => item.slug === product.slug
    );
    const quantity = existItem ? existItem.quantity + 1 : 1;
    if (product.countInStock < quantity) {
      alert("Sorry . Product is out of stock");
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
  };
  return (
    <div className="block mx-auto  mb-10 w-[320px]">
      <div className="relative">
        <Link href={`/product/${product.slug}`} className="">
          <Image
            src={product.image}
            alt={product.name}
            width={320}
            height={300}
            className="object-cover rounded-sm transition-all hover:scale-105 "
          />
        </Link>
      </div>
      <div className="flex justify-between items-center px-1">
        <div className="flex flex-col justify-center my-3">
          <Link href={`/product/${product.slug}`}>
            <h2 className="text-lg hover:text-yellow-c transition-all">
              {product.name}
            </h2>
          </Link>
          <p className="text-lg">${product.price.toFixed(2)}</p>
          {/* <button className="" type="button">
          Add to cart
        </button> */}
        </div>
        <div className="flex items-center gap-1">
          <div className="py-1.5 px-3 rounded-tr-2xl rounded-bl-2xl bg-gray-500  text-white text-sm cursor-pointer transition-all duration-500 hover:bg-yellow-c ">
            <Favorite className="text-xl fill-white" />
          </div>
          <div
            onClick={addToCartHandler}
            className="py-1.5 px-3 rounded-tl-2xl rounded-br-2xl bg-gray-500  text-white text-sm cursor-pointer transition-all duration-500 hover:bg-yellow-c  "
          >
            <Basket
              onClick={() => setShowSideCart(true)}
              className="text-xl fill-white"
            />
          </div>
        </div>
      </div>
      <SideCart showSideCart={showSideCart} setShowSideCart={setShowSideCart} />
    </div>
  );
};

export default ProductItem;
