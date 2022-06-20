import Navigator from '@components/lecture/navigator';
import SEO from '@components/seo';
import { lecturesApi } from '@libs/api';
import type { NextPage } from 'next';
import Banner from '@components/lecture/banner';
import Best from '@components/lecture/best';
import useSWR from 'swr';
import { useRouter } from 'next/router';

const Lecture: NextPage = () => {
  const { data, error } = useSWR('/cms/class', () =>
    lecturesApi.topLectureList()
  );
  const router = useRouter();

  if (error) {
    router.push('/');
  }
  return (
    <>
      <SEO
        title='BEST 클래스'
        description='밀레니얼 머니스쿨을 찾아주시는 예비파이어족들이 가장 선호하는 강의만 모아놓은 BEST CLASS 페이지 입니다.'
      />
      <Banner />
      <Navigator />
      <Best {...data} />
    </>
  );
};

export default Lecture;
