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
        어떤 목표라도 좋습니다. <br className='hidden md:block' />
        내가 꼭 이뤄야 할 꿈이 있다면
        <br />
        그 꿈을 현실로 실현하는 <br className='hidden md:block' />
        실행의 비결을 배워갈 수 있습니다.
      </div>
    </div>
  );
}
