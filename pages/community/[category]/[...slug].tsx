import SEO from '@components/seo';
import type { GetServerSidePropsContext, NextPage } from 'next';
import { communityApi } from '@libs/api';
import CommunityList from '@components/community/communityList';
import Banner from '@components/community/banner';
import Search from '@components/community/search';
import { useUser } from '@libs/client/useUser';
import useSWR from 'swr';
// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
import cookies from 'next-cookies';

interface IProps {
  params: { category: string; slug: string[] };
}

const CommunityCategory: NextPage<IProps> = ({ params }) => {
  const { token } = useUser({ isPrivate: true });
  // const router = useRouter();
  const { category, slug } = params;
  const [page, orderType, searchType, searchTerm] = slug;
  const { data } = useSWR(
    token
      ? `/community/${category}/${page}/${orderType}/${searchType}/${searchTerm}`
      : null,
    () =>
      communityApi.communityBoard({
        category,
        page,
        orderType,
        searchType,
        searchTerm,
        token: token,
      })
  );

  // if (data?.msg === 'need to register' || error) {
  //   router.replace(`/community/detail/${category}`);
  // }
  return (
    <>
      <SEO title='커뮤니티' />
      <Banner title='경제독서모임 커뮤니티 게시판' />
      <Search />
      <CommunityList
        notice={data?.notice}
        data={data?.results}
        totalItems={data?.count}
      />
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { token } = cookies(ctx);

  const category = ctx.params?.category;
  const [page, orderType, searchType, searchTerm] = ctx.params
    ?.slug as string[];

  const data = await communityApi.communityBoard({
    category,
    page,
    orderType,
    searchType,
    searchTerm,
    token,
  });

  if (data?.msg === 'need to register') {
    return {
      redirect: {
        destination: `/community/detail/${category}`,
        permanent: false,
      },
    };
  } else {
    return {
      props: {
        params: ctx.params,
      },
    };
  }
};

export default CommunityCategory;
