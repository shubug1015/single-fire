import Header from '@components/mypage/header';
import LectureList from '@components/mypage/lectureList';
import Navigator from '@components/mypage/navigator';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { usersApi } from '@libs/api';
import { cls } from '@libs/client/utils';
import type { GetServerSidePropsContext, NextPage } from 'next';
import { AuthResponse, useAuth } from '@libs/client/useAuth';
import useSWR, { SWRConfig } from 'swr';
import cookies from 'next-cookies';
import { useRouter } from 'next/router';
import Link from 'next/link';

const MyLectureList: NextPage<{ slug: string[] }> = ({ slug }) => {
  const { token } = useAuth({
    isPrivate: true,
  });
  const [category, page] = slug;
  const { data, error } = useSWR('myLectureList', () =>
    token ? usersApi.myLectureList(page, token) : null
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
              <Link href='/mypage/lecture/ongoing/1'>
                <a>
                  <div
                    className={cls(
                      category === 'ongoing'
                        ? ''
                        : 'cursor-pointer text-[#afafaf]',
                      'transition-all'
                    )}
                  >
                    수강중
                  </div>
                </a>
              </Link>

              <Link href='/mypage/lecture/completed/1'>
                <a>
                  <div
                    className={cls(
                      category === 'completed'
                        ? ''
                        : 'cursor-pointer text-[#afafaf]',
                      'transition-all'
                    )}
                  >
                    수강완료
                  </div>
                </a>
              </Link>
            </div>

            <LectureList
              data={
                category === 'ongoing'
                  ? data?.data.registered.results
                  : data?.data.expired.results
              }
              totalItems={
                category === 'completed'
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

const Page: NextPage<{ fallback: AuthResponse; slug: string[] }> = ({
  fallback,
  slug,
}) => (
  <SWRConfig
    value={{
      fallback,
    }}
  >
    <MyLectureList slug={slug} />
  </SWRConfig>
);

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { token } = cookies(ctx);
  const data = token ? await usersApi.myInfos(token) : null;
  return {
    props: {
      slug: ctx.params?.slug,
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
