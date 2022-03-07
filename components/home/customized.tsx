import Layout from '@layouts/sectionLayout';
import Image from 'next/image';
import Link from 'next/link';

export default function Customized() {
  return (
    <Layout bgColor='bg-[#e5e5e514]' padding='py-20'>
      <div className='flex justify-between'>
        {/* 좌측 섹션 Start */}
        <div>
          <div className='text-xl font-bold'>
            주식의 “주”자도 모르는 분을 위한,
          </div>

          <div className='text-[3.25rem] font-bold leading-[1.31] mt-2'>
            <span className='text-[rgb(0,188,212)]'>맞춤형 CLASS</span>를<br />
            제공합니다 ✏️
          </div>

          <div className='font-medium mt-[3.75rem]'>
            여러분의 수식어가 될 수 있습니다.
          </div>

          <div className='flex font-medium space-x-2 mt-6'>
            <div className='bg-[#ffffff29] py-0.5 px-2 rounded-sm'>
              #유튜브 100만뷰의 신화
            </div>
            <div className='bg-[#ffffff29] py-0.5 px-2 rounded-sm'>
              #120억의 자산가
            </div>
          </div>
          <div className='flex font-medium space-x-2 mt-2'>
            <div className='bg-[#ffffff29] py-0.5 px-2 rounded-sm'>
              #순수익 월 1200만원
            </div>
            <div className='bg-[#ffffff29] py-0.5 px-2 rounded-sm'>
              #강남 건물주
            </div>
          </div>
        </div>
        {/* 좌측 섹션 End */}

        {/* 우측 섹션 Start */}
        <div className='space-y-2'>
          {[0, 1, 2, 3, 4].map((i) => (
            <Link key={i} href='/'>
              <a className='flex justify-between items-center w-[38.125rem] h-20 bg-[#282e38] rounded px-10 transition-all hover:bg-[#0097a7] group'>
                <div>
                  <span className='text-[#9e9e9e] mr-2 transition-all group-hover:text-white'>
                    {i + 1}.
                  </span>
                  <span>가장 기본이 되는 주식 투자 전략</span>
                </div>
                <div className='relative w-3 aspect-square opacity-30 transition-all group-hover:opacity-100'>
                  <Image
                    src='/home/customized-arrow.png'
                    alt='Arrow Icon'
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
              </a>
            </Link>
          ))}
        </div>
        {/* 우측 섹션 End */}
      </div>
    </Layout>
  );
}
