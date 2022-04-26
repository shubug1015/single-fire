import SEO from '@components/seo';
import { lecturesApi, usersApi } from '@libs/api';
import { cls } from '@libs/client/utils';
import { AnimatePresence, motion } from 'framer-motion';
import type { GetServerSidePropsContext, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AuthResponse, useAuth } from '@libs/client/useAuth';
import useSWR, { SWRConfig } from 'swr';
import cookies from 'next-cookies';

const MyLectureDetail: NextPage<{ slug: string[] }> = ({ slug }) => {
  const { token } = useAuth({
    isPrivate: true,
  });
  const router = useRouter();
  const [id, order] = slug;
  const [chapterOpen, setChapterOpen] = useState(null);
  const { data, error } = useSWR('myLectureDetail', () =>
    token ? lecturesApi.myLectureDetail(id, token) : null
  );

  const currentVideo = data?.data.index.flatMap((i: any) =>
    i.video.filter((j: any) => j.order === +order)
  )[0];
  const videoUrl = currentVideo?.url;
  const videoTitle = currentVideo?.title;
  const lastChapter = data?.data.index[data?.data.index.length - 1].video;
  const isLastLecture =
    lastChapter && lastChapter[lastChapter.length - 1].order === +order;

  const finishLecture = async () => {
    try {
      await lecturesApi.finishLecture({ id, order, token });
      router.push(
        isLastLecture ? '/mypage/lecture/1' : `/lecture/my/${id}/${+order + 1}`
      );
    } catch {
      alert('Error');
    }
  };

  useEffect(() => {
    setChapterOpen(
      data?.data.index.map((i: any) =>
        i.video.map((j: any) => j.order === +order).includes(true)
      )
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

  if (error) {
    router.push('/');
  }
  return (
    <>
      <SEO title={data?.data.name} />

      <div className='px-12 pt-24 pb-36'>
        <div className='border-b-2 border-[rgba(229,229,229,0.08)] pb-6 text-[1.75rem] font-bold'>
          {data?.data.name}
        </div>

        <div className='mt-10 flex space-x-5'>
          <div className='relative aspect-video w-3/4'>
            <iframe
              src={videoUrl}
              frameBorder='0'
              allow='autoplay; fullscreen; picture-in-picture'
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
              title={videoTitle}
            ></iframe>
          </div>

          <div className='grow space-y-4 font-medium'>
            {data?.data.index.map((i: any, chapterId: number) => (
              <div key={i.id}>
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
                        <Link
                          key={j.order}
                          href={`/lecture/my/${id}/${j.order}`}
                        >
                          <a>
                            <div
                              key={j.order}
                              className={cls(
                                j.watched ? 'opacity-50' : '',
                                j.order === +order
                                  ? 'text-[#00e7ff]'
                                  : 'text-[rgba(255,255,255,0.8)]',
                                i.video.length === index + 1
                                  ? 'rounded-b-md'
                                  : '',
                                'flex h-[4.5rem] items-center bg-[#373c46] px-6 text-lg transition-all hover:opacity-70'
                              )}
                            >
                              {j.title}
                            </div>
                          </a>
                        </Link>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            egestas auctor sapien ac tristique. Sed commodo pretium neque vitae
            venenatis. Nam sagittis mauris velit, nec tempor risus lobortis a.
            Phasellus faucibus eros a arcu hendrerit, quis aliquet sapien
            congue. Nulla elementum quis magna sed porttitor.
          </div>
        </div>

        <div className='mt-14 flex flex-col items-center space-y-8'>
          <div className='text-sm font-medium text-[#cfcfcf]'>
            *진도율 체크를 위해 수강완료 버튼을 반드시 클릭하세요.
          </div>

          <div
            onClick={finishLecture}
            className='flex h-16 w-96 cursor-pointer items-center justify-center rounded bg-[#00e7ff] text-xl font-bold text-[#282e38] transition-opacity hover:opacity-90'
          >
            수강완료
          </div>
        </div>
      </div>
    </>
  );
};

const Page: NextPage<{ fallback: AuthResponse; slug: string[] }> = ({
  fallback,
  slug,
}) => (
  <SWRConfig
    value={{
      fallback,
    }}
  >
    <MyLectureDetail slug={slug} />
  </SWRConfig>
);

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { token } = cookies(ctx);
  const data = token ? await usersApi.myInfos(token) : null;
  return {
    props: {
      slug: ctx.params?.slug,
      fallback: {
        '/api/auth': {
          ok: true,
          token: token || null,
          profile: data?.data || null,
        },
      },
    },
  };
};

export default Page;
