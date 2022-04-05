import CategoryBanner from '@components/lecture/categoryBanner';
import Navigator from '@components/lecture/navigator';
import LectureList from '@components/lecture/lectureList';
import SEO from '@components/seo';
import { lecturesApi } from '@libs/api';
import useMutation from '@libs/client/useMutation';
import { getToken, setToken } from '@libs/token';
import type { GetServerSideProps, NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Loader from '@components/loader';

interface IProps {
  token: string | null;
}

const RealEstate: NextPage<IProps> = ({ token }) => {
  setToken({ token });

  const router = useRouter();
  const { page } = router.query;
  const [getData, { loading, data, error }] = useMutation(
    page ? lecturesApi.lectures : null
  );

  useEffect(() => {
    getData({ req: { category: '부동산', page } });
  }, []);
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
              title='부동산'
              data={data.results}
              count={data.count}
            />
          </>
        )
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return getToken(ctx);
};

export default RealEstate;
