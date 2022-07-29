export interface Product {
  id: string;
  category: string;
  desc: string;
  feature: string;
  name: string;
  url: string;
  price: number;
}

export interface productFields {
  category: string;
  desc: string;
  feature: string;
  name: string;
  price: number;
  image: [{ url: string }];
}

export interface SingleProduct {
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
