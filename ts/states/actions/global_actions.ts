import { ActionsType } from "../action-types";

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

export type Actions =
  | HANDLE_FORM_INPUT
  | FORM_SUBMITTED
  | NEWSLETTER_SUBSCRIPTION_SUCCESS
  | NEWSLETTER_SUBSCRIPTION_ERROR
  | ORDER_SUCCESS;
