import TopLectureList from '@components/topLectureList';
import Layout from '@layouts/sectionLayout';
import Link from 'next/link';

interface IProps {
  data: any[];
}

export default function Best({ data }: IProps) {
  return (
    <Layout padding='py-[6.25rem] md:py-10'>
      {/* 상단 배너 */}
      <Link href='/calculator'>
        <a>
          <div className='mb-[6.625rem] flex h-[5.875rem] w-full items-center justify-between rounded-md bg-[#00e7ff] px-[3.75rem] text-[#14161a] md:mb-10 md:p-4'>
            <div className='text-lg font-medium md:text-sm'>
              경제적 자유 얻고 파이어족 도전!
              <br className='hidden md:block' /> 대체 얼마가 필요할까? 🔥
            </div>

            <div className='flex items-center'>
              <span className='font-medium md:hidden'>계산기 바로가기</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='mb-0.5 ml-3 w-4'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            </div>
          </div>
        </a>
      </Link>
      {/* 상단 배너 */}

      {/* Best 클래스 */}
      <TopLectureList
        title='[100만뷰] 경제적 자유를 이뤄낸 BEST 클래스'
        data={data}
        url='/lecture'
      />
      {/* Best 클래스 */}
    </Layout>
  );
}
