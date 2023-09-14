/** @format */

export type User = {
  name?: string;
  email?: string;
  telephone?: string;
  avatarURL?: [string];
  delivery?: string;
  password?: string;
  role?: string;
};

export type UserToken = {
  user: User;
  token: string;
};

export type ItemParams = {
  name: string;
  value: string;
};

export type Product = {
  _id: string;
  price: number;
  type: string;
  brand: string;
  images: [string];
  name: string;
  desc: string;
  rating: number;
  params: ItemParams[];
};

export type ItemBasket = Product & {
  qty: number;
};

export type ListProducts = {
  results: Product[];
  count: number;
};

export type ObjType = {
  [fieldNAme: string]: string;
};

export type Params = {
  desc: {
    types: string[];
    brands: string[];
    price: number[];
    params: { name: string; value: string[] }[];
  };
};
