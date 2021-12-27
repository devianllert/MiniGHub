import styled from '@emotion/styled';

export const RepositoriesRoot = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

export const RepositoriesList = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

export const Repository = styled.a({
  display: 'flex',
  alignItem: 'center',
  justifyContent: 'space-between',
  outline: 'none',
  background: 'none',
  border: 'none',
  padding: '8px 0',
  textDecoration: 'none',
  color: 'inherit',
});

export const RepositoryInfo = styled.span({
  fontSize: 16,
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
