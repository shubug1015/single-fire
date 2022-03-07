import Layout from '@layouts/sectionLayout';
import Link from 'next/link';

export default function Top3() {
  return (
    <Layout bgColor='#282e38' padding='py-[6.25rem]'>
      {/* 코인 Top3 강의 Start */}
      <div>
        {/* 제목 & 더보기 Start */}
        <div className='flex justify-between items-center w-full'>
          <div className='text-2xl font-bold'>코인 TOP3 강의</div>

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
          {[0, 1, 2].map((i) => (
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
      </div>
      {/* 코인 Top3 강의 End */}

      {/* 부동산 Top3 강의 Start */}
      <div className='mt-[9.5rem]'>
        {/* 제목 & 더보기 Start */}
        <div className='flex justify-between items-center w-full'>
          <div className='text-2xl font-bold'>부동산 TOP3 강의</div>
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
          {[0, 1, 2].map((i) => (
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
      </div>
      {/* 부동산 Top3 강의 End */}

      {/* 주식 Top3 강의 Start */}
      <div className='mt-[9.5rem]'>
        {/* 제목 & 더보기 Start */}
        <div className='flex justify-between items-center w-full mt-[9.5rem]'>
          <div className='text-2xl font-bold'>주식 TOP3 강의</div>

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
          {[0, 1, 2].map((i) => (
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
      </div>
      {/* 주식 Top3 강의 End */}
    </Layout>
  );
}
