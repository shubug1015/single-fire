import Layout from '@layouts/sectionLayout';
import Image from 'next/image';
import Link from 'next/link';
// import Logo from '@public/logo.png';
import InstaIcon from '@public/icons/instagram.png';
import FBIcon from '@public/icons/facebook.png';
import BlogIcon from '@public/icons/naverblog.png';
import YoutubeIcon from '@public/icons/youtube.png';

export default function Footer() {
  return (
    <Layout bgColor='bg-[#14161a]' padding='pt-[6.5rem] pb-[7.5rem] md:py-10'>
      <div className='flex justify-between md:block'>
        {/* 좌측 섹션 */}
        <div>
          {/* 로고 */}
          <Link href='/'>
            <a>
              <svg
                viewBox='0 0 178 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='w-44 md:w-36'
              >
                <g clipPath='url(#clip0_1639_5043)'>
                  <path
                    d='M0 18.2054V15.1867L3.85718 10.0619L0 4.93706V1.68164H8.67866V4.93706H3.63275L7.36169 10.0939L3.63275 15.1867H8.67866V18.2054H0Z'
                    fill='white'
                  />
                  <path
                    d='M9.65036 18.2054V15.1867H14.6963L10.9673 10.0939L14.6963 4.93706H9.65036V1.68164H18.329V4.93706L14.4718 10.0619L18.329 15.1867V18.2054H9.65036Z'
                    fill='white'
                  />
                  <path
                    d='M33.2891 9.32903H23.7473V1.00304H33.2891V9.32903ZM39.5879 17.3566V19.5343H26.0113V14.111H36.3004V12.9593H25.9891V10.8038H39.0749V16.1186H28.7858V17.3566H39.5879ZM30.5344 3.20045H26.5218V7.10696H30.5344V3.20045ZM39.0749 9.92586H36.256V0.0214844H39.0749V9.92586Z'
                    fill='white'
                  />
                  <path
                    d='M45.6745 12.7874C47.5316 12.7455 49.2826 12.637 51.2679 12.3188L51.5022 14.5828C48.962 15.0317 46.7843 15.0958 44.328 15.0958H42.9395V7.25811H47.1444V4.18519H42.9173V1.94339H49.877V9.48018H45.6721V12.7899L45.6745 12.7874ZM52.612 0.362536H55.2164V18.7655H52.612V9.00913H50.6687V6.70321H52.612V0.362536ZM59.2733 0V19.6608H56.6049V0H59.2733Z'
                    fill='white'
                  />
                  <path
                    d='M65.8705 12.4249C68.4526 12.3607 71.2493 12.1462 74.1324 11.5715L74.4308 13.9194C71.0792 14.6247 67.8139 14.8368 64.8248 14.8368H63.0738V1.87927H65.8705V12.4249ZM78.4655 0V19.6608H75.6466V0H78.4655Z'
                    fill='white'
                  />
                  <path
                    d='M92.1728 6.18952C91.6401 8.23896 89.6548 9.60525 87.1121 9.60525C84.165 9.60525 81.9453 7.72598 81.9453 5.07972C81.9453 2.43346 84.165 0.531994 87.1121 0.531994C89.6301 0.531994 91.6376 1.89828 92.1728 3.94772H95.3098V0.0214844H98.1287V9.86173H95.3098V6.18952H92.1728ZM87.1121 7.34125C88.5647 7.34125 89.6301 6.48793 89.6301 5.07725C89.6301 3.66657 88.5622 2.81325 87.1121 2.81325C85.662 2.81325 84.636 3.66657 84.636 5.07725C84.636 6.48793 85.662 7.34125 87.1121 7.34125ZM98.6836 17.2678V19.4455H85.1909V14.0025H95.332V12.8508H85.149V10.6953H98.1287V16.0322H87.9679V17.2703H98.6836V17.2678Z'
                    fill='white'
                  />
                  <path
                    d='M117.836 0.0214844V19.7242H115.017V9.05034H111.409V14.9002H102.057V1.75031H111.409V6.78881H115.017V0.0214844H117.836ZM108.635 3.95019H104.834V12.6806H108.635V3.94772V3.95019Z'
                    fill='white'
                  />
                  <path
                    d='M124.799 12.4249C127.381 12.3607 130.177 12.1462 133.06 11.5715L133.359 13.9194C130.007 14.6247 126.742 14.8368 123.753 14.8368H122.002V1.87927H124.799V12.4249ZM137.394 0V19.6608H134.575V0H137.394Z'
                    fill='white'
                  />
                  <path
                    d='M158.423 15.0069V17.2906H140.619V15.0069H158.423ZM156.608 11.6331C153.192 10.95 150.674 9.05096 149.414 6.55267C148.154 9.05096 145.658 10.9722 142.242 11.6331L141.046 9.26306C145.466 8.51579 147.919 5.39848 147.919 2.58204V1.17383H150.931V2.58204C150.931 5.46506 153.365 8.51579 157.804 9.26306L156.608 11.6331Z'
                    fill='white'
                  />
                  <path
                    d='M170.55 9.64976V10.9519H176.101V16.1606H165.02V17.3345H176.74V19.4481H162.243V14.1753H173.302V13.0852H162.201V10.9495H167.731V9.64729H160.302V7.42768H172.814C172.92 6.87278 172.984 6.35981 173.048 5.84683L162.204 6.31542L161.905 4.15993L173.179 3.90344C173.201 3.51871 173.201 3.17837 173.201 2.81584H162.463V0.640625H175.975V2.36945C175.975 3.86398 175.975 5.48676 175.635 7.43015H178.005V9.64976H170.554H170.55Z'
                    fill='white'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_1639_5043'>
                    <rect width='178' height='19.7249' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </Link>
          {/* 로고 */}

          <nav className='mt-10 flex space-x-7 font-medium md:mt-6 md:space-x-3 md:text-sm'>
            <Link href='/terms-of-service'>
              <a className='text-[#c0c0c0]'>이용약관</a>
            </Link>

            <Link href='/refund-policy'>
              <a className='text-[#c0c0c0]'>환불규정</a>
            </Link>

            <Link href='/privacy-policy'>
              <a className='text-[#c0c0c0]'>개인정보처리방침</a>
            </Link>
          </nav>

          <div className='mt-[3.75rem] space-y-2 text-[#9e9e9e] md:mt-8 md:text-sm'>
            <div>(주)행복한컴퍼니</div>
            <div>
              사업자 등록번호 : 716-87-02517ㅣ대표자 : 신동은ㅣ통신판매업신고 :
              2022-서울종로-0586
            </div>
            <div>
              foryourfreedom2023@naver.comㅣ서울 종로구 삼봉로81
              두산위브파빌리온 1동 632호
            </div>
          </div>
        </div>
        {/* 좌측 섹션 */}

        {/* 우측 섹션 */}
        <div className='flex gap-x-4 md:mt-8'>
          <Link href='https://www.instagram.com/millmosch/'>
            <a target='_blank'>
              <div className='relative h-8 w-8'>
                <Image
                  src={InstaIcon}
                  alt='Instagram Icon'
                  layout='fill'
                  objectFit='cover'
                  placeholder='blur'
                  quality={100}
                />
              </div>
            </a>
          </Link>
          <Link href='https://www.facebook.com/profile.php?id=100026515401018'>
            <a target='_blank'>
              <div className='relative h-8 w-8'>
                <Image
                  src={FBIcon}
                  alt='Instagram Icon'
                  layout='fill'
                  objectFit='cover'
                  placeholder='blur'
                  quality={100}
                />
              </div>
            </a>
          </Link>
          <Link href='https://www.youtube.com/channel/UCtviINBLHWqdb2ouvw_I1LQ'>
            <a target='_blank'>
              <div className='relative h-8 w-8'>
                <Image
                  src={YoutubeIcon}
                  alt='Instagram Icon'
                  layout='fill'
                  objectFit='cover'
                  placeholder='blur'
                  quality={100}
                />
              </div>
            </a>
          </Link>
          <Link href='https://blog.naver.com/millmus'>
            <a target='_blank'>
              <div className='relative h-8 w-8'>
                <Image
                  src={BlogIcon}
                  alt='Instagram Icon'
                  layout='fill'
                  objectFit='cover'
                  placeholder='blur'
                  quality={100}
                />
              </div>
            </a>
          </Link>
        </div>
        {/* 우측 섹션 */}
      </div>
    </Layout>
  );
}
