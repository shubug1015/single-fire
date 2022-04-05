import Loader from '@components/loader';
import SEO from '@components/seo';
import { usersApi } from '@libs/api';
import useMutation from '@libs/client/useMutation';
import { getToken, setToken } from '@libs/token';
import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface IProps {
  token: string | null;
}

const MyLectureDetail: NextPage<IProps> = ({ token }) => {
  setToken({ token, redirectUrl: token && token.length > 0 ? null : '/login' });

  const router = useRouter();
  const { id } = router.query;
  const [getData, { loading, data, error }] = useMutation(
    id ? usersApi.myLectureDetail : null
  );

  const videoUrl = id
    ? data?.index?.flatMap((i: any) =>
        i.video.filter((j: any) => j.order === +id)
      )[0].url
    : null;

  useEffect(() => {
    getData({ req: { id, token } });
  }, []);
  return (
    <>
      <SEO title={data?.name} />
      {loading ? (
        <Loader />
      ) : (
        data && (
          <>
            <div className='px-12 pt-24 pb-36'>
              <div className='border-b-2 border-[rgba(229,229,229,0.08)] pb-6 text-[1.75rem] font-bold'>
                강의 제목
              </div>

              <div className='mt-10 flex space-x-5'>
                <video
                  key='1'
                  controls
                  playsInline
                  className='aspect-video w-3/4'
                >
                  <source src={videoUrl} />
                </video>

                <div className='h-20 grow bg-[#4a4e57]'></div>
              </div>
            </div>
          </>
        )
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return getToken(ctx);
};

export default MyLectureDetail;
