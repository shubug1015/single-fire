import { usersApi } from '@libs/api';
import useMutation from '@libs/client/useMutation';
import { cls } from '@libs/utils';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface MutationResult {
  ok: boolean;
}

export default function Navigator() {
  const router = useRouter();

  const navList = [
    {
      id: 0,
      url: '/mypage/edit',
      active: router.pathname === '/mypage/edit',
      label: '회원 정보 수정',
      subMenus: [],
    },
    {
      id: 1,
      url: '/mypage/lecture/1',
      active:
        router.pathname === '/mypage/lecture/[page]' ||
        router.pathname === '/mypage/community/[page]',
      label: '내 강의실',
      subMenus: [
        { label: '강의 목록', url: '/mypage/lecture/1' },
        { label: '커뮤니티 활동', url: '/mypage/community/1' },
      ],
    },
    {
      id: 2,
      url: '/mypage/purchase/1',
      active: router.pathname === '/mypage/purchase/[page]',
      label: '결제 내역',
      subMenus: [],
    },
    {
      id: 3,
      url: '/mypage/coupon/1',
      active:
        router.pathname === '/mypage/coupon/[page]' ||
        router.pathname === '/mypage/point/[page]',
      label: '쿠폰/포인트 관리',
      subMenus: [
        { label: '쿠폰', url: '/mypage/coupon/1' },
        { label: '포인트', url: '/mypage/point/1' },
      ],
    },
    {
      id: 4,
      url: '/mypage',
      active: router.pathname === '/mypage',
      label: '로그아웃',
      subMenus: [],
    },
  ];

  const [logout, { loading }] = useMutation<MutationResult>(
    usersApi.logoutNextApi
  );

  return (
    <div className='space-y-2'>
      {navList.map((i) => (
        <div key={i.id}>
          {i.id !== 4 ? (
            <>
              <Link href={i.url}>
                <a
                  className={cls(
                    i.active
                      ? 'bg-[#00e7ff] text-[#282e38]'
                      : 'bg-[rgba(229,229,229,0.08)]',
                    'flex h-12 w-[13.625rem] items-center justify-center rounded-sm font-medium transition-all hover:opacity-70'
                  )}
                >
                  {i.label}
                </a>
              </Link>

              {i.active &&
                i.subMenus.map((j, index) => (
                  <Link key={index} href={j.url}>
                    <a
                      className={cls(
                        router.pathname.replace('/[page]', '') ===
                          j.url.replace('/1', '')
                          ? 'text-[#00e7ff]'
                          : 'text-[rgba(255,255,255,0.6)]',
                        'flex h-12 w-[13.625rem] items-center justify-center rounded-sm font-medium transition-all hover:opacity-70'
                      )}
                    >
                      {j.label}
                    </a>
                  </Link>
                ))}
            </>
          ) : (
            <div
              onClick={() => logout({ req: {}, redirectUrl: '/' })}
              className='flex h-12 w-[13.625rem] cursor-pointer items-center justify-center rounded-sm bg-[rgba(229,229,229,0.08)] font-medium transition-all hover:opacity-70'
            >
              {loading ? (
                <svg
                  role='status'
                  className='h-4 w-4 animate-spin fill-[#373c46] text-[#02cce2]'
                  viewBox='0 0 100 101'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                    fill='currentColor'
                  />
                  <path
                    d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                    fill='currentFill'
                  />
                </svg>
              ) : (
                '로그아웃'
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
