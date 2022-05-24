import SEO from '@components/seo';
import { communityApi } from '@libs/api';
import { useUser } from '@libs/client/useUser';
import type { GetServerSidePropsContext, NextPage } from 'next';
import useSWR from 'swr';

interface IProps {
  category: string;
  id: string;
}

const CommunityDetail: NextPage<IProps> = ({ category, id }) => {
  useUser({ isPrivate: true });
  const { data } = useSWR(`/community/${category}/${id}/`, () =>
    communityApi.detail({ category, id })
  );

  console.log(category, id, data);
  return (
    <>
      <SEO title={data?.title} />
      {/* <Detail {...data} /> */}
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      category: ctx.params?.category,
      id: ctx.params?.id,
    },
  };
};

export default CommunityDetail;
