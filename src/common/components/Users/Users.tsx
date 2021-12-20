import * as React from 'react';

import * as S from './styled';

interface User {
  login: string;
  avatarUrl: string;
}

export interface UsersProps {
  data: {
    node: User;
  }[];
  onUserSelect: (login: string) => void;
}

export const Users = (props: UsersProps) => {
  const {
    data,
    onUserSelect,
  } = props;

  return (
    <S.UsersRoot>
      <S.Title>Users</S.Title>

      <S.UserList>
        {data.map((user) => (
          <S.User type="button" key={user.node.login} onClick={() => onUserSelect(user.node.login)}>
            <S.UserAvatar>
              <S.Icon src={user.node.avatarUrl} alt="" height={64} width={64} />
            </S.UserAvatar>

            <S.UserLogin>{user.node.login}</S.UserLogin>
          </S.User>
        ))}
      </S.UserList>
    </S.UsersRoot>
  );
};
