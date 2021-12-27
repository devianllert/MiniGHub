import * as React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Search } from '@/common/components/Search';
import { UserList } from '@/common/components/UserList';
import { RepositoryList } from '@/common/components/RepositoryList';
import { Container } from '@/common/components/system/Container';
import { MainHeader } from '@/layouts/main/MainHeader';

const Home: NextPage = () => {
  const router = useRouter();

  const [searchLogin, setSearchLogin] = React.useState('');
  const [selectedUser, setSelectedUser] = React.useState('');

  const handleSearch = (value: string) => {
    setSearchLogin(value);
    setSelectedUser('');

    const query = new URLSearchParams(window.location.search);
    query.set('search', value);

    router.replace({
      pathname: router.pathname,
      search: query.toString(),
    }) as unknown as void;
  };

  return (
    <>
      <Head>
        <title>MiniGHub</title>
        <meta name="description" content="Mini Github Client created with next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <MainHeader>
          <Search onSearch={handleSearch} />
        </MainHeader>

        <UserList
          search={searchLogin}
          selectedUser={selectedUser}
          onUserSelect={setSelectedUser}
        />

        <RepositoryList
          username={selectedUser}
        />
      </Container>
    </>
  );
};

export default Home;
