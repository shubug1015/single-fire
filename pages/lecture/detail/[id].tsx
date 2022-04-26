import Community from '@components/lecture/detail/community';
import Curriculum from '@components/lecture/detail/curriculum';
import Detail from '@components/lecture/detail/detail';
import Info from '@components/lecture/detail/info';
import Review from '@components/lecture/detail/review';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { lecturesApi, usersApi } from '@libs/api';
import { AuthResponse } from '@libs/client/useAuth';
import { cls } from '@libs/client/utils';
import type { GetServerSidePropsContext, NextPage } from 'next';
import cookies from 'next-cookies';
import { useState } from 'react';
import useSWR, { SWRConfig } from 'swr';

interface IFallback {
  data: any[];
}

const LectureDetail: NextPage<{ id: string }> = ({ id }) => {
  const { data } = useSWR(`lectureDetail-${id}`, () => lecturesApi.detail(id));
  const [section, setSection] = useState('강의정보');
  const sectionList = [
    {
      id: 0,
      label: '강의정보',
    },
    {
      id: 1,
      label: '커리큘럼',
    },
    {
      id: 2,
      label: '수강후기',
    },
    {
      id: 3,
      label: '커뮤니티',
    },
  ];
  return (
    <>
      <SEO title={data?.data.name} />

      <Detail {...(data && data.data)} />
      <Layout>
        <div className='mt-32 mb-[3.75rem] flex text-lg font-medium'>
          {sectionList.map((i) => (
            <div
              key={i.id}
              onClick={() => setSection(i.label)}
              className={cls(
                section === i.label
                  ? 'border-[#00e7ff] text-white'
                  : 'border-[rgba(255,255,255,0.16)] text-[rgba(255,255,255,0.6)]',
                'flex w-[6.25rem] cursor-pointer justify-center border-b-2 pb-3 transition-all'
              )}
            >
              {i.label}
            </div>
          ))}
          <div className='mt-2 grow border-b-2 border-[rgba(255,255,255,0.16)]' />
        </div>
      </Layout>
      {section === '강의정보' && <Info data={data?.data.lecture_detail} />}
      {section === '커리큘럼' && <Curriculum data={data?.data.curriculum} />}
      {section === '수강후기' && <Review {...(data && data.data)} />}
      {section === '커뮤니티' && <Community {...(data && data.data)} />}
    </>
  );
};

const Page: NextPage<{ fallback: AuthResponse; id: string }> = ({
  fallback,
  id,
}) => (
  <SWRConfig
    value={{
      fallback,
    }}
  >
    <LectureDetail id={id} />
  </SWRConfig>
);

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { token } = cookies(ctx);
  const id = ctx.params?.id as string;

  const myData = token ? await usersApi.myInfos(token) : null;
  return {
    props: {
      id,
      fallback: {
        '/api/auth': {
          ok: true,
          token: token || null,
          profile: myData?.data || null,
        },
      },
    },
  };
};

export default Page;
