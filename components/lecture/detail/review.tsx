import { gradeImg } from '@components/grade';
import Layout from '@layouts/sectionLayout';
import { lecturesApi } from '@libs/api';
import { trimDate } from '@libs/client/utils';
import { useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import useSWR from 'swr';

interface IProps {
  id: string;
  review: any[];
}

interface IForm {
  review: string;
}

export default function Review({ id, review }: IProps) {
  const { data: myData } = useSWR('/api/user');
  const { mutate } = useSWR(
    myData?.token ? `/lectures/${id}/logged` : `/lectures/${id}/unlogged`,
    () => lecturesApi.detail(id, myData?.token)
  );
  const [isEditing, setIsEditing] = useState<{
    id: number | null;
    value: boolean;
  }>({ id: null, value: false });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<IForm>({
    mode: 'onSubmit',
  });
  const onValid = async (values: IForm) => {
    try {
      // 리뷰 수정 진행중 true
      if (isEditing.value) {
        await lecturesApi.editReview(
          isEditing.id as number,
          values.review,
          myData?.token as string
        );
        const updatedData = await lecturesApi.detail(id);
        mutate(updatedData);
        setIsEditing({ id: null, value: false });
        setValue('review', '');
      }
      // 리뷰 수정 진행중 false
      else {
        const { data: message } = await lecturesApi.writeReview(
          id,
          values.review,
          myData.token
        );
        if (message === 'unregistered lecture') {
          setError('review', { message: '구매하지 않은 강의입니다.' });
        } else if (message === 'review exist') {
          setError('review', { message: '이미 리뷰를 작성한 강의입니다.' });
        } else {
          setValue('review', '');
          const updatedData = await lecturesApi.detail(id);
          mutate(updatedData);
        }
      }
    } catch {
      alert('Error');
    }
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  const deleteReview = async (reviewId: number) => {
    if (confirm('수강후기를 삭제하시겠습니까?')) {
      try {
        await lecturesApi.deleteReview(reviewId, myData?.token as string);
        const updatedData = await lecturesApi.detail(id);
        mutate(updatedData);
        setValue('review', '');
      } catch {
        alert('Error');
      }
    }
  };
  return (
    <Layout padding='pb-80'>
      <div className='w-full space-y-4'>
        {review.map((i) => (
          <div key={i.id} className='w-full rounded bg-[#373c46] p-10 md:p-6'>
            <div className='flex justify-between'>
              <div className='flex items-center'>
                <div className='text-lg font-medium md:text-base'>
                  {i.user.nickname}
                </div>
                <div className='relative ml-1 aspect-square h-5 w-5'>
                  {gradeImg(i.user.grade)}
                </div>
              </div>

              {i.is_mine && (
                <div className='flex items-center space-x-2 text-sm opacity-70'>
                  {isEditing.value ? (
                    // 리뷰 수정 진행중 true
                    <div
                      onClick={() => {
                        setIsEditing({ id: null, value: false });
                        setValue('review', '');
                      }}
                      className='cursor-pointer'
                    >
                      취소
                    </div>
                  ) : (
                    // 리뷰 수정 진행중 false
                    <>
                      <div
                        onClick={() => {
                          setIsEditing({ id: i.id, value: true });
                          setValue('review', i.text);
                        }}
                        className='cursor-pointer'
                      >
                        수정
                      </div>
                      <div className='text-[0.625rem]'>|</div>
                      <div
                        onClick={() => deleteReview(i.id)}
                        className='cursor-pointer'
                      >
                        삭제
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            <div className='opacity-60 md:text-sm'>
              {trimDate(i.created, 0, 10)}
            </div>

            {i.is_mine && isEditing.value ? (
              <div className='mt-7 flex w-full'>
                <textarea
                  {...register('review', {
                    required: '리뷰를 입력해주세요',
                    minLength: {
                      message: '10자 이상의 리뷰를 남겨주세요',
                      value: 10,
                    },
                  })}
                  className='h-24 grow rounded-r-sm bg-[#282e38] p-4 outline-none md:h-32'
                />
                <div
                  onClick={handleSubmit(onValid, onInvalid)}
                  className='ml-4 flex h-10 w-24 cursor-pointer items-center justify-center rounded-sm bg-[#00e7ff] text-sm font-medium text-[#282e38] transition-all hover:opacity-90 md:mt-4 md:ml-0'
                >
                  저장
                </div>
              </div>
            ) : (
              <div className='mt-7 text-lg md:text-base'>{i.text}</div>
            )}
          </div>
        ))}

        {/* 리뷰 작성창 */}
        {myData?.token && !isEditing.value && (
          <div className='flex w-full items-start rounded bg-[#373c46] py-6 px-10 md:block md:p-6'>
            <div className='flex items-center'>
              <div>{myData?.profile?.name}</div>
              <div className='relative ml-1 aspect-square h-4 w-4'>
                {gradeImg(myData?.profile?.grade)}
              </div>
            </div>

            <div className='grow'>
              <div className='flex md:mt-4'>
                <div className='ml-14 h-24 rounded-l-sm bg-[#282e38] p-4 md:ml-0 md:h-32 md:text-sm'>
                  {myData?.profile?.nickname} |
                </div>
                <textarea
                  {...register('review', {
                    required: '리뷰를 입력해주세요',
                    minLength: {
                      message: '10자 이상의 리뷰를 남겨주세요',
                      value: 10,
                    },
                  })}
                  className='h-24 grow rounded-r-sm bg-[#282e38] py-4 outline-none md:h-32'
                />
              </div>

              <div className='mt-2 pl-14 text-sm text-red-500'>
                {errors?.review?.message}
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
        {/* 리뷰 작성창 */}
      </div>
    </Layout>
  );
}
