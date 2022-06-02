import { boot, loadScript } from '@components/channelService';
import Footer from '@components/footer';
import Header from '@components/header';
import Loader from '@components/loader';
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

  // const router = useRouter();
  // const [prevToken, setPrevToken] = useRecoilState(tokenAtom);

  // const getToken = async () => {
  //   try {
  //     const {
  //       data: { token },
  //     } = await axios.get('/api/user');

  //     // 토큰값이 이전과 변경이 있을때만 setState
  //     if (prevToken !== token) {
  //       setPrevToken(token);
  //     }
  //   } catch {
  //     alert('Error');
  //   }
  // };

  // useEffect(() => {
  //   getToken();
  // }, [router]);
  return (
    <div className='w-screen'>
      <Header />
      {children}
      <Footer />
      {isLoading && <Loader />}
    </div>
  );
}
