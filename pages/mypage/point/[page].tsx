import Loader from '@components/loader';
import Header from '@components/mypage/header';
import Navigator from '@components/mypage/navigator';
import PointList from '@components/mypage/pointList';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { usersApi } from '@libs/api';
import useMutation from '@libs/client/useMutation';
import withAuth from '@libs/server/withAuth';
import type { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface IProps {
  token: string | null;
}

const Coupon: NextPage<IProps> = ({ token }) => {
  const router = useRouter();
  const { page } = router.query;
  const [getData, { loading, data }] = useMutation(
    page ? usersApi.myPointList : null
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
                          {data.point.toLocaleString()} P
                        </div>
                      </div>

                      <div className='flex h-[4.278rem] w-1/2 items-center justify-between rounded-sm bg-[rgba(229,229,229,0.08)] pl-12 pr-10 text-lg'>
                        <div className='font-medium'>사용한 포인트</div>
                        <div className='font-bold'>
                          {data.used_point.toLocaleString()} P
                        </div>
                      </div>
                    </div>
                    {/* <CouponList data={[0, 1]} count={2} /> */}
                  </div>

                  <div className='space-y-6'>
                    <div className='text-lg font-medium'>사용내역</div>

                    <PointList data={data.results} count={data.count} />
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

export default Coupon;
