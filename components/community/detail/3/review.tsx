import Layout from '@layouts/sectionLayout';
import Image from 'next/image';
import TitleBtn from './titleBtn';
import ReviewProfile from 'public/test/review-profile.png';
import { cls } from '@libs/client/utils';

interface IProps {
  clsFilter: (cls1: string, cls2: string, cls3: string, cls4: string) => string;
}

export default function Review({ clsFilter }: IProps) {
  const reviewList = [
    {
      id: 0,
      image: (
        <Image
          src={ReviewProfile}
          alt='Review Section Profile Image'
          objectFit='cover'
          placeholder='blur'
          quality={100}
        />
      ),
      name: '멤버A',
      community: '독서모임 1기',
      content:
        '혼자하면 오래하지 못했을 도전을 희은님과 멤버들과 함께해서 오래, 재밌게 할 수 있었습니다. 한 달, 두 달 참여하다보면 어느덧 목표가 습관이 되고 성과가 조금씩 쌓이는 걸 눈으로 확인할 수 있어요!',
    },
    {
      image: (
        <Image
          src={ReviewProfile}
          alt='Review Section Profile Image'
          objectFit='cover'
          placeholder='blur'
          quality={100}
        />
      ),
      id: 1,
      name: '멤버B',
      community: '독서모임 1기',
      content:
        '실행력이 뛰어난 사람들과 함께하면 하루하루 도전이 훨씬 더 활기차고 즐겁다는 걸 느낍니다. “이번엔 해야지”가 아니라 작고 빠르게 벌써 뭔가를 하고 있는 사람들끼리의 탄탄한 연대를 느낄 수 있어요!',
    },
    {
      image: (
        <Image
          src={ReviewProfile}
          alt='Review Section Profile Image'
          objectFit='cover'
          placeholder='blur'
          quality={100}
        />
      ),
      id: 2,
      name: '멤버C',
      community: '독서모임 1기',
      content:
        '내 현실에 맞는 작은 꿈이 아니라 큰 꿈을 갖는 법, 구체적이고 세세한 목표를 세우는 법, 그걸 작고 빠르게 실행해 현실로 구현해내는 법에 대한 세세한 노하우를 직접 배워갈 수 있는 스터디입니다. 절대 시간과 비용이 아깝지 않아요!',
    },
  ];

  return (
    <Layout bgColor='bg-[#2C2F34]' padding='py-24 md:py-10'>
      <div className='flex flex-col items-center font-bold text-white'>
        {/* <TitleBtn title='Review' /> */}
        <div
          className={cls(
            clsFilter(
              'border-[#00e7ff] text-[#00e7ff]',
              'border-[#a966ff] text-[#a966ff]',
              'border-[#a2ff69] text-[#a2ff69]',
              'border-[#ff8a00] text-[#ff8a00]'
            ),
            'inline-block rounded-full border px-5 py-2 md:px-4 md:text-sm'
          )}
        >
          Review
        </div>

        <div className='mt-6 text-4xl leading-normal md:mt-2 md:text-center md:text-lg'>
          독서모임 선발대가 후발대에게 <br className='hidden md:block' />
          직접 전달하는{' '}
          <span
            className={clsFilter(
              'text-[#00e7ff]',
              'text-[#a966ff]',
              'text-[#a2ff69]',
              'text-[#ff8a00]'
            )}
          >
            솔직한 수강후기
          </span>
        </div>

        <div className='mt-20 space-y-4 md:mt-10'>
          {reviewList.map((review) => (
            <div
              key={review.id}
              className='flex space-x-20 rounded bg-[#3d4044] py-[3.75rem] px-20 text-white md:block md:w-[21.438rem] md:space-x-0 md:p-6'
            >
              <div>
                <div className='h-16 w-16 rounded md:h-10 md:w-10'>
                  {review.image}
                </div>
                <div className='mt-4 text-lg md:mt-2 md:text-sm md:font-medium'>
                  {review.name}🔥 ·{' '}
                  <span className='text-[#979797]'>{review.community}</span>
                </div>
              </div>
              <div className='w-[45.313rem] text-base leading-7 md:mt-6 md:w-[18.438rem] md:text-xs md:font-normal md:leading-5'>
                {review.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
