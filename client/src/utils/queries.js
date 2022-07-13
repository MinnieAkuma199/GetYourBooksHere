//created this file

import { gql } from "@apollo/client";

//maybe no second query not sure though
export const GET_ME = gql`
  query Query {
    query {
      me
    }
  }
`;
