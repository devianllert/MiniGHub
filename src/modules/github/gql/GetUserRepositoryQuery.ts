import { gql } from '@/modules/core/api/gql';

export const GetUserRepositoryQuery = gql`
  query GetUserRepository($username: String!, $repositoryName: String!) {
    repository(owner: $username, name: $repositoryName) {
      id

      issues(last: 20, states: OPEN) {
        nodes {
          number
          title
          url
          author {
            login
          }
          createdAt
          labels(first:5) {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
`;
