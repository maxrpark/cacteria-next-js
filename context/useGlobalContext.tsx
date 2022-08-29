import React, { FC, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import global_reducer from "../reducers/global_reducer";
import {
  newsletterFieldsInt,
  costumerCheckoutInfoInt,
  CartItemInt,
} from "../ts/interfaces";
import { ActionsType } from "../ts/states/action-types/index";
import { HandleFormInt } from "../ts/states/actions/global_actions";
import { GlobalInitialState } from "../ts/states/initialsStates/globalState";

type Props = {
  children: React.ReactNode;
};
interface globalContextInterface {
  isLoading: boolean;
  newsLetterFormValues: newsletterFieldsInt;
  costumerCheckoutInfo: costumerCheckoutInfoInt;
  subscribeToNewsletter: () => void;
  createOrder: (total: number, cart_items: CartItemInt[]) => void;
  handleFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const initialState: GlobalInitialState = {
  isLoading: false,
  newsLetterFormValues: {
    name: "",
    email: "",
  },
  costumerCheckoutInfo: {
    email: "",
    name: "",
  },
};

const GlobalContext = React.createContext({} as globalContextInterface);

export const GlobalProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(
    global_reducer,
    initialState as GlobalInitialState
  );

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const payload: HandleFormInt = {
      name: e.target.name,
      value: e.target.value,
      type: e.target.id,
    };
    dispatch({
      type: ActionsType.HANDLE_FORM_INPUT,
      payload,
    });
  };

  const subscribeToNewsletter = async () => {
    dispatch({
      type: ActionsType.FORM_SUBMITTED,
    });
    try {
      const res = await axios.post(
        "/api/newsletter-subscribe",
        state.newsLetterFormValues
      );
      dispatch({
        type: ActionsType.NEWSLETTER_SUBSCRIPTION_SUCCESS,
      });
      console.log(res);
    } catch (error: any) {
      console.log(error.response.data.msg);
      dispatch({
        type: ActionsType.NEWSLETTER_SUBSCRIPTION_ERROR,
      });
    }
  };

  const createOrder = async (total: number, cart_items: CartItemInt[]) => {
    try {
      const res = await axios.post("/api/create-order", {
        costumer_details: state.costumerCheckoutInfo,
        total,
        cart_items,
      });
      console.log(res);
      const res2 = await axios.post("/api/success-purchase", {
        costumer_details: state.costumerCheckoutInfo,
        total_amount: total,
        cart_items,
      });
      console.log(res2);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GlobalContext.Provider
      value={{ ...state, subscribeToNewsletter, handleFormChange, createOrder }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
