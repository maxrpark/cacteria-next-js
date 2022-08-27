import React, { FC, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import global_reducer from "../reducers/global_reducer";
import { newsletterFieldsInt } from "../ts/interfaces";
import { ActionsType } from "../ts/states/action-types/index";
import { HandleFormInt } from "../ts/states/actions/global_actions";

type Props = {
  children: React.ReactNode;
};
interface globalContextInterface {
  newsLetterFormValues: newsletterFieldsInt;
  subscribeToNewsletter: (data: any) => void;
  handleFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface GlobalInitialState {
  isLoading: boolean;
  newsLetterFormValues: newsletterFieldsInt;
}

const initialState: GlobalInitialState = {
  isLoading: false,
  newsLetterFormValues: {
    name: "",
    email: "",
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

  const subscribeToNewsletter = async (data: any) => {
    try {
      const res = await axios.post("/api/newsletter-subscribe", { ...data });
      console.log(res.data.msg);
    } catch (error: any) {
      console.log(error.response.data.msg);
    }
  };

  return (
    <GlobalContext.Provider
      value={{ ...state, subscribeToNewsletter, handleFormChange }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
