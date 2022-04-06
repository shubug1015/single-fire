import Community from '@components/lecture/detail/community';
import Curriculum from '@components/lecture/detail/curriculum';
import Detail from '@components/lecture/detail/detail';
import Info from '@components/lecture/detail/info';
import Review from '@components/lecture/detail/review';
import Loader from '@components/loader';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { lecturesApi } from '@libs/api';
import useMutation from '@libs/client/useMutation';
import { getToken, setToken } from '@libs/token';
import { cls } from '@libs/utils';
import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface IProps {
  token: string | null;
}

const LectureDetail: NextPage<IProps> = ({ token }) => {
  setToken({ token });

  const router = useRouter();
  const { id } = router.query;
  const [getData, { loading, data, error }] = useMutation(
    id ? lecturesApi.detail : null
  );
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

  useEffect(() => {
    getData({ req: id });
  }, []);
  console.log(data);
  return (
    <>
      <SEO title={data?.name} />
      {loading ? (
        <Loader />
      ) : (
        data && (
          <>
            <Detail {...data} />
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
                <div className='grow border-b-2 border-[rgba(255,255,255,0.16)]' />
              </div>
            </Layout>
            {section === '강의정보' && <Info data={data.lecture_detail} />}
            {section === '커리큘럼' && <Curriculum data={data.curriculum} />}
            {section === '수강후기' && <Review data={[]} />}
            {section === '커뮤니티' && <Community data={[]} />}
          </>
        )
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return getToken(ctx);
};

export default LectureDetail;
