

export const INITIAL_STATE = {
  cart:
    typeof window !== "undefined" && localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : { cartItems: [] },
};



export const cartReducer = (state, action) => {
  switch (action.type) {
    case "CART_ADD_ITEM": {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item.slug === newItem.slug
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      localStorage.setItem(
        "cart",
        JSON.stringify({ ...state.cart, cartItems })
      );
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "CART_REMOVE_ITEM": {
      const cartItems = state.cart.cartItems.filter(
        (item) => item.slug !== action.payload.slug
      );
      localStorage.setItem(
        "cart",
        JSON.stringify({ ...state.cart, cartItems })
      );
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    default:
      return state;
  }
};
