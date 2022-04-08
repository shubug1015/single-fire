import EventList from '@components/event/eventList';
import Loader from '@components/loader';
import CommunityList from '@components/mypage/communityList';
import Header from '@components/mypage/header';
import Navigator from '@components/mypage/navigator';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { usersApi } from '@libs/api';
import useMutation from '@libs/client/useMutation';
import { getToken, setToken } from '@libs/token';
import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface IProps {
  token: string | null;
}

const Event: NextPage<IProps> = ({ token }) => {
  setToken({ token });

  //   const router = useRouter();
  //   const { page } = router.query;
  //   const [getData, { loading, data, error }] = useMutation(
  //     page ? usersApi.myCommunityList : null
  //   );

  //   useEffect(() => {
  //     getData({ req: { page, token } });
  //   }, []);
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return getToken(ctx);
};

export default Event;
