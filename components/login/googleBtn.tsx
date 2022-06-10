import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';

declare global {
  interface Window {
    google: any;
  }
}

export default function GoogleBtn() {
  const login = () => {
    const { google } = window;

    const handleCredentialResponse = (res: any) => {
      const { credential } = res;
      const data = jwt_decode(credential);
      // console.log(data);
    };

    google.accounts.id.initialize({
      client_id:
        '137899663311-v5r7pknrvjjca9tmtkl0i4jsocg4e122.apps.googleusercontent.com',
      callback: handleCredentialResponse,
    });

    google.accounts.id.renderButton(document.querySelector('#googleLogin'), {
      size: 'large',
      text: 'Google 로그인',
      width: 400,
    });
    // google.accounts.id.prompt();
  };

  //   const handleGoogleLogin = () => {
  //     // login();
  //     console.log('b');
  //     const loginBtn: any = document.querySelector('#googleLogin');
  //     console.log(loginBtn);
  //     // console.log(loginBtn.querySelector('iframe').contentWindow.document);
  //     loginBtn.click();
  //   };

  useEffect(() => {
    login();
  }, []);

  return (
    <>
      <div id='googleLogin' />
      {/* <div
        onClick={handleGoogleLogin}
        className='flex h-[3.688rem] cursor-pointer items-center justify-center rounded bg-white text-lg font-medium text-[#141414] transition-all hover:opacity-90'
      >
        Google 로그인
      </div> */}
    </>
  );
}
