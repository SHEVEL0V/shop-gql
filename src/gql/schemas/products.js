/** @format */
import { gql } from "@apollo/client";

const res = gql`
  {
    name
    price
    rating
    img
    type
    brand
    desc
    params {
      name
      value
    }
  }
`;

export const GET_DESCRIPTORS = gql`
  query Query {
    getProductsDesc {
      price
      types
      brands
      params {
        name
        value
      }
    }
  }
`;

export const GET_PRODUCTS = gql`
  query Query($query: QueryParams) {
    getProducts(query: $query) {
      results {
        desc
        brand
        img
        rating
        price
        name
        _id
      }
      count
    }
  }
`;

export const GET_PRODUCTS_BY_ID = gql`
  query Query($id: String) {
    getProductById(id: $id) ${res}
  }
`;

export const ADD_PRODUCT = gql`
  mutation AddProduct($add: InpProduct) {
    addProduct(add: $add) ${res}
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($update: InpProduct) {
    updateProduct(update: $update) ${res}
  }
`;

export const REMOVE_PRODUCT = gql`
  mutation RemoveProduct($ids: [String]) {
    removeProduct(ids: $ids) ${res}
  }
`;
