// import Image from 'next/image';
import Link from 'next/link';
// import Logo from '@public/logo.png';
import { navList } from './navList';
import { useRouter } from 'next/router';
import { cls } from '@libs/client/utils';
import axios from 'axios';
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
  const { data, mutate } = useSWR<AuthResponse>('/api/auth');
  const router = useRouter();

  const handleLogout = async () => {
    await axios.post('/api/logout');
    mutate({ ok: false, token: null, profile: null });
  };
  return (
    <header className='fixed top-0 left-0 z-[9999] h-40 w-screen bg-[#14161a] shadow-md'>
      <div className='mx-auto max-w-[1180px]'>
        {/* 헤더 상단 */}
        <div className='flex h-[6.25rem] items-center justify-between'>
          {/* 좌측 메뉴 */}
          <nav className='flex items-center text-lg font-medium'>
            <Link href='/'>
              <a className=''>
                {/* <Image src={Logo} alt='Logo' layout='fill' objectFit='cover' /> */}
                <svg
                  width='178'
                  height='22'
                  viewBox='0 0 178 22'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M18.0955 0.573511H14.2633V10.8162H18.0955V0.573511ZM12.0183 0.818553H0V10.3751H12.0183V0.818553ZM3.78691 7.04259V4.15111H8.23143V7.04259H3.78691ZM18.0955 11.5513H0.748312V14.4183H14.3086V15.2515H0.793664V21.5H18.2996V18.633H4.58057V17.7999H18.0955V11.5513Z'
                    fill='white'
                  />
                  <path
                    d='M36.8694 0.573511V21.5H40.4522V0.573511H36.8694ZM31.994 8.43932H30.4294V12.36H31.994V21.1324H35.5315V0.671528H31.994V8.43932ZM25.0778 16.9912V12.507H29.613V1.06359H21.5177V4.59218H26.0756V9.02742H21.5177V20.5198H26.189C27.8216 20.5198 29.8852 20.2748 31.0416 19.7602V16.2806C29.8625 16.7462 28.0484 16.9912 26.5291 16.9912H25.0778Z'
                    fill='white'
                  />
                  <path
                    d='M61.7205 0.573511H57.8882V21.5H61.7205V0.573511ZM47.7973 0.941074H43.8517V20.5198H51.8564C53.7158 20.5198 55.6886 20.1523 56.8678 19.5152V15.7415C55.6886 16.3541 53.6931 16.7462 51.8564 16.7462H47.7973V0.941074Z'
                    fill='white'
                  />
                  <path
                    d='M76.8435 7.43466H79.7914V10.8162H83.6236V0.573511H79.7914V3.66103H76.7301C75.8911 1.77421 73.8502 0.598017 70.993 0.598017C67.2288 0.598017 64.8478 2.65636 64.8478 5.67036C64.8478 8.70887 67.2288 10.7427 70.993 10.7427C73.9636 10.7427 76.0725 9.46849 76.8435 7.43466ZM68.6347 5.67036C68.6347 4.56768 69.5418 3.85706 70.993 3.85706C72.4443 3.85706 73.3514 4.56768 73.3514 5.67036C73.3514 6.77305 72.4443 7.48366 70.993 7.48366C69.5418 7.48366 68.6347 6.77305 68.6347 5.67036ZM70.3354 18.633V17.7999H83.6236V11.5513H66.5032V14.4183H79.8367V15.2515H66.5485V21.5H83.8277V18.633H70.3354Z'
                    fill='white'
                  />
                  <path
                    d='M107.959 0.573511V8.2923H105.011V1.06359H93.7414V20.5198H105.011V12.1639H107.959V21.5H111.792V0.573511H107.959ZM101.179 16.6727H97.5737V4.91074H101.179V16.6727Z'
                    fill='white'
                  />
                  <path
                    d='M133.513 0.573511H129.681V21.5H133.513V0.573511ZM119.59 0.941074H115.645V20.5198H123.649C125.509 20.5198 127.482 20.1523 128.661 19.5152V15.7415C127.482 16.3541 125.486 16.7462 123.649 16.7462H119.59V0.941074Z'
                    fill='white'
                  />
                  <path
                    d='M146.255 8.53734L154.192 14.0263L156.21 10.6692L147.956 5.3028C148.478 4.00408 148.84 2.63186 149.022 1.16161L145.122 0.5C144.419 6.11143 140.836 9.98308 136.981 10.0076V13.9282C140.677 13.9037 144.01 11.8209 146.255 8.53734ZM136.595 20.7649H156.188V16.8932H136.595V20.7649Z'
                    fill='white'
                  />
                  <path
                    d='M178 11.5023V8.53734H176.821V0.573511H159.587V3.53851H173.011V4.59218H159.587V7.48366H173.011V8.53734H158.408V11.5023H166.299V12.5805H159.519V15.1044H173.125V15.9131H159.564V21.5H177.07V18.9516H163.306V18.1429H176.866V12.5805H170.109V11.5023H178Z'
                    fill='white'
                  />
                </svg>
              </a>
            </Link>

            <Link href='/lecture'>
              <a
                className={cls(
                  router.pathname === '/lecture' ||
                    router.pathname === '/lecture/[category]/[page]'
                    ? 'text-[#00e7ff]'
                    : '',
                  'ml-20 mr-10'
                )}
              >
                클래스
              </a>
            </Link>

            <Link href='/community'>
              <a
                className={cls(
                  router.pathname === '/community' ||
                    router.pathname === '/community/[category]/[...slug]'
                    ? 'text-[#00e7ff]'
                    : ''
                )}
              >
                커뮤니티
              </a>
            </Link>
          </nav>
          {/* 좌측 메뉴 */}

          {/* 우측 메뉴 */}
          <nav className='flex space-x-4 text-sm font-medium'>
            {data?.token ? (
              <>
                <Link href='/mypage/lecture/ongoing/1'>
                  <a className='flex h-[2.625rem] w-[6.25rem] items-center justify-center rounded-sm border border-[#00e7ff] leading-3 text-[#00e7ff]'>
                    내 강의보기
                  </a>
                </Link>

                <Link href='/mypage/edit'>
                  <a className='flex h-[2.625rem] w-[6.25rem] items-center justify-center rounded-sm bg-[#00e7ff] leading-3 text-[#14161a]'>
                    마이페이지
                  </a>
                </Link>

                <div
                  onClick={handleLogout}
                  className='flex h-[2.625rem] w-[6.25rem] cursor-pointer items-center justify-center rounded-sm bg-[#ffffff2b]'
                >
                  로그아웃
                </div>
              </>
            ) : (
              <>
                <Link href='/login'>
                  <a className='flex h-[2.625rem] w-[6.25rem] items-center justify-center rounded-sm bg-[#ffffff2b]'>
                    로그인
                  </a>
                </Link>

                <Link href='/signup'>
                  <a className='flex h-[2.625rem] w-[6.25rem] items-center justify-center rounded-sm bg-[#00e7ff] leading-3 text-[#14161a]'>
                    회원가입
                  </a>
                </Link>
              </>
            )}
          </nav>
          {/* 우측 메뉴 */}
        </div>
        {/* 헤더 상단 */}

        {/* 헤더 하단 */}
        <div className='flex h-[3.75rem] items-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16)]'>
          <nav className='flex space-x-10 font-medium'>
            {navList.map((nav) => (
              <Link key={nav.id} href={nav.url}>
                <a
                  className={cls(
                    router.asPath ===
                      `${nav.baseUrl}${
                        router.query.page ? `/${router.query.page}` : ''
                      }`
                      ? 'text-[#00e7ff]'
                      : ''
                  )}
                >
                  {nav.label}
                </a>
              </Link>
            ))}
          </nav>
        </div>
        {/* 헤더 하단 */}
      </div>
    </header>
  );
}
