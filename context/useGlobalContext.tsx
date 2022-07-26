import React, { FC, useContext, useReducer } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";

import global_reducer from "../reducers/global_reducer";

import {
  newsletterFieldsInt,
  costumerCheckoutInfoInt,
  contactFormInfoInt,
  OrderInterface,
  AlertMessageInt,
} from "../ts/interfaces";
import { ActionsType } from "../ts/states/action-types/index";
import { HandleFormInt } from "../ts/states/actions/global_actions";
import { GlobalInitialState } from "../ts/states/initialsStates/globalState";

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
type Props = {
  children: React.ReactNode;
};
interface globalContextInterface {
  isLoading: boolean;
  showMessage: boolean;
  alertMessage: AlertMessageInt;
  orderSucceeded: boolean;
  newsLetterFormValues: newsletterFieldsInt;
  costumerCheckoutInfo: costumerCheckoutInfoInt;
  contactFormValues: contactFormInfoInt;
  subscribeToNewsletter: () => void;
  createOrder: (cart_items: OrderInterface) => void;
  handleFormChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleContactForm: () => void;
  clearCookies: () => void;
  alertMessageFunc: (message: string, type: string) => void;
}

const initialState: GlobalInitialState = {
  isLoading: false,
  orderSucceeded: false,
  showMessage: false,
  newsLetterFormValues: {
    name: "",
    email: "",
  },
  costumerCheckoutInfo: {
    email: "",
    name: "",
  },
  contactFormValues: {
    name: "",
    email: "",
    subject: "",
    content: "",
  },
  alertMessage: {
    message: "",
    type: "",
  },
};

const GlobalContext = React.createContext({} as globalContextInterface);

export const GlobalProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(
    global_reducer,
    initialState as GlobalInitialState
  );

  const router = useRouter();

  const handleFormChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
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
    if (!state.newsLetterFormValues.email || !state.newsLetterFormValues.name) {
      alertMessageFunc("Please provide all values", "danger");

      return;
    } else if (!regex.test(state.newsLetterFormValues.email)) {
      alertMessageFunc("Please enter a valid email", "danger");
      return;
    }

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
      alertMessageFunc(`${res.data.msg}`, "success");
    } catch (error: any) {
      console.log(error.response.data.msg);
      alertMessageFunc(`${error.response.data.msg}`, "danger");
      dispatch({
        type: ActionsType.NEWSLETTER_SUBSCRIPTION_ERROR,
      });
    }
  };

  const createOrder = async (orderDetails: OrderInterface) => {
    try {
      await axios.post("/api/create-order", {
        ...orderDetails,
        costumer_details: state.costumerCheckoutInfo,
      });

      // set cookies for sending email in success-message page
      const order_details_confirmation = {
        costumer_details: state.costumerCheckoutInfo,
        total_amount: orderDetails.total,
        cart_items: orderDetails.cart_items,
      };
      Cookies.set(
        "isOrderCompleted",
        JSON.stringify(order_details_confirmation)
      );
      router.replace("/success-message");

      dispatch({
        type: ActionsType.ORDER_SUCCESS,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const alertMessageFunc = (message: string, type: string) => {
    dispatch({
      type: ActionsType.SHOW_ALERT_MESSAGE,
      payload: {
        message,
        type,
      },
    });
    setTimeout(() => {
      dispatch({
        type: ActionsType.HIDE_ALERT_MESSAGE,
      });
    }, 3000);
  };

  const clearCookies = () => {
    Cookies.remove("isOrderCompleted");
    Cookies.remove("canCheckOut");
    router.push("/");
  };
  const handleContactForm = () => {
    if (
      !state.contactFormValues.email ||
      !state.contactFormValues.name ||
      !state.contactFormValues.subject ||
      !state.contactFormValues.content
    ) {
      alertMessageFunc("Please provide all values", "danger");

      return;
    } else if (!regex.test(state.contactFormValues.email)) {
      alertMessageFunc("Please enter a valid email", "danger");
      return;
    }
    alertMessageFunc(
      "Thank you for your message with get back to you soon!",
      "success"
    );
    dispatch({
      type: ActionsType.CLEAR_FORM_VALUES,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        subscribeToNewsletter,
        handleFormChange,
        createOrder,
        clearCookies,
        alertMessageFunc,
        handleContactForm,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
