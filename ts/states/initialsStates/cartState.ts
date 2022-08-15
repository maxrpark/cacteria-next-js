import { Product } from "../../interfaces";
interface cartItem extends Product {
  id: string;
  amount: number;
}

export interface CartInitialState {
  cart: cartItem[] | any;
}
