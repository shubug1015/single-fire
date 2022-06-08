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
        이 모든 상황은 전문가와 <br className='hidden md:block' />
        함께하지 않았기 때문입니다.
        <br />
        경제전문가와 함께하면 <br className='hidden md:block' />
        쉽고, 빠르게, 제대로 할 수 있습니다.
      </div>
    </div>
  );
}
