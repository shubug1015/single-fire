import Detail from '@components/community/detail/detail';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { communityApi } from '@libs/api';
import useMutation from '@libs/client/useMutation';
import { getToken, setToken } from '@libs/token';
import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface IProps {
  token: string | null;
}

const CommunityDetail: NextPage<IProps> = ({ token }) => {
  setToken({ token, redirectUrl: token && token.length > 0 ? null : '/login' });

  const router = useRouter();
  const [category, id] = router.query.slug as string[];
  const [getData, { loading, data, error }] = useMutation(
    category && id ? communityApi.detail : null
  );

  useEffect(() => {
    getData({ req: { category, id } });
  }, []);
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return getToken(ctx);
};

export default CommunityDetail;
