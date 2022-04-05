import Banner from '@components/home/banner';
import Best from '@components/home/best';
import Community from '@components/home/community';
import Customized from '@components/home/customized';
import Top3 from '@components/home/top3';
import Loader from '@components/loader';
import SEO from '@components/seo';
import { lecturesApi } from '@libs/api';
import useMutation from '@libs/client/useMutation';
import { getToken, setToken } from '@libs/token';
import type { GetServerSideProps, NextPage } from 'next';
import { useEffect } from 'react';

interface IProps {
  token: string | null;
}

const Home: NextPage<IProps> = ({ token }) => {
  setToken({ token });

  const [getData, { loading, data, error }] = useMutation(
    lecturesApi.mainLectureList
  );

  useEffect(() => {
    getData({ req: {} });
  }, []);
  return (
    <>
      <SEO title='홈' />
      {loading ? (
        <Loader />
      ) : (
        data && (
          <>
            <Banner data={data.main_banner} />
            <Best data={data.best_class.map((i: any) => i.lecture)} />
            <Customized />
            <Top3
              coin={data.coin_class.map((i: any) => i.lecture)}
              realty={data.realty_class.map((i: any) => i.lecture)}
              stock={data.stock_class.map((i: any) => i.lecture)}
            />
            <Community />
          </>
        )
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return getToken(ctx);
};

export default Home;
