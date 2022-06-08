import { boot, loadScript } from '@components/channelService';
import Footer from '@components/footer';
import Header from '@components/header';
import Loader from '@components/loader';
import { pageview } from '@libs/client/ga';
import { useRouter } from 'next/router';
// import { tokenAtom } from '@libs/client/atom';
// import axios from 'axios';
// import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
// import { useRecoilState } from 'recoil';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // 로더
  useEffect(() => {
    router.events.on('routeChangeStart', () => setIsLoading(true));
    router.events.on('routeChangeComplete', () => setIsLoading(false));
    return () => {
      router.events.off('routeChangeStart', () => setIsLoading(true));
      router.events.on('routeChangeComplete', () => setIsLoading(false));
    };
  }, []);

  // 채널톡
  useEffect(() => {
    loadScript();
    boot({
      pluginKey: '12902098-1465-47de-a65c-766dc886bd48',
    });
  }, []);

  // GA
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);
  return (
    <div className='w-screen'>
      <Header />
      {children}
      <Footer />
      {isLoading && <Loader />}
    </div>
  );
}
