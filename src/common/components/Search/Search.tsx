import * as React from 'react';

import * as S from './styled';

export interface SearchProps {
  onSearch: (value: string) => void;
}

export const Search = (props: SearchProps): JSX.Element => {
  const { onSearch } = props;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    onSearch(data.username.toString());
  };

  return (
    <S.SearchRoot onSubmit={handleSubmit}>
      <S.Input type="text" name="username" placeholder="Search Users..." />
      <S.Button type="submit">Search</S.Button>
    </S.SearchRoot>
  );
};
