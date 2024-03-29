import { gradeImg } from '@components/grade';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import type { NextPage } from 'next';

const EditProfile: NextPage = () => {
  return (
    <>
      <SEO title='등급안내' />
      <Layout padding='pt-20 pb-36 md:pt-4 md:pb-8'>
        <div className='text-2xl font-bold md:text-center md:text-lg md:font-medium'>
          등급 안내
        </div>

        <div className='mt-10 flex divide-x divide-black md:mt-4 md:hidden'>
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
                2만원 포인트 적립
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
                커뮤니티 무료행사 우선참여권
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
              </div>
              <div className='flex h-40 items-center justify-center bg-[#373c46] text-center'>
              커뮤니티 유료행사 우선참여권
              </div>
            </div>
          </div>
        </div>

        <div className='mt-4 hidden md:block'>
          <div className='flex h-[10.688rem] justify-between bg-[#373d46] p-6'>
            <div className=''>
              <div className='text-xl font-medium'>불씨</div>
              <div className='mt-[0.375rem] font-[#b1b1b1] text-xs'>
                회원가입시 달성
              </div>
              <div className='mt-4 text-sm font-medium'>2만원 포인트 적립</div>
            </div>
            <div className='h-[3.75rem] rounded-full bg-[#2b3037] p-[1.125rem]'>
              <div className='relative aspect-square w-6'>{gradeImg('1')}</div>
            </div>
          </div>
        </div>

        <div className='mt-2 hidden md:block'>
          <div className='flex h-[10.688rem] justify-between bg-[#373d46] p-6'>
            <div className=''>
              <div className='text-xl font-medium'>불꽃</div>
              <div className='mt-[0.375rem] font-[#b1b1b1] text-xs'>
                강의 1건이상 수강시 자동달성
                <br />
                유료 커뮤니티 2건 이상 결제시 자동달성
              </div>
              <div className='mt-4 text-sm font-medium'>
                커뮤니티 무료행사 우선참여권
              </div>
            </div>
            <div className='h-[3.75rem] rounded-full bg-[#2b3037] p-[1.125rem]'>
              <div className='relative aspect-square w-6'>{gradeImg('2')}</div>
            </div>
          </div>
        </div>

        <div className='mt-2 hidden md:block'>
          <div className='flex h-[10.688rem] justify-between bg-[#373d46] p-6'>
            <div className=''>
              <div className='text-xl font-medium'>파이어</div>
              <div className='mt-[0.375rem] font-[#b1b1b1] text-xs'>
                강의 3건이상 수강시 달성
              </div>
              <div className='mt-4 text-sm font-medium'>
              커뮤니티 유료행사 우선참여권
              </div>
            </div>
            <div className='h-[3.75rem] rounded-full bg-[#2b3037] p-[1.125rem]'>
              <div className='relative aspect-square w-6'>{gradeImg('3')}</div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default EditProfile;
