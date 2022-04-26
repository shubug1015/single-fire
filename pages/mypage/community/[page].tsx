import CommunityList from '@components/mypage/communityList';
import Header from '@components/mypage/header';
import Navigator from '@components/mypage/navigator';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { usersApi } from '@libs/api';
import { AuthResponse, useAuth } from '@libs/client/useAuth';
import type { GetServerSidePropsContext, NextPage } from 'next';
import cookies from 'next-cookies';
import { useRouter } from 'next/router';
import useSWR, { SWRConfig } from 'swr';

const MyCommunityList: NextPage<{ page: string }> = ({ page }) => {
  const { token } = useAuth({
    isPrivate: true,
  });
  const { data, error } = useSWR('myCommunityList', () =>
    token ? usersApi.myCommunityList(page, token) : null
  );
  const router = useRouter();

  if (error) {
    router.push('/');
  }
  return (
    <>
      <SEO title='마이페이지' />
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
              <CommunityList
                data={data?.data.results}
                count={data?.data.count}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

const Page: NextPage<{ fallback: AuthResponse; page: string }> = ({
  fallback,
  page,
}) => (
  <SWRConfig
    value={{
      fallback,
    }}
  >
    <MyCommunityList page={page} />
  </SWRConfig>
);

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { token } = cookies(ctx);
  const data = token ? await usersApi.myInfos(token) : null;
  return {
    props: {
      page: ctx.params?.page,
      fallback: {
        '/api/auth': {
          ok: true,
          token: token || null,
          profile: data?.data || null,
        },
      },
    },
  };
};

export default Page;
