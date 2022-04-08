import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { getToken, setToken } from '@libs/token';
import { cls } from '@libs/utils';
import type { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import React, { useState } from 'react';

interface IProps {
  token: string | null;
}

interface IState {
  [key: string]: any;
}

const EditProfile: NextPage<IProps> = ({ token }) => {
  setToken({ token });

  const list = [
    {
      id: 0,
      title: '현재 보유 자산은 얼마인가요?',
    },
    {
      id: 1,
      title: '연간 저축 가능한 금액은 얼마인가요?',
    },
    {
      id: 2,
      title: '목표 은퇴시점까지 남은 기간은 얼마나 되나요?',
    },
    {
      id: 3,
      title: '투자를 목표하는 수익률은 얼마인가요?',
    },
  ];
  const [values, setValues] = useState<IState>({
    0: '',
    1: '',
    2: '',
    3: '',
  });
  const [resultTab, setResultTab] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, key: number) => {
    const {
      target: { value },
    } = e;

    setValues((prev) => ({ ...prev, [key]: value }));
  };
  return (
    <>
      <SEO title='등급 안내' />
      <Layout padding='py-[8.75rem]'>
        <div className='flex flex-col items-center'>
          <div className='text-2xl font-medium'>
            경제적 자유 얻고 파이어족 도전! 대체 얼마가 필요할까?
          </div>

          {!resultTab ? (
            <>
              <div className='mt-[3.75rem] flex flex-col items-center space-y-4'>
                {list.map((i) => (
                  <div
                    key={i.id}
                    className='flex h-[4.625rem] w-[48.75rem] items-center justify-between rounded-lg bg-[#373c46] px-10'
                  >
                    <div className='font-medium'>
                      <span className='text-[#00e7ff]'>Q. </span>
                      {i.title}
                    </div>

                    <div>
                      {i.id === 1 && (
                        <span className='mr-3 font-medium opacity-60'>
                          연간
                        </span>
                      )}
                      <input
                        type='text'
                        placeholder=''
                        value={values[i.id]}
                        onChange={(e) => handleInput(e, i.id)}
                        className='w-60 border-b border-[#575b64] bg-transparent pb-0.5 outline-none'
                      />
                      <span
                        className={cls(
                          i.id === 3 ? 'mr-3' : '',
                          'ml-3 font-medium opacity-60'
                        )}
                      >
                        {i.id === 2 ? '년후' : i.id === 3 ? '%' : '만원'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div
                onClick={() => setResultTab(true)}
                className='mt-[3.75rem] cursor-pointer rounded bg-[#00e7ff] py-4 px-[6.25rem] font-medium text-[#282e38] transition-all hover:opacity-90'
              >
                결과 보러가기
              </div>
            </>
          ) : (
            <>
              <div className='mt-[3.75rem] flex h-56 w-[54rem] items-center justify-center bg-[#373c46]'>
                <div>당신의 은퇴 후 자산은</div>
                <div className='mx-3 flex w-[28.375rem] justify-center border-b border-[#575b64] text-[2rem] font-bold text-[#00e7ff]'>
                  00000
                </div>
                <div className='ml-3 font-medium opacity-60'>만원 입니다.</div>
              </div>

              <div className='flex space-x-4'>
                <div
                  onClick={() => setResultTab(false)}
                  className='mt-[3.75rem] cursor-pointer rounded bg-[#4c515a] py-4 px-[6.25rem] font-medium transition-all hover:opacity-90'
                >
                  다시하기
                </div>

                <Link href='/'>
                  <a>
                    <div
                      onClick={() => setResultTab(true)}
                      className='mt-[3.75rem] cursor-pointer rounded bg-[#00e7ff] py-4 px-[6.25rem] font-medium text-[#282e38] transition-all hover:opacity-90'
                    >
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return getToken(ctx);
};

export default EditProfile;
