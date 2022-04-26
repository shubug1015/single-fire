import { gradeImg } from '@components/grade';
import Layout from '@layouts/sectionLayout';
import { lecturesApi } from '@libs/api';
import { AuthResponse } from '@libs/client/useAuth';
import { trimDate } from '@libs/client/utils';
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
  const { data } = useSWR<AuthResponse>('/api/auth');
  const { data: lectureData, mutate } = useSWR(`lectureDetail-${id}`, () =>
    lecturesApi.detail(id)
  );

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
    if (data?.token) {
      try {
        const { data: message } = await lecturesApi.writeReview(
          id,
          values.review,
          data.token
        );
        if (message === 'unregistered lecture') {
          setError('review', { message: '구매하지 않은 강의입니다.' });
        } else if (message === 'review exist') {
          setError('review', { message: '이미 리뷰를 작성한 강의입니다.' });
        } else {
          setValue('review', '');
          if (lectureData) {
            mutate({
              ...lectureData,
              data: {
                ...lectureData.data,
                review: [
                  ...lectureData.data.review,
                  {
                    user: {
                      nickname: data?.profile?.nickname,
                      grade: data?.profile?.nickname,
                    },
                    text: values.review,
                    created: new Date().toISOString(),
                  },
                ],
              },
            });
          }
        }
      } catch {
        alert('Error');
      }
    }
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  return (
    <Layout padding='pb-80'>
      <div className='w-full space-y-4'>
        {review.map((i) => (
          <div key={i.id} className='w-full rounded bg-[#373c46] p-10'>
            <div className='flex items-center'>
              <div className='text-lg font-medium'>{i.user.nickname}</div>
              <div className='relative ml-1 aspect-square h-5 w-5'>
                {gradeImg(i.user.grade)}
              </div>
            </div>

            <div className='opacity-60'>{trimDate(i.created, 0, 10)}</div>

            <div className='mt-7 text-lg'>{i.text}</div>
          </div>
        ))}

        {data?.token && (
          <div className='flex w-full items-start rounded bg-[#373c46] py-6 px-10'>
            <div className='flex items-center'>
              <div>{data?.profile?.name}</div>
              <div className='relative ml-1 aspect-square h-4 w-4'>
                {gradeImg(data?.profile?.grade)}
              </div>
            </div>

            <div className='grow'>
              <div className='flex'>
                <div className='ml-14 h-24 rounded-l-sm bg-[#282e38] p-4'>
                  {data?.profile?.nickname} |
                </div>
                <textarea
                  {...register('review', {
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
                {errors?.review?.message}
              </div>
            </div>

            <div
              onClick={handleSubmit(onValid, onInvalid)}
              className='ml-4 flex h-10 w-24 cursor-pointer items-center justify-center rounded-sm bg-[#00e7ff] text-sm font-medium text-[#282e38] transition-all hover:opacity-90'
            >
              저장
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
