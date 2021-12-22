import { gql } from '@/modules/core/api/gql';

export const GetUserRepositoryListQuery = gql`
  query GetUserRepositoryList($username: String!, $after: String) {
    user(login: $username) {
      repositories(last: 25, after: $after, isFork: false) {
        totalCount

        pageInfo {
          startCursor
          hasNextPage
          endCursor
        }

        edges {
          cursor
          node {
            name
          }
        }

        nodes {
          name
          url
          nameWithOwner
          stargazerCount
          watchers {
            totalCount
          }
        }
      }
    }
  }
`;
