import { GetServerSidePropsContext } from 'next';
import cookies from 'next-cookies';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { tokenAtom } from './atom';

// 로그인, 회원가입 시 쿠키에 저장할 토큰 설정
export const tokenSettings = (token: string) => {
  const path = '/'; // 쿠키 저장 경로
  const maxAge = 60 * 60 * 24 * 7; // 1주일 후 쿠기 만료
  const secure = 'Secure'; // 보안
  const httpOnly = 'HttpOnly'; // 보안
  const sameSite = 'Strict'; // 보안

  return `token=${token}; path=${path}; Max-Age=${maxAge}; ${secure}; ${httpOnly}; SameSite=${sameSite}`;
};

// NextJS 서버의 쿠키에서 토큰값을 가져온 후 페이지의 props로 전달
export const getToken = (ctx: GetServerSidePropsContext) => {
  const {
    req: {
      headers: { cookie },
    },
  } = ctx;

  if (cookie) {
    const { token } = cookies(ctx);

    if (token && token.length > 0) {
      return {
        props: {
          token,
        },
      };
    }
  }
  return {
    props: {
      token: null,
    },
  };
};

interface IProps {
  token: any;
  redirectUrl?: string | null;
}

// 가져온 토큰값을 Recoil에 setState
export const setToken = ({ token, redirectUrl }: IProps) => {
  const router = useRouter();
  const [prevToken, setPrevToken] = useRecoilState(tokenAtom);
  // console.log(router.pathname, 'out', prevToken, token);
  useEffect(() => {
    // console.log('in', prevToken, token);
    // 토큰값이 이전과 변경이 있을때만 setState
    if (prevToken !== token) {
      setPrevToken(token);
    }

    // 토큰값이 있고 로그인 후 접근 불가능한 페이지는 리다이렉트
    if (token && token.length > 0) {
      if (redirectUrl) {
        router.replace(redirectUrl);
      }
    }
    // 토큰값이 없고 로그인 전 접근 불가능한 페이지는 리다이렉트
    if (!token) {
      if (redirectUrl) {
        router.replace(redirectUrl);
      }
    }
  }, []);
};
