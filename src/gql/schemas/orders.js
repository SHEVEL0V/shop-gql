/** @format */
import { gql } from "@apollo/client";

export const GET_ORDER = gql`
  query GetOrders($query: QueryOrder) {
    getOrders(query: $query) {
      user {
        name
        telephone
        email
      }
      orders {
        brand
        price
        qty
        name
      }
      status
      createdAt
      _id
    }
  }
`;

export const ADD_ORDER = gql`
  mutation AddOrders($add: [AddOrder]) {
    addOrder(add: $add) {
      message
    }
  }
`;

export const UPDATE_ORDER = gql`
  mutation UpdateOrder($update: UpdateOrder) {
    updateOrder(update: $update) {
      message
    }
  }
`;
