import SEO from '@components/seo';
import Input from '@components/input';
import Checkbox from '@components/checkbox';
import type { GetServerSideProps, NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { usersApi } from '@libs/api';
import { getToken, setToken } from '@libs/token';
import useMutation from '@libs/client/useMutation';
import { useRouter } from 'next/router';

interface IProps {
  token: string | null;
}

interface IInfos {
  [key: string]: any;
}

interface MutationResult {
  ok: boolean;
}

const SignUp: NextPage<IProps> = ({ token }) => {
  setToken({ token, redirectUrl: token && token.length > 0 ? '/' : null });

  const router = useRouter();
  console.log(router.query);
  const [infos, setInfos] = useState<IInfos>({
    name: { value: '', checked: -1 },
    nickname: { value: '', checked: -1 },
    phoneNum: { value: '', checked: -1 },
    code: {
      loading: false,
      value: '',
      notSended: true,
      checked: -1,
    },
    username: { value: '', checked: -1 },
    password: { value: '', checked: -1 },
    passwordCheck: { value: '', checked: -1 },
    service: { value: false, checked: -1 },
    privacy: { value: false, checked: -1 },
    ageOver: { value: false, checked: -1 },
    marketing: { value: false, checked: -1 },
  });
  const {
    name,
    nickname,
    phoneNum,
    code,
    username,
    password,
    passwordCheck,
    service,
    privacy,
    ageOver,
    marketing,
  } = infos;
  const [signup, { loading, error }] = useMutation<MutationResult>(
    usersApi.signupNextApi
  );

  // 인증번호 코드 전송
  const sendCode = async () => {
    setInfos((prev) => ({ ...prev, code: { ...prev.code, loading: true } }));
    if (phoneNum.value.length > 0) {
      try {
        await usersApi.getCode(phoneNum.value);
        setInfos((prev) => ({
          ...prev,
          code: { ...prev.code, notSended: false },
        }));
      } catch {
        alert('Server Error');
      } finally {
        setInfos((prev) => ({
          ...prev,
          code: { ...prev.code, loading: false },
        }));
      }
    }
  };

  // 인증번호 검사
  useEffect(() => {
    const checkCode = async () => {
      const { data: checked } = await usersApi.checkCode(
        phoneNum.value,
        +code.value
      );

      if (checked === 'wrong_code') {
        setInfos((prev) => ({
          ...prev,
          code: { ...prev.code, checked: false },
        }));
      } else {
        setInfos((prev) => ({
          ...prev,
          code: { ...prev.code, checked: true },
        }));
      }
    };

    const timer = setTimeout(() => {
      if (code.value.length > 0) {
        checkCode();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [code.value]);

  // Input 필드 입력
  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    kind: string
  ) => {
    const {
      target: { value },
    } = e;

    // 나머지 필드 입력
    if (kind === 'phoneNum') {
      // 전화번호 필드 변경 시 인증번호 필드 초기화
      setInfos((prev) => ({
        ...prev,
        code: { ...prev.code, value: '', notSended: true, checked: -1 },
      }));
    }
    setInfos((prev) => ({ ...prev, [kind]: { ...prev[kind], value } }));
  };

  // Checkbox 필드 입력
  const handleCheckbox = (
    e: React.ChangeEvent<HTMLInputElement>,
    kind: string
  ) => {
    const {
      target: { checked },
    } = e;

    setInfos((prev) => ({
      ...prev,
      [kind]: { ...prev[kind], value: checked },
    }));
  };

  // 회원가입 진행
  const handleSubmit = () => {
    const req = {
      name: name.value,
      nickname: nickname.value,
      phoneNum: phoneNum.value,
      username: username.value,
      password: password.value,
      marketing: marketing.value,
    };

    signup({ req, redirectUrl: 'back' });
  };
  return (
    <>
      <SEO title='회원가입' />
      <div className='mx-auto my-28 flex max-w-[43.75rem] flex-col items-center rounded-lg bg-[#373c46] p-[3.75rem]'>
        <h1 className='text-2xl font-medium'>회원가입</h1>

        {/* Input 필드 */}
        <div className='mt-12 w-full space-y-8'>
          <Input
            label='이름'
            kind='name'
            type='text'
            value={name.value}
            checked={name.checked}
            handleInput={handleInput}
          />

          <Input
            label='닉네임'
            kind='nickname'
            type='text'
            value={nickname.value}
            checked={nickname.checked}
            handleInput={handleInput}
          />

          <Input
            label='전화번호'
            kind='phoneNum'
            type='tel'
            value={phoneNum.value}
            checked={phoneNum.checked}
            handleInput={handleInput}
            codeLoading={code.loading}
            sendCode={sendCode}
          />

          <Input
            disabled={code.notSended}
            label='인증번호'
            kind='code'
            type='tel'
            value={code.value}
            checked={code.checked}
            handleInput={handleInput}
          />

          <Input
            label='아이디'
            kind='username'
            type='text'
            value={username.value}
            checked={username.checked}
            handleInput={handleInput}
          />

          <Input
            label='비밀번호'
            kind='password'
            type='password'
            value={password.value}
            checked={password.checked}
            handleInput={handleInput}
          />

          <Input
            label='비밀번호 확인'
            kind='passwordCheck'
            type='password'
            value={passwordCheck.value}
            checked={passwordCheck.checked}
            handleInput={handleInput}
          />
        </div>
        {/* Input 필드 */}

        {/* Checkbox 필드 */}
        <div className='mt-6 w-full space-y-[0.875rem]'>
          <Checkbox
            kind='service'
            checked={service.checked}
            handleCheckbox={handleCheckbox}
          >
            <div className='text-[#cfcfcf]'>
              <span className='text-[#ff8a00] underline'>서비스이용약관</span>에
              동의합니다. (필수)
            </div>
          </Checkbox>

          <Checkbox
            kind='privacy'
            checked={privacy.checked}
            handleCheckbox={handleCheckbox}
          >
            <div className='text-[#cfcfcf]'>
              <span className='text-[#ff8a00] underline'>
                개인정보 수집 및 이용동의
              </span>
              에 동의합니다. (필수)
            </div>
          </Checkbox>

          <Checkbox
            kind='ageOver'
            checked={ageOver.checked}
            handleCheckbox={handleCheckbox}
          >
            <div className='text-[#cfcfcf]'>만 14세 이상 입니다. (필수)</div>
          </Checkbox>

          <Checkbox kind='marketing' handleCheckbox={handleCheckbox}>
            <div className='text-[#cfcfcf]'>
              광고성 정보 수신동의에 동의합니다. (선택)
            </div>
          </Checkbox>
        </div>
        {/* Checkbox 필드 */}

        {/* 회원가입 버튼 */}
        <div
          onClick={handleSubmit}
          className='mt-12 flex h-[3.688rem] w-full cursor-pointer items-center justify-center rounded bg-[#00e7ff] text-lg font-medium text-[#282e38] transition-all hover:opacity-90'
        >
          {loading ? (
            <svg
              role='status'
              className='h-6 w-6 animate-spin fill-[#373c46] text-[#02cce2]'
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
            '회원가입 완료'
          )}
        </div>
        {/* 회원가입 버튼 */}
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return getToken(ctx);
};

export default SignUp;
