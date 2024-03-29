/** @format */
import { gql } from "@apollo/client";

const UserOrder = gql`
  {
    count
    result {
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

export const GET_ORDER = gql`
  query GetOrders($query: QueryOrder) {
    getOrders(query: $query)${UserOrder}}
  
`;

export const ADD_ORDER = gql`
  mutation AddOrders($add: [AddOrder]) {
    addOrder(add: $add) {
      createdAt
    }
  }
`;

export const UPDATE_ORDER = gql`
  mutation UpdateOrder($update: UpdateOrder) {
    updateOrder(update: $update) {
      status
    }
  }
`;
