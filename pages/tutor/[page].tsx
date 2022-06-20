// import Banner from '@components/tutor/banner';
import TutorList from '@components/tutor/tutorList';
import SEO from '@components/seo';
import { lecturesApi } from '@libs/api';
import type { GetServerSidePropsContext, NextPage } from 'next';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Banner from '@components/lecture/banner';

const Tutor: NextPage<{ page: string }> = ({ page }) => {
  const { data, error } = useSWR(`/lectures/tutor?page=${page}`, () =>
    lecturesApi.tutorList(page)
  );
  const router = useRouter();

  if (error) {
    router.push('/');
  }
  return (
    <>
      <SEO
        title='강사소개'
        description='밀레니얼 머니스쿨을 빛내주시는 강사분들이 소개되어있는 강사소개 페이지입니다.'
      />
      <Banner />
      <TutorList
        title='강사소개'
        data={data?.results}
        totalItems={data?.count}
      />
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      page: ctx.params?.page,
    },
  };
};

export default Tutor;
