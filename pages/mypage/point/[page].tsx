import Header from '@components/mypage/header';
import Navigator from '@components/mypage/navigator';
import PointList from '@components/mypage/pointList';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { usersApi } from '@libs/api';
import { AuthResponse, useAuth } from '@libs/client/useAuth';
import type { GetServerSidePropsContext, NextPage } from 'next';
import cookies from 'next-cookies';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR, { SWRConfig } from 'swr';

const Point: NextPage<{ page: string }> = ({ page }) => {
  const { token } = useAuth({
    isPrivate: true,
  });
  const { data, error } = useSWR('myPointList', () =>
    token ? usersApi.myPointList(page, token) : null
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
              <div className='flex space-x-5'>
                <Link href='/mypage/coupon/1'>
                  <a>
                    <div className='text-lg font-medium text-[#afafaf]'>
                      쿠폰
                    </div>
                  </a>
                </Link>

                <div className='text-lg font-medium'>포인트</div>
              </div>

              <div className='flex justify-between space-x-4'>
                <div className='flex h-[4.278rem] w-1/2 items-center justify-between rounded-sm bg-[rgba(229,229,229,0.08)] pl-12 pr-10 text-lg'>
                  <div className='font-medium'>보유 포인트</div>
                  <div className='font-bold'>
                    {data?.data.point.toLocaleString()} P
                  </div>
                </div>

                <div className='flex h-[4.278rem] w-1/2 items-center justify-between rounded-sm bg-[rgba(229,229,229,0.08)] pl-12 pr-10 text-lg'>
                  <div className='font-medium'>사용한 포인트</div>
                  <div className='font-bold'>
                    {data?.data.used_point.toLocaleString()} P
                  </div>
                </div>
              </div>
            </div>

            <div className='space-y-6'>
              <div className='text-lg font-medium'>사용내역</div>

              <PointList
                data={data?.data.results}
                totalItems={data?.data.count}
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
    <Point page={page} />
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
