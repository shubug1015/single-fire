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
        '혼자서는 쉽게 손이 가지 않을 경제도서를 매일 함께 읽는 것만으로도 값진 시간이었습니다. 인상깊었던 구절을 공유하고 생각을 기록하고 하면서 책 내용을 제대로 소화해낼 수 있었고요. 경제뉴스를 보는 시각이 더 넓어지고 더 깊이 이해하게 됐습니다. 투자 대가들의 고전과도 같은 책을 드디어 저도 섭렵하기 시작했다 생각하니 뿌듯합니다.',
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
        '여러 독서모임을 경험했지만 경제전문가와 함께 책읽고 소통하는 스터디는 처음이었습니다. 현재 시장 상황에 대한 귀한 인사이트를 직접 실시간으로 들을 수 있어 좋았고, 책에서 읽은 내용을 현실에 적용해보는 연습도 값진 경험이었습니다. 유튜브에서 단편적으로 듣던 경제지식에 체계가 잡힌 느낌입니다.',
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
        '책 읽는 습관을 들임과 동시에 경제를 보는 눈까지 얻을 수 있어서 정말 만족한 스터디였습니다! 멤버들과 오프라인으로 소통하는 기회도 가질 수 있었고 관심사가 비슷한 사람들과 친해질 수 있어 더 좋았어요. 매일 책 읽고 기록하고 공유하다보면 어느새 한 달, 두 달이 금방 지나가고 끝날 때가 되면 너무나 아쉬운 마음이 듭니다. 또 참여하고 싶어요!',
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
