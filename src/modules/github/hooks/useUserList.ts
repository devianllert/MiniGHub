import { useQuery, UseQueryResult } from 'react-query';

import { useCursorPagination, UseCursorPaginationValue } from '@/common/hooks/useCursorPagination';

import { GetUserByLoginQuery } from '@/generated/types';
import { GraphQLResponse } from '@/modules/core/api/graphqlRequest';

import { CursorPagination, getUsers } from '../api';

export interface UseRepositoryListOptions extends Partial<CursorPagination> {
  searchLogin?: string;
}

export type UseRepositoryListValue = [UseQueryResult<GraphQLResponse<GetUserByLoginQuery>, unknown>, UseCursorPaginationValue];

export const useUserList = (options: UseRepositoryListOptions): UseRepositoryListValue => {
  const {
    searchLogin,
    ...pagination
  } = options;

  const usersPagination = useCursorPagination(pagination);

  const usersQuery = useQuery(['users', searchLogin], () => getUsers(searchLogin as string), {
    enabled: !!searchLogin,
  });

  return [usersQuery, usersPagination];
};
