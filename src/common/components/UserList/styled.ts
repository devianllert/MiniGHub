import styled from '@emotion/styled';
import { violet } from '@radix-ui/colors';

import { spacings } from '@/common/design/tokens/spacings';

export const UsersRoot = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

export const UserList = styled.ul({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: 24,
  padding: 0,
  margin: 0,
  listStyle: 'none',
});

export const UserItem = styled.li({
  display: 'flex',
  flex: 1,
});

export const User = styled.button({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  outline: 'none',
  border: 'none',
  backgroundColor: 'inherit',
  cursor: 'pointer',
  padding: 0,

  '&:disabled': {
    cursor: 'default',
  },
});

export const UserLogin = styled.span<{ selected?: boolean }>((props) => ({
  marginTop: spacings[3],
  fontSize: 16,
  ...(props.selected && {
    color: violet.violet11,
  }),
}));

export const UserAvatar = styled.div<{ selected?: boolean }>((props) => ({
  width: 256,
  height: 256,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 8,
  ...(props.selected && {
    boxShadow: `0px 0px 0px 4px ${violet.violet9}`,
  }),
}));

export const Icon = styled.img({
  borderRadius: 'inherit',
  flex: 1,
});

export const Title = styled.span({
  fontSize: 24,
  fontWeight: 500,
});

export const Header = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 32,
});
