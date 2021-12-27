import * as React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { Search } from '@/common/components/Search';
import { Container } from '@/common/components/system/Container';
import { MainHeader } from '@/layouts/main/MainHeader';
import { IssueList } from '@/common/components/IssueList';

const RepositoryPage: NextPage = () => {
  const router = useRouter();

  const {
    username,
    repoName,
  } = router.query;

  const handleSearch = async (value: string) => {
    await router.push(`/?search=${value}`) as unknown as void;
  };

  return (
    <>
      <Head>
        <title>MiniGHub | {username}/{repoName}</title>
        <meta name="description" content="Mini Github Client created with next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <MainHeader>
          <Search onSearch={handleSearch} />
        </MainHeader>

        <IssueList
          username={username as (string | undefined)}
          repoName={repoName as (string | undefined)}
        />
      </Container>
    </>
  );
};

export default RepositoryPage;
