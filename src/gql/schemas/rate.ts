/** @format */
import { gql } from "@apollo/client";

export const GET_RATE = gql`
  mutation Mutation($itemId: ID, $rate: Int) {
    updateRate(itemId: $itemId, rate: $rate)
  }
`;
