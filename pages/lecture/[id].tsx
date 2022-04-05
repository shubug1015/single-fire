import Loader from '@components/loader';
import SEO from '@components/seo';
import { usersApi } from '@libs/api';
import useMutation from '@libs/client/useMutation';
import { getToken, setToken } from '@libs/token';
import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface IProps {
  token: string | null;
}

const MyLectureDetail: NextPage<IProps> = ({ token }) => {
  setToken({ token });

  const router = useRouter();
  const { id } = router.query;
  const [getData, { loading, data, error }] = useMutation(
    id ? usersApi.myLectureDetail : null
  );

  useEffect(() => {
    getData({ req: { id, token } });
  }, []);
  console.log(data);
  return (
    <>
      <SEO title={data?.name} />
      {loading ? <Loader /> : data && <></>}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return getToken(ctx);
};

export default MyLectureDetail;
