import { ActionsType } from "../action-types";
import { OrderInterface } from "../../interfaces/interfaces";

interface SET_USER {
  type: ActionsType.SET_USER;
  payload: {
    name: string;
    email: string;
    image: string;
  };
}

interface CHECK_USER_START {
  type: ActionsType.CHECK_USER_START;
}
interface CHECK_USER_END {
  type: ActionsType.CHECK_USER_END;
}
interface SHOW_ORDER_MODAL {
  type: ActionsType.SHOW_ORDER_MODAL;
  payload: OrderInterface;
}
interface HIDE_ORDER_MODAL {
  type: ActionsType.HIDE_ORDER_MODAL;
}

export type Actions =
  | SET_USER
  | CHECK_USER_START
  | CHECK_USER_END
  | SHOW_ORDER_MODAL
  | HIDE_ORDER_MODAL;
