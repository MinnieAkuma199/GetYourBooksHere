//created this file
import { gql } from "@apollo/client";

//do i need to pass in username below as well as id_ and email?
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      User {
        _id
        email
      }
    }
  }
`;

//maybe user doesnt need to be capitalized??**
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      User {
        _id
        username
        email
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookId: ID, $authors: [String], $description: String, $title: String, $image: String, $link: String) 
  {
    saveBook($bookId: bookId, $authors: authors, $description: description, $title: title, $image: image, $link: link)
  }
`;

//is this what i want to pass in?
export const REMOVE_BOOK = gql`
 removeBook($bookId: ID!){
    removeBook($bookId:bookId){
        User{
        _id
        username
        
        }

    }
 }`;
