import SEO from '@components/seo';
import BeforeScroll from '@components/community/detail/2/beforeScroll';
import Hero from '@components/community/detail/2/hero';
import Review from '@components/community/detail/2/review';
import WithPro from '@components/community/detail/2/withPro';
import type { GetServerSidePropsContext, NextPage } from 'next';
import Preview from '@components/community/detail/2/preview';
import Faq from '@components/community/detail/2/faq';
import Precaution from '@components/community/detail/2/precaution';
import Point from '@components/community/detail/2/point';
import Process from '@components/community/detail/2/process';
import Professional from '@components/community/detail/2/professional';

const CommunityDetail: NextPage = () => {
  const clsFilter = (
    cls1: string,
    cls2: string,
    cls3: string,
    cls4: string
  ) => {
    return cls2;
  };
  return (
    <>
      <SEO title='커뮤니티' />
      <Hero />
      <Review clsFilter={clsFilter} />
      <BeforeScroll clsFilter={clsFilter} />
      <WithPro />
      <Professional clsFilter={clsFilter} />
      <Point clsFilter={clsFilter} />
      <Process clsFilter={clsFilter} />
      <Preview clsFilter={clsFilter} />
      <Faq clsFilter={clsFilter} />
      <Precaution />
    </>
  );
};

export default CommunityDetail;
