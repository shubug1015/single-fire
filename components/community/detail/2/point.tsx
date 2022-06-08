import Image from 'next/image';
import Point1 from 'public/test/point1.png';
import Point2 from 'public/test/point2.png';
import Point3 from 'public/test/point3.png';
import { cls } from '@libs/client/utils';

interface IProps {
  clsFilter: (cls1: string, cls2: string, cls3: string, cls4: string) => string;
}

export default function Point({ clsFilter }: IProps) {
  const pointList = [
    {
      id: 0,
      pointNum: '01',
      title: '현업 전문가와 함께\n새로운 투자 지식을 쌓고 스터디하는 기회!',
      content:
        '실제 시장에 투자하고 연구하는\n현업 이코노미스트의 깊이 있는 인사이트를\n가까이서 배우고 소통할 수 있습니다.',
      image: (
        <Image
          src={Point1}
          alt='Point Section First Image'
          objectFit='cover'
          placeholder='blur'
          layout='fill'
          quality={100}
          className='rounded-[20px]'
        />
      ),
    },
    {
      id: 1,
      pointNum: '02',
      title:
        '투자 스킬에 국한하지 않고\n개념, 역사, 시장을 제대로 배울 수 있는 기회',
      content:
        '단편적인 정보가 아닌 제대로 된 기초를 쌓는 기회는\n밀머스가 아닌 다른 곳에서는 찾아보기 어렵습니다!',
      image: (
        <Image
          src={Point2}
          alt='Point Section Second Image'
          objectFit='cover'
          placeholder='blur'
          layout='fill'
          quality={100}
          className='rounded-[20px]'
        />
      ),
    },
    {
      id: 3,
      pointNum: '03',
      title: '수준 높은 스터디 멤버들과\n함께 학습하고 토론하며 스터디 진행',
      content:
        '관심사가 비슷한 또래와 함께 책 읽고 소통하며\n내 시야를 넓혀나가는 차별화된 성장의 기회를 제공합니다!',
      image: (
        <Image
          src={Point3}
          alt='Point Section Third Image'
          objectFit='cover'
          placeholder='blur'
          layout='fill'
          quality={100}
          className='rounded-[20px]'
        />
      ),
    },
  ];

  return (
    <div className='bg-black pt-[6.25rem] pb-[7.5rem] md:py-10'>
      <div className='mx-auto w-full max-w-[1528px] text-center font-bold text-white md:max-w-[330px]'>
        <div
          className={cls(
            clsFilter(
              'border-[#00e7ff] text-[#00e7ff]',
              'border-[#a966ff] text-[#a966ff]',
              'border-[#a2ff69] text-[#a2ff69]',
              'border-[#ff8a00] text-[#ff8a00]'
            ),
            'inline-block rounded-full border px-[1.938rem] py-[0.625rem] text-base md:px-4 md:text-sm'
          )}
        >
          Point
        </div>
        <div className='mt-6 text-4xl leading-normal md:mt-2 md:text-sm'>
          전문가와 함께 경제를 공부하면 왜 좋을까요?
        </div>
        <div className='mt-2.5 text-4xl leading-normal md:mb-10 md:mt-[0.125rem] md:text-lg'>
          <span
            className={cls(
              clsFilter(
                'text-[#00e7ff]',
                'text-[#a966ff]',
                'text-[#a2ff69]',
                'text-[#ff8a00]'
              ),
              ''
            )}
          >
            밀머스 스터디
          </span>
          에서만 경험할 수 있는 <br className='hidden md:block' />
          <span
            className={cls(
              clsFilter(
                'text-[#00e7ff]',
                'text-[#a966ff]',
                'text-[#a2ff69]',
                'text-[#ff8a00]'
              ),
              ''
            )}
          >
            차별 Point
          </span>
        </div>
        {pointList.map((point) => (
          <div
            key={point.id}
            className='mt-[6.25rem] flex justify-center space-x-10 font-bold md:mt-2 md:block md:space-x-0'
          >
            <div className='relative w-[655px] md:hidden'>{point.image}</div>
            <div className='w-[52.063rem] whitespace-pre-wrap rounded-[20px] bg-[#4a4e57] px-20 py-[6.25rem] text-left text-white md:w-full md:rounded md:px-6 md:py-10'>
              <div className='text-[2.5rem] font-bold md:text-xl'>
                POINT {point.pointNum}
              </div>
              <div className='mt-[3.75rem] text-[2.125rem] md:mt-8 md:text-base'>
                {point.title}
              </div>
              <div className='mt-8 text-2xl leading-[2.5rem] tracking-[-0.72px] md:mt-3 md:text-sm md:font-normal md:opacity-80'>
                {point.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
