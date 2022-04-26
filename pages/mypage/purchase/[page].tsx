import Header from '@components/mypage/header';
import Navigator from '@components/mypage/navigator';
import PurchaseList from '@components/mypage/purchaseList';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { usersApi } from '@libs/api';
import { AuthResponse, useAuth } from '@libs/client/useAuth';
import type { GetServerSidePropsContext, NextPage } from 'next';
import cookies from 'next-cookies';
import { useRouter } from 'next/router';
import useSWR, { SWRConfig } from 'swr';

const MyPurchaseList: NextPage<{ page: string }> = ({ page }) => {
  const { token } = useAuth({
    isPrivate: true,
  });
  const { data, error } = useSWR('myPurchaseList', () =>
    token ? usersApi.myPurchaseList(page, token) : null
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

          <div className='grow space-y-6'>
            <div className='flex space-x-5 text-lg font-medium'>
              <div>전체</div>
              <div className='text-[#afafaf]'>환불 내역</div>
            </div>

            <PurchaseList data={data?.data.results} count={data?.data.count} />
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
    <MyPurchaseList page={page} />
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
