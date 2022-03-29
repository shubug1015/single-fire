import SEO from '@components/seo';
import type { NextPage } from 'next';

const Login: NextPage = () => {
  return (
    <>
      <SEO title='로그인' />
      <div className='h-screen'>로그인</div>
    </>
  );
};

export default Login;
