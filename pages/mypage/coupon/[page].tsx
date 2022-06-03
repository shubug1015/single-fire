import CouponList from '@components/mypage/couponList';
import Header from '@components/mypage/header';
import Navigator from '@components/mypage/navigator';
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

const Coupon: NextPage<IProps> = ({ page }) => {
  const { token } = useUser({
    isPrivate: true,
  });
  const { data, error } = useSWR(
    token ? `/mypage/coupon?page=${page}` : null,
    () => usersApi.myCouponList(page, token as string)
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

          <div className='grow md:mt-8'>
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

              <CouponList data={data?.results} totalItems={data?.count} />
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

export default Coupon;
