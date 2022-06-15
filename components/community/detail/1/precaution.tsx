import { useUser } from '@libs/client/useUser';
import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import PrecautionBg from 'public/test/precaution-bg.png';
import useSWR from 'swr';

export default function Precaution() {
  const { data } = useSWR('/api/user');
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

        <div className='mt-[6.25rem] flex justify-center space-x-4 md:mt-12 md:flex-col md:items-center md:space-y-2 md:space-x-0'>
          <Link
            href={
              data?.token && data?.profile
                ? `/purchase/community/1/1`
                : '/login'
            }
          >
            <a className='flex justify-center'>
              <div className='rounded-full bg-white px-16 py-5 text-[1.375rem] leading-normal text-black md:px-8 md:py-3 md:text-xs'>
                독서모임 참가하러가기(1개월)
              </div>
            </a>
          </Link>

          <Link
            href={
              data?.token && data?.profile
                ? `/purchase/community/1/2`
                : '/login'
            }
          >
            <a className='flex justify-center'>
              <div className='rounded-full bg-white px-16 py-5 text-[1.375rem] leading-normal text-black  md:px-8 md:py-3 md:text-xs'>
                독서모임 참가하러가기(3개월)
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
