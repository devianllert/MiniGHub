import * as React from 'react';
import { useRouter } from 'next/router';

import * as S from './styled';

export interface SearchProps {
  onSearch: (value: string) => void;
}

export const Search = (props: SearchProps): JSX.Element => {
  const { onSearch } = props;

  const router = useRouter();
  const searchParam = (router.query.search ?? '') as string;

  React.useEffect(() => {
    if (searchParam) {
      onSearch(searchParam);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParam]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    onSearch(data.username.toString());
  };

  return (
    <S.SearchRoot onSubmit={handleSubmit}>
      <S.Input
        type="text"
        defaultValue={searchParam}
        name="username"
        placeholder="Search Users..."
      />

      <S.Button type="submit">Search</S.Button>
    </S.SearchRoot>
  );
};
