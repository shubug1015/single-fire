import Popup from '@components/find/pwPopup';
import Input from '@components/input';
import SEO from '@components/seo';
import { usersApi } from '@libs/api';
import { cls } from '@libs/client/utils';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { useUser } from '@libs/client/useUser';

interface IForm {
  username: string;
  phoneNum: string;
  code: string;
}

const ResetPw: NextPage = () => {
  useUser({
    isPrivate: false,
  });
  const [popup, setPopup] = useState(false);
  const closePopup = () => setPopup(false);

  const [code, setCode] = useState({
    loading: false,
    sended: false,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
    getValues,
  } = useForm<IForm>({
    mode: 'onChange',
  });
  const onValid = async (data: IForm) => {
    try {
      setPopup(true);
    } catch {
      alert('Error');
    }
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  // 인증번호 코드 전송
  const sendCode = async () => {
    setCode((prev) => ({ ...prev, loading: true }));

    try {
      const { data } = await usersApi.getCode(
        getValues('phoneNum'),
        getValues('username')
      );

      if (data === 'unexisting user') {
        setError('username', {
          message: '존재하지 않는 아이디입니다',
        });
        setCode((prev) => ({ ...prev, loading: false }));
      } else if (data === 'unmatched phonenumber') {
        setError('phoneNum', {
          message: '아이디에 해당하는 전화번호가 아닙니다',
        });
        setCode((prev) => ({ ...prev, loading: false }));
      } else {
        setCode({ sended: true, loading: false });
      }
    } catch {
      alert('Error');
    } finally {
      setCode((prev) => ({ ...prev, loading: false }));
    }
  };
  return (
    <>
      <SEO
        title='비밀번호 찾기'
        description='밀레니얼 머니스쿨 비밀번호 찾기 페이지 입니다.'
      />
      <div className='mx-auto my-28 flex max-w-[32.5rem] flex-col items-center rounded-lg bg-[#373c46] p-[3.75rem] md:my-12 md:max-w-[330px] md:bg-transparent md:p-0'>
        <h1 className='text-2xl font-medium md:text-xl'>비밀번호 찾기</h1>
        <h2 className='mt-3 font-medium text-[#cfcfcf] md:text-center'>
          회원 가입 시 등록한 정보로 비밀번호를 찾을 수 있습니다.
        </h2>

        <form onSubmit={handleSubmit(onValid, onInvalid)} className='w-full'>
          {/* Input 필드 */}
          <div className='mt-12 w-full space-y-8 md:mt-8 md:space-y-4'>
            <Input
              type='text'
              label='아이디'
              register={register('username', {
                required: '아이디를 입력해주세요',
              })}
              error={errors?.username?.message}
            />

            <Input
              type='tel'
              label='전화번호'
              register={register('phoneNum', {
                required: '전화번호를 입력해주세요',
                validate: {
                  notPhoneNum: (value) => {
                    const regPhoneNum =
                      /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
                    if (regPhoneNum.test(value)) {
                      return true;
                    } else {
                      return '올바른 전화번호를 입력해주세요';
                    }
                  },
                },
              })}
              error={errors?.phoneNum?.message}
              readOnly={code.sended}
            >
              <div
                onClick={() => {
                  if (
                    getValues('username') &&
                    getValues('phoneNum') &&
                    !errors?.username?.message &&
                    !errors?.phoneNum?.message
                  ) {
                    sendCode();
                  }
                }}
                className={cls(
                  watch('username') &&
                    watch('phoneNum') &&
                    !errors?.username?.message &&
                    !errors?.phoneNum?.message
                    ? 'cursor-pointer transition-all hover:opacity-70'
                    : '',
                  'ml-4 flex h-full w-[7.5rem] items-center justify-center rounded border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.12)] text-sm md:ml-2 md:w-28 md:text-center'
                )}
              >
                {code.loading ? (
                  <svg
                    role='status'
                    className='h-6 w-6 animate-spin fill-[#00e7ff] text-gray-700'
                    viewBox='0 0 100 101'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                      fill='currentColor'
                    />
                    <path
                      d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                      fill='currentFill'
                    />
                  </svg>
                ) : (
                  '인증번호 전송'
                )}
              </div>
            </Input>

            <Input
              type='tel'
              label='인증번호'
              register={register('code', {
                required: '인증번호를 입력해주세요',
                validate: {
                  notMatch: async (value) => {
                    const { data: checked } = await usersApi.checkCode(
                      watch('phoneNum'),
                      value
                    );

                    if (checked === 'unmatched phonenumber') {
                      return '';
                    }
                    if (checked === 'wrong_code') {
                      return '인증번호가 일치하지 않습니다';
                    } else {
                      return true;
                    }
                  },
                },
              })}
              error={errors?.code?.message}
              readOnly={!code.sended}
            />
          </div>
          {/* Input 필드 */}

          {/* 비밀번호 찾기 버튼 */}
          <button
            type='submit'
            className='mt-8 flex h-[3.688rem] w-full cursor-pointer items-center justify-center rounded bg-[#00e7ff] text-lg font-medium text-[#282e38] transition-all hover:opacity-90 md:h-14 md:text-base'
          >
            비밀번호 찾기
          </button>
          {/* 비밀번호 찾기 버튼 */}
        </form>

        <div className='my-6 h-px w-full bg-[rgba(255,255,255,0.38)]' />

        {/* 회원가입 버튼 */}
        <Link href='/signup'>
          <a className='flex h-[3.688rem] w-full items-center justify-center rounded bg-[#4a4e57] text-lg font-medium transition-all hover:opacity-90 md:h-14 md:text-base'>
            회원가입
          </a>
        </Link>
        {/* 회원가입 버튼 */}

        <div className='mt-10 flex items-center font-medium text-[#cfcfcf]'>
          <Link href='/find-id'>
            <a>아이디 찾기</a>
          </Link>
        </div>
      </div>

      {popup && (
        <Popup username={getValues('username')} closePopup={closePopup} />
      )}
    </>
  );
};

export default ResetPw;
