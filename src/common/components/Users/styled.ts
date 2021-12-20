import styled from '@emotion/styled';

import { spacings } from '@/common/design/tokens/spacings';

export const UsersRoot = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginTop: spacings[5],
});

export const User = styled.button({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: spacings[4],
  marginRight: spacings[4],
  outline: 'none',
  border: 'none',
  backgroundColor: 'inherit',
  cursor: 'pointer',
});

export const UserLogin = styled.span({
  marginTop: spacings[3],
  fontSize: 16,
});

export const UserAvatar = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10,
});

export const Icon = styled.img({
  borderRadius: 'inherit',
});

export const Title = styled.span({
  fontSize: 24,
});

export const UserList = styled.div({
  display: 'flex',
  marginTop: 32,
});
