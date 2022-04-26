import Detail from '@components/community/detail/detail';
import SEO from '@components/seo';
import { communityApi } from '@libs/api';
import { useAuth } from '@libs/client/useAuth';
import useMutation from '@libs/client/useMutation';
import type { GetServerSidePropsContext, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface IProps {
  params: { slug: string[] };
}

const CommunityDetail: NextPage<IProps> = ({ params }) => {
  useAuth({ isPrivate: true });

  const [category, id] = params.slug;
  const [getData, { loading, data, error }] = useMutation(
    category && id ? communityApi.detail : null
  );

  useEffect(() => {
    getData({ req: { category, id } });
  }, [category, id]);
  console.log(data);
  return (
    <>
      <SEO title={data?.title} />
      {/* {data && ( */}
      <>
        <Detail {...data} />
      </>
      {/* )} */}
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      params: ctx.params,
    },
  };
};

export default CommunityDetail;
