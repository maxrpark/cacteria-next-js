import { cartItem } from "../../interfaces";
import { ActionsType } from "../action-types";

interface AddToCartPayload {
  product: any;
}
interface ADD_TO_CARD {
  type: ActionsType.ADD_TO_CART;
  payload: cartItem;
}

export type Actions = ADD_TO_CARD;
