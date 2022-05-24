import type { AppProps } from 'next/app';
import Layout from '@layouts/layout';
import '@styles/global.css';
import { RecoilRoot } from 'recoil';
import { SWRConfig } from 'swr';
import axios from 'axios';

function MyApp({ Component, pageProps }: AppProps) {
  // const API_URL = 'https://api.xn--o22bp6a0zk.com';
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => axios.get(url).then((res) => res.data),
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
