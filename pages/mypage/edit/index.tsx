import Header from '@components/mypage/header';
import Input from '@components/mypage/input';
import Navigator from '@components/mypage/navigator';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { usersApi } from '@libs/api';
import { useUser } from '@libs/client/useUser';
import useMutation from '@libs/client/useMutation';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';

interface IForm {
  name: string;
  nickname: string;
  phoneNum: string;
  password: string;
  passwordCheck: string;
  adAgree: boolean;
}

const EditProfile: NextPage = () => {
  const { token, profile } = useUser({
    isPrivate: true,
  });
  const [editMyInfos, { loading: editLoading }] = useMutation(
    usersApi.editInfos
  );
  const [pwTabOpen, setPwTabOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<IForm>({
    mode: 'onChange',
  });
  const onValid = (data: IForm) => {
    try {
      const req = {
        ...(data.name && { name: data.name }),
        ...(data.nickname && { nickname: data.nickname }),
        ...(data.phoneNum && { phoneNum: data.phoneNum }),
        ...(data.password && { password: data.password }),
        adAgree: data.adAgree,
        token,
      };
      editMyInfos({ req });
      alert('회원 정보 수정이 완료되었습니다.');
    } catch {
      alert('Error');
    }
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  useEffect(() => {
    setValue('name', profile?.name);
    setValue('nickname', profile?.nickname);
    setValue('phoneNum', profile?.phone_number);
    setValue('adAgree', profile?.ad_agree);
  }, [profile]);
  return (
    <>
      <SEO title='마이페이지' />
      <Layout padding='pt-20 pb-44 md:pt-4'>
        <Header />

        <div className='mt-[4.5rem] flex space-x-10 md:mt-0 md:block md:space-x-0'>
          <Navigator />

          <div className='grow space-y-6 md:mt-8'>
            <div className='text-lg font-medium'>
              {!pwTabOpen ? '개인정보' : '비밀번호 변경'}
            </div>

            <div className='divide-y divide-[#575b64] rounded-sm bg-[rgba(229,229,229,0.08)] p-10 md:p-4'>
              {!pwTabOpen ? (
                <>
                  <Input
                    type='text'
                    label='이름'
                    register={register('name', {
                      value: profile?.name,
                      required: '이름을 입력해주세요',
                      minLength: {
                        message: '이름은 2글자 이상이어야 합니다',
                        value: 2,
                      },
                      maxLength: {
                        message: '이름은 5글자 이하여야 합니다',
                        value: 5,
                      },
                    })}
                    error={errors?.name?.message}
                  />

                  <Input
                    type='text'
                    label='닉네임'
                    register={register('nickname', {
                      value: profile?.nickname,
                      required: '닉네임을 입력해주세요',
                      minLength: {
                        message: '닉네임은 2글자 이상이어야 합니다',
                        value: 2,
                      },
                      maxLength: {
                        message: '닉네임은 8글자 이하여야 합니다',
                        value: 8,
                      },
                    })}
                    error={errors?.nickname?.message}
                  />

                  <Input
                    type='tel'
                    label='전화번호'
                    register={register('phoneNum', {
                      value: profile?.phone_number,
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
                    readOnly
                  />

                  <div className='flex h-20 items-center md:text-sm'>
                    <div className='w-44 font-medium opacity-60'>비밀번호</div>
                    <div
                      onClick={() => setPwTabOpen(true)}
                      className='cursor-pointer rounded bg-[#686e7a] px-4 py-2 transition-all hover:opacity-90 md:text-xs'
                    >
                      비밀번호 변경
                    </div>
                  </div>

                  <div className='flex h-20 items-center md:text-sm'>
                    <div className='w-44 font-medium opacity-60'>
                      이벤트 정보
                    </div>
                    <input
                      type='checkbox'
                      {...register('adAgree', {
                        value: profile?.ad_agree,
                      })}
                      className='mr-2.5 h-4 w-4 cursor-pointer appearance-none rounded-sm border bg-cover bg-center transition-all checked:border-none checked:bg-[url("/icons/check.png")]'
                    />
                    <div className='md:text-xs'>이벤트 수신 동의</div>
                  </div>
                </>
              ) : (
                <>
                  <div className='flex h-20 items-center md:text-sm'>
                    <div className='w-44 font-medium opacity-60'>
                      현재 비밀번호
                    </div>
                    <div>**********</div>
                  </div>

                  <Input
                    type='password'
                    label='새 비밀번호'
                    register={register('password', {
                      value: '',
                      required: '비밀번호를 입력해주세요',
                      validate: {
                        notPw: (value) => {
                          const regPw =
                            /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
                          if (regPw.test(value)) {
                            return true;
                          } else {
                            return '비밀번호는 8자리 이상 / 1개 이상의 문자, 숫자, 특수문자가 포함되어야 합니다';
                          }
                        },
                      },
                    })}
                    error={errors?.password?.message}
                  />

                  <Input
                    type='password'
                    label='새 비밀번호 확인'
                    register={register('passwordCheck', {
                      value: '',
                      required: '비밀번호를 입력해주세요',
                      validate: {
                        notPwCheck: (value) =>
                          value === watch('password') ||
                          '비밀번호가 일치하지 않습니다',
                      },
                    })}
                    error={errors?.passwordCheck?.message}
                  />
                </>
              )}
            </div>

            <div className='flex justify-end space-x-4'>
              {/* <div className='cursor-pointer rounded-sm bg-[rgba(255,255,255,0.17)] py-3 px-10 font-medium'>
                  취소
                </div> */}

              <div
                onClick={handleSubmit(onValid, onInvalid)}
                className='cursor-pointer rounded-sm bg-[#00e7ff] py-3 px-10 font-medium text-[#282e38]'
              >
                {editLoading ? (
                  <svg
                    role='status'
                    className='h-5 w-5 animate-spin fill-[#373c46] text-[#02cce2]'
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
                  '저장'
                )}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default EditProfile;
