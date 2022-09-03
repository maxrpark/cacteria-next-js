import { getSession, signIn } from "next-auth/react";
import { useContext, useReducer, ReactNode, createContext, FC } from "react";
import admin_reducer from "../reducers/admin_reducer";
import { ActionsType } from "../ts/states/action-types";
import { AdminInitialState } from "../ts/states/initialsStates";

type Props = {
  children: ReactNode;
};

interface userCredentialsInt {
  email: string;
  password: string;
}

interface UserPayload {
  name: string;
  email: string;
  image: string;
}

interface AdminContextInterface {
  isLoading: boolean;
  user: UserPayload | undefined;
  checkSession: () => void;
  handleLogIn: (userCredentials: userCredentialsInt) => void;
}

const initialState: AdminInitialState = {
  isLoading: false,
  user: {},
};

const AdminContext = createContext({} as AdminContextInterface);

export const AdminProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(admin_reducer, initialState);

  const checkSession = async () => {
    dispatch({
      type: ActionsType.CHECK_USER_START,
    });
    const res = await getSession();
    if (res?.user !== null) {
      dispatch({
        type: ActionsType.SET_USER,
        payload: res?.user,
      });
    }
    dispatch({
      type: ActionsType.CHECK_USER_END,
    });
  };

  const handleLogIn = async (userCredentials: userCredentialsInt) => {
    const res = await signIn("credentials", {
      redirect: false,
      ...userCredentials,
    });
    checkSession();
    console.log(res);
  };

  return (
    <AdminContext.Provider value={{ ...state, checkSession, handleLogIn }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => useContext(AdminContext);
