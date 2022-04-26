import Navigator from '@components/lecture/navigator';
import SEO from '@components/seo';
import { lecturesApi } from '@libs/api';
import type { NextPage } from 'next';
import Banner from '@components/lecture/banner';
import Best from '@components/lecture/best';
import useSWR from 'swr';
import { useRouter } from 'next/router';

const Lecture: NextPage = () => {
  const { data, error } = useSWR('bestLectureList', () =>
    lecturesApi.topLectureList()
  );
  const router = useRouter();

  if (error) {
    router.push('/');
  }
  return (
    <>
      <SEO title='BEST 클래스' />
      <Banner />
      <Navigator />
      <Best {...(data && data.data)} />
    </>
  );
};

export default Lecture;
