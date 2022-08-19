import React, { useContext, useEffect, useReducer } from "react";
import cart_reducer from "../reducers/cart_reducer";
import { CartInitialState } from "../ts/states/initialsStates/cartState";
import { ActionsType } from "../ts/states/action-types";
import { cartItem } from "../ts/interfaces";

let getLocalStorage = () => {
  if (typeof window !== "undefined") {
    let cart = localStorage.getItem("cart-cacteria");

    if (cart) {
      return JSON.parse(localStorage.getItem("cart-cacteria") as string);
    } else {
      return [];
    }
  }
};

type Props = {
  children: React.ReactNode;
};

interface CartContextInterface {
  cart: cartItem[];
  total_items: number;
  total_amount: number;
  addToCart: (product: cartItem) => void;
  removeCartItem: (id: string) => void;
  toggleItemAmount: (id: string, type: string) => void;
}

const InitialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
};

const CartContext = React.createContext({} as CartContextInterface);

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(
    cart_reducer,
    InitialState as CartInitialState
  );

  const addToCart = (product: cartItem) => {
    dispatch({
      type: ActionsType.ADD_TO_CART,
      payload: {
        ...product,
      },
    });
  };
  const removeCartItem = (id: string) => {
    dispatch({
      type: ActionsType.REMOVE_CART_ITEM,
      payload: id,
    });
  };
  const toggleItemAmount = (id: string, type: string) => {
    dispatch({
      type: ActionsType.TOGGLE_ITEM_AMOUNT,
      payload: {
        id,
        type,
      },
    });
  };

  useEffect(() => {
    dispatch({ type: ActionsType.COUNT_CART_TOTALS });
    localStorage.setItem("cart-cacteria", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeCartItem, toggleItemAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
