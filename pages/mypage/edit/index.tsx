import Loader from '@components/loader';
import Header from '@components/mypage/header';
import LectureList from '@components/mypage/lectureList';
import Navigator from '@components/mypage/navigator';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { usersApi } from '@libs/api';
import useMutation from '@libs/client/useMutation';
import { getToken, setToken } from '@libs/token';
import type { GetServerSideProps, NextPage } from 'next';
import React, { useEffect, useState } from 'react';

interface IProps {
  token: string | null;
}

const EditProfile: NextPage<IProps> = ({ token }) => {
  setToken({ token, redirectUrl: token && token.length > 0 ? null : '/login' });

  const [getData, { loading, data, error }] = useMutation(
    token ? usersApi.myInfos : null
  );
  const [editMyInfos, { loading: editLoading }] = useMutation(
    token ? usersApi.editInfos : null
  );
  const [pwTabOpen, setPwTabOpen] = useState(false);
  const [myInfos, setMyInfos] = useState({
    name: '',
    nickname: '',
    phoneNum: '',
    password: '',
    passwordCheck: '',
    marketing: false,
  });

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    kind: string
  ) => {
    const {
      target: { value },
    } = e;

    setMyInfos((prev) => ({ ...prev, [kind]: value }));
  };

  const handleCheckbox = (
    e: React.ChangeEvent<HTMLInputElement>,
    kind: string
  ) => {
    const {
      target: { checked },
    } = e;

    setMyInfos((prev) => ({
      ...prev,
      [kind]: checked,
    }));
  };

  const handleSubmit = async () => {
    const req = {
      name: myInfos.name,
      nickname: myInfos.nickname,
      phoneNum: myInfos.phoneNum,
      password: myInfos.password,
      marketing: myInfos.marketing,
      token,
    };

    try {
      editMyInfos({ req });
    } catch (e) {
      console.log(e);
    } finally {
    }
  };

  useEffect(() => {
    getData({ req: token });
  }, []);

  useEffect(() => {
    setMyInfos({
      name: data?.name,
      nickname: data?.nickname,
      phoneNum: data?.phone_number,
      password: '',
      passwordCheck: '',
      marketing: data?.ad_agree,
    });
  }, [data]);
  return (
    <>
      <SEO title='마이페이지' />
      {/* {loading ? (
        <Loader />
      ) : (
        data && ( */}
      <>
        <Layout padding='pt-20 pb-44'>
          <Header />

          <div className='mt-[4.5rem] flex space-x-10'>
            <Navigator />

            <div className='grow space-y-6'>
              <div className='text-lg font-medium'>
                {!pwTabOpen ? '개인정보' : '비밀번호 변경'}
              </div>

              <div className='divide-y divide-[#575b64] rounded-sm bg-[rgba(229,229,229,0.08)] p-10'>
                {!pwTabOpen ? (
                  <>
                    <div className='flex h-20 items-center'>
                      <div className='w-44 font-medium opacity-60'>이름</div>
                      <input
                        type='text'
                        placeholder='이름'
                        value={myInfos.name || ''}
                        onChange={(e) => handleInput(e, 'name')}
                        className='bg-transparent outline-none'
                      />
                    </div>

                    <div className='flex h-20 items-center'>
                      <div className='w-44 font-medium opacity-60'>닉네임</div>
                      <input
                        type='text'
                        placeholder='닉네임'
                        value={myInfos.nickname || ''}
                        onChange={(e) => handleInput(e, 'nickname')}
                        className='bg-transparent outline-none'
                      />
                    </div>

                    <div className='flex h-20 items-center'>
                      <div className='w-44 font-medium opacity-60'>
                        전화번호
                      </div>
                      <input
                        type='text'
                        placeholder='전화번호'
                        value={myInfos.phoneNum || ''}
                        onChange={(e) => handleInput(e, 'phoneNum')}
                        className='bg-transparent outline-none'
                      />
                    </div>

                    <div className='flex h-20 items-center'>
                      <div className='w-44 font-medium opacity-60'>
                        비밀번호
                      </div>
                      <div
                        onClick={() => setPwTabOpen(true)}
                        className='cursor-pointer rounded bg-[#686e7a] px-4 py-2 transition-all hover:opacity-90'
                      >
                        비밀번호 변경
                      </div>
                    </div>

                    <div className='flex h-20 items-center'>
                      <div className='w-44 font-medium opacity-60'>
                        이벤트 정보
                      </div>
                      <input
                        type='checkbox'
                        onChange={(e) => handleCheckbox(e, 'marketing')}
                        className='mr-2.5 h-4 w-4 cursor-pointer appearance-none rounded-sm border bg-cover bg-center transition-all checked:border-none checked:bg-[url("/icons/check.png")]'
                      />
                      <div>이벤트 수신 동의</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className='flex h-20 items-center'>
                      <div className='w-44 font-medium opacity-60'>
                        현재 비밀번호
                      </div>
                      <div>******</div>
                    </div>

                    <div className='flex h-20 items-center'>
                      <div className='w-44 font-medium opacity-60'>
                        새 비밀번호
                      </div>
                      <input
                        type='text'
                        placeholder='새 비밀번호'
                        value={myInfos.password || ''}
                        onChange={(e) => handleInput(e, 'password')}
                        className='bg-transparent outline-none'
                      />
                    </div>

                    <div className='flex h-20 items-center'>
                      <div className='w-44 font-medium opacity-60'>
                        새 비밀번호 확인
                      </div>
                      <input
                        type='text'
                        placeholder='새 비밀번호 확인'
                        value={myInfos.passwordCheck || ''}
                        onChange={(e) => handleInput(e, 'passwordCheck')}
                        className='bg-transparent outline-none'
                      />
                    </div>
                  </>
                )}
              </div>

              <div className='flex justify-end space-x-4'>
                {/* <div className='cursor-pointer rounded-sm bg-[rgba(255,255,255,0.17)] py-3 px-10 font-medium'>
                  취소
                </div> */}

                <div
                  onClick={handleSubmit}
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
      {/* )
      )} */}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return getToken(ctx);
};

export default EditProfile;
