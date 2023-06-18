import React, { useContext } from "react";
import Image from "next/image";
import { Store } from "../../utils/Store";
import { Multiply } from "../../public/icons";

const SideCartItem = ({ item,image, name, quantity, price }) => {
    const { dispatch } = useContext(Store);
     const removeItemHandler = (item) => {
       dispatch({ type: "CART_REMOVE_ITEM", payload: item });
     };
  return (
    <>
      <div className="flex justify-between mb-4">
        <div className="flex gap-6">
          <Image src={image} width={80} height={90} alt="product" />
          <div className="text-sm">
            <p className=" text-gray-600  transition-all cursor-pointer hover:text-yellow-c">
              {name}
            </p>
            <p>
              {quantity} <span>&#215;</span> ${price.toFixed(2)}
            </p>
          </div>
        </div>
        <Multiply
          onClick={() => removeItemHandler(item)}
          className=" text-xs text-gray-300 hover:fill-yellow-c"
        />
      </div>
    </>
  );
};

export default SideCartItem;
