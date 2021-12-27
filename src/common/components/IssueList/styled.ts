import styled from '@emotion/styled';

export const RepoInfo = styled.div({
  display: 'flex',
  alignItem: 'center',
  justifyContent: 'space-between',
});

export const RepoTitle = styled.div({
  fontSize: 32,
  fontWeight: 500,
});

export const RepoStats = styled.div({
  display: 'flex',
});

export const IssuesRoot = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

export const IssueItem = styled.div({
  display: 'flex',
  alignItem: 'center',
  justifyContent: 'space-between',
  outline: 'none',
  background: 'none',
  border: 'none',
  marginTop: 8,
  marginBottom: 8,
});

export const IssueInfo = styled.span({
  fontSize: 16,
});

export const Title = styled.span({
  marginTop: 16,
  marginBottom: 16,
  fontSize: 24,
  fontWeight: 500,
});

export const Header = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 16,
});

export const NewIssueButton = styled.button({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 4,
  outline: 'none',
  backgroundColor: 'inherit',
});
