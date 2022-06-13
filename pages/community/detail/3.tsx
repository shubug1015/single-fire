import SEO from '@components/seo';
import BeforeScroll from '@components/community/detail/3/beforeScroll';
import Hero from '@components/community/detail/3/hero';
import Review from '@components/community/detail/3/review';
import WithPro from '@components/community/detail/3/withPro';
import type { GetServerSidePropsContext, NextPage } from 'next';
import Preview from '@components/community/detail/3/preview';
import Faq from '@components/community/detail/3/faq';
import Precaution from '@components/community/detail/3/precaution';
import Point from '@components/community/detail/3/point';
import Process from '@components/community/detail/3/process';
import Professional from '@components/community/detail/3/professional';
import { useUser } from '@libs/client/useUser';

const CommunityDetail: NextPage = () => {
  const { token } = useUser({ isPrivate: true });
  const clsFilter = (
    cls1: string,
    cls2: string,
    cls3: string,
    cls4: string
  ) => {
    return cls3;
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
