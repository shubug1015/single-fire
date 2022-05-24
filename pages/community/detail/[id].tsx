import SEO from '@components/seo';
import BeforeScroll from '@components/test/beforeScroll';
import Hero from '@components/test/hero';
import Review from '@components/test/review';
import WithPro from '@components/test/withPro';
import type { GetServerSidePropsContext, NextPage } from 'next';
import Preview from '@components/test/preview';
import Faq from '@components/test/faq';
import Precaution from '@components/test/precaution';
import Point from '@components/test/point';
import Process from '@components/test/process';
import Professional from '@components/test/professional';

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
