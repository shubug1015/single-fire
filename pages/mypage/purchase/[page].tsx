import Loader from '@components/loader';
import Header from '@components/mypage/header';
import Navigator from '@components/mypage/navigator';
import PurchaseList from '@components/mypage/purchaseList';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { usersApi } from '@libs/api';
import useMutation from '@libs/client/useMutation';
import { getToken, setToken } from '@libs/token';
import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface IProps {
  token: string | null;
}

const MyLectureList: NextPage<IProps> = ({ token }) => {
  setToken({ token, redirectUrl: token && token.length > 0 ? null : '/login' });

  const router = useRouter();
  const { page } = router.query;
  const [getData, { loading, data, error }] = useMutation(
    page ? usersApi.myPurchaseList : null
  );

  useEffect(() => {
    getData({ req: token });
  }, []);
  console.log(data);
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

                <div className='grow space-y-6'>
                  <div className='flex space-x-5 text-lg font-medium'>
                    <div>전체</div>
                    <div className='text-[#afafaf]'>환불 내역</div>
                  </div>

                  <PurchaseList data={data.results} count={data.count} />
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
  return getToken(ctx);
};

export default MyLectureList;
