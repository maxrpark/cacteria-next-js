import React, { useContext, useReducer, useEffect } from "react";
import cart_reducer from "../reducers/cart_reducer";

type Props = {
  children: React.ReactNode;
};

interface CartContextInterface {
  total: number;
  name: string;
  changeName: (value: string) => void;
}
interface CartInitialState {
  total: number;
  name: string;
}
const InitialState = {
  total: 0,
  name: "Max",
};

const CartContext = React.createContext({} as CartContextInterface);

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(
    cart_reducer,
    InitialState as CartInitialState
  );

  const changeName = (value: string) => {
    dispatch({
      type: "CHANGE_NAME",
      payload: value,
    });
  };
  return (
    <CartContext.Provider value={{ ...state, changeName }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
