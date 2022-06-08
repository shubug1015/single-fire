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
        경제를 제대로 이해해야 <br className='hidden md:block' />
        투자로 자산을 불릴 수 있습니다.
        <br />
        경제전문가와 함께하면 <br className='hidden md:block' />
        누구보다 빠르게 성장할 수 있습니다.
      </div>
    </div>
  );
}
