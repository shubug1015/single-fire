import SEO from '@components/seo';
import { getToken, setToken } from '@libs/token';
import type { GetServerSideProps, NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { communityApi } from '@libs/api';
import useMutation from '@libs/client/useMutation';
import CommunityList from '@components/community/communityList';
import Banner from '@components/community/banner';
import Search from '@components/community/search';
import Loader from '@components/loader';

interface IProps {
  token: string | null;
}

const Ecomony: NextPage<IProps> = ({ token }) => {
  setToken({ token });

  const router = useRouter();
  const { category, slug } = router.query;
  const [page, orderType, searchType, searchTerm] = slug as string[];
  const [getData, { loading, data, error }] = useMutation(
    page ? communityApi.communities : null
  );

  if (error) {
    router.push('/');
  }

  useEffect(() => {
    getData({
      req: { category, page, orderType, searchType, searchTerm },
    });
  }, [category, page, orderType, searchType, searchTerm]);

  return (
    <>
      <SEO title='커뮤니티' />
      {loading ? (
        <Loader />
      ) : (
        data && (
          <>
            <Banner title='경제독서모임 커뮤니티 게시판' />
            <Search />
            <CommunityList
              notice={data.notice}
              data={data.results}
              count={data.count}
            />
          </>
        )
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return getToken(ctx);
};

export default Ecomony;
