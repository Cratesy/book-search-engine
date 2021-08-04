const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    bookId: ID!
    authors: [String!]
    description: String
    title: String!
    image: String
    link: String
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int!
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User!
  }

  type Query {
    me: User!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input CreateUserInput {
    username: String!
    email: String!
    password: String!
  }

  input SaveBookInput {
    book: ID!
    authors: [String!]
    title: String!
    description: String
  }

  type Mutation {
    login(input: LoginInput!): Auth!
    createUser(input: CreateUserInput!): Auth!
    saveBook(input: SaveBookInput!): User!
    removeBook(bookId: ID!): User!
  }
`;

module.exports = typeDefs;
