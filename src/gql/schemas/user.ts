/** @format */

import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation LoginUser($user: InpUserLog) {
    loginUser(user: $user) {
      user {
        name
        telephone
        avatarURL
        delivery
        role
      }
      token
    }
  }
`;

export const REGISTER = gql`
  mutation RegisterUser($user: InpUserReg) {
    registerUser(user: $user) {
      user {
        name
        telephone
        avatarURL
        delivery
        role
      }
      token
    }
  }
`;

export const AUTH = gql`
  mutation AuthUser($token: String!) {
    authUser(token: $token) {
      user {
        name
        telephone
        avatarURL
        delivery
        role
      }
      token
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($user: InpUserUpdate) {
    updateUser(user: $user) {
      name
    }
  }
`;

export const GET_USER = gql`
  query GetUser {
    getUser {
      name
      telephone
      email
      avatarURL
      delivery
    }
  }
`;
