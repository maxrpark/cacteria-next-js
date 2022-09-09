import { costumerCheckoutInfoInt } from "./";
export interface AlertMessageInt {
  message: string;
  type: string;
}
export interface Product {
  id: string;
  category: string;
  desc: string;
  feature: string;
  name: string;
  url: string;
  price: number;
}
export interface CartItemInt {
  id: string;
  name: string;
  image: string;
  price: number;
  amount: number;
}

export interface OrderInterface {
  _id?: string;
  total: number;
  hasDiscount: boolean;
  cart_items: CartItemInt[];
  costumer_details: costumerCheckoutInfoInt;
  status: string;
  createdAt?: string;
  clientSecret?: string;
}

export interface productFields {
  category: string;
  desc: string;
  feature: string;
  name: string;
  price: number;
  image: [{ url: string }];
}

export interface SingleProductInt {
  createdTime: string;
  fields: productFields;
  id: string;
}

export interface CompanyDetail {
  id: number;
  text: string;
  title: string;
  image: string;
}

export interface UserInt {
  _id: string;
  name: string;
  email: string;
  password: string;
  passwordToken: string;
  passwordTokenExpirationDate: Date;
}
export interface userCredentialsInt {
  email: string;
  password: string;
}

export interface UserPayload {
  name: string;
  email: string;
  image: string;
}
