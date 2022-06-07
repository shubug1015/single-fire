import Detail from '@components/community/board/detail';
import { gradeImg } from '@components/grade';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { communityApi } from '@libs/api';
import { useUser } from '@libs/client/useUser';
import { trimDate } from '@libs/client/utils';
import type { GetServerSidePropsContext, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FieldErrors, useForm } from 'react-hook-form';
import useSWR from 'swr';

interface IProps {
  category: string;
  id: string;
}

interface IForm {
  reply: string;
}

const CommunityDetail: NextPage<IProps> = ({ category, id }) => {
  const { token, profile } = useUser({ isPrivate: true });
  const { data, mutate } = useSWR(
    token ? `/community/${category}/${id}/` : null,
    () => communityApi.getDetail(category, id, token as string)
  );
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<IForm>({
    mode: 'onSubmit',
  });

  const toggleLike = async () => {
    if (token) {
      try {
        await communityApi.toggleLike(id, token as string);
        const updatedData = await communityApi.getDetail(
          category,
          id,
          token as string
        );
        mutate(updatedData);
      } catch {
        alert('Error');
      }
    } else {
      router.push('/login');
    }
  };

  const onValid = async ({ reply }: IForm) => {
    if (token) {
      try {
        await communityApi.writeReview(id, reply, token);
        setValue('reply', '');
        await communityApi.toggleLike(id, token as string);
        const updatedData = await communityApi.getDetail(
          category,
          id,
          token as string
        );
        mutate(updatedData);
      } catch {
        alert('Error');
      }
    }
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  const deleteDetail = async () => {
    if (confirm('게시글을 삭제하시겠습니다?')) {
      try {
        await communityApi.deleteDetail(category, id, token as string);
        router.back();
      } catch {
        alert('Error');
      }
    }
  };
  return (
    <>
      <SEO title={data?.title} />
      <Detail {...data} />
      <Layout padding='pt-20 pb-36'>
        {/* 내용 */}
        <div dangerouslySetInnerHTML={{ __html: data?.content }} />
        {/* 내용 */}

        {/* 좋아요 */}
        <div className='mt-16 flex justify-center'>
          <div
            onClick={toggleLike}
            className='flex h-10 w-32 cursor-pointer items-center justify-center rounded-sm bg-[#4a4e57] font-medium transition-opacity hover:opacity-70'
          >
            👍 좋아요 {data?.like_num}개
          </div>
        </div>
        {/* 좋아요 */}

        {/* 수정 & 삭제 */}
        {data?.is_mine && (
          <div className='mt-24 flex justify-center space-x-4'>
            <Link
              href={{
                pathname: `/community/${category}/post`,
                query: { id },
              }}
            >
              <a>
                <div className='flex h-14 w-[8.75rem] cursor-pointer items-center justify-center rounded bg-[#00e7ff] font-medium text-[#222222]'>
                  수정하기
                </div>
              </a>
            </Link>

            <div
              onClick={deleteDetail}
              className='flex h-14 w-[8.75rem] cursor-pointer items-center justify-center rounded bg-[rgba(229,229,229,0.08)] font-medium'
            >
              삭제하기
            </div>
          </div>
        )}
        {/* 수정 & 삭제 */}

        {/* 리뷰 */}
        <div className='mt-24 w-full space-y-4 md:mt-14'>
          {data?.reply.map((i: { [key: string]: any }) => (
            <div key={i.id} className='w-full rounded bg-[#373c46] p-10 md:p-6'>
              <div className='flex items-center'>
                <div className='text-lg font-medium'>{i.user.nickname}</div>
                <div className='relative ml-1 aspect-square h-5 w-5'>
                  {gradeImg(i.user.grade)}
                </div>
              </div>

              <div className='opacity-60'>{trimDate(i.created, 0, 10)}</div>

              <div className='mt-7 text-lg md:mt-4'>{i.text}</div>
            </div>
          ))}

          {token && (
            <div className='flex w-full items-start rounded bg-[#373c46] py-6 px-10 md:block md:p-4'>
              <div className='flex items-center'>
                <div>{profile?.name}</div>
                <div className='relative ml-1 aspect-square h-4 w-4'>
                  {gradeImg(profile?.grade)}
                </div>
              </div>

              <div className='grow md:mt-4'>
                <div className='flex'>
                  <div className='ml-14 h-24 rounded-l-sm bg-[#282e38] p-4 md:ml-0'>
                    {profile?.nickname} |
                  </div>
                  <textarea
                    {...register('reply', {
                      required: '리뷰를 입력해주세요',
                      minLength: {
                        message: '10자 이상의 리뷰를 남겨주세요',
                        value: 10,
                      },
                    })}
                    className='h-24 grow rounded-r-sm bg-[#282e38] py-4 outline-none'
                  />
                </div>

                <div className='mt-2 pl-14 text-sm text-red-500'>
                  {errors?.reply?.message}
                </div>
              </div>

              <div
                onClick={handleSubmit(onValid, onInvalid)}
                className='ml-4 flex h-10 w-24 cursor-pointer items-center justify-center rounded-sm bg-[#00e7ff] text-sm font-medium text-[#282e38] transition-all hover:opacity-90 md:mt-4 md:ml-0'
              >
                저장
              </div>
            </div>
          )}
        </div>
        {/* 리뷰 */}
      </Layout>
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      category: ctx.params?.category,
      id: ctx.params?.id,
    },
  };
};

export default CommunityDetail;
