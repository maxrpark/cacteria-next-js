import { cartItem } from "../../interfaces";
import { ActionsType } from "../action-types";

interface ToggleAmountPayload {
  id: string;
  type: string;
}
interface ADD_TO_CARD {
  type: ActionsType.ADD_TO_CART;
  payload: cartItem;
}
interface COUNT_CART_TOTALS {
  type: ActionsType.COUNT_CART_TOTALS;
}
interface REMOVE_CART_ITEM {
  type: ActionsType.REMOVE_CART_ITEM;
  payload: string;
}
interface TOGGLE_ITEM_AMOUNT {
  type: ActionsType.TOGGLE_ITEM_AMOUNT;
  payload: ToggleAmountPayload;
}

export type Actions =
  | ADD_TO_CARD
  | COUNT_CART_TOTALS
  | REMOVE_CART_ITEM
  | TOGGLE_ITEM_AMOUNT;
