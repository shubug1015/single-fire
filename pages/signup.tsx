import SEO from '@components/seo';
import Input from '@components/signup/input';
import Checkbox from '@components/signup/checkbox';
import type { NextPage } from 'next';
import React, { useState } from 'react';
import { signUpApi } from '@libs/api';

const SignUp: NextPage = () => {
  const [infos, setInfos] = useState({
    name: '',
    nickname: '',
    phoneNum: '',
    code: '',
    password: '',
    passwordCheck: '',
    service: false,
    privacy: false,
    ageOver: false,
    marketing: false,
  });

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    kind: string
  ) => {
    const {
      target: { value },
    } = e;

    setInfos((prev) => ({ ...prev, [kind]: value }));
  };

  const handleCheckbox = (
    e: React.ChangeEvent<HTMLInputElement>,
    kind: string
  ) => {
    const {
      target: { checked },
    } = e;

    if (checked) {
      setInfos((prev) => ({ ...prev, [kind]: true }));
    } else {
      setInfos((prev) => ({ ...prev, [kind]: false }));
    }
  };

  const sendCode = async () => {
    const code = await signUpApi.getCode(infos.phoneNum);

    console.log(code);
  };

  //   console.log(infos);

  return (
    <>
      <SEO title='회원가입' />
      <div className='mx-auto my-28 flex max-w-[43.75rem] flex-col items-center rounded-lg bg-[#373c46] p-[3.75rem]'>
        <h1 className='text-2xl font-medium'>회원가입</h1>

        <div className='mt-12 w-full space-y-8'>
          <Input
            label='이름'
            type='text'
            placeholder='이름'
            value={infos.name}
            kind='name'
            handleInput={handleInput}
          />

          <Input
            label='닉네임'
            type='text'
            placeholder='닉네임'
            value={infos.nickname}
            kind='nickname'
            handleInput={handleInput}
          />

          <Input
            label='전화번호'
            type='tel'
            placeholder='전화번호'
            value={infos.phoneNum}
            kind='phoneNum'
            handleInput={handleInput}
            sendCode={sendCode}
          />

          <Input
            label='인증번호'
            type='text'
            placeholder='인증번호'
            value={infos.code}
            kind='code'
            handleInput={handleInput}
          />

          <Input
            label='비밀번호'
            type='text'
            placeholder='비밀번호'
            value={infos.password}
            kind='password'
            handleInput={handleInput}
          />

          <Input
            label='비밀번호 확인'
            type='text'
            placeholder='비밀번호 확인'
            value={infos.passwordCheck}
            kind='passwordCheck'
            handleInput={handleInput}
          />
        </div>

        <div className='mt-6 w-full space-y-[0.875rem]'>
          <Checkbox kind='service' handleCheckbox={handleCheckbox}>
            <div className='text-[#cfcfcf]'>
              <span className='text-[#ff8a00] underline'>서비스이용약관</span>에
              동의합니다. (필수)
            </div>
          </Checkbox>

          <Checkbox kind='privacy' handleCheckbox={handleCheckbox}>
            <div className='text-[#cfcfcf]'>
              <span className='text-[#ff8a00] underline'>
                개인정보 수집 및 이용동의
              </span>
              에 동의합니다. (필수)
            </div>
          </Checkbox>

          <Checkbox kind='ageOver' handleCheckbox={handleCheckbox}>
            <div className='text-[#cfcfcf]'>만 14세 이상 입니다. (필수)</div>
          </Checkbox>

          <Checkbox kind='marketing' handleCheckbox={handleCheckbox}>
            <div className='text-[#cfcfcf]'>
              광고성 정보 수신동의에 동의합니다. (선택)
            </div>
          </Checkbox>
        </div>

        <div className='mt-12 flex h-[3.688rem] w-full cursor-pointer items-center justify-center rounded bg-[#00e7ff] text-lg font-medium text-[#282e38] transition-all hover:opacity-90'>
          회원가입 완료
        </div>
      </div>
    </>
  );
};

export default SignUp;
