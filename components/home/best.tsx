import Layout from '@layouts/sectionLayout';
import Link from 'next/link';

export default function Best() {
  return (
    <Layout bgColor='#282e38' padding='py-[6.25rem]'>
      {/* 상단 배너 Start */}
      <Link href='/'>
        <a>
          <div className='flex h-[5.875rem] w-full items-center justify-between rounded-md bg-[#00e7ff] px-[3.75rem] text-[#14161a]'>
            <div className='text-lg font-medium'>
              경제적 자유 얻고 파이어족 도전! 대체 얼마가 필요할까? 🔥
            </div>

            <div className='flex items-center'>
              <span className='font-medium'>계산기 바로가기</span>
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
      {/* 상단 배너 End */}

      {/* 제목 & 더보기 Start */}
      <div className='mt-[6.625rem] flex w-full items-center justify-between'>
        <div className='text-2xl font-bold'>
          [100만뷰] 경제적 자유를 이뤄낸 BEST 클래스
        </div>

        <Link href='/'>
          <a className='flex items-center'>
            <span className='font-medium text-[#cfcfcf]'>더 보기</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='mt-0.5 ml-2 w-3 text-[#cfcfcf]'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={3}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 5l7 7-7 7'
              />
            </svg>
          </a>
        </Link>
      </div>
      {/* 제목 & 더보기 End */}

      {/* 강의 리스트 Start */}
      <div className='mt-8 grid grid-cols-3 gap-x-5 gap-y-12'>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <Link key={i} href='/'>
            <a>
              <div className='h-60 w-[23.75rem] rounded-md bg-[#020202]'></div>

              <div className='mt-4 mb-1.5 text-sm font-medium text-[#b1b1b1]'>
                카테고리 · 강사 이름
              </div>

              <div className='text-lg font-medium'>
                수익률 20% 달성하는 주식 투자 전략
              </div>
            </a>
          </Link>
        ))}
      </div>
      {/* 강의 리스트 End */}
    </Layout>
  );
}
