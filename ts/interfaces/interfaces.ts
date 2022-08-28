import Product from "../../pages/products/[id]";

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
