import { cartItem } from "../../interfaces/interfaces";

export interface CartInitialState {
  cart: cartItem[];
  total_items: number;
  total_amount: number;
  orderSucceeded: boolean;
}
