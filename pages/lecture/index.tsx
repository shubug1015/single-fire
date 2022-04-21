import Navigator from '@components/lecture/navigator';
import SEO from '@components/seo';
import { lecturesApi } from '@libs/api';
import useMutation from '@libs/client/useMutation';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import Loader from '@components/loader';
import Banner from '@components/lecture/banner';
import Best from '@components/lecture/best';

const Lecture: NextPage = () => {
  const [getData, { loading, data, error }] = useMutation(
    lecturesApi.topLectureList
  );

  useEffect(() => {
    getData({ req: {} });
  }, []);
  return (
    <>
      <SEO title='BEST 클래스' />
      {loading ? (
        <Loader />
      ) : (
        data && (
          <>
            <Banner />
            <Navigator />
            <Best {...data} />
          </>
        )
      )}
    </>
  );
};

export default Lecture;
