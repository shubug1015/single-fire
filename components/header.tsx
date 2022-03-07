import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='fixed top-0 left-0 w-screen h-40 bg-[#282e38] shadow-md z-[9999]'>
      <div className='max-w-[1180px] mx-auto'>
        {/* 헤더 상단 Start */}
        <div className='flex justify-between items-center h-[6.25rem]'>
          {/* 좌측 메뉴 Start */}
          <nav className='flex text-lg font-medium'>
            <Link href='/'>
              <a className='relative w-[11.125rem] h-[1.313rem]'>
                <Image
                  src='/logo.png'
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
              <a className='flex justify-center items-center w-[6.25rem] h-[2.625rem] bg-[#ffffff2b] rounded-sm mr-4'>
                로그인
              </a>
            </Link>

            <Link href='/'>
              <a className='flex justify-center items-center w-[6.25rem] h-[2.625rem] bg-[#0097a7] rounded-sm leading-3'>
                회원가입
              </a>
            </Link>
          </nav>
          {/* 우측 메뉴 End */}
        </div>
        {/* 헤더 상단 End */}

        {/* 헤더 하단 Start */}
        <div className='flex items-center h-[3.75rem] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16)]'>
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
