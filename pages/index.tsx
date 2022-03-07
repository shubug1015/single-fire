import Banner from '@components/home/banner';
import Best from '@components/home/best';
import Community from '@components/home/community';
import Customized from '@components/home/customized';
import Top3 from '@components/home/top3';
import SEO from '@components/seo';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <SEO title='홈' />
      <Banner />
      <Best />
      <Customized />
      <Top3 />
      <Community />
    </>
  );
};

export default Home;
