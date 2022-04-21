import Detail from '@components/community/detail/detail';
import SEO from '@components/seo';
import { communityApi } from '@libs/api';
import { useAuth } from '@libs/client/useAuth';
import useMutation from '@libs/client/useMutation';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const CommunityDetail: NextPage = () => {
  useAuth({ isPrivate: true });

  const router = useRouter();
  const [category, id] = router.query.slug
    ? (router.query.slug as string[])
    : [null, null];
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

export default CommunityDetail;
