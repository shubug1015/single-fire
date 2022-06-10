import axios from 'axios';
import { useRouter } from 'next/router';
import useSWR from 'swr';

declare global {
  interface Window {
    naver: any;
    redirectToSignup: any;
  }
}

export default function NaverBtn() {
  const { mutate } = useSWR('/api/user');
  const router = useRouter();

  const login = () => {
    const { naver } = window;

    const naverLogin = new naver.LoginWithNaverId({
      clientId: 'kwfOzQiJp1UVpGvKPS5r', // ClientID
      callbackUrl: 'http://localhost:3000/naver', // Callback URL
      isPopup: true, // 팝업 형태로 인증 여부
      loginButton: {
        color: 'green', // 색상
        type: 3, // 버튼 크기
        height: '60', // 버튼 높이
      }, // 로그인 버튼 설정
    });
    naverLogin.init();
  };

  const handleNaverLogin = () => {
    login();
    const loginBtn: any = document.querySelector('#naverIdLogin')?.firstChild;
    loginBtn.click();

    window.redirectToSignup = async (profile: any) => {
      const {
        data: { msg },
      } = await axios.post('/api/login', {
        type: 'naver',
        id: profile.id,
      });
      // sns 로그인이 처음인 사용자
      if (msg && msg === 'need to signup') {
        router.push(
          {
            pathname: '/signup',
            query: {
              type: 'naver',
              id: profile.id,
              name: profile.name,
              phone_number: profile.mobile,
            },
          },
          '/signup'
        );
      }
      // sns 로그인을 했던 사용자
      else {
        const {
          data: { token, profile },
        } = await axios.get('/api/user');
        mutate({ ok: true, token, profile });
      }
    };
  };

  return (
    <>
      <div id='naverIdLogin' className='hidden' />
      <div
        onClick={handleNaverLogin}
        className='flex h-[3.688rem] cursor-pointer items-center justify-center rounded bg-[#03CF5D] text-lg font-medium transition-all hover:opacity-90'
      >
        NAVER 로그인
      </div>
    </>
  );
}
