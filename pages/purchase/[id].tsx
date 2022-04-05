import Loader from '@components/loader';
import SEO from '@components/seo';
import { lecturesApi } from '@libs/api';
import useMutation from '@libs/client/useMutation';
import { getToken, setToken } from '@libs/token';
import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface IProps {
  token: string | null;
}

const Purchase: NextPage<IProps> = ({ token }) => {
  setToken({ token, redirectUrl: token && token.length > 0 ? null : '/login' });

  const router = useRouter();
  const { id } = router.query;
  const [getData, { loading, data, error }] = useMutation(
    id ? lecturesApi.detail : null
  );

  useEffect(() => {
    getData({ req: id });
  }, []);
  console.log(data);
  return (
    <>
      <SEO title='결제' />
      {loading ? <Loader /> : null}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return getToken(ctx);
};

export default Purchase;
