import SEO from '@components/seo';
import type { GetServerSidePropsContext, NextPage } from 'next';
import { communityApi } from '@libs/api';
import CommunityList from '@components/community/communityList';
import Banner from '@components/community/banner';
import Search from '@components/community/search';
import useSWR from 'swr';
import cookies from 'next-cookies';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

interface IProps {
  params: { category: string; slug: string[] };
}

const CommunityCategory: NextPage<IProps> = ({ params }) => {
  const { data: myData } = useSWR('/api/user');
  const router = useRouter();
  const { category, slug } = params;
  const [page, orderType, searchType, searchTerm] = slug;
  const { data } = useSWR(
    category === '4'
      ? `/community/${category}/${page}/${orderType}/${searchType}/${searchTerm}`
      : myData?.token
      ? `/community/${category}/${page}/${orderType}/${searchType}/${searchTerm}`
      : null,
    () =>
      communityApi.communityBoard({
        category,
        page,
        orderType,
        searchType,
        searchTerm,
        token: myData?.token,
      })
  );

  useEffect(() => {
    if (category !== '4' && (!myData?.token || !myData?.profile)) {
      router.push('/login');
    }
  }, [myData]);
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

  // 4번 커뮤니티는 구매없이 접근 가능
  if (category === '4') {
    return {
      props: {
        params: ctx.params,
      },
    };
  }
  // 1,2,3번 커뮤니티는 구매없이 접근 불가능
  else {
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
  }
};

export default CommunityCategory;
