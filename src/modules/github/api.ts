import {
  CreateIssueInput,
  GetUserRepositoryListQuery as RepositoryListData,
  GetUserRepositoryListQueryVariables,
  GetUserRepositoryQuery as UserRepositoryData,
  GetUserRepositoryQueryVariables,
  GetUserByLoginQuery as UserData,
  GetUserByLoginQueryVariables,
  CreateIssueMutationVariables,
  CreateIssueMutation as IssueData,
} from '@/generated/types';

import { graphqlRequest } from '@/modules/core/api/graphqlRequest';
import { GetUserRepositoryQuery } from '@/modules/github/gql/GetUserRepositoryQuery';
import { GetUserRepositoryListQuery } from '@/modules/github/gql/GetUserRepositoryListQuery';
import { GetUserByLoginQuery } from '@/modules/github/gql/GetUserByLoginQuery';
import { CreateIssueMutation } from '@/modules/github/gql/CreateIssueMutation';

export interface CursorPagination {
  first?: number;
  last?: number;
  after?: string | null;
  before?: string | null;
}

export interface GetUserRepositoryByNameOptions {
  username: string;
  repositoryName: string;
}

export const getUserRepositoryByName = (options: GetUserRepositoryByNameOptions, pagination?: CursorPagination) => {
  return graphqlRequest<UserRepositoryData, GetUserRepositoryQueryVariables>(
    'https://api.github.com/graphql',
    GetUserRepositoryQuery,
    {
      ...options,
      ...pagination,
    },
  );
};

export const getUserRepositories = (username: string, pagination: CursorPagination) => {
  return graphqlRequest<RepositoryListData, GetUserRepositoryListQueryVariables>(
    'https://api.github.com/graphql',
    GetUserRepositoryListQuery,
    {
      username,
      ...pagination,
    },
  );
};

export const getUsers = (username: string) => {
  return graphqlRequest<UserData, GetUserByLoginQueryVariables>('https://api.github.com/graphql', GetUserByLoginQuery, {
    username,
  });
};

export const createIssue = (input: CreateIssueInput) => {
  return graphqlRequest<IssueData, CreateIssueMutationVariables>(
    'https://api.github.com/graphql',
    CreateIssueMutation,
    {
      input,
    },
  );
};
