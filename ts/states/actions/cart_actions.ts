import { cartItem } from "../../interfaces";
import { ActionsType } from "../action-types";

interface AddToCartPayload {
  product: any;
}
interface ADD_TO_CARD {
  type: ActionsType.ADD_TO_CART;
  payload: cartItem;
}
interface COUNT_CART_TOTALS {
  type: ActionsType.COUNT_CART_TOTALS;
}

export type Actions = ADD_TO_CARD | COUNT_CART_TOTALS;
