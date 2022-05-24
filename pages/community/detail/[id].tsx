import SEO from '@components/seo';
import BeforeScroll from '@components/community/detail/beforeScroll';
import Hero from '@components/community/detail/hero';
import Review from '@components/community/detail/review';
import WithPro from '@components/community/detail/withPro';
import type { GetServerSidePropsContext, NextPage } from 'next';
import Preview from '@components/community/detail/preview';
import Faq from '@components/community/detail/faq';
import Precaution from '@components/community/detail/precaution';
import Point from '@components/community/detail/point';
import Process from '@components/community/detail/process';
import Professional from '@components/community/detail/professional';

interface IProps {
  id: string;
}

const CommunityDetail: NextPage<IProps> = ({ id }) => {
  const clsFilter = (
    cls1: string,
    cls2: string,
    cls3: string,
    cls4: string
  ) => {
    if (id === '1') return cls1;
    if (id === '2') return cls2;
    if (id === '3') return cls3;
    return cls4;
  };
  return (
    <>
      <SEO title='커뮤니티' />
      <Hero />
      <Review clsFilter={clsFilter} />
      <BeforeScroll />
      <WithPro />
      <Professional />
      <Point />
      <Process />
      <Preview />
      <Faq />
      <Precaution />
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      id: ctx.params?.id,
    },
  };
};

export default CommunityDetail;
