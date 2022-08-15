import { Product } from "../../interfaces";
import { ActionsType } from "../action-types";

interface AddToCartPayload {
  id: string;
  amount: number;
  product: Product;
}
interface ADD_TO_CARD {
  type: ActionsType.ADD_TO_CART;
  payload: AddToCartPayload;
}

export type Actions = ADD_TO_CARD;
