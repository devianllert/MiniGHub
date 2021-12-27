import * as React from 'react';

import { GetUserByLoginQuery } from '@/generated/types';
import { useUserList } from '@/modules/github/hooks/useUserList';

import * as S from './styled';
import { Skeleton } from '../system/Skeleton';

type SearchedTypes = NonNullable<GetUserByLoginQuery['search']['nodes']>[0];
type UserType = Extract<SearchedTypes, { __typename?: 'User' }> | null | undefined;

export interface UserListProps {
  search?: string;
  selectedUser?: string;
  onUserSelect: (login: string) => void;
}

export const UserList = (props: UserListProps) => {
  const {
    search,
    selectedUser,
    onUserSelect,
  } = props;

  const [usersQuery] = useUserList({ searchLogin: search });

  const users = usersQuery.data?.data?.search.nodes ?? [];

  if (!search) return null;

  return (
    <S.UsersRoot>
      <S.Header>
        <S.Title>Users</S.Title>
      </S.Header>

      {usersQuery.isLoading && (
        <S.UserList>
          {Array(5).fill(null).map(
            (_, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <S.UserItem key={index}>
                <S.User disabled>
                  <Skeleton variant="rectangular">
                    <S.UserAvatar />
                  </Skeleton>

                  <Skeleton width="40%" style={{ marginTop: 16 }} />
                </S.User>
              </S.UserItem>
            ),
          )}
        </S.UserList>
      )}

      {!usersQuery.isLoading && (
        <S.UserList>
          {(users as UserType[])?.map(
            (user, index) => user && (
              <S.UserItem key={user.login || index}>
                <S.User type="button" onClick={() => onUserSelect(user.login)}>
                  <S.UserAvatar selected={selectedUser === user.login}>
                    <S.Icon src={user.avatarUrl} alt={user.login} />
                  </S.UserAvatar>

                  <S.UserLogin selected={selectedUser === user.login}>{user.login || 'Unknown'}</S.UserLogin>
                </S.User>
              </S.UserItem>
            ),
          )}
        </S.UserList>
      )}

    </S.UsersRoot>
  );
};
