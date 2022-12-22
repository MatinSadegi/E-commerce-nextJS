import { createContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";
import { INITIAL_STATE } from "../reducer/cartReducer";

export const Store = createContext();

export function StoreProvider({children}){
    const [ state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    const value = {state, dispatch};
    return <Store.Provider value={value}>{children}</Store.Provider>
}
