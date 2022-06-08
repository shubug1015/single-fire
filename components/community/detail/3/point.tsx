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
        '제대로 된 목표를 세우고 단기, 중기, 장기\n세부적인 로드맵을 수립하는 데\n도움이 됩니다.',
      content:
        '삶의 목적을 분명히하고 세세한 목표를\n세울 수 있어야 꿈에 가까이 도달할 수 있습니다.',
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
        '작은 것부터 하나씩 실행해 크게 키워가는\n현실적인 노하우를 알려드립니다.',
      content:
        '작게 시작하는 노하우를 쌓아가는 사람만이\n중도에 포기하지 않고 목표를 실현해낼 수 있습니다. ',
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
      title: '나와 관심사가 비슷한 또래와 함께\n목표를 향해 성장하는 경험',
      content:
        '다양한 분야에서 꿈을 향해 노력하는\n열정 넘치는 스터디 멤버들과 네트워킹하고\n함께 성장하는 값진 경험을 얻을 수 있습니다.',
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
          전문가와 함께 성장하면 왜 좋을까요?
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
