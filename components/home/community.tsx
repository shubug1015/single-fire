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
              돈 버는 경제공부
              <br />
              경제전문가와 함께하세요!
            </div>

            <div className='mt-12 text-lg md:mt-6 md:text-center md:text-sm'>
              {/* <br className='hidden md:block' /> */}
              시행착오 없이 한 번에 제대로 된 투자의 길로 안내합니다.
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
