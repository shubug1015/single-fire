import type { AppProps } from 'next/app';
import Layout from '@layouts/layout';
import '@styles/global.css';
import { RecoilRoot } from 'recoil';
import { SWRConfig } from 'swr';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => fetch(url).then((res) => res.json()),
      }}
    >
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </SWRConfig>
  );
}

export default MyApp;
