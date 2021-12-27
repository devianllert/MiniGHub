import * as React from 'react';
import Link from 'next/Link';

import { Center } from '@/components/system/Center';
import { Pagination } from '@/components/system/Pagination';

import * as S from './styled';
import { useRepositoryList } from '@/modules/github/hooks/useRepositoryList';
import { Skeleton } from '../system/Skeleton';

export interface RepositoriesProps {
  username?: string;
}

export const RepositoryList = (props: RepositoriesProps) => {
  const {
    username,
  } = props;

  const [reposQuery, pagination] = useRepositoryList({ username, size: 6 });

  const repositories = reposQuery.data?.data?.user?.repositories.nodes ?? [];
  const pageInfo = reposQuery.data?.data?.user?.repositories.pageInfo;

  const isEmpty = !repositories?.length;

  if (!username) return null;

  return (
    <S.RepositoriesRoot>
      <S.Header>
        <S.Title>Repositories</S.Title>
      </S.Header>

      <S.RepositoriesList>
        {!reposQuery.isFetching && isEmpty && (
          <Center>
            This user has no repositories
          </Center>
        )}

        {!reposQuery.isFetching && !isEmpty && repositories?.map((repository) => repository && (
          <li key={repository.id}>
            <Link href={repository.nameWithOwner} passHref>
              <S.Repository>
                <S.RepositoryInfo>{repository.name}</S.RepositoryInfo>

                <S.RepositoryInfo>
                  {repository.stargazerCount} stars / {repository.watchers.totalCount} watching
                </S.RepositoryInfo>
              </S.Repository>
            </Link>
          </li>
        ))}

        {reposQuery.isFetching && Array(6).fill(null).map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index}>
            <S.Repository>
              <Skeleton width="15%" />

              <Skeleton width="20%" />
            </S.Repository>
          </li>
        ))}
      </S.RepositoriesList>

      {!isEmpty && pagination && (
        <Pagination
          canNextPage={!pageInfo?.hasNextPage}
          canPreviousPage={!pageInfo?.hasPreviousPage}
          onNext={() => pagination.next(pageInfo?.endCursor)}
          onPrevious={() => pagination.previous(pageInfo?.startCursor)}
        />
      )}
    </S.RepositoriesRoot>
  );
};
