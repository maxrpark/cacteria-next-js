import { ActionsType } from "../action-types";
import { OrderInterface } from "../../interfaces/interfaces";

interface SET_USER {
  type: ActionsType.SET_USER;
  payload: any;
}

interface CHECK_USER_START {
  type: ActionsType.CHECK_USER_START;
}
interface CHECK_USER_END {
  type: ActionsType.CHECK_USER_END;
}
interface SET_ADMIN_SELECTED_ORDER {
  type: ActionsType.SET_ADMIN_SELECTED_ORDER;
  payload: OrderInterface;
}

export type Actions =
  | SET_USER
  | CHECK_USER_START
  | CHECK_USER_END
  | SET_ADMIN_SELECTED_ORDER;
