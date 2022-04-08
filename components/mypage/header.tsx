import { gradeImg } from '@components/grade';
import { usersApi } from '@libs/api';
import { tokenAtom } from '@libs/atom';
import useMutation from '@libs/client/useMutation';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

export default function Header() {
  const token = useRecoilValue<string | null>(tokenAtom);

  const [getData, { loading, data, error }] = useMutation(
    token ? usersApi.myInfos : null
  );

  useEffect(() => {
    getData({ req: token });
  }, [token]);
  return (
    <>
      <div className='text-2xl font-bold'>마이페이지</div>

      <div className='mt-6 flex space-x-4'>
        <div className='h-36 w-[27.75rem] rounded-sm bg-[rgba(229,229,229,0.08)] py-5 pl-10 pr-4'>
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
            {data?.name}
            <span className='opacity-60'>님</span>
          </div>

          <div className='mt-3 flex items-center text-sm'>
            <div className='relative mr-1 aspect-square w-4'>
              {gradeImg(data?.grade)}
            </div>{' '}
            불꽃 등급
          </div>
        </div>

        <div className='flex h-36 grow items-center justify-between divide-x divide-[rgba(255,255,255,0.16)] rounded-sm bg-[rgba(229,229,229,0.08)]'>
          <div className='flex w-1/3 flex-col items-center space-y-4'>
            <div className='text-sm'>강의</div>
            <div className='text-xl font-bold text-[#00e7ff]'>
              {data?.registered_lecture} 개
            </div>
          </div>

          <div className='flex w-1/3 flex-col items-center space-y-4'>
            <div className='text-sm'>쿠폰</div>
            <div className='text-xl font-bold text-[#00e7ff]'>
              {data?.coupon} 개
            </div>
          </div>

          <div className='flex w-1/3 flex-col items-center space-y-4'>
            <div className='text-sm'>포인트</div>
            <div className='text-xl font-bold text-[#00e7ff]'>
              {data?.point} P
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
