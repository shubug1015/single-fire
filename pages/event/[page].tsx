import EventList from '@components/event/eventList';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import useMutation from '@libs/client/useMutation';
import type { NextPage } from 'next';

const Event: NextPage = () => {
  //   const router = useRouter();
  //   const { page } = router.query;
  //   const [getData, { loading, data, error }] = useMutation(
  //     page ? usersApi.myCommunityList : null
  //   );

  //   useEffect(() => {
  //     getData({ req: { page, token } });
  //   }, [page]);
  //   console.log(data);
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
          <EventList data={[0, 1]} count={2} />
        </Layout>
      </>
      {/* )
      )} */}
    </>
  );
};

export default Event;
