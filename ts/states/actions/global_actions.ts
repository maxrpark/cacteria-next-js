import { ActionsType } from "../action-types";
import { AlertMessageInt } from "../../interfaces";

export interface HandleFormInt {
  name: string;
  value: string;
  type: string;
}

interface HANDLE_FORM_INPUT {
  type: ActionsType.HANDLE_FORM_INPUT;
  payload: HandleFormInt;
}

interface FORM_SUBMITTED {
  type: ActionsType.FORM_SUBMITTED;
}
interface NEWSLETTER_SUBSCRIPTION_SUCCESS {
  type: ActionsType.NEWSLETTER_SUBSCRIPTION_SUCCESS;
}
interface NEWSLETTER_SUBSCRIPTION_ERROR {
  type: ActionsType.NEWSLETTER_SUBSCRIPTION_ERROR;
}
interface ORDER_SUCCESS {
  type: ActionsType.ORDER_SUCCESS;
}
interface SHOW_ALERT_MESSAGE {
  type: ActionsType.SHOW_ALERT_MESSAGE;
  payload: AlertMessageInt;
}
interface HIDE_ALERT_MESSAGE {
  type: ActionsType.HIDE_ALERT_MESSAGE;
}
interface CLEAR_FORM_VALUES {
  type: ActionsType.CLEAR_FORM_VALUES;
}

export type Actions =
  | HANDLE_FORM_INPUT
  | FORM_SUBMITTED
  | NEWSLETTER_SUBSCRIPTION_SUCCESS
  | NEWSLETTER_SUBSCRIPTION_ERROR
  | SHOW_ALERT_MESSAGE
  | HIDE_ALERT_MESSAGE
  | CLEAR_FORM_VALUES
  | ORDER_SUCCESS;
