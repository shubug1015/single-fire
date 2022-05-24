import Image from 'next/image';
import Point1 from 'public/test/point1.png';
import Point2 from 'public/test/point2.png';
import Point3 from 'public/test/point3.png';

export default function Point() {
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
    <div className='bg-black pt-[6.25rem] pb-[7.5rem]'>
      <div className='mx-auto w-full max-w-[1528px] text-center'>
        <div className='inline-block rounded-full border border-[#00E7FF] px-[1.938rem] py-[0.625rem] text-base font-bold text-[#00E7FF]'>
          Point
        </div>
        <div className='mt-6 text-4xl font-bold leading-normal text-white'>
          전문가와 함께라면 왜 좋은걸까요?
        </div>
        <div className='mt-2.5 text-4xl font-bold leading-normal text-white'>
          <span className='text-[#00e7ff]'>밀머스 스터디</span>만 가질 수 있는{' '}
          <span className='text-[#00e7ff]'>차별 Point</span>
        </div>
        {pointList.map((point) => (
          <div
            key={point.id}
            className='mt-[6.25rem] flex justify-center space-x-10'
          >
            <div className='relative w-[655px]'>{point.image}</div>
            <div className='w-[52.063rem] whitespace-pre-wrap rounded-[20px] bg-[#4a4e57] px-20 py-[6.25rem] text-left text-white'>
              <div className='text-[2.5rem] font-bold'>
                POINT {point.pointNum}
              </div>
              <div className='mt-[3.75rem] text-[2.125rem] font-bold'>
                {point.title}
              </div>
              <div className='mt-8 text-2xl leading-[2.5rem] tracking-[-0.72px]'>
                {point.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
