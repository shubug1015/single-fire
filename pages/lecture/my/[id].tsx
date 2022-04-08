import Loader from '@components/loader';
import SEO from '@components/seo';
import { usersApi } from '@libs/api';
import useMutation from '@libs/client/useMutation';
import { getToken, setToken } from '@libs/token';
import { cls } from '@libs/utils';
import { AnimatePresence, motion } from 'framer-motion';
import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

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
  const [chapterOpen, setChapterOpen] = useState(null);

  const videoUrl = id
    ? data?.index.flatMap((i: any) =>
        i.video.filter((j: any) => j.order === +id)
      )[0].url
    : null;

  useEffect(() => {
    getData({ req: { id, token } });
  }, []);

  useEffect(() => {
    setChapterOpen(
      id
        ? data?.index.map((i: any) =>
            i.video.map((j: any) => j.order === +id).includes(true)
          )
        : null
    );
  }, [data]);

  const chapterVar = {
    invisible: {
      opacity: 0,
      height: 0,
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <>
      <SEO title={data?.name} />
      {loading ? (
        <Loader />
      ) : (
        id &&
        data && (
          <>
            <div className='px-12 pt-24 pb-36'>
              <div className='border-b-2 border-[rgba(229,229,229,0.08)] pb-6 text-[1.75rem] font-bold'>
                {data.name}
              </div>

              <div className='mt-10 flex space-x-5'>
                <video
                  key='1'
                  controls
                  playsInline
                  className='aspect-video w-3/4'
                >
                  {/* <source src={videoUrl} /> */}
                </video>

                <div className='grow space-y-4 font-medium'>
                  {data.index.map((i: any, chapterId: number) => (
                    <div key={i.order}>
                      <div
                        onClick={() =>
                          setChapterOpen((prev: any) =>
                            prev.map((j: any, index: number) =>
                              index === chapterId ? !j : j
                            )
                          )
                        }
                        className='flex h-[4.5rem] cursor-pointer items-center justify-between rounded bg-[#4a4e57] px-6 text-lg'
                      >
                        <div>{i.title}</div>

                        {chapterOpen && chapterOpen[chapterId] ? (
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-6 w-6'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M5 15l7-7 7 7'
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-6 w-6'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M19 9l-7 7-7-7'
                            />
                          </svg>
                        )}
                      </div>

                      <AnimatePresence>
                        {chapterOpen && chapterOpen[chapterId] && (
                          <motion.div
                            variants={chapterVar}
                            initial='invisible'
                            animate='visible'
                            exit='exit'
                            className='divide-y-2 divide-[rgba(229,229,229,0.08)]'
                          >
                            {i.video.map((j: any, index: any) => (
                              <div
                                key={j.order}
                                className={cls(
                                  j.order === +id
                                    ? 'text-[#00e7ff]'
                                    : 'text-[rgba(255,255,255,0.8)]',
                                  i.video.length === index + 1
                                    ? 'rounded-b-md'
                                    : '',
                                  'flex h-[4.5rem] items-center bg-[#373c46] px-6 text-lg'
                                )}
                              >
                                {j.title}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

              <div className='mt-8 flex w-3/4 space-x-7 rounded-sm bg-[#1e2126] pt-10 pb-20 pl-12 pr-48'>
                <div>💡</div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam egestas auctor sapien ac tristique. Sed commodo
                  pretium neque vitae venenatis. Nam sagittis mauris velit, nec
                  tempor risus lobortis a. Phasellus faucibus eros a arcu
                  hendrerit, quis aliquet sapien congue. Nulla elementum quis
                  magna sed porttitor.
                </div>
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
