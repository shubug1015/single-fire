import { grade, gradeImg } from '@components/grade';
import Link from 'next/link';
import useSWR from 'swr';

interface IProfile {
  [key: string]: any;
}

interface AuthResponse {
  ok: boolean;
  token: string | null;
  profile: IProfile | null;
}

export default function Header() {
  const { data } = useSWR<AuthResponse>('/api/user');
  return (
    <>
      <div className='text-2xl font-bold md:text-center md:text-lg md:font-medium'>
        마이페이지
      </div>

      <div className='mt-6 flex space-x-4 md:mt-4 md:block md:space-x-0'>
        <div className='h-36 w-[27.75rem] rounded-sm bg-[rgba(229,229,229,0.08)] py-5 pl-10 pr-4 md:w-full'>
          <Link href='/grade'>
            <a className='flex items-center justify-end'>
              <span className='text-xs'>등급안내</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='mt-0.5 ml-2 w-2.5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={3}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </a>
          </Link>

          <div className='text-2xl font-medium'>
            {data?.profile?.name}
            <span className='opacity-60'>님</span>
          </div>

          <div className='mt-3 flex items-center text-sm'>
            <div className='relative mr-1 aspect-square w-4'>
              {gradeImg(data?.profile?.grade)}
            </div>{' '}
            {grade(data?.profile?.grade)} 등급
          </div>
        </div>

        <div className='flex h-36 grow items-center justify-between divide-x divide-[rgba(255,255,255,0.16)] rounded-sm bg-[rgba(229,229,229,0.08)] md:mt-2 md:h-24'>
          <Link href='/mypage/lecture/ongoing/1'>
            <a className='w-1/3'>
              <div className='flex w-full flex-col items-center space-y-4 md:space-y-2'>
                <div className='text-sm'>강의</div>
                <div className='text-xl font-bold text-[#00e7ff]'>
                  {data?.profile?.registered_lecture} 개
                </div>
              </div>
            </a>
          </Link>

          <Link href='/mypage/coupon/1'>
            <a className='w-1/3'>
              <div className='flex w-full flex-col items-center space-y-4 md:space-y-2'>
                <div className='text-sm'>쿠폰</div>
                <div className='text-xl font-bold text-[#00e7ff]'>
                  {data?.profile?.coupon.length} 개
                </div>
              </div>
            </a>
          </Link>

          <Link href='/mypage/point/1'>
            <a className='w-1/3'>
              <div className='flex w-full flex-col items-center space-y-4 md:space-y-2'>
                <div className='text-sm'>포인트</div>
                <div className='text-xl font-bold text-[#00e7ff]'>
                  {data?.profile?.point} P
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
