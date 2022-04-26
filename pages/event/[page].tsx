import EventList from '@components/event/eventList';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import type { GetServerSidePropsContext, NextPage } from 'next';

const Event: NextPage<{ page: string }> = ({ page }) => {
  //   const router = useRouter();
  return (
    <>
      <SEO title='이벤트' />
      {/* {loading ? (
        <Loader />
      ) : (
        data && ( */}
      <>
        <Layout padding='pt-24 pb-44'>
          <div className='mb-14 text-2xl font-bold'>이벤트</div>
          <EventList data={[0, 1]} totalItems={2} />
        </Layout>
      </>
      {/* )
      )} */}
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
