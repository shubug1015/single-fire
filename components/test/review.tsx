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
      name: '홍길동',
      community: '독서모임 n기',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedvolutpat lobortis feugiat. Integer mollis, nulla vitae faucibus varius, sem eros mattis nibh, eu ultricies tortor neque id diam. Praesent interdum laoreet purus, vel porta nisi iaculis sed. Nuncaliquam consequat condimentum. Morbi pretium ornare lectus. Proinaliquam pulvinar vehicula. Donec ac sem sed massa auctor venenatisvel quis dolor. Etiam a vestibulum dolor. Duis et tellus pharetra, lacinia risus vitae, porta nulla. Nam viverra malesuada mattis. Pellentesque quis sagittis mi, vitae finibus urna.',
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
      name: '홍길동',
      community: '독서모임 n기',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedvolutpat lobortis feugiat. Integer mollis, nulla vitae faucibus varius, sem eros mattis nibh, eu ultricies tortor neque id diam. Praesent interdum laoreet purus, vel porta nisi iaculis sed. Nuncaliquam consequat condimentum. Morbi pretium ornare lectus. Proinaliquam pulvinar vehicula. Donec ac sem sed massa auctor venenatisvel quis dolor. Etiam a vestibulum dolor. Duis et tellus pharetra, lacinia risus vitae, porta nulla. Nam viverra malesuada mattis. Pellentesque quis sagittis mi, vitae finibus urna.',
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
      name: '홍길동',
      community: '독서모임 n기',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedvolutpat lobortis feugiat. Integer mollis, nulla vitae faucibus varius, sem eros mattis nibh, eu ultricies tortor neque id diam. Praesent interdum laoreet purus, vel porta nisi iaculis sed. Nuncaliquam consequat condimentum. Morbi pretium ornare lectus. Proinaliquam pulvinar vehicula. Donec ac sem sed massa auctor venenatisvel quis dolor. Etiam a vestibulum dolor. Duis et tellus pharetra, lacinia risus vitae, porta nulla. Nam viverra malesuada mattis. Pellentesque quis sagittis mi, vitae finibus urna.',
    },
  ];

  return (
    <Layout bgColor='bg-[#2C2F34]' padding='py-24'>
      <div className='flex flex-col items-center'>
        {/* <TitleBtn title='Review' /> */}
        <div
          className={cls(
            clsFilter(
              'border-[#00e7ff] text-[#00e7ff]',
              'border-[#a966ff] text-[#a966ff]',
              'border-[#a2ff69] text-[#a2ff69]',
              'border-[#ff8a00] text-[#ff8a00]'
            ),
            'inline-block rounded-full border px-[1.375rem] py-[0.625rem] font-bold'
          )}
        >
          Review
        </div>

        <div className='mt-6 text-4xl font-bold leading-normal text-white'>
          독서모임 선발대가 후발대에게 직접 전달하는{' '}
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

        <div className='mt-20 space-y-4'>
          {reviewList.map((review) => (
            <div
              key={review.id}
              className='flex space-x-20 bg-[#3d4044] py-[3.75rem] px-20'
            >
              <div>
                <div className='h-16 w-16 rounded'>{review.image}</div>
                <div className='mt-4 text-lg text-white'>
                  {review.name}🔥 ·{' '}
                  <span className='text-[#979797]'>{review.community}</span>
                </div>
              </div>
              <div className='w-[45.313rem] text-base leading-7 text-white'>
                {review.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
