import Layout from '@layouts/sectionLayout';
import Image from 'next/image';
import TitleBtn from './titleBtn';
import PreviewIcon1 from 'public/test/preview-icon1.png';
import PreviewBook1 from 'public/test/2-book1.jpg';
import PreviewBook2 from 'public/test/2-book2.jpg';
import PreviewBook3 from 'public/test/2-book3.jpg';
import PreviewBook4 from 'public/test/2-book4.jpg';
import { cls } from '@libs/client/utils';

interface IProps {
  clsFilter: (cls1: string, cls2: string, cls3: string, cls4: string) => string;
}

export default function Preview({ clsFilter }: IProps) {
  const previewList = [
    {
      id: 0,
      title: '<NFT 투자의 정석>',
      author: '임동민 등',
      image: PreviewBook1,
    },
    {
      id: 1,
      title: '<세상을 바꿀 거대한 변화 7가지>',
      author: '임동민',
      image: PreviewBook2,
    },
    {
      id: 2,
      title: '<NFT 레볼루션>',
      author: '성소라 등',
      image: PreviewBook3,
    },
    {
      id: 3,
      title: '<넥스트 파이낸스>',
      author: '임동민 등',
      image: PreviewBook4,
    },
  ];
  return (
    <Layout bgColor='bg-[#373c46]' padding='py-[6.25rem] md:py-10'>
      <div className='text-center font-bold'>
        {/* <TitleBtn title='Preview' /> */}
        <div
          className={cls(
            clsFilter(
              'border-[#00e7ff] text-[#00e7ff]',
              'border-[#a966ff] text-[#a966ff]',
              'border-[#a2ff69] text-[#a2ff69]',
              'border-[#ff8a00] text-[#ff8a00]'
            ),
            'inline-block rounded-full border px-[1.375rem] py-[0.625rem] md:px-4 md:text-sm'
          )}
        >
          Preview
        </div>

        <div className='mt-6 text-center text-4xl leading-normal text-white md:mt-2 md:text-lg'>
          2주에 한 권씩 여러분과 <br className='hidden md:block' />
          함께 읽을 경제도서입니다.
        </div>
        <div className='mt-20 flex flex-col items-center rounded-[20px] bg-[#282e38] py-10 md:mt-10 md:py-8'>
          <Image
            src={PreviewIcon1}
            alt='Preview Section First Icon'
            objectFit='cover'
            placeholder='blur'
            quality={100}
          />
          <div className='mt-8 text-xl leading-normal text-white md:mt-4 md:text-xs'>
            “혼자서는 손이 가지 않는 책들, 같이 읽으면 진짜 내 것이 된다”
          </div>
          <div className='mt-4 text-xl leading-normal text-white md:mt-2 md:text-xs'>
            “이 책들만 읽어도 경제흐름 제대로 읽고 투자하는 기본기가 쌓인다”
          </div>
          <div className='mt-4 text-xl leading-normal text-white md:mt-2 md:text-xs'>
            “어디가서도 꿀리지 않을 경제를 읽는 눈을 가질 수 있게 된다”
          </div>
        </div>

        <div className='mt-[6.25rem] grid grid-cols-3 gap-x-[8.75rem] gap-y-[3.75rem] md:mt-10 md:grid-cols-4 md:gap-x-40 md:overflow-scroll'>
          {previewList.map((preview) => (
            <div key={preview.id}>
              <div className='relative h-[27.563rem] w-[18.75rem] rounded shadow-2xl md:h-52 md:w-36'>
                <Image
                  src={preview.image}
                  alt='Preview Section First Icon'
                  objectFit='cover'
                  layout='fill'
                  quality={100}
                />
              </div>
              <div className='mt-4 text-xl text-white md:w-36 md:text-sm'>
                {preview.title}
              </div>
              <div className='mt-1 text-base text-white md:mt-4 md:w-36 md:text-xs'>
                {preview.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
