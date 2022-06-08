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
        'NFT의 개념과 투자 가능한 방법에 대해 책과 세미나로 배울 수 있어 좋은 기회였습니다. 책은 이해가 쉽도록 잘 설명돼 있었고 저자의 부연설명을 실제로 들으며 이해할 수 있어 NFT에 대한 이해가 생긴 것 같아 뿌듯합니다.',
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
        '새로운 개념이라 아직 낯설지만 개념부터 현실에서의 구현까지 스터디를 잘 따라가다보면 기본적인 틀을 잡을 수 있는 시간입니다. 특히 세미나 중 특강으로 현업 종사자들의 실질적인 이야기를 두루 들을 수 있어 좋았습니다. 아직 투자엔 초보지만 앞으로 더 관심을 가져야겠다는 생강이 들어요.',
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
        '단순히 여기에 투자해라, 식의 스터디가 아니라 책을 읽고 개념과 원리를 배우고 앞으로의 투자 가능성을 이야기 나눠볼 수 있어서 좋았습니다. 궁금했던 부분을 직접 물어보고 전문가의 답변을 직접 들어볼 수 있어 더 좋았습니다!',
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
