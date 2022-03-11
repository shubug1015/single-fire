import Image from 'next/image';
import Link from 'next/link';
import Logo from '@public/logo.png';

export default function Header() {
  return (
    <header className='fixed top-0 left-0 z-[9999] h-40 w-screen bg-[#14161a] shadow-md'>
      <div className='mx-auto max-w-[1180px]'>
        {/* 헤더 상단 Start */}
        <div className='flex h-[6.25rem] items-center justify-between'>
          {/* 좌측 메뉴 Start */}
          <nav className='flex items-center text-lg font-medium'>
            <Link href='/'>
              <a className='relative h-[1.313rem] w-[11.125rem]'>
                <Image
                  src={Logo}
                  alt='Logo'
                  layout='fill'
                  objectFit='cover'
                  priority
                />
              </a>
            </Link>

            <Link href='/'>
              <a className='ml-20 mr-10'>클래스</a>
            </Link>

            <Link href='/'>
              <a>커뮤니티</a>
            </Link>
          </nav>
          {/* 좌측 메뉴 End */}

          {/* 우측 메뉴 Start */}
          <nav className='flex text-sm font-medium'>
            <Link href='/'>
              <a className='mr-4 flex h-[2.625rem] w-[6.25rem] items-center justify-center rounded-sm bg-[#ffffff2b]'>
                로그인
              </a>
            </Link>

            <Link href='/'>
              <a className='flex h-[2.625rem] w-[6.25rem] items-center justify-center rounded-sm bg-[#00e7ff] leading-3 text-[#14161a]'>
                회원가입
              </a>
            </Link>
          </nav>
          {/* 우측 메뉴 End */}
        </div>
        {/* 헤더 상단 End */}

        {/* 헤더 하단 Start */}
        <div className='flex h-[3.75rem] items-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16)]'>
          <nav className='flex space-x-10 font-medium'>
            <Link href='/'>
              <a>BEST</a>
            </Link>

            <Link href='/'>
              <a>코인</a>
            </Link>

            <Link href='/'>
              <a>부동산</a>
            </Link>

            <Link href='/'>
              <a>주식</a>
            </Link>

            <Link href='/'>
              <a>라이프&커리어</a>
            </Link>

            <Link href='/'>
              <a>강사소개</a>
            </Link>

            <Link href='/'>
              <a>이벤트</a>
            </Link>
          </nav>
        </div>
        {/* 헤더 하단 End */}
      </div>
    </header>
  );
}
