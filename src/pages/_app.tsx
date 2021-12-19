import { AppProps } from 'next/app';

import { GlobalStyles } from '@/common/design/GlobalStyles';
import { ResetStyles } from '@/common/design/ResetStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ResetStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
