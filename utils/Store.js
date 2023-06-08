import { createContext, useReducer, useEffect, useState } from "react";
import { cartReducer } from "../reducer/cartReducer";
import { INITIAL_STATE } from "../reducer/cartReducer";

export const Store = createContext();

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const total = state.cart.cartItems.reduce(
    (a, c) => a + c.price * c.quantity,
    0
  );
  const [showSideCart, setShowSideCart] = useState(false);
  const value = { state, dispatch, total, showSideCart, setShowSideCart};
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
