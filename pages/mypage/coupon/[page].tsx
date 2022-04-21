import Loader from '@components/loader';
import CouponList from '@components/mypage/couponList';
import Header from '@components/mypage/header';
import Navigator from '@components/mypage/navigator';
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
  const [getData, { loading, data, error }] = useMutation(
    page ? usersApi.myCouponList : null
  );

  useEffect(() => {
    getData({ req: token });
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

                <div className='grow'>
                  <div className='space-y-6'>
                    <div className='flex space-x-5'>
                      <div className='text-lg font-medium'>쿠폰</div>

                      <Link href='/mypage/point/1'>
                        <a>
                          <div className='text-lg font-medium text-[#afafaf]'>
                            포인트
                          </div>
                        </a>
                      </Link>
                    </div>

                    <CouponList data={data.results} count={data.count} />
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
