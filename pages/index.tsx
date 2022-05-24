import Banner from '@components/home/banner';
import Best from '@components/home/best';
import Community from '@components/home/community';
import Customized from '@components/home/customized';
import Top3 from '@components/home/top3';
import SEO from '@components/seo';
import { lecturesApi } from '@libs/api';
import type { NextPage } from 'next';
import useSWR from 'swr';

interface IFallback {
  data: any[];
}

const Home: NextPage = () => {
  const { data } = useSWR('/cms/main', () => lecturesApi.mainLectureList());
  return (
    <>
      <SEO title='홈' />
      <Banner data={data?.main_banner} />
      <Best data={data?.best_class.map((i: any) => i.lecture)} />
      <Customized />
      <Top3
        coin={data?.coin_class.map((i: any) => i.lecture)}
        realty={data?.realty_class.map((i: any) => i.lecture)}
        stock={data?.stock_class.map((i: any) => i.lecture)}
      />
      <Community />
    </>
  );
};

export default Home;
