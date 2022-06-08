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
        '혼자 읽기 어려운 경제 필독서를\n현업 경제전문가와 함께 스터디 진행',
      content:
        '노현우 경제전문가와 함께 읽고 공부하면서\n실전에서 쓰이는 경제 지식을 투자에 활용할 수 있도록 학습합니다.',
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
        '단순하게 읽고 끝내는 독서가 아닌\n자기것으로 소화할 수 있게 스터디 진행',
      content:
        '읽고 끝낸다면 내것이 될 수 없습니다.\n커뮤니티 구성원들과 챌린지를 진행하면서 내 것이 될 수 있도록 해야합니다.',
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
      title: '지적수준이 높은 스터디모임과\n함께 토론하고 소통하며 스터디 진행',
      content:
        '구성원의 지적수준이 매우 높을 뿐더러\n같이 책을 읽고 글을쓰며 서로에게 피드백을 주는 양방향적인 질높은 독서모임을 제공합니다.',
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
      <div className='mx-auto w-full max-w-[1528px] text-center font-bold text-white'>
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
          전문가와 함께라면 왜 좋은걸까요?
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
          만 가질 수 있는{' '}
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
