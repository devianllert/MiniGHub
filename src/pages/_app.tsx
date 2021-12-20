import * as React from 'react';
import { AppProps } from 'next/app';
import { QueryClientProvider, Hydrate, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { REACT_QUERY_STATE_PROP_NAME } from '@/modules/core/rquery/react-query';
import { GlobalStyles } from '@/common/design/GlobalStyles';
import { ResetStyles } from '@/common/design/ResetStyles';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps[REACT_QUERY_STATE_PROP_NAME]}>
        <GlobalStyles />
        <ResetStyles />
        <Component {...pageProps} />

        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
