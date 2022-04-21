import Loader from '@components/loader';
import Header from '@components/mypage/header';
import LectureList from '@components/mypage/lectureList';
import Navigator from '@components/mypage/navigator';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { usersApi } from '@libs/api';
import useMutation from '@libs/client/useMutation';
import withAuth from '@libs/server/withAuth';
import { cls } from '@libs/client/utils';
import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface IProps {
  token: string | null;
}

const MyLectureList: NextPage<IProps> = ({ token }) => {
  const router = useRouter();
  const { page } = router.query;
  const [getData, { loading, data, error }] = useMutation(
    page ? usersApi.myLectureList : null
  );
  const [category, setCategory] = useState('수강중');

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

                <div className='grow space-y-6'>
                  <div className='flex space-x-5 text-lg font-medium'>
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
                    category={category}
                    data={
                      category === '수강중'
                        ? data.registered.results
                        : data.expired.results
                    }
                    count={
                      category === '수강중'
                        ? data.registered.count
                        : data.expired.count
                    }
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
  return withAuth({ ctx, isPrivate: true });
};

export default MyLectureList;
