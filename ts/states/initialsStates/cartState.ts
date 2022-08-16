import { cartItem } from "../../interfaces";

export interface CartInitialState {
  cart: cartItem[];
  total_items: number;
  total_amount: number;
}
