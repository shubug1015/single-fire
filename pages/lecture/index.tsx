import Navigator from '@components/lecture/navigator';
import SEO from '@components/seo';
import { lecturesApi } from '@libs/api';
import useMutation from '@libs/client/useMutation';
import { getToken, setToken } from '@libs/token';
import type { GetServerSideProps, NextPage } from 'next';
import { useEffect } from 'react';
import Loader from '@components/loader';
import Banner from '@components/lecture/banner';
import Best from '@components/lecture/best';

interface IProps {
  token: string | null;
}

const Lecture: NextPage<IProps> = ({ token }) => {
  setToken({ token });

  const [getData, { loading, data, error }] = useMutation(
    lecturesApi.topLectureList
  );

  useEffect(() => {
    getData({ req: {} });
  }, []);
  return (
    <>
      <SEO title='BEST 클래스' />
      {loading ? (
        <Loader />
      ) : (
        data && (
          <>
            <Banner />
            <Navigator />
            <Best {...data} />
          </>
        )
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return getToken(ctx);
};

export default Lecture;
