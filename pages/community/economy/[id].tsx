import SEO from '@components/seo';
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
  setToken({ token });

  const router = useRouter();

  const { id } = router.query;
  const [getData, { loading, data, error }] = useMutation(
    id ? communityApi.detail : null
  );

  useEffect(() => {
    getData({ req: id });
  }, []);
  console.log(data);
  return (
    <>
      <SEO title={data?.name} />
      <div className='bg-[rgba(229,229,229,0.08)] py-8'></div>
      {data && <></>}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return getToken(ctx);
};

export default CommunityDetail;
