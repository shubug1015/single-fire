import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import PrecautionBg from 'public/test/precaution-bg.png';

export default function Precaution() {
  // const router = useRouter();
  // const id = router.query.id;
  return (
    <div className='relative'>
      <div className='absolute top-1/2 left-1/2 z-[-1] h-full w-full -translate-x-1/2 -translate-y-1/2'>
        <div className='relative h-full w-full'>
          <Image
            src={PrecautionBg}
            alt='Precaution Section Background Image'
            layout='fill'
            objectFit='cover'
            placeholder='blur'
            quality={100}
          />
        </div>
      </div>

      <div className='py-[7.5rem] text-center md:py-10'>
        <div className='text-6xl md:text-2xl'>🚫</div>
        <div className='mt-4 text-4xl font-bold leading-normal text-white md:mt-2 md:text-lg'>
          주의사항
        </div>
        <div className='mt-[3.125rem] text-4xl font-bold leading-normal text-white md:mt-6 md:text-sm'>
          아무나 구매하지 마세요.
          <br />
          제대로 책읽고 글쓰고 성장하실 분만 신청하세요!
        </div>
        <Link href={`/purchase/community/3`}>
          <a className='flex justify-center'>
            <div className='mt-[6.25rem] rounded-full bg-white px-[6.25rem] py-5 text-[1.375rem] leading-normal text-black md:mt-12 md:px-10 md:py-3 md:text-xs'>
              독서모임 참가하러가기
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
