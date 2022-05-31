// import CategoryBanner from '@components/lecture/categoryBanner';
import Navigator from '@components/lecture/navigator';
import LectureList from '@components/lecture/lectureList';
import SEO from '@components/seo';
import { lecturesApi } from '@libs/api';
import type { GetServerSidePropsContext, NextPage } from 'next';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import Banner from '@components/lecture/banner';

interface IProps {
  category: string;
  page: string;
}

const Lectures: NextPage<IProps> = ({ category, page }) => {
  const router = useRouter();
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
  const { data, error } = useSWR(`/lectures/${category}/${page}`, () =>
    lecturesApi.lectureList(categoryReq, page)
  );

  if (error) {
    router.push('/');
  }
  return (
    <>
      <SEO title='클래스' />
      {/* <CategoryBanner /> */}
      <Banner />
      <Navigator />
      <LectureList
        title={categoryReq}
        data={data?.results}
        totalItems={data?.count}
      />
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      category: ctx.params?.category,
      page: ctx.params?.page,
    },
  };
};

export default Lectures;
