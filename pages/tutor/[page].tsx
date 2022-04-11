import Banner from '@components/tutor/banner';
import TutorList from '@components/tutor/tutorList';
import SEO from '@components/seo';
import { lecturesApi } from '@libs/api';
import useMutation from '@libs/client/useMutation';
import { getToken, setToken } from '@libs/token';
import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Loader from '@components/loader';

interface IProps {
  token: string | null;
}

const Tutor: NextPage<IProps> = ({ token }) => {
  setToken({ token });

  const router = useRouter();
  const { page } = router.query;
  const [getData, { loading, data, error }] = useMutation(
    page ? lecturesApi.tutorList : null
  );

  useEffect(() => {
    getData({ req: page });
  }, []);
  return (
    <>
      <SEO title='강사소개' />
      {loading ? (
        <Loader />
      ) : (
        data && (
          <>
            <Banner />
            <TutorList
              title='강사소개'
              data={data.results}
              count={data.count}
            />
          </>
        )
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return getToken(ctx);
};

export default Tutor;
