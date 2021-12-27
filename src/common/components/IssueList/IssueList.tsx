import * as React from 'react';
import { useMutation } from 'react-query';

import { Center } from '@/components/system/Center';
import * as Modal from '@/components/system/Modal';
import { Pagination } from '@/components/system/Pagination';
import { Skeleton } from '@/components/system/Skeleton';
import { CreateIssueModal } from '@/components/CreateIssueModal';

import { createIssue } from '@/modules/github/api';
import { useRepositoryIssues } from '@/modules/github/hooks/useRepositoryIssues';

import * as S from './styled';

export interface IssuesProps {
  username?: string;
  repoName?: string;
}

export const IssueList = (props: IssuesProps) => {
  const {
    username,
    repoName,
  } = props;

  const [repoQuery, pagination] = useRepositoryIssues({
    username: username as string,
    repoName: repoName as string,
  });

  const createIssueMutation = useMutation(createIssue);

  const [isOpenModal, setIsOpenModal] = React.useState(false);

  const issues = (repoQuery.data?.data?.repository?.issues?.nodes ?? []);
  const repositoryId = repoQuery.data?.data?.repository?.id as string;

  const pageInfo = repoQuery.data?.data?.repository?.issues.pageInfo;
  const isEmpty = !issues?.length;

  const handleCreateIssue = async (title: string, description: string) => {
    const issue = {
      repositoryId,
      title,
      body: description,
    };

    await createIssueMutation.mutateAsync(issue);
    await repoQuery.refetch();

    setIsOpenModal(false);
  };

  return (
    <S.IssuesRoot>
      <S.RepoInfo>
        <S.RepoTitle>{repoQuery.data?.data?.repository?.name}</S.RepoTitle>
        <S.RepoStats>
          {repoQuery.data?.data?.repository?.stargazerCount} stars / {repoQuery.data?.data?.repository?.watchers.totalCount} watching
        </S.RepoStats>

      </S.RepoInfo>

      <S.Header>
        <S.Title>Open Issues</S.Title>

        <Modal.Root open={isOpenModal} onOpenChange={setIsOpenModal}>
          <Modal.StyledOverlay />

          <Modal.Trigger asChild>
            <S.NewIssueButton>New Issue</S.NewIssueButton>
          </Modal.Trigger>

          <CreateIssueModal onCreate={handleCreateIssue} />
        </Modal.Root>
      </S.Header>

      {!repoQuery.isFetching && isEmpty && (
        <Center>
          This repository has no issues
        </Center>
      )}

      {!repoQuery.isFetching && !isEmpty && issues?.map((issue) => issue && (
        <S.IssueItem key={issue.number}>
          <S.IssueInfo>Issue #{issue.number}</S.IssueInfo>

          <S.IssueInfo>
            {issue.createdAt} by {issue.author?.login}
          </S.IssueInfo>
        </S.IssueItem>
      ))}

      {repoQuery.isFetching && Array(5).fill(null)?.map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <S.IssueItem key={index}>
          <Skeleton width="5%" />

          <Skeleton width="20%" />
        </S.IssueItem>
      ))}

      {!isEmpty && pagination && (
        <Pagination
          canNextPage={!pageInfo?.hasNextPage}
          canPreviousPage={!pageInfo?.hasPreviousPage}
          onNext={() => pagination.next(pageInfo?.endCursor)}
          onPrevious={() => pagination.previous(pageInfo?.startCursor)}
        />
      )}
    </S.IssuesRoot>
  );
};
