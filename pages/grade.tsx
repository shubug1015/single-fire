import { gradeImg } from '@components/grade';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { getToken, setToken } from '@libs/token';
import type { GetServerSideProps, NextPage } from 'next';

interface IProps {
  token: string | null;
}

const EditProfile: NextPage<IProps> = ({ token }) => {
  setToken({ token });

  return (
    <>
      <SEO title='등급 안내' />
      <Layout padding='pt-20 pb-36'>
        <div className='text-2xl font-bold'>등급 안내</div>

        <div className='mt-10 flex divide-x divide-black'>
          <div className='w-[12.5rem] divide-y divide-black bg-[#4a4e57]'>
            <div className='h-[3.75rem] ' />
            <div className='flex h-40 items-center justify-center'>
              회원 등급
            </div>
            <div className='flex h-40 items-center justify-center'>
              등급 조건
            </div>
            <div className='flex h-40 items-center justify-center'>혜택</div>
          </div>

          <div className='flex grow divide-x divide-black'>
            <div className='w-1/3 divide-y divide-black'>
              <div className='flex h-[3.75rem] items-center justify-center bg-[#4a4e57]'>
                1단계
              </div>
              <div className='flex h-40 flex-col items-center justify-center space-y-4 bg-[#373c46]'>
                <div className='flex aspect-square w-[3.75rem] items-center justify-center rounded-full bg-[rgba(0,0,0,0.22)]'>
                  <div className='relative aspect-square w-6'>
                    {gradeImg('1')}
                  </div>
                </div>
                <div>불씨</div>
              </div>
              <div className='flex h-40 items-center justify-center bg-[#373c46]'>
                회원가입시 달성
              </div>
              <div className='flex h-40 items-center justify-center bg-[#373c46]'>
                1~3만원 포인트 적립
              </div>
            </div>

            <div className='w-1/3 divide-y divide-black'>
              <div className='flex h-[3.75rem] items-center justify-center bg-[#4a4e57]'>
                2단계
              </div>
              <div className='flex h-40 flex-col items-center justify-center space-y-4 bg-[#373c46]'>
                <div className='flex aspect-square w-[3.75rem] items-center justify-center rounded-full bg-[rgba(0,0,0,0.22)]'>
                  <div className='relative aspect-square w-6'>
                    {gradeImg('2')}
                  </div>
                </div>
                <div>불꽃</div>
              </div>
              <div className='flex h-40 items-center justify-center bg-[#373c46] text-center'>
                강의 1건이상 수강시 자동달성
                <br />
                유료 커뮤니티 2건 이상 결제시 자동달성
              </div>
              <div className='flex h-40 items-center justify-center bg-[#373c46] text-center'>
                커뮤니티 무료 행사 참여
                <br />
                신청가능한 권한 부여
              </div>
            </div>

            <div className='w-1/3 divide-y divide-black'>
              <div className='flex h-[3.75rem] items-center justify-center bg-[#4a4e57]'>
                3단계
              </div>
              <div className='flex h-40 flex-col items-center justify-center space-y-4 bg-[#373c46]'>
                <div className='flex aspect-square w-[3.75rem] items-center justify-center rounded-full bg-[rgba(0,0,0,0.22)]'>
                  <div className='relative aspect-square w-6'>
                    {gradeImg('3')}
                  </div>
                </div>
                <div>파이어</div>
              </div>
              <div className='flex h-40 items-center justify-center bg-[#373c46] text-center'>
                강의 3건이상 수강시 달성
                <br />
                커뮤니티 유료행사 1회 무료참여권
              </div>
              <div className='flex h-40 items-center justify-center bg-[#373c46] text-center'>
                커뮤니티 유료행사 1회 무료참여권
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return getToken(ctx);
};

export default EditProfile;
