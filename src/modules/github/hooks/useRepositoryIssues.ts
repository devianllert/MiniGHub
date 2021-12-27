import { useQuery, UseQueryResult } from 'react-query';

import { useCursorPagination, UseCursorPaginationOptions, UseCursorPaginationValue } from '@/common/hooks/useCursorPagination';
import { GetUserRepositoryQuery } from '@/generated/types';
import { GraphQLResponse } from '@/modules/core/api/graphqlRequest';

import { getUserRepositoryByName } from '../api';

export interface UseRepositoryIssuesOptions extends Partial<UseCursorPaginationOptions> {
  username?: string;
  repoName?: string;
}

export type UseRepositoryIssuesValue = [UseQueryResult<GraphQLResponse<GetUserRepositoryQuery>, unknown>, UseCursorPaginationValue];

export const useRepositoryIssues = (options: UseRepositoryIssuesOptions): UseRepositoryIssuesValue => {
  const {
    username,
    repoName,
    ...pagination
  } = options;

  const issuePagination = useCursorPagination(pagination);

  const repoQuery = useQuery(['repository', username, repoName, issuePagination], () => getUserRepositoryByName(
    {
      username: username as string,
      repositoryName: repoName as string,
    },
    issuePagination,
  ), {
    keepPreviousData: true,
    enabled: !!username && !!repoName,
  });

  return [repoQuery, issuePagination];
};
