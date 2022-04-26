import Header from '@components/mypage/header';
import LectureList from '@components/mypage/lectureList';
import Navigator from '@components/mypage/navigator';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { usersApi } from '@libs/api';
import { cls } from '@libs/client/utils';
import type { GetServerSidePropsContext, NextPage } from 'next';
import { useState } from 'react';
import { AuthResponse, useAuth } from '@libs/client/useAuth';
import useSWR, { SWRConfig } from 'swr';
import cookies from 'next-cookies';
import { useRouter } from 'next/router';

const MyLectureList: NextPage<{ page: string }> = ({ page }) => {
  const { token } = useAuth({
    isPrivate: true,
  });
  const { data, error } = useSWR('myLectureList', () =>
    token ? usersApi.myLectureList(page, token) : null
  );
  const [category, setCategory] = useState('수강중');
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
              <div
                onClick={() => setCategory('수강중')}
                className={cls(
                  category === '수강중' ? '' : 'cursor-pointer text-[#afafaf]',
                  'transition-all'
                )}
              >
                수강중
              </div>
              <div
                onClick={() => setCategory('수강완료')}
                className={cls(
                  category === '수강완료'
                    ? ''
                    : 'cursor-pointer text-[#afafaf]',
                  'transition-all'
                )}
              >
                수강완료
              </div>
            </div>

            <LectureList
              category={category}
              data={
                category === '수강중'
                  ? data?.data.registered.results
                  : data?.data.expired.results
              }
              count={
                category === '수강중'
                  ? data?.data.registered.count
                  : data?.data.expired.count
              }
            />
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
    <MyLectureList page={page} />
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
