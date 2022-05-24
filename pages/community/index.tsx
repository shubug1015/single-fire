import SEO from '@components/seo';
import type { NextPage } from 'next';
import Ecomony from '@public/community/ecomony.png';
import Nft from '@public/community/nft.png';
import Stock from '@public/community/stock.png';
import Coin from '@public/community/coin.png';
import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';
import { communityApi } from '@libs/api';

const Community: NextPage = () => {
  const { data } = useSWR('/community', () => communityApi.communityList());
  const imgList = [Ecomony, Nft, Stock, Coin];
  return (
    <>
      <SEO title='커뮤니티' />
      <div className='grid w-screen grid-cols-4'>
        {data?.map((i: { [key: string]: any }, index: number) => (
          <div key={i.id}>
            <div className='flex flex-col items-center bg-[#373c46] pt-12 pb-44'>
              <div className='rounded-full border border-[#00e7ff] py-2 px-4 text-sm text-[#00e7ff]'>
                {i.type}
              </div>

              <div className='mt-6 text-lg font-bold'>{i.tag}</div>

              <div className='text-[2.5rem] font-bold'>{i.name}</div>

              <div className='relative mt-16 aspect-square w-40'>
                <Image
                  src={imgList[index]}
                  alt='Community Image'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>

            <div className='flex flex-col items-center px-7 pb-7'>
              <div className='-mt-24 whitespace-pre-wrap rounded-3xl bg-[#4a4e57] p-8 font-medium'>
                {i.text}
              </div>

              <Link href={`/community/${i.id}/1/created/title`}>
                <a className='w-full'>
                  <div className='mt-5 flex h-14 w-full items-center justify-center rounded-xl bg-[#00e7ff] font-medium text-[#282e38] transition-all hover:opacity-90'>
                    입장하기
                  </div>
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Community;
