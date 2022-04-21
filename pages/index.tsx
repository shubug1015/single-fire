import Banner from '@components/home/banner';
import Best from '@components/home/best';
import Community from '@components/home/community';
import Customized from '@components/home/customized';
import Top3 from '@components/home/top3';
import Loader from '@components/loader';
import SEO from '@components/seo';
import { API_URL, lecturesApi } from '@libs/api';
import type { GetServerSidePropsContext, NextPage } from 'next';
import useSWR, { SWRConfig } from 'swr';

interface IFallback {
  data: any[];
}

const Home: NextPage = () => {
  const { data } = useSWR(`${API_URL}/cms/main`);
  return (
    <>
      <SEO title='홈' />
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
  );
};

const Page: NextPage<{ fallback: IFallback }> = ({ fallback }) => (
  <SWRConfig
    value={{
      fallback,
    }}
  >
    <Home />
  </SWRConfig>
);

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { data } = await lecturesApi.mainLectureList();

  return {
    props: {
      fallback: {
        [`${API_URL}/cms/main`]: data,
      },
    },
  };
};

export default Page;
