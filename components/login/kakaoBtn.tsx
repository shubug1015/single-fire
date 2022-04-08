import axios from 'axios';
import { useRouter } from 'next/router';

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function KakaoBtn() {
  const router = useRouter();
  const APP_KEY = 'a78245cc3114147dd84f65c96e04e5c3';

  const kakaoLogin = () => {
    const { Kakao } = window;

    if (!Kakao.isInitialized()) {
      Kakao.init(APP_KEY);
    }

    Kakao.Auth.login({
      success: () => {
        Kakao.API.request({
          url: '/v2/user/me',
          success: async (res: any) => {
            const req = { type: 'kakao', id: res.id };
            const {
              data: {
                data: { msg },
              },
            } = await axios.post('/api/login', req);

            if (msg === 'need to signup') {
              console.log(res);
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
      className='flex cursor-pointer justify-center rounded bg-[#fee500] py-4 text-lg font-medium text-[#222222] transition-all hover:opacity-90'
    >
      kakao 로그인
    </div>
  );
}
