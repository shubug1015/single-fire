import SEO from '@components/seo';
import BeforeScroll from '@components/community/detail/1/beforeScroll';
import Hero from '@components/community/detail/1/hero';
import Review from '@components/community/detail/1/review';
import WithPro from '@components/community/detail/1/withPro';
import type { NextPage } from 'next';
import Preview from '@components/community/detail/1/preview';
import Faq from '@components/community/detail/1/faq';
import Precaution from '@components/community/detail/1/precaution';
import Point from '@components/community/detail/1/point';
import Process from '@components/community/detail/1/process';
import Professional from '@components/community/detail/1/professional';

const CommunityDetail: NextPage = () => {
  const clsFilter = (
    cls1: string,
    cls2: string,
    cls3: string,
    cls4: string
  ) => {
    return cls1;
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
