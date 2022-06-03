import Header from '@components/mypage/header';
import Navigator from '@components/mypage/navigator';
import PurchaseList from '@components/mypage/purchaseList';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { usersApi } from '@libs/api';
import { useUser } from '@libs/client/useUser';
import type { GetServerSidePropsContext, NextPage } from 'next';
import cookies from 'next-cookies';
import { useRouter } from 'next/router';
import useSWR from 'swr';

interface IProps {
  page: string;
}

const MyPurchaseList: NextPage<IProps> = ({ page }) => {
  const { token } = useUser({
    isPrivate: true,
  });
  const { data, error } = useSWR(
    token ? `/mypage/payment?page=${page}` : null,
    () => usersApi.myPurchaseList(page, token as string)
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

          <div className='grow space-y-6 md:mt-8'>
            <div className='flex space-x-5 text-lg font-medium'>
              <div>결제 내역</div>
              {/* <div className='text-[#afafaf]'>환불 내역</div> */}
            </div>

            <PurchaseList data={data?.results} totalItems={data?.count} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { token } = cookies(ctx);
  const data = token ? await usersApi.myInfos(token) : null;
  return {
    props: {
      page: ctx.params?.page,
    },
  };
};

export default MyPurchaseList;
