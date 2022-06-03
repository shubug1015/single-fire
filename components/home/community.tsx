import Layout from '@layouts/sectionLayout';
import Image from 'next/image';
import BgImg from '@public/home/community-bg.png';
import Link from 'next/link';

export default function Community() {
  return (
    <Layout
      bgColor=''
      bgImg='bg-[url("/home/community-bg.png")]'
      padding='py-[5.5rem] md:py-12'
    >
      <Link href='/community'>
        <a>
          <div className='relative w-[41.25rem] bg-[url("/home/community-blur.png")] bg-no-repeat pt-[3.75rem] pb-[7.438rem] pl-[3.75rem] md:flex md:w-full md:flex-col md:items-center md:bg-[url()] md:p-0'>
            <div className='inline-block rounded-sm bg-[#ffffff29] py-1.5 px-3 text-sm font-medium'>
              커뮤니티
            </div>

            <div className='mt-6 text-[2.5rem] font-bold md:mt-4 md:text-center md:text-2xl'>
              매일 내 포트폴리오를
              <br />
              확인해주는 곳이 있다? 🤔
            </div>

            <div className='mt-12 text-lg md:mt-6 md:text-center md:text-sm'>
              장기투자를 위해서, <br className='hidden md:block' />
              반드시 포트폴리오 관리는 필요합니다.
            </div>

            <div className='absolute top-0 left-0 -z-[1] h-full w-full'>
              <div className='relative h-full w-full'>
                <Image
                  src={BgImg}
                  alt='Community Banner Image'
                  layout='fill'
                  objectFit='cover'
                  placeholder='blur'
                  quality={100}
                />
              </div>
            </div>
          </div>
        </a>
      </Link>
    </Layout>
  );
}
