import Banner from '@components/tutor/banner';
import TutorList from '@components/tutor/tutorList';
import SEO from '@components/seo';
import { lecturesApi } from '@libs/api';
import type { GetServerSidePropsContext, NextPage } from 'next';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const Tutor: NextPage<{ page: string }> = ({ page }) => {
  const { data, error } = useSWR('tutorList', () =>
    lecturesApi.tutorList(page)
  );
  const router = useRouter();

  if (error) {
    router.push('/');
  }
  return (
    <>
      <SEO title='강사소개' />
      <Banner />
      <TutorList
        title='강사소개'
        data={data?.data.results}
        totalItems={data?.data.count}
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
