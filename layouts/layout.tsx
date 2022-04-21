import Footer from '@components/footer';
import Header from '@components/header';
import { tokenAtom } from '@libs/client/atom';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  // const router = useRouter();
  // const [prevToken, setPrevToken] = useRecoilState(tokenAtom);

  // const getToken = async () => {
  //   try {
  //     const {
  //       data: { token },
  //     } = await axios.get('/api/auth');

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
    </div>
  );
}
