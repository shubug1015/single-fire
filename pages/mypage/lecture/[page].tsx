import Loader from '@components/loader';
import Header from '@components/mypage/header';
import LectureList from '@components/mypage/lectureList';
import Navigator from '@components/mypage/navigator';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { usersApi } from '@libs/api';
import useMutation from '@libs/client/useMutation';
import { getToken, setToken } from '@libs/token';
import { cls } from '@libs/utils';
import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface IProps {
  token: string | null;
}

const MyLectureList: NextPage<IProps> = ({ token }) => {
  setToken({ token, redirectUrl: token && token.length > 0 ? null : '/login' });

  const router = useRouter();
  const { page } = router.query;
  const [getData, { loading, data, error }] = useMutation(
    page ? usersApi.myLectureList : null
  );
  const [category, setCategory] = useState('전체');

  useEffect(() => {
    getData({ req: { page, token } });
  }, []);
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
                    <div
                      onClick={() => setCategory('전체')}
                      className={cls(
                        category === '전체'
                          ? ''
                          : 'cursor-pointer text-[#afafaf]',
                        'transition-all'
                      )}
                    >
                      전체
                    </div>
                    <div
                      onClick={() => setCategory('수강중')}
                      className={cls(
                        category === '수강중'
                          ? ''
                          : 'cursor-pointer text-[#afafaf]',
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
                    data={
                      category === '전체'
                        ? data.results
                        : category === '수강중'
                        ? data.results.filter(
                            (i: any) => i.total_progress !== 100
                          )
                        : data.results.filter(
                            (i: any) => i.total_progress === 100
                          )
                    }
                    count={data.count}
                  />
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
