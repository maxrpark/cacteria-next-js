import React, { FC, useContext, useReducer, useEffect } from "react";
import axios from "axios";

type Props = {
  children: React.ReactNode;
};
interface globalContextInterface {
  subscribeToNewsletter: (data: any) => void;
}

const initialState = {};

const GlobalContext = React.createContext({} as globalContextInterface);

export const GlobalProvider: FC<Props> = ({ children }) => {
  const subscribeToNewsletter = async (data: any) => {
    try {
      const res = await axios.post("/api/newsletter-subscribe", { ...data });
      console.log(res.data.msg);
    } catch (error: any) {
      console.log(error.response.data.msg);
    }
  };

  return (
    <GlobalContext.Provider value={{ subscribeToNewsletter }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
