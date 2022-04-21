import Banner from '@components/tutor/banner';
import TutorList from '@components/tutor/tutorList';
import SEO from '@components/seo';
import { lecturesApi } from '@libs/api';
import useMutation from '@libs/client/useMutation';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Loader from '@components/loader';

const Tutor: NextPage = () => {
  const router = useRouter();
  const { page } = router.query;
  const [getData, { loading, data, error }] = useMutation(
    page ? lecturesApi.tutorList : null
  );

  useEffect(() => {
    getData({ req: page });
  }, [page]);
  return (
    <>
      <SEO title='강사소개' />
      {loading ? (
        <Loader />
      ) : (
        data && (
          <>
            <Banner />
            <TutorList
              title='강사소개'
              data={data.results}
              count={data.count}
            />
          </>
        )
      )}
    </>
  );
};

export default Tutor;
