import Image from 'next/image';
import BeforeScrollBg from 'public/test/beforeScroll-bg.png';

export default function WithPro() {
  return (
    <div className='relative'>
      <div className='absolute top-1/2 left-1/2 z-[-1] h-full w-full -translate-x-1/2 -translate-y-1/2'>
        <div className='relative h-full w-full'>
          <Image
            src={BeforeScrollBg}
            alt='BeforeScroll Section Background Image'
            layout='fill'
            objectFit='cover'
            placeholder='blur'
            quality={100}
          />
        </div>
      </div>
      <div className='py-44 text-center text-5xl font-bold leading-[4.8rem] text-white md:py-10 md:text-base'>
        개념을 공부하고 투자하기 전 <br className='hidden md:block' />
        기초를 탄탄히 쌓고 싶다면
        <br />
        투자전문가와 함께 <br className='hidden md:block' />
        쉽고, 재미있게, 제대로 시작해보세요!
      </div>
    </div>
  );
}
