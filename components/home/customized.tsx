import Layout from '@layouts/sectionLayout';
import Image from 'next/image';
import Link from 'next/link';
import ArrowImg from '@public/home/customized-arrow.png';

export default function Customized() {
  return (
    <Layout bgColor='bg-[#e5e5e514]' padding='py-20'>
      <div className='flex justify-between'>
        {/* 좌측 섹션 Start */}
        <div>
          <div className='text-xl font-bold'>
            주식의 “주”자도 모르는 분을 위한,
          </div>

          <div className='mt-2 text-[3.25rem] font-bold leading-[1.31]'>
            <span className='text-[#00e7ff]'>맞춤형 CLASS</span>를<br />
            제공합니다 ✏️
          </div>

          <div className='mt-[3.75rem] font-medium'>
            여러분의 수식어가 될 수 있습니다.
          </div>

          <div className='mt-6 flex space-x-2 font-medium'>
            <div className='rounded-sm bg-[#ffffff29] py-0.5 px-2'>
              #유튜브 100만뷰의 신화
            </div>
            <div className='rounded-sm bg-[#ffffff29] py-0.5 px-2'>
              #120억의 자산가
            </div>
          </div>
          <div className='mt-2 flex space-x-2 font-medium'>
            <div className='rounded-sm bg-[#ffffff29] py-0.5 px-2'>
              #순수익 월 1200만원
            </div>
            <div className='rounded-sm bg-[#ffffff29] py-0.5 px-2'>
              #강남 건물주
            </div>
          </div>
        </div>
        {/* 좌측 섹션 End */}

        {/* 우측 섹션 Start */}
        <div className='space-y-2'>
          {[0, 1, 2, 3, 4].map((i) => (
            <Link key={i} href='/'>
              <a className='group flex h-20 w-[38.125rem] items-center justify-between rounded bg-[#282e38] px-10 transition-all hover:bg-[#00E7FF]'>
                <div className='flex items-center'>
                  <div className='mr-2 text-[#9e9e9e] transition-all group-hover:text-[#14161a]'>
                    {i + 1}.
                  </div>
                  <div className='transition-all group-hover:text-[#14161a]'>
                    가장 기본이 되는 주식 투자 전략
                  </div>
                  {i === 0 && (
                    <div className='ml-2 mt-1 rounded-sm bg-[#ff1414] px-2 pb-0.5 text-sm'>
                      HOT
                    </div>
                  )}
                  {i === 1 && (
                    <div className='ml-2 rounded-sm bg-[#00cde2] px-2 pb-0.5 text-sm text-[#222222]'>
                      추천
                    </div>
                  )}
                </div>
                {/* <div className='relative aspect-square w-3 opacity-70 transition-all group-hover:opacity-100'> */}
                <svg
                  className='aspect-square w-[14px] text-[#9e9e9e] group-hover:text-[#14161a]'
                  viewBox='0 0 14 14'
                  fill='red'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1.64706 14L11.6694 3.97765V13.1847L14 13.1765V0H0.823529V2.32235L10.0224 2.33059L0 12.3529L1.64706 14Z'
                    fill='currentColor'
                  />
                </svg>
                {/* </div> */}
              </a>
            </Link>
          ))}
        </div>
        {/* 우측 섹션 End */}
      </div>
    </Layout>
  );
}
