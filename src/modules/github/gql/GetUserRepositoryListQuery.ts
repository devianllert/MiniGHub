import { gql } from '@/modules/core/api/gql';

export const GetUserRepositoryListQuery = gql`
  query GetUserRepositoryList($username: String!, $first: Int, $last: Int, $after: String, $before: String) {
    user(login: $username) {
      repositories(first: $first, last: $last, after: $after, before: $before, isFork: false) {
        totalCount

        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }

        nodes {
          id
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
