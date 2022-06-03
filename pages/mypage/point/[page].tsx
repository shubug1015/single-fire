import Header from '@components/mypage/header';
import Navigator from '@components/mypage/navigator';
import PointList from '@components/mypage/pointList';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { usersApi } from '@libs/api';
import { useUser } from '@libs/client/useUser';
import type { GetServerSidePropsContext, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR from 'swr';

interface IProps {
  page: string;
}

const Point: NextPage<IProps> = ({ page }) => {
  const { token } = useUser({
    isPrivate: true,
  });
  const { data, error } = useSWR(
    token ? `/mypage/point?page=${page}` : null,
    () => usersApi.myPointList(page, token as string)
  );
  const router = useRouter();

  if (error) {
    router.push('/');
  }

  return (
    <>
      <SEO title='마이페이지' />

      <Layout padding='pt-20 pb-44 md:pt-4'>
        <Header />

        <div className='mt-[4.5rem] flex space-x-10 md:mt-0 md:block md:space-x-0'>
          <Navigator />

          <div className='grow space-y-10 md:mt-8'>
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
                <div className='flex h-[4.278rem] w-1/2 items-center justify-between rounded-sm bg-[rgba(229,229,229,0.08)] pl-12 pr-10 text-lg md:pl-6 md:pr-6 md:text-sm'>
                  <div className='font-medium'>보유 포인트</div>
                  <div className='font-bold'>
                    {data?.point.toLocaleString()} P
                  </div>
                </div>

                <div className='flex h-[4.278rem] w-1/2 items-center justify-between rounded-sm bg-[rgba(229,229,229,0.08)] pl-12 pr-10 text-lg md:pl-6 md:pr-6 md:text-sm'>
                  <div className='font-medium'>사용한 포인트</div>
                  <div className='font-bold'>
                    {data?.used_point.toLocaleString()} P
                  </div>
                </div>
              </div>
            </div>

            <div className='space-y-6'>
              <div className='text-lg font-medium'>사용내역</div>

              <PointList data={data?.results} totalItems={data?.count} />
            </div>
          </div>
        </div>
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

export default Point;
