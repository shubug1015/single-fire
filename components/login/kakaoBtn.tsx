import axios from 'axios';
import { useRouter } from 'next/router';
import useSWR from 'swr';

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function KakaoBtn() {
  const { mutate } = useSWR('/api/user');
  const router = useRouter();

  const APP_KEY = 'dfbc77dacaac43d8eb6a6689cc2c0b40';

  const kakaoLogin = () => {
    const { Kakao } = window;

    if (!Kakao.isInitialized()) {
      Kakao.init(APP_KEY);
    }

    Kakao.Auth.login({
      success: async () => {
        Kakao.API.request({
          url: '/v2/user/me',
          success: async (res: any) => {
            const {
              data: { msg },
            } = await axios.post('/api/login', {
              type: 'kakao',
              id: res.id + '',
            });
            // sns 로그인이 처음인 사용자
            if (msg && msg === 'need to signup') {
              router.push(
                {
                  pathname: '/signup',
                  query: {
                    type: 'kakao',
                    id: res.id + '',
                    name: res.kakao_account.profile.nickname,
                    // phone_number: profile.mobile,
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
          },
          fail: (e: any) => {
            console.log(e);
          },
        });
      },
      fail: (e: any) => {
        console.log(e);
      },
    });
  };

  return (
    <div
      onClick={kakaoLogin}
      className='flex h-10 cursor-pointer items-center justify-center rounded bg-[#fee500] text-sm font-medium text-[#222222] transition-all hover:opacity-90'
    >
      kakao 로그인
    </div>
  );
}
