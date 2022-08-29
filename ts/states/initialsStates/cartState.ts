import { CartItemInt } from "../../interfaces/interfaces";

export interface CartInitialState {
  cart: CartItemInt[];
  total_items: number;
  total_amount: number;
  orderSucceeded: boolean;
}
