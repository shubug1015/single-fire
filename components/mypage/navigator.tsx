import { cls } from '@libs/utils';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navigator() {
  const navList = [
    {
      id: 0,
      url: '/mypage',
      label: '회원 정보 수정',
    },
    {
      id: 1,
      url: '/mypage/lecture/1',
      label: '내 강의실',
    },
    {
      id: 2,
      url: '/mypage',
      label: '결제 내역',
    },
    {
      id: 3,
      url: '/mypage',
      label: '쿠폰/포인트 관리',
    },
    {
      id: 4,
      url: '/mypage',
      label: '로그아웃',
    },
  ];

  const router = useRouter();

  return (
    <div className='space-y-2'>
      {navList.map((i) => (
        <Link key={i.id} href={i.url}>
          <a
            className={cls(
              router.pathname.replace('/[page]', '') === i.url.replace('/1', '')
                ? 'bg-[#00e7ff] text-[#282e38]'
                : 'bg-[rgba(229,229,229,0.08)]',
              'flex h-12 w-[13.625rem] items-center justify-center rounded-sm font-medium transition-all hover:opacity-70'
            )}
          >
            {i.label}
          </a>
        </Link>
      ))}
    </div>
  );
}
