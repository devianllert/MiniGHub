import { gql } from '@/modules/core/api/gql';

export const GetUserByLoginQuery = gql`
  query GetUserByLogin($username: String!) {
    search(query: $username, type: USER, first: 5) {
      nodes {
        ... on User {
          login
          avatarUrl
        }
      }
    }
  }
`;
