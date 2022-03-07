import Layout from '@layouts/sectionLayout';
import Link from 'next/link';

export default function Best() {
  return (
    <Layout bgColor='#282e38' padding='py-[6.25rem]'>
      {/* 상단 배너 Start */}
      <div className='flex justify-between items-center w-full h-[5.875rem] px-[3.75rem] bg-[url("/home/best-banner.png")]'>
        <div className='text-lg font-medium'>
          경제적 자유 얻고 파이어족 도전! 대체 얼마가 필요할까? 🔥
        </div>

        <div className='flex items-center'>
          <span className='font-medium'>계산기 바로가기</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-4 mb-0.5 ml-3'
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
      {/* 상단 배너 End */}

      {/* 제목 & 더보기 Start */}
      <div className='flex justify-between items-center w-full mt-[6.625rem]'>
        <div className='text-2xl font-bold'>
          [100만뷰] 경제적 자유를 이뤄낸 BEST 클래스
        </div>

        <Link href='/'>
          <a className='flex items-center'>
            <span className='font-medium text-[#cfcfcf]'>더 보기</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-3 mb-0.5 ml-2 text-[#cfcfcf]'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
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
      <div className='grid grid-cols-3 gap-x-5 gap-y-12 mt-8'>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i}>
            <div className='w-[23.75rem] h-60 bg-[#020202] rounded-md'></div>

            <div className='text-sm text-[#b1b1b1] font-medium mt-4 mb-1.5'>
              카테고리 · 강사 이름
            </div>

            <div className='text-lg font-medium'>
              수익률 20% 달성하는 주식 투자 전략
            </div>
          </div>
        ))}
      </div>
      {/* 강의 리스트 End */}
    </Layout>
  );
}
