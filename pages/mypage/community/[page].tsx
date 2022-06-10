import CommunityList from '@components/mypage/communityList';
import Header from '@components/mypage/header';
import Navigator from '@components/mypage/navigator';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { usersApi } from '@libs/api';
import { useUser } from '@libs/client/useUser';
import type { GetServerSidePropsContext, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR from 'swr';

interface IProps {
  page: string;
}

const MyCommunityList: NextPage<IProps> = ({ page }) => {
  const { token } = useUser({
    isPrivate: true,
  });
  const { data, error } = useSWR(
    token ? `/mypage/community?page=${page}` : null,
    () => usersApi.myCommunityList(page, token as string)
  );
  const router = useRouter();

  if (error) {
    router.push('/');
  }
  return (
    <>
      <SEO title='마이페이지' />
      <Layout padding='pt-20 pb-44 md:pt-4'>
        <Header />

        <div className='mt-[4.5rem] flex space-x-10 md:mt-0 md:block md:space-x-0'>
          <Navigator />

          <div className='grow space-y-10 md:mt-8'>
            <div className='space-y-6'>
              <div className='text-lg font-medium'>커뮤니티</div>
              {data?.community.map((i: { [key: string]: any }) => (
                <div
                  key={i.community.id}
                  className='flex space-x-2 md:space-x-0'
                >
                  <div className='flex h-[4.5rem] w-[28rem] items-center rounded-sm bg-[rgba(229,229,229,0.08)] px-6 text-lg font-medium'>
                    {i.community.name}
                  </div>

                  <Link href={`/community/${i.community.id}/1/created/title`}>
                    <div className='flex aspect-square w-[4.5rem] cursor-pointer items-center rounded-sm bg-[rgba(229,229,229,0.08)] px-6 text-2xl'>
                      👉
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            <div className='space-y-6'>
              <div className='text-lg font-medium'>게시글</div>
              <CommunityList
                data={data?.posts.results}
                totalItems={data?.posts.count}
              />
            </div>
          </div>
        </div>
      </Layout>
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

export default MyCommunityList;
