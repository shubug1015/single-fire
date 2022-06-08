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
      title:
        '혼자는 손도 대지 않을 경제 필독서를\n현업 경제전문가와 함께 읽고 공부합니다.',
      content:
        '어려운 개념, 궁금한 점을 직접 물어보고\n실전에서 적용할 수 있도록 가이드합니다.',
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
        '단순하게 읽고 끝내는 독서가 아닌\n자기것으로 소화할 수 있도록 이끕니다.',
      content:
        '눈으로 읽고 끝내면 절대 내 것이 될 수 없습니다.\n멤버들과 챌린지를 함께하면서\n온전히 내 것으로 소화하도록 돕습니다.',
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
      title: '나와 관심사가 비슷한 또래와 함께\n소통하며 성장하는 경험',
      content:
        '열정 넘치는 멤버들과 네트워크을 넓히고\n같은 책을 읽고 글을 쓰며 함께 성장하는\n값진 경험을 얻을 수 있습니다.',
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
          만 가진 특별한{' '}
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
