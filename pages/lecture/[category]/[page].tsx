import CategoryBanner from '@components/lecture/categoryBanner';
import Navigator from '@components/lecture/navigator';
import LectureList from '@components/lecture/lectureList';
import SEO from '@components/seo';
import { lecturesApi } from '@libs/api';
import useMutation from '@libs/client/useMutation';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Loader from '@components/loader';

const Lectures: NextPage = () => {
  const router = useRouter();
  const { category, page } = router.query;
  const categoryReq =
    category === 'real-estate'
      ? '부동산'
      : category === 'stock'
      ? '주식'
      : category === 'coin'
      ? '코인'
      : category === 'online-business'
      ? '온라인창업'
      : '';
  const [getData, { loading, data, error }] = useMutation(
    page ? lecturesApi.lectures : null
  );

  useEffect(() => {
    getData({ req: { category: categoryReq, page } });
  }, [category, page]);
  return (
    <>
      <SEO title='클래스' />
      {loading ? (
        <Loader />
      ) : (
        data && (
          <>
            <CategoryBanner />
            <Navigator />
            <LectureList
              title={categoryReq}
              data={data.results}
              count={data.count}
            />
          </>
        )
      )}
    </>
  );
};

export default Lectures;
