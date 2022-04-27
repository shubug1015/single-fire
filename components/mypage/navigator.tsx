import { usersApi } from '@libs/api';
import { AuthResponse } from '@libs/client/useAuth';
import useMutation from '@libs/client/useMutation';
import { cls } from '@libs/client/utils';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';

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
      url: '/mypage/lecture/ongoing/1',
      active:
        router.pathname === '/mypage/lecture/[...slug]' ||
        router.pathname === '/mypage/community/[page]',
      label: '내 강의실',
      subMenus: [
        { label: '강의 목록', url: '/mypage/lecture/ongoing/1' },
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

  const { mutate } = useSWR<AuthResponse>('/api/auth');

  const handleLogout = async () => {
    await axios.post('/api/logout');
    mutate({ ok: false, token: null, profile: null });
  };

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
                        router.pathname
                          .replace('/[page]', '')
                          .replace('/[...slug]', '') ===
                          j.url.replace('/1', '').replace('/ongoing', '')
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
              onClick={handleLogout}
              className='flex h-12 w-[13.625rem] cursor-pointer items-center justify-center rounded-sm bg-[rgba(229,229,229,0.08)] font-medium transition-all hover:opacity-70'
            >
              로그아웃
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
