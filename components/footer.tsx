import Layout from '@layouts/sectionLayout';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <Layout bgColor='#282e38' padding='pt-[6.5rem] pb-[7.5rem]'>
      <div className='flex justify-between'>
        {/* 좌측 섹션 Start */}
        <div>
          <Link href='/'>
            <a>
              <div className='relative w-[11.125rem] h-[1.313rem]'>
                <Image
                  src='/logo.png'
                  alt='Logo'
                  layout='fill'
                  objectFit='cover'
                  priority
                />
              </div>
            </a>
          </Link>

          <nav className='flex font-medium space-x-7 mt-10'>
            <Link href='/'>
              <a className='text-[#c0c0c0]'>회사소개</a>
            </Link>

            <Link href='/'>
              <a className='text-[#c0c0c0]'>이용약관</a>
            </Link>

            <Link href='/'>
              <a>개인정보처리방침</a>
            </Link>
          </nav>

          <div className='mt-[3.75rem]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            egestas auctor
            <br />
            sapien ac tristique. Sed commodo pretium neque vitae venenatis. Nam
            sagittis
            <br />
            mauris velit, nec tempor risus lobortis a. Phasellus faucibus eros a
            arcu hendrerit,
            <br />
            quis aliquet sapien congue. Nulla elementum quis magna sed
            porttitor.
          </div>
        </div>
        {/* 좌측 섹션 End */}

        {/* 우측 섹션 Start */}
        <div className='font-medium'>
          <div>고객센터</div>

          <Link href='/'>
            <a>
              <div className='bg-white rounded-sm py-3 px-[3.75rem] text-black text-sm mt-5'>
                고객센터 채널톡
              </div>
            </a>
          </Link>
        </div>
        {/* 우측 섹션 End */}
      </div>
    </Layout>
  );
}
