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
import useSWR from 'swr';
import { purchaseApi } from '@libs/api';
import { useRouter } from 'next/router';

const CommunityDetail: NextPage = () => {
  const { data: myData } = useSWR('/api/user');
  const { data } = useSWR(
    myData?.token ? `/payment/check/community/1` : null,
    () => purchaseApi.check('community', 1, myData?.token)
  );
  const router = useRouter();

  if (data === 'already purchased') {
    router.back();
  }

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
      <SEO
        title='커뮤니티'
        description='더이상 일방적인 강의는 그만, 실제 멘토와 함께 투자에 대한 질문과 응답하는 양방향적인  커뮤니티로 스터디하세요! 커뮤니티를 통해 경제적 자유로 가는 길에 부스터를 다시길 바랍니다.'
      />
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
