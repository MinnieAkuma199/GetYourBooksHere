const { gql } = require("apollo-server-express");

// token may need to be changed from ID to String
const typeDefs = gql`
  type Query {
    me: User
  }
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    bookId: ID
    authors: [String] #an array of strings
    description: String
    title: String
    image: String
    link: String
  }
  type Auth {
    token: ID
    user: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    #saveBook(author: [authors]) #may need to change (input will be like type user/type auth)
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
