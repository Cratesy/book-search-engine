import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Mutation($loginInput: LoginInput!) {
    login(input: $loginInput) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;

export const SIGNUP = gql`
  mutation Mutation($createUserInput: CreateUserInput!) {
    createUser(input: $createUserInput) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;
