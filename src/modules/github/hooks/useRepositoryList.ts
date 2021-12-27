import { useQuery, UseQueryResult } from 'react-query';

import { useCursorPagination, UseCursorPaginationOptions, UseCursorPaginationValue } from '@/common/hooks/useCursorPagination';

import { GetUserRepositoryListQuery } from '@/generated/types';
import { GraphQLResponse } from '@/modules/core/api/graphqlRequest';

import { getUserRepositories } from '../api';

export interface UseRepositoryListOptions extends Partial<UseCursorPaginationOptions> {
  username?: string;
}

export type UseRepositoryListValue = [UseQueryResult<GraphQLResponse<GetUserRepositoryListQuery>, unknown>, UseCursorPaginationValue];

export const useRepositoryList = (options: UseRepositoryListOptions): UseRepositoryListValue => {
  const {
    username,
    ...pagination
  } = options;

  const repoPagination = useCursorPagination(pagination);

  const reposQuery = useQuery(
    ['userRepositories', username, repoPagination],
    () => getUserRepositories(username as string, repoPagination),
    {
      enabled: !!username,
      keepPreviousData: true,
    },
  );

  return [reposQuery, repoPagination];
};
