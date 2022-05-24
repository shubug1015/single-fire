import Banner from '@components/tutor/banner';
import TutorList from '@components/tutor/tutorList';
import SEO from '@components/seo';
import { lecturesApi } from '@libs/api';
import type { GetServerSidePropsContext, NextPage } from 'next';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const Tutor: NextPage<{ page: string }> = ({ page }) => {
  const { data, error } = useSWR(`/lectures/tutor?page=${page}`, () =>
    lecturesApi.tutorList(page)
  );
  const router = useRouter();

  console.log(data);

  if (error) {
    router.push('/');
  }
  return (
    <>
      <SEO title='강사소개' />
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
