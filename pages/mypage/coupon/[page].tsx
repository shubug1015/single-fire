import CouponList from '@components/mypage/couponList';
import Header from '@components/mypage/header';
import Navigator from '@components/mypage/navigator';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { usersApi } from '@libs/api';
import { AuthResponse, useAuth } from '@libs/client/useAuth';
import type { GetServerSidePropsContext, NextPage } from 'next';
import cookies from 'next-cookies';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR, { SWRConfig } from 'swr';

const Coupon: NextPage<{ page: string }> = ({ page }) => {
  const { token } = useAuth({
    isPrivate: true,
  });
  const { data, error } = useSWR('myCouponList', () =>
    token ? usersApi.myCouponList(page, token) : null
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

              <CouponList data={data?.data.results} count={data?.data.count} />
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
    <Coupon page={page} />
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
