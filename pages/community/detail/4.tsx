import SEO from '@components/seo';
// import BeforeScroll from '@components/community/detail/beforeScroll';
// import Hero from '@components/community/detail/hero';
// import Review from '@components/community/detail/review';
// import WithPro from '@components/community/detail/withPro';
import type { GetServerSidePropsContext, NextPage } from 'next';
// import Preview from '@components/community/detail/preview';
// import Faq from '@components/community/detail/faq';
// import Precaution from '@components/community/detail/precaution';
// import Point from '@components/community/detail/point';
// import Process from '@components/community/detail/process';
// import Professional from '@components/community/detail/professional';

const CommunityDetail: NextPage = () => {
  const clsFilter = (
    cls1: string,
    cls2: string,
    cls3: string,
    cls4: string
  ) => {
    return cls4;
  };
  return (
    <>
      <SEO title='커뮤니티' />
      {/* <Hero />
      <Review clsFilter={clsFilter} />
      <BeforeScroll clsFilter={clsFilter} />
      <WithPro />
      <Professional clsFilter={clsFilter} />
      <Point clsFilter={clsFilter} />
      <Process clsFilter={clsFilter} />
      <Preview clsFilter={clsFilter} />
      <Faq clsFilter={clsFilter} />
      <Precaution /> */}
    </>
  );
};

export default CommunityDetail;
