import styled from '@emotion/styled';
import { spacings } from '@/common/design/tokens/spacings';

export const Input = styled.input({
  dispay: 'flex',
  alignItems: 'center',
  fontSize: 16,
  padding: spacings[2],
  outline: 'none',
  border: '1px solid',
});

export const Button = styled.button({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `${spacings[2]}px ${spacings[3]}px`,
  backgroundColor: 'inherit',
  fontSize: 16,
  marginLeft: spacings[3],
  border: '1px solid',
  outline: 'none',
});

export const SearchRoot = styled.form({
  display: 'flex',
});
