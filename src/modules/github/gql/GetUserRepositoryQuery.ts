import { gql } from '@/modules/core/api/gql';

export const GetUserRepositoryQuery = gql`
  query GetUserRepository($username: String!, $repositoryName: String!, $first: Int, $last: Int, $after: String,  $before: String) {
    repository(owner: $username, name: $repositoryName) {
      id
      name
      stargazerCount
      watchers {
        totalCount
      }

      issues(first: $first, last: $last, after: $after,  before: $before, states: OPEN) {
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }

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
