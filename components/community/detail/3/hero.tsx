import Image from 'next/image';
import heroBg from 'public/test/hero-bg.png';

export default function Hero() {
  return (
    <div className='relative'>
      <div className='absolute top-1/2 left-1/2 z-[-1] h-full w-full -translate-x-1/2 -translate-y-1/2'>
        <div className='relative h-full w-full'>
          <Image
            src={heroBg}
            alt='Hero Section Background Image'
            layout='fill'
            objectFit='cover'
            placeholder='blur'
            quality={100}
          />
        </div>
      </div>

      <div className='pt-48 pb-36 text-center text-white md:pt-16 md:pb-14'>
        <div className='text-6xl font-bold leading-[4.875rem] md:text-xl'>
          목표를 세워도 꾸준히 실행하지 못해
          <br />
          작심삼일로 끝나는 의지박약형이신가요?
        </div>
        <button className='mt-14 rounded bg-[#282E38] px-14 py-5 text-xl md:mt-4 md:py-2 md:px-5 md:text-xs'>
          신희은 경제전문가와 함께하는 경제독서모임
        </button>
      </div>
    </div>
  );
}
