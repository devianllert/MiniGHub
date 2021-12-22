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

export const getUserRepositoryByName = (username: string, repositoryName: string) => {
  return graphqlRequest<UserRepositoryData, GetUserRepositoryQueryVariables>('https://api.github.com/graphql', GetUserRepositoryQuery, {
    username,
    repositoryName,
  });
};

export const getUserRepositories = (username: string, pageCursor?: string | null) => {
  return graphqlRequest<RepositoryListData, GetUserRepositoryListQueryVariables>('https://api.github.com/graphql', GetUserRepositoryListQuery, {
    username,
    after: pageCursor,
  });
};

export const getUsers = (username: string) => {
  return graphqlRequest<UserData, GetUserByLoginQueryVariables>('https://api.github.com/graphql', GetUserByLoginQuery, {
    username,
  });
};

export const createIssue = (input: CreateIssueInput) => {
  return graphqlRequest<IssueData, CreateIssueMutationVariables>('https://api.github.com/graphql', CreateIssueMutation, {
    input,
  });
};
