import Loader from '@components/loader';
import CommunityList from '@components/mypage/communityList';
import Header from '@components/mypage/header';
import Navigator from '@components/mypage/navigator';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { usersApi } from '@libs/api';
import useMutation from '@libs/client/useMutation';
import withAuth from '@libs/server/withAuth';
import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface IProps {
  token: string | null;
}

const MyCommunityList: NextPage<IProps> = ({ token }) => {
  const router = useRouter();
  const { page } = router.query;
  const [getData, { loading, data, error }] = useMutation(
    page ? usersApi.myCommunityList : null
  );

  useEffect(() => {
    getData({ req: { page, token } });
  }, [page]);
  return (
    <>
      <SEO title='마이페이지' />
      {loading ? (
        <Loader />
      ) : (
        data && (
          <>
            <Layout padding='pt-20 pb-44'>
              <Header />

              <div className='mt-[4.5rem] flex space-x-10'>
                <Navigator />

                <div className='grow space-y-10'>
                  <div className='space-y-6'>
                    <div className='text-lg font-medium'>커뮤니티</div>
                    <div className='flex space-x-2'>
                      <div className='flex h-[4.5rem] w-[28rem] items-center rounded-sm bg-[rgba(229,229,229,0.08)] px-6 text-lg font-medium'>
                        구매한 커뮤니티 타이틀
                      </div>
                      <div className='flex aspect-square w-[4.5rem] items-center rounded-sm bg-[rgba(229,229,229,0.08)] px-6 text-2xl'>
                        👉
                      </div>
                    </div>
                  </div>

                  <div className='space-y-6'>
                    <div className='text-lg font-medium'>게시글</div>
                    <CommunityList data={data.results} count={data.count} />
                  </div>
                </div>
              </div>
            </Layout>
          </>
        )
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return withAuth({ ctx, isPrivate: true });
};

export default MyCommunityList;
