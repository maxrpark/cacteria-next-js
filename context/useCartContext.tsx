import React, { useContext, useEffect, useReducer } from "react";
import cart_reducer from "../reducers/cart_reducer";
import { CartInitialState } from "../ts/states/initialsStates/cartState";
import { ActionsType } from "../ts/states/action-types";
import { CartItemInt } from "../ts/interfaces/interfaces";

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
  cart: CartItemInt[];
  total_items: number;
  total_amount: number;
  orderSucceeded: boolean;
  addToCart: (product: CartItemInt) => void;
  removeCartItem: (id: string) => void;
  toggleItemAmount: (id: string, type: string) => void;
  clearCart: () => void;
}

const InitialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  orderSucceeded: false,
};

const CartContext = React.createContext({} as CartContextInterface);

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(
    cart_reducer,
    InitialState as CartInitialState
  );

  const addToCart = (product: CartItemInt) => {
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
  const clearCart = () => {
    dispatch({
      type: ActionsType.CLEAR_CART,
    });
  };

  useEffect(() => {
    dispatch({ type: ActionsType.COUNT_CART_TOTALS });
    localStorage.setItem("cart-cacteria", JSON.stringify(state.cart));
    console.log("cart updated");
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeCartItem,
        toggleItemAmount,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
