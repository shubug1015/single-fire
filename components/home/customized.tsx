import Layout from '@layouts/sectionLayout';
import Link from 'next/link';

interface IProps {
  data: any[];
}

export default function Customized({ data }: IProps) {
  return (
    <Layout bgColor='bg-[#e5e5e514]' padding='py-20 md:py-8'>
      <div className='flex justify-between md:flex-col'>
        {/* 좌측 섹션 */}
        <div>
          <div className='text-xl font-bold md:text-sm'>
            투자의 “투”자도 모르는 분을 위한,
          </div>

          <div className='mt-2 text-[3.25rem] font-bold leading-[1.31] md:mt-0.5 md:text-2xl'>
            <span className='text-[#00e7ff]'>맞춤형 CLASS</span>를{' '}
            <br className='md:hidden' />
            제공합니다. ✏️
          </div>

          <div className='mt-[3.75rem] font-medium md:hidden'>
            여러분의 수식어가 될 수 있습니다!
          </div>

          <div className='mt-6 flex space-x-2 font-medium md:hidden'>
            <div className='rounded-sm bg-[#ffffff29] py-0.5 px-2'>
              #유튜브 100만뷰의 주인공
            </div>
            <div className='rounded-sm bg-[#ffffff29] py-0.5 px-2'>
              #100억 자산가
            </div>
          </div>

          <div className='mt-2 flex space-x-2 font-medium md:hidden'>
            <div className='rounded-sm bg-[#ffffff29] py-0.5 px-2'>
              #월 현금흐름 1000만원
            </div>
            <div className='rounded-sm bg-[#ffffff29] py-0.5 px-2'>
              #파이어족
            </div>
            <div className='rounded-sm bg-[#ffffff29] py-0.5 px-2'>#건물주</div>
          </div>
        </div>
        {/* 좌측 섹션 */}

        {/* 우측 섹션 */}
        <div className='space-y-2 md:mt-6 md:flex md:space-x-4 md:space-y-0 md:overflow-x-scroll'>
          {data?.map((i, index) => (
            <Link key={i.order} href={`/lecture/detail/${i.lecture.id}`}>
              <a className='group flex h-20 w-[38.125rem] items-center justify-between rounded bg-[#282e38] px-10 transition-all hover:bg-[#00E7FF] md:h-[6.5rem] md:w-[14.5rem] md:px-4'>
                <div className='flex items-center md:w-[14.5rem] md:flex-col-reverse md:items-start'>
                  <div className='mr-2 text-[#9e9e9e] transition-all group-hover:text-[#14161a] md:hidden'>
                    {index + 1}.
                  </div>

                  <div className='transition-all group-hover:text-[#14161a] md:text-[0.812rem]'>
                    {i.text}
                  </div>

                  {index === 0 && (
                    <div className='ml-2 mt-1 rounded-sm bg-[#ff1414] px-2 pb-0.5 text-sm md:ml-0 md:mt-0 md:mb-2.5 md:text-xs'>
                      HOT
                    </div>
                  )}

                  {index === 1 && (
                    <div className='ml-2 rounded-sm bg-[#00cde2] px-2 pb-0.5 text-sm text-[#222222] md:ml-0 md:mt-0 md:mb-2.5 md:text-xs'>
                      추천
                    </div>
                  )}
                </div>

                <svg
                  className='aspect-square w-[14px] text-[#9e9e9e] group-hover:text-[#14161a] md:hidden'
                  viewBox='0 0 14 14'
                  fill='red'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1.64706 14L11.6694 3.97765V13.1847L14 13.1765V0H0.823529V2.32235L10.0224 2.33059L0 12.3529L1.64706 14Z'
                    fill='currentColor'
                  />
                </svg>
              </a>
            </Link>
          ))}
        </div>
        {/* 우측 섹션 */}
      </div>
    </Layout>
  );
}
