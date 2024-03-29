import EventList from '@components/event/eventList';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { eventApi } from '@libs/api';
import type { GetServerSidePropsContext, NextPage } from 'next';
import useSWR from 'swr';

const Event: NextPage<{ page: string }> = ({ page }) => {
  const { data } = useSWR(`/event?page=${page}`, () =>
    eventApi.eventList(page)
  );
  return (
    <>
      <SEO
        title='이벤트'
        description='경제적 자유를 꿈꾸는 파이어족을 위해 밀레니얼 머니스쿨만의 이벤트를 소개해드립니다.'
      />
      <Layout padding='pt-24 pb-44 md:py-10'>
        <div className='mb-14 text-2xl font-bold md:mb-6 md:text-xl'>
          이벤트
        </div>
        <EventList data={data?.results} totalItems={data?.count} />
      </Layout>
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      page: ctx.params?.page,
    },
  };
};

export default Event;
