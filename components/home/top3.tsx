import Layout from '@layouts/sectionLayout';
import Link from 'next/link';

export default function Top3() {
  return (
    <Layout bgColor='#282e38' padding='py-[6.25rem]'>
      {/* 코인 Top3 강의 Start */}
      <div>
        {/* 제목 & 더보기 Start */}
        <div className='flex w-full items-center justify-between'>
          <div className='text-2xl font-bold'>코인 TOP3 강의</div>

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
          {[0, 1, 2].map((i) => (
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
      </div>
      {/* 코인 Top3 강의 End */}

      {/* 부동산 Top3 강의 Start */}
      <div className='mt-[9.5rem]'>
        {/* 제목 & 더보기 Start */}
        <div className='flex w-full items-center justify-between'>
          <div className='text-2xl font-bold'>부동산 TOP3 강의</div>
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
          {[0, 1, 2].map((i) => (
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
      </div>
      {/* 부동산 Top3 강의 End */}

      {/* 주식 Top3 강의 Start */}
      <div className='mt-[9.5rem]'>
        {/* 제목 & 더보기 Start */}
        <div className='mt-[9.5rem] flex w-full items-center justify-between'>
          <div className='text-2xl font-bold'>주식 TOP3 강의</div>

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
          {[0, 1, 2].map((i) => (
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
      </div>
      {/* 주식 Top3 강의 End */}
    </Layout>
  );
}
