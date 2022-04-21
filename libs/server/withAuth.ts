import { GetServerSidePropsContext } from 'next';
import cookies from 'next-cookies';

interface IProps {
  ctx: GetServerSidePropsContext;
  isPrivate: boolean;
}

export default function withAuth({ ctx, isPrivate }: IProps) {
  const { token } = cookies(ctx);

  // 로그인 상태일때 페이지 접근 권한
  if (token) {
    return isPrivate
      ? {
          props: { token },
        }
      : {
          redirect: {
            destination: '/',
            permanent: false,
          },
        };
  }
  // 로그아웃 상태일때 페이지 접근 권한
  else {
    return isPrivate
      ? {
          redirect: {
            destination: '/login',
            permanent: false,
          },
        }
      : {
          props: { token: null },
        };
  }
}
