import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import useSWR from 'swr';

declare global {
  interface Window {
    google: any;
  }
}

export default function GoogleBtn() {
  const { mutate } = useSWR('/api/user');
  const router = useRouter();

  const login = () => {
    const { google } = window;

    const handleCredentialResponse = async (res: any) => {
      const { credential } = res;
      const data = jwt_decode(credential) as { [key: string]: any };
      const {
        data: { msg },
      } = await axios.post('/api/login', {
        type: 'google',
        id: data.sub + '',
      });
      // sns 로그인이 처음인 사용자
      if (msg && msg === 'need to signup') {
        router.push(
          {
            pathname: '/signup',
            query: {
              type: 'google',
              id: data.sub + '',
              name: data.name,
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
    };

    google?.accounts.id.initialize({
      client_id:
        '785668148402-iro2k5tes1khiami8lb88fasre89r3dl.apps.googleusercontent.com',
      callback: handleCredentialResponse,
    });

    google?.accounts.id.renderButton(document.querySelector('#googleLogin'), {
      size: 'large',
      text: 'Google 로그인',
      width: 330,
    });
    // google.accounts.id.prompt();
  };

  useEffect(() => {
    login();
  }, []);

  return (
    <>
      <div id='googleLogin' />
    </>
  );
}
