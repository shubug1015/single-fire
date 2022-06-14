import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { cls } from '@libs/client/utils';
import type { NextPage } from 'next';
import Link from 'next/link';
import React, { useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';

interface IForm {
  input1: string;
  input2: string;
  input3: string;
  input4: string;
}

const Calculator: NextPage = () => {
  const [resultTab, setResultTab] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<IForm>({
    mode: 'onSubmit',
  });
  const onValid = (data: IForm) => {
    setResultTab(true);
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  const list = [
    {
      id: 0,
      title: '파이어 이후 매달 지출하고 싶은 금액은 얼마인가요?',
      input: 'input1',
      error: errors?.input1?.message,
    },
    {
      id: 1,
      title: '현재 본인의 나이는 얼마인가요?',
      input: 'input2',
      error: errors?.input2?.message,
    },
    {
      id: 2,
      title: '파이어하고 싶은 나이는 언제인가요?',
      input: 'input3',
      error: errors?.input3?.message,
    },
    {
      id: 3,
      title: '투자시 목표 수익룰은 얼마인가요?',
      input: 'input4',
      error: errors?.input4?.message,
    },
  ];

  const result1 = Math.ceil(
    +watch('input1') * 12 * 1.02 ** (+watch('input3') - +watch('input2'))
  );
  const result2 = Math.ceil(result1 / (+watch('input4') / 100 - 0.02));
  return (
    <>
      <SEO title='등급 안내' />
      <Layout padding='py-[8.75rem] md:py-24'>
        <div className='flex flex-col items-center'>
          <div className='text-2xl font-medium md:text-center md:text-xl'>
            경제적 자유 얻고 파이어족 도전! 대체 얼마가 필요할까?
          </div>

          {!resultTab ? (
            <>
              <div className='mt-[3.75rem] flex flex-col items-center space-y-4'>
                {list.map((i) => (
                  <div
                    key={i.id}
                    className='w-[48.75rem] rounded-lg bg-[#373c46] py-7 px-10 md:w-full'
                  >
                    <div className='flex items-center justify-between md:flex-col md:items-start'>
                      <div className='font-medium'>
                        <span className='text-[#00e7ff]'>Q. </span>
                        {i.title}
                      </div>

                      <div className='flex w-72 md:mt-4'>
                        <input
                          type='tel'
                          placeholder=''
                          {...register(
                            i.input as
                              | 'input1'
                              | 'input2'
                              | 'input3'
                              | 'input4',
                            {
                              required: '값을 입력해주세요',
                            }
                          )}
                          className='w-60 border-b border-[#575b64] bg-transparent pr-0.5 text-right outline-none'
                        />
                        <span className='ml-3 font-medium opacity-60'>
                          {i.id === 0 ? '원' : i.id === 3 ? '%' : '살'}
                        </span>
                      </div>
                    </div>

                    {i.error && (
                      <div className='mt-2 ml-5 text-sm text-red-500'>
                        {i.error}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div
                onClick={handleSubmit(onValid, onInvalid)}
                className='mt-[3.75rem] cursor-pointer rounded bg-[#00e7ff] py-4 px-[6.25rem] font-medium text-[#282e38] transition-all hover:opacity-90'
              >
                결과 보러가기
              </div>
            </>
          ) : (
            <>
              <div className='mt-[3.75rem] flex h-64 w-[54rem] flex-col items-center justify-center space-y-8 bg-[#373c46] md:w-full'>
                <div className='flex items-center md:flex-col'>
                  <div>필요한 파이어 자금은</div>

                  <div className='flex items-center md:mt-2 md:items-center'>
                    <div className='mx-3 flex w-[28.375rem] justify-center border-b border-[#575b64] text-[2rem] font-bold text-[#00e7ff] md:mx-0 md:w-fit md:border-transparent'>
                      {result2.toLocaleString()}
                    </div>
                    <div className='ml-3 font-medium opacity-60 md:ml-2 md:mt-3'>
                      원입니다.
                    </div>
                  </div>
                </div>

                <div className='flex items-center md:flex-col'>
                  <div>파이어 후 연간 지출금액은 미래가치로</div>

                  <div className='flex items-center md:mt-2 md:items-center'>
                    <div className='mx-3 flex w-[22.375rem] justify-center border-b border-[#575b64] text-[2rem] font-bold text-[#00e7ff] md:mx-0 md:w-fit md:border-transparent'>
                      {result1.toLocaleString()}
                    </div>
                    <div className='ml-3 font-medium opacity-60 md:ml-2 md:mt-3'>
                      원입니다.
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex space-x-4 md:flex-col md:space-x-0'>
                <div
                  onClick={() => {
                    setValue('input1', '');
                    setValue('input2', '');
                    setValue('input3', '');
                    setValue('input4', '');
                    setResultTab(false);
                  }}
                  className='mt-[3.75rem] cursor-pointer rounded bg-[#4c515a] py-4 px-[6.25rem] font-medium transition-all hover:opacity-90'
                >
                  다시하기
                </div>

                <Link href='/'>
                  <a>
                    <div className='mt-[3.75rem] cursor-pointer rounded bg-[#00e7ff] py-4 px-[6.25rem] font-medium text-[#282e38] transition-all hover:opacity-90 md:mt-4'>
                      메인으로
                    </div>
                  </a>
                </Link>
              </div>
            </>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Calculator;
